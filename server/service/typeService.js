const Type = require("../models/Type");

class TypeService {
    async create(req, res) {
        const {title} = req.body
        
        const typeExists = await Type.findOne({title})
        
        if (typeExists) {
            throw new Error(`Type ${title} aslready exists`)
        }
        
        const type = await Type.create({title})
        return type
    }
    
    async delete(req, res) {
        const typeId = req.params.typeId
        
        const type = await Type.findOneAndDelete({_id: typeId})
        
       if (!type) {
            throw new Error(`You are trying to delete type ${typeId} that does not exists`)
       }

       return type
    }

    async getOne(req, res) {
        const typeName = req.params.typeName

        const types = await Type.find({title: typeName})
        
        if(!types) {
            throw new Error("Ooops... can't find any types in database")
        }

        return types
    }

    async getAll() {
        const types = await Type.find()
        
        if(!types) {
            throw new Error("Ooops... can't find any types in database")
        }

        return types
    }
}

module.exports = new TypeService();