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
            throw new Error(`Type ${type} already exists`);
        }

        const createdItem = await Item.create({name, imgUrl, description, quantity, price, type: typeExists})

        await Type.findOneAndUpdate({title: type}, { $push: {items: createdItem}}, {new: true})

        return createdItem.populate("type", "title") // avoid returning the whole list of items in Type
    }
    
    async delete(req, res) {
        const _id = req.params.id
        const {type} = req.body

        const itemExists = await Item.findById({_id})

        if(!itemExists) {
            throw new Error(`Item with id: ${_id} not found`)
        }

        await Type.findOneAndUpdate({title: type}, {$pull: {items: _id}}, {new: true})

        const item = await Item.findByIdAndDelete({_id})

        return item
    }
    
    async update(req, res) {
        const _id = req.params.id
        const {name, imgUrl, description, quantity, price} = req.body

        const item = await Item.findByIdAndUpdate({_id}, {name, imgUrl, description, quantity, price, updated: Date.now()})

        return item
    }

    async getAll() {
        const items = await Item.find();

        return items
    }
}

module.exports = new ItemService();