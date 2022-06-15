const router = require("express").Router();

const userRouter = require("./userRouter");
const typeRouter = require("./typeRouter");

router.use("/user", userRouter)
router.use("/type", typeRouter)

module.exports = router;