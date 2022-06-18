const Basket = require("../models/Basket");
const Order = require("../models/Order");
const User = require("../models/User");


class OrderService {
    async create(req, res) {
        const basketId = req.params.id
        const userId = req.user.id
        
        const user = await User.findOne({_id: userId})

        const basket = await Basket.findOne({_id: basketId})

        const orderExists = await Order.findOne({user, basket})

        if(!orderExists) {
            const order = await Order.create({user, basket})
            return order.populate("user", "_id")
        }

        return orderExists
    }
    
    async delete(req, res) {
        const basketId = req.params.id
        const userId = req.user.id
        
        const user = await User.findOne({_id: userId})

        const basket = await Basket.findOne({_id: basketId})

        const orderExists = await Order.findOneAndDelete({user, basket})

        if(!orderExists) {
            throw new Error("Order not found")
        }

        return orderExists 
    }
    
}

module.exports = new OrderService();