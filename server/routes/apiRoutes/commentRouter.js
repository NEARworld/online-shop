const commentController = require("../../controllers/commentController");

const commentRouter = require("express").Router();

commentRouter.post("/create/:id", commentController.create); // itemId
commentRouter.delete("/delete/:id", commentController.delete); // itemId
commentRouter.get("/allcomments/:id", commentController.getAll); // itemId

module.exports = commentRouter;