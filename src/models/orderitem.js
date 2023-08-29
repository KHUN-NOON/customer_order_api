const mongoose = require('mongoose')

const OrderItem = new mongoose.Schema({
    customer_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
        require: true
    },
    status_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'OrderStatus',
        require: true
    },
    shipping_fee_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ShippingFee',
        require: true
    },
    items: [
        {
            name: { type: String, require: true },
            price: { type: Number, require: true },
            image: { type: String },
            size: { type: String, require: true },
            quantity: { type: Number, require: true }
        }
    ]
}, { timestamps: true })

const OrderItemModel = mongoose.model('OrderItem', OrderItem)

module.exports = OrderItemModel