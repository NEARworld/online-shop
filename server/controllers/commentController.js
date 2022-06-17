const commentService = require("../service/commentService");

class ItemController {
    async create(req, res) {
        try {
            const comment = await commentService.create(req, res);
            return res.status(200).json({message: "Comment created", comment})
        } catch (e) {
            return res.status(400).json({message: e.message})
        }
    }

    async delete(req, res) {
        try {
            const deletedComment = await commentService.delete(req, res)
            return res.status(200).json({message: "Comment deleted", deletedComment})
        } catch (e) {
            return res.status(400).json({message: e.message})
        }
    }

    async getAll(req, res) {
        try {
            const comments = await commentService.getAll(req, res)
            return res.status(200).json(comments)
        } catch (e) {
            return res.status(400).json({message: e.message})
        }
    }
}

module.exports = new ItemController();