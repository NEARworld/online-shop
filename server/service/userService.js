const {validationResult} = require("express-validator");
const mailService = require("../service/mailService");
const tokenService = require("../service/tokenService");
const User = require("../models/User");
const Role = require("../models/Role");
const UserDto = require("../dto/userDto");
const bcrypt = require("bcrypt");
const uuid = require("uuid");

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
            throw new Error(`User with ${email} already exists`);
        }

        const hashedPassword = await bcrypt.hash(password, 5);
        const verificationLink = uuid.v4();

        const userRole =  await Role.findOne({value: isAdmin === "true" ? "ADMIN" : "USER"}) 

        const user = await User.create({email, password: hashedPassword, firstName, lastName, verificationLink, roles: [userRole.value]});
        await mailService.sendVerificationLink(email,`${process.env.API_URL}/api/user/verification/${verificationLink}`);

        const userDto = new UserDto(user); // {id, email, roles, isActivated} = payload
        const tokens = tokenService.generateTokens({...userDto}) // payload object
        await tokenService.saveToken(userDto.id, tokens.refreshToken);

        return { ...tokens, user: userDto}
    }

    async verification(verificationLink) {
        const user = await User.findOne({verificationLink})
        if(!user) {
            throw new Error("Verification link is not correct")
        }
        user.isVerified = true;
        await user.save();
    }
}

module.exports = new UserService();