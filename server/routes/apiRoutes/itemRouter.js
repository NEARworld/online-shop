const itemController = require("../../controllers/itemController");

const itemRouter = require("express").Router();

itemRouter.post("/create", itemController.create);
itemRouter.delete("/delete/:id", itemController.delete);
itemRouter.post("/update/:id", itemController.update);
itemRouter.get("/allitems", itemController.getAll);

module.exports = itemRouter;