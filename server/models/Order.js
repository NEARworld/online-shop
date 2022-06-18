const {Schema, model} = require("mongoose");

const Order = new Schema({
    user: {type: Schema.Types.ObjectId, ref: "User"},
    basket: {type: Schema.Types.ObjectId, ref: "Basket"},
    total: {type: Number, default: 0},
    created: {type: Date, default: Date.now},
    updated: {type: Date}
})

module.exports = model("Order", Order);