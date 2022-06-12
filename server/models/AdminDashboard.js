const {Schema, model} = require("mongoose");

const AdminDashboard = new Schema({
    user: {type: Schema.Types.ObjectId, ref: "User"},
    users: [{type: Schema.Types.ObjectId, ref: "User"}],
    popularProducts: [{type: Schema.Types.ObjectId, ref: "Item"}],
    canceledOrders: [{type: Schema.Types.ObjectId, ref: "Order"}],
    completedOrders: [{type: Schema.Types.ObjectId, ref: "Order"}],
    created: {type: Date, default: Date.now}
})

module.exports = model("AdminDashboard", AdminDashboard);