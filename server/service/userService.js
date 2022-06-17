const {validationResult} = require("express-validator");
const mailService = require("../service/mailService");
const tokenService = require("../service/tokenService");
const User = require("../models/User");
const Role = require("../models/Role");
const UserDto = require("../dto/userDto");
const bcrypt = require("bcrypt");
const uuid = require("uuid");
const ApiError = require("../exceptions/apiError");
const Basket = require("../models/Basket");
const AdminDashboard = require("../models/AdminDashboard");

class UserService {
    async registration(req, res) {
        // check passwrd validation
        const errorFormater = ({msg}) => {
            return `${msg}`
        };
        const errors = validationResult(req).formatWith(errorFormater)
        if(!errors.isEmpty()) {
            return ({message: "Password or email is invalid:", errors: errors.array()});
        }

        const {email, password, isAdmin, firstName, lastName} = req.body

        const candidate = await User.findOne({email});
        if (candidate) {
            throw ApiError.BadRequest(`User with ${email} already exists`);
        }

        const hashedPassword = await bcrypt.hash(password, 5);
        const verificationLink = uuid.v4();

        const userRole =  await Role.findOne({value: isAdmin === "true" ? "ADMIN" : "USER"}) 
        
        const user = await User.create({email, password: hashedPassword, firstName, lastName, verificationLink, roles: [userRole.value]});
        
        const basket = userRole.value === "USER" ? await Basket.create({user}) : await AdminDashboard.create({user}) 

        await mailService.sendVerificationLink(email,`${process.env.API_URL}/api/user/verification/${verificationLink}`);

        const userDto = new UserDto(user); // {id, email, roles, isActivated} = payload
        const tokens = tokenService.generateTokens({...userDto}) // payload object
        await tokenService.saveToken(userDto.id, tokens.refreshToken);

        return { ...tokens, user: userDto, basket}
    }

    async verification(verificationLink) {
        const user = await User.findOne({verificationLink})
        if(!user) {
            throw ApiError.BadRequest("Verification link is not correct");
        }
        user.isVerified = true;
        await user.save();
    }

    async login(email, password) {
        const user = await User.findOne({email})
        if(!user) {
            throw ApiError.BadRequest(`User with ${email} is not found`);
        }
        const isPassEqual = await bcrypt.compare(password, user.password);
        if(!isPassEqual) {
            throw ApiError.BadRequest("Password is not correct");
        }
        const userDto = new UserDto(user);
        const tokens = tokenService.generateTokens({...userDto});

        await tokenService.saveToken(userDto.id, tokens.refreshToken);
        return { ...tokens, user: userDto}
    }

    async logout(refreshToken) {
        const token = await tokenService.removeToken(refreshToken);
        return token;
    }

    async refresh(refreshToken) {
        if(!refreshToken) {
            throw ApiError.UnauthorizedError();
        }
        const userData = tokenService.validateRefreshToken(refreshToken);
        const tokenFromDB = await tokenService.findToken(refreshToken);
        if(!userData || !tokenFromDB) {
            throw ApiError.UnauthorizedError();
        }
        const user = await User.findById(userData.id);
        const userDto = new UserDto(user);
        const tokens = tokenService.generateTokens({...userDto});

        await tokenService.saveToken(userDto.id, tokens.refreshToken);
        return { ...tokens, user: userDto}
    }

    async getUsers() {
        const users = await User.find();
        return users;
    }
}

module.exports = new UserService();