const {Schema, model} = require("mongoose");

const BasketItem = new Schema({
    quantity: {type: Number, default: 1},
    items: [{type: Schema.Types.ObjectId, ref: "Item"}],
    totalPrice: {type: Number, default: 0}
    // status?
})

module.exports = model("BasketItem", BasketItem);