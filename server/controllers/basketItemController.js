const basketItemService = require("../service/basketItemService");

class BasketItemController {
    async addItemToBasket(req, res) {
        try {
            const basket = await basketItemService.add(req, res)
            return res.status(200).json(basket)
        } catch (e) {
            return res.status(400).json({message: e.message})
        }
    }

    async removeItemFromBasket(req, res) {
        try {
            const basket = await basketItemService.delete(req, res)
            return res.status(200).json(basket)
        } catch (e) {
            return res.status(400).json({message: e.message})
        }
    }
}

module.exports = new BasketItemController();