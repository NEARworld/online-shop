const Item = require("../models/Item");
const Type = require("../models/Type");

class ItemService {
    async create(req, res) {
        const {name, imgUrl, description, quantity, price, type} = req.body

        const itemExists = await Item.findOne({name})

        if(itemExists ) {
            throw new Error(`Item ${name} already exists`);
        }

        const typeExists = await Type.findOne({title: type})

        if(!typeExists) {
            throw new Error(`Type ${type} already exists`);
        }

        const createdItem = await Item.create({name, imgUrl, description, quantity, price, type: typeExists})

        await Type.findOneAndUpdate({title: type, items: [createdItem]}) // this line is wrong a litlt bit

        return createdItem
    }
    
    async delete(req, res) {
        
    }
    
    async update(req, res) {
        
    }

    async getAll() {
        
    }
}

module.exports = new ItemService();