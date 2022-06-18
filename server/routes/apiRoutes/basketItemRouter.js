const basketItemController = require("../../controllers/basketItemController");
const roleMiddleware = require("../../middlewares/roleMiddleware");
const authMiddleware = require("../../middlewares/authMiddleware");

const basketItemRouter = require("express").Router();

basketItemRouter.post("/add/:id", roleMiddleware(["USER"]), authMiddleware, basketItemController.addItemToBasket); // item id, not basketItem id
basketItemRouter.delete("/delete/:id",  roleMiddleware(["USER"]), authMiddleware, basketItemController.removeItemFromBasket); // item id, not basketItem id
basketItemRouter.get("/getall",  roleMiddleware(["USER"]), authMiddleware, basketItemController.getAllItems); // item id, not basketItem id

module.exports = basketItemRouter;