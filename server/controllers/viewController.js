const viewService = require("../service/viewService");

class ViewController {
    async increaseView(req, res) {
        try {
            const views = await viewService.increaseView(req, res)
            return res.status(200).json(views)
        } catch (e) {
            return res.status(400).json({message: e.message})
        }
    }
}

module.exports = new ViewController();