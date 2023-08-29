const mongoose = require('mongoose')

const Customer = new mongoose.Schema({
    name: { type: String, require: true },
    phone: { type: String, require: true },
    address: { type: String }
})

const CustomerModel = mongoose.model('Customer', Customer)

module.exports = CustomerModel