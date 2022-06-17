const basketItemController = require("../../controllers/basketItemController");

const basketItemRouter = require("express").Router();

basketItemRouter.post("/create/:id", basketItemController.addItemToBasket); // item id, not basketItem id
basketItemRouter.delete("/delete/:id", basketItemController.removeItemFromBasket); // item id, not basketItem id

module.exports = basketItemRouter;