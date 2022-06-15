const typeController = require("../../controllers/typeController");

const typeRouter = require("express").Router();

typeRouter.post("/create", typeController.create);
typeRouter.delete("/delete", typeController.delete);
typeRouter.get("/alltypes", typeController.getAll);

module.exports = typeRouter;