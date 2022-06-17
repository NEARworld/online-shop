const Basket = require("../models/Basket");
const BasketItem = require("../models/BasketItem");
const User = require("../models/User");
const Item = require("../models/Item");

class BasketItemService {
    async add(req, res) {
        const itemId = req.params.id
        const {userId, quantity} = req.body

        const user = await User.findById({_id: userId})

        if (!user) {
            throw new Error(`User with id: ${userId} not found`)
        }

        const itemInDB = await Item.findById({_id: itemId})
 
        if(!itemInDB) {
            throw new Error(`Item with id: ${itemId} does not exists`)
        }
        
        let total = quantity * itemInDB.price
        
        const basketItem = await BasketItem.create({quantity, item: itemInDB, totalPrice: total}) // WARN! it adds item even if it does exist in db

        const basket = await Basket.findOneAndUpdate({user}, {$push: {items: basketItem, updated: Date.now()}}, {new: true}).populate("items")

        return basket
    }
    
    async delete(req, res) {
        const itemId = req.params.id
        const {userId} = req.body

        const user = await User.findById({_id: userId})

        if (!user) {
            throw new Error(`User with id: ${userId} not found`)
        }

        const itemInDB = await Item.findById({_id: itemId})

        if(!itemInDB) {
            throw new Error(`Item with id: ${itemId} does not exists`)
        }

        const basketItem = await BasketItem.findOne({item: itemInDB})
        
        const basket = await Basket.findOneAndUpdate({user}, {$pull: {items: basketItem._id, updated: Date.now()}}, {new: true}).populate("items")
        
        return basket
    }
    

    async getAll(req, res) {
        const {userId} = req.body

        const user = await User.findById({_id: userId})

        if (!user) {
            throw new Error(`User with id: ${userId} not found`)
        }
        
        const basket = await Basket.findOne({user})
        
        return basket
    }
}

module.exports = new BasketItemService();