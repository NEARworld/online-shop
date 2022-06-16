const userController = require("../../controllers/userController");
const userRouter = require("express").Router();
const {check} = require("express-validator");
const authMiddleware = require("../../middlewares/authMiddleware");

userRouter.post("/registration", [
    check("email", "Email is not correct").isEmail(),
    check("password", "Password should not be less than 5 and more than 16 characters").isLength({min: 5, max: 16})
], userController.registration);
userRouter.post("/login", userController.login);
userRouter.post("/logout", userController.logout);
userRouter.get("/verification/:link", userController.verification);
userRouter.get("/refresh", userController.refreshToken);
userRouter.get("/users", authMiddleware, userController.getUsers);

module.exports = userRouter;