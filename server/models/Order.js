const {Schema, model} = require("mongoose");

const Order = new Schema({
    user: {type: Schema.Types.ObjectId, ref: "User"},
    cart: {type: Schema.Types.ObjectId, ref: "Basket"},
    total: {type: Number, default: 0},
    created: {type: Date, default: Date.now},
    updated: {type: Date, default: Date.now}
})

module.exports = model("Order", Order);