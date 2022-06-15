const router = require("express").Router();

const userRouter = require("./userRouter");
const typeRouter = require("./typeRouter");
const itemRouter = require("./itemRouter");
const commentRouter = require("./commentRouter");

router.use("/user", userRouter)
router.use("/type", typeRouter)
router.use("/item", itemRouter)
router.use("/comment", commentRouter)

module.exports = router;