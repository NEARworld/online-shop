const router = require("express").Router();

const userRouter = require("./userRouter");
const typeRouter = require("./typeRouter");
const itemRouter = require("./itemRouter");

router.use("/user", userRouter)
router.use("/type", typeRouter)
router.use("/item", itemRouter)

module.exports = router;