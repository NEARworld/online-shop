const Item = require("../models/Item");
const Type = require("../models/Type");

class ItemService {
    async create(req, res) {
        const {name, imgUrl, description, quantity, price, type} = req.body

        const itemExists = await Item.findOne({name})

        if(itemExists) {
            throw new Error(`Item ${name} already exists`);
        }

        const typeExists = await Type.findOne({title: type})

        if(!typeExists) {
            throw new Error(`Type ${type} doesn't exists`);
        }

        const createdItem = await Item.create({name, imgUrl, description, quantity, price, type: typeExists})

        await Type.findOneAndUpdate({title: type}, { $push: {items: createdItem}}, {new: true})

        return createdItem.populate("type", "title") // avoid returning the whole list of items in Type
    }
    
    async delete(req, res) {
        const itemId = req.params.itemId
        const {type} = req.body

        const item = await Item.findByIdAndDelete({_id: itemId})

        if(!item) {
            throw new Error(`Item with id: ${itemId} not found`)
        }

        await Type.findOneAndUpdate({title: type}, {$pull: {items: itemId}}, {new: true})

        return item
    }
    
    async update(req, res) {
        const itemId = req.params.itemId
        const {name, imgUrl, description, quantity, price} = req.body

        const item = await Item.findByIdAndUpdate({_id: itemId}, {name, imgUrl, description, quantity, price, updated: Date.now()})

        return item
    }

    async getAll() {
        const items = await Item.find();

        return items
    }
}

module.exports = new ItemService();