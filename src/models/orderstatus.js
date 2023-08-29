const mongoose = require('mongoose')

const OrderStatus = new mongoose.Schema({
    status_code: { type: String, require: true, unique: true },
    status_name: { type: String, require: true, unique: true },
    default: { type: Boolean, default: false }
})

const OrderStatusModel = mongoose.model('OrderStatus', OrderStatus)

module.exports = OrderStatusModel