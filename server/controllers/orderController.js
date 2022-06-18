const orderService = require("../service/orderService");

class OrderController {
    async placeOrder(req, res) {
        try {
            const order = await orderService.create(req, res)
            return res.status(200).json(order)
        } catch (e) {
            return res.status(400).json({message: e.message})
        }
    }

    async cancelOrder(req, res) {
        try {
            const order = await orderService.delete(req, res)
            return res.status(200).json(order)
        } catch (e) {
            return res.status(400).json({message: e.message})
        }
    }

}

module.exports = new OrderController();