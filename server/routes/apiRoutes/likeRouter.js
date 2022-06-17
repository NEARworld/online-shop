const likeController = require("../../controllers/likeController");

const likeRouter = require("express").Router();

likeRouter.post("/like/:id", likeController.like); // itemId
likeRouter.delete("/dislike/:id", likeController.dislike ); // itemId

module.exports = likeRouter;