const orderController = require("../../controllers/orderController");
const roleMiddleware = require("../../middlewares/roleMiddleware");
const authMiddleware = require("../../middlewares/authMiddleware");

const orderRouter = require("express").Router();

orderRouter.post("/create/:id",roleMiddleware(["USER"]), authMiddleware, orderController.placeOrder); // basketId
orderRouter.delete("/delete/:id", roleMiddleware(["USER"]), authMiddleware, orderController.cancelOrder); // basketId


module.exports = orderRouter;