const commentController = require("../../controllers/commentController");
const roleMiddleware = require("../../middlewares/roleMiddleware");
const authMiddleware = require("../../middlewares/authMiddleware");

const commentRouter = require("express").Router();

commentRouter.post("/create/:id",  roleMiddleware(["USER"]), authMiddleware, commentController.create); // itemId
commentRouter.delete("/delete/:id",  roleMiddleware(["USER"]), authMiddleware, commentController.delete); // itemId
commentRouter.get("/allcomments/:id",  roleMiddleware(["USER", "ADMIN"]), authMiddleware, commentController.getAll); // itemId

module.exports = commentRouter;