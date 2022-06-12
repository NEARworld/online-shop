const {Schema, model} = require("mongoose");

const Brand = new Schema({
    title: {type: String, unique: true, required: true},
    items: [{type: Schema.Types.ObjectId, ref: "Item"}]
})

module.exports = model("Brand", Brand);