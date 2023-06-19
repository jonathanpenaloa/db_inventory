const Item = require("../Models/Item.js")

module.exports = {
    getAllItems: getAllItems,
    createItem: createItem,
}

async function getAllItems(req, res) {
    try {
        const mongoDbResponds = await Item.find();
        res.send(mongoDbResponds)
    } catch (err) {
        res.status(404).send(err.message);
    }
}

async function createItem(req, res) {
    try {
        const mongoDbResponds = await Item.create(req.body);
        res.send(mongoDbResponds);
    } catch (err) {
        res.status(404).send(err.message);
    }
}