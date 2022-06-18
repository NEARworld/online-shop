const typeController = require("../../controllers/typeController");
const roleMiddleware = require("../../middlewares/roleMiddleware");
const authMiddleware = require("../../middlewares/authMiddleware");

const typeRouter = require("express").Router();

typeRouter.post("/create", roleMiddleware(["ADMIN"]), authMiddleware, typeController.create);
typeRouter.delete("/delete", roleMiddleware(["ADMIN"]), authMiddleware, typeController.delete);
typeRouter.get("/alltypes", roleMiddleware(["ADMIN"]), authMiddleware, typeController.getAll);

module.exports = typeRouter;