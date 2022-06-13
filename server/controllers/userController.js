const userService = require("../service/userService");

class UserController {
    async registration(req, res, next) {
        try {
            const userData = await userService.registration(req, res, next)

            res.cookie("refreshToken", userData.refreshToken, {maxAge: 21 * 24 * 60 * 1000, httpOnly: true, secure: true})
            
            return res.json(userData);
        } catch (e) {
            return res.status(400).json({message: e.message})
        }
    }
    
    async login(req, res, next) {
        try {
            
        } catch (e) {
            
        }
    }
    
    async logout(req, res, next) {
        try {
            
        } catch (e) {
            
        }
    }
    
    async verification(req, res, next) {
        try {
            const verificationLink = req.params.link;
            await userService.verification(verificationLink);
            return res.redirect(process.env.CLIENT_URL); // redirect user back to the app
        } catch (e) {
            return res.status(400).json({message: e.message})
        }
    }

    async refreshToken(req, res, next) {
        try {

        } catch (e) {

        }
    }

    async getUsers(req, res, next) {
        try {
            res.json("SOME DATA")
        } catch (e) {

        }
    }
}

module.exports = new UserController();