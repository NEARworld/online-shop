const {Schema, model} = require("mongoose");

const User = new Schema({
    email: {type: String, required: true,  trim: true, unique: true},
    password: {type: String, required: true},
    verified: {type: Boolean},
    verificationLink: {type: String},
    roles: [{type: String, ref: "Role"}]
})

module.exports = model("User", User);