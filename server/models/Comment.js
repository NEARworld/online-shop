const {Schema, model} = require("mongoose");

const Comment = new Schema({
    userId: {type: Schema.Types.ObjectId, ref: 'User'},
    itemId: {type: Schema.Types.ObjectId, ref: 'Item'},
    content: {type: String},
    created: {type: Date, default: Date.now},
    updated: {type: Date}
})

module.exports = model("Comment", Comment);