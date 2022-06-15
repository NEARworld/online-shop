const {Schema, model} = require("mongoose");

const Item = new Schema({
    name: {type: String, required: true},
    imgUrl: {type: String, required: true},
    description: {type: String, required: true},
    quantity: {type: Number, default: 1},
    views: {type: Number, default: 0},
    likes: {type: Number, default: 0},
    timesBought: {type: Number, default: 0},
    price: {type: Number, required: true},
    type: {type: Schema.Types.ObjectId, ref: "Type"},
    comments: [{type: Schema.Types.ObjectId, ref: "Comment"}],
    created: {type: Date, default: Date.now},
    updated: {type: Date}
})

module.exports = model("Item", Item);