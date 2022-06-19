const itemController = require("../../controllers/itemController");

const itemRouter = require("express").Router();

itemRouter.post("/create", itemController.create);
itemRouter.delete("/delete/:itemId", itemController.delete);
itemRouter.put("/update/:itemId", itemController.update);
itemRouter.get("/", itemController.getAll);

module.exports = itemRouter;