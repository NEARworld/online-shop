const router = require("express").Router();

const userRouter = require("./userRouter");
const typeRouter = require("./typeRouter");
const itemRouter = require("./itemRouter");
const commentRouter = require("./commentRouter");
const basketItemRouter = require("./basketItemRouter");
const likeRouter = require("./likeRouter");

router.use("/user", userRouter)
router.use("/type", typeRouter)
router.use("/item", itemRouter)
router.use("/comment", commentRouter)
router.use("/basketitem", basketItemRouter)
router.use("/likes", likeRouter)

module.exports = router;