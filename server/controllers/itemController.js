const itemService = require("../service/itemService");

class ItemController {
    async create(req, res) {
        try {
            const createdItem = await itemService.create(req, res)
            return res.status(200).json(createdItem)
        } catch (e) {
            return res.status(400).json({message: e.message})
        }
    }

    async delete(req, res) {
        try {
            return res.status(200).json()
        } catch (e) {
            return res.status(400).json({message: e.message})
        }
    }

    async update(req, res) {
        try {
            return res.status(200).json()
        } catch (e) {
            return res.status(400).json({message: e.message})
        }
    }

    async getAll(req, res) {
        try {
            return res.status(200).json()
        } catch (e) {
            return res.status(400).json({message: e.message})
        }
    }
}

module.exports = new ItemController();