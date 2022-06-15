const commentController = require("../../controllers/commentController");

const commentRouter = require("express").Router();

commentRouter.post("/create", commentController.create);
commentRouter.delete("/delete/:id", commentController.delete);
commentRouter.put("/update/:id", commentController.update);
commentRouter.get("/allcomments", commentController.getAll);

module.exports = commentRouter;