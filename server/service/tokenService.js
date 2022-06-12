const jwt = require("jsonwebtoken");
const Token = require("../models/Token");

class TokenService {
    generateTokens(payload) {
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_KEY, {expiresIn: "2h"})
        const refreshToken = jwt.sign(payload, process.env.JWT_ACCESS_KEY, {expiresIn: "21d"})
        return {
            accessToken,
            refreshToken
        }
    }

    async saveToken(userId, refreshToken) {
        
        const tokenData = await Token.findOne({user: userId}); 
        // db stores only 1 token for 1 user !!!
        // if user logs from another device than the old token will be overwritten
        // & user will be kicked out from the website on initial device

        // case: user already logged in before
        if(tokenData) {
            tokenData.refreshToken = refreshToken;
            return tokenData.save();
        }

        // case: user logs in at the first time
        const token = await Token.create({user: userId, refreshToken});
        return token;
    }
}

module.exports = new TokenService();