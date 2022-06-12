const {Schema, model} = require("mongoose");

const Basket = new Schema({
    user: {type: Schema.Types.ObjectId, ref: "User"},
    items: [{type: Schema.Types.ObjectId, ref: "BasketItem"}],
    created: {type: Date, default: Date.now},
    updated: {type: Date, default: Date.now},
})

module.exports = model("Basket", Basket);