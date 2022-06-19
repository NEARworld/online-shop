const basketItemController = require("../../controllers/basketItemController");
const roleMiddleware = require("../../middlewares/roleMiddleware");
const authMiddleware = require("../../middlewares/authMiddleware");

const basketItemRouter = require("express").Router();

basketItemRouter.post("/add", roleMiddleware(["USER"]), authMiddleware, basketItemController.addItemToBasket); 
basketItemRouter.delete("/delete/:basketId/:itemId",  roleMiddleware(["USER"]), authMiddleware, basketItemController.removeItemFromBasket); 
basketItemRouter.get("/",  roleMiddleware(["USER"]), authMiddleware, basketItemController.getAllItems); // item id, not basketItem id

module.exports = basketItemRouter;