const {Schema, model} = require("mongoose");

const Type = new Schema({
    title: {type: String, unique: true, required: true},
    items: [{type: Schema.Types.ObjectId, ref: "Item"}]
})

module.exports = model("Type", Type);