const mongoose = require('mongoose')

const ShippingFee = new mongoose.Schema({
    location: { type: String, require: true },
    fee: { type: Number, require: true }
})

const ShippingFeeModel = mongoose.model('ShippingFee', ShippingFee)

module.exports = ShippingFeeModel