const {Schema, model} = require("mongoose");

const User = new Schema({
    firstName: {type: String},
    lastName: {type: String},
    email: {type: String, required: true,  trim: true, unique: true},
    password: {type: String, required: true},
    isVerified: {type: Boolean},
    verificationLink: {type: String},
    roles: [{type: String, ref: "Role"}]
})

module.exports = model("User", User);