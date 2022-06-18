const Comment = require("../models/Comment");
const Item = require("../models/Item");
const User = require("../models/User");

class CommentService {
    async create(req, res) {
       const itemId = req.params.id
       const userId = req.user.id
       const {content} = req.body

       const itemExists = await Item.findById({_id: itemId})
       if(!itemExists) {
        throw new Error(`Item with id: ${itemId} not found`)
       }

       const user = await User.findById({_id: userId})

       const comment = await Comment.create({userId: user, itemId: itemExists, content})

       await Item.findByIdAndUpdate({_id: itemId}, {$push: {comments: comment}}, {new: true})

       return comment
    }
    
    async delete(req, res) { // need to check user first
        const itemId = req.params.id
        const {commentId} = req.body
        const userId = req.user.id

        const itemExists = await Item.findById({_id: itemId})

        if(!itemExists) {
            throw new Error(`Item with id: ${itemId} not found`)
        }

        const comment = await Comment.findOne({_id: commentId})

        if(!userId === comment.userId) {
            throw new Error("You are trying to delete not your own comment")
        }

        await Item.findByIdAndUpdate({_id: itemId}, {$pull: {comments: commentId}}, {new: true})

        return comment
    }

    async getAll(req, res) { // all comments of a particular item
        const itemId = req.params.id

        const item = await Item.findById({_id: itemId}).populate("comments", {__v: 0}) // returns all item fileds && comments

        if(!item) {
            throw new Error(`Item with id: ${itemId} not found`)
        }

        return item
    }
}

module.exports = new CommentService();