const {Schema, model} = require("mongoose");

const BasketItem = new Schema({
    quantity: {type: Number, default: 1},
    item: {type: Schema.Types.ObjectId, ref: "Item"},
    totalPrice: {type: Number, default: 0}
})

module.exports = model("BasketItem", BasketItem);