const Item = require("../models/Item");
const User = require("../models/User");
const jwt = require('jsonwebtoken');

class LikeService {
    async like(req, res) {
       const itemId = req.params.id
       const {userId} = req.body

       const user = await User.findById({_id: userId})

       if(!user) {
        throw new Error(`User with id: ${userId} not found`)
       }

       const item = await Item.findById({_id: itemId})

       const foundUser = item.likes.find((item) => item === user.id);

       if (!foundUser) {
        item.likes.push(user.id);
        await item.save();
        return item.likes.length;
        } else {
            throw new Error('You already liked the post')
        }
    }
    
    async dislike(req, res) { 
        const itemId = req.params.id
        const {userId} = req.body
 
        const user = await User.findById({_id: userId})
 
        if(!user) {
         throw new Error(`User with id: ${userId} not found`)
        }
 
        const item = await Item.findById({_id: itemId})
 
        const foundUser = item.likes.find((item) => item === user.id);
 
        console.log(foundUser)

        if (foundUser) {
         item.likes.splice(item.likes.indexOf(user.id), 1);
         await item.save();
         return item.likes.length;
         } else {
             throw new Error('You already disliked the post')
         } 
    }
}

module.exports = new LikeService();