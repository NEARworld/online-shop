const viewController = require("../../controllers/viewController");
const roleMiddleware = require("../../middlewares/roleMiddleware");
const authMiddleware = require("../../middlewares/authMiddleware");

const viewRouter = require("express").Router();

viewRouter.post("/increase/:id", roleMiddleware(["USER"]), authMiddleware, viewController.increaseView); // itemId

module.exports = viewRouter;