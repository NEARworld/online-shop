const Basket = require("../models/Basket");
const BasketItem = require("../models/BasketItem");
const User = require("../models/User");
const Item = require("../models/Item");

class BasketItemService {
    async add(req, res) {
        const userId = req.user.id
        const items = req.body.items

        const basket = await Basket.findOneAndUpdate({user: userId}, {$push: {items: items}}, {new: true})

        return basket
    }
    
    async delete(req, res) {
        const itemId = req.params.itemId
        const userId = req.user.id
        const basketId = req.params.basketId
        
        const basket = await Basket.findOneAndUpdate({_id: basketId, user: userId}, {$pull: {items: itemId}}, {new: true})

        return basket
    }
    

    async getAll(req, res) {
        const userId = req.user.id
        
        const basket = await Basket.findOne({user: userId})
        
        return basket
    }
}

module.exports = new BasketItemService();