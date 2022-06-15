const commentService = require("../service/commentService");

class ItemController {
    async create(req, res) {
        try {
            return res.status(200).json({message: "Item created", createdItem})
        } catch (e) {
            return res.status(400).json({message: e.message})
        }
    }

    async delete(req, res) {
        try {
            return res.status(200).json({message: "Item deleted", item})
        } catch (e) {
            return res.status(400).json({message: e.message})
        }
    }

    async update(req, res) {
        try {
            return res.status(200).json(updatedItem)
        } catch (e) {
            return res.status(400).json({message: e.message})
        }
    }

    async getAll(req, res) {
        try {
            return res.status(200).json(items)
        } catch (e) {
            return res.status(400).json({message: e.message})
        }
    }
}

module.exports = new ItemController();