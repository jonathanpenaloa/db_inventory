const mongoose = require("mongoose")

const itemSchema = new mongoose.Schema({
    price: Number,
    inventory: Number,
    nextDelivery: Date,
    deliveryAmt: Number,
    name: String
})

module.exports = mongoose.model("Item", itemSchema)

