const {Schema, model} = require("mongoose");

const Comment = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    item: {type: Schema.Types.ObjectId, ref: 'Item'},
    content: {type: String},
    created: {type: Date, default: Date.now},
    updated: {type: Date, default: Date.now}
})

module.exports = model("Comment", Comment);