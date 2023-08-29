const express = require('express')
const router = express.Router()
const validateMiddleware = require('../../validations/middlewares/validateMiddleware')
const customerSchema = require('../../validations/schemas/customerSchema')
const shippingfeeSchema = require('../../validations/schemas/shippingfeeSchema')
const orderStatusSchema = require('../../validations/schemas/orderstatusSchema')
const upload = require('../../middlewares/upload')
const { getAllCustomer, showCustomer, createCustomer, updateCustomer, deleteCustomer } = require('../../controllers/customer')
const { getAllShippingFee, showshippingfee, createShippingFee, updateShippingfee, deleteShippingfee } = require('../../controllers/shippingfee')
const { getAllOrderStatus, createOrderStatus, updateOrderStatus, showOrderStatus, deleteOrderStatus } = require('../../controllers/orderstatus')
const { getAllOrderItems, createOrderItem, showOrderItem, updateOrderItems, deleteOrderItems } = require('../../controllers/orderitem')
const orderitemSchema = require('../../validations/schemas/orderitemSchema')

// Customers
router.get('/customers', getAllCustomer)
router.get('/customers/:id', showCustomer)
router.post('/customers', validateMiddleware(customerSchema), createCustomer)
router.patch('/customers/:id', validateMiddleware(customerSchema), updateCustomer)
router.delete('/customers/:id', deleteCustomer)

// Shipping Fees
router.get('/shipping_fees', getAllShippingFee)
router.get('/shipping_fees', showshippingfee)
router.post('/shipping_fees',validateMiddleware(shippingfeeSchema), createShippingFee)
router.patch('/shipping_fees',validateMiddleware(shippingfeeSchema), updateShippingfee)
router.delete('/shipping_fees', deleteShippingfee)

// Order Status 
router.get('/order_status', getAllOrderStatus)
router.get('/order_status', showOrderStatus)
router.post('/order_status',validateMiddleware(orderStatusSchema), createOrderStatus)
router.patch('/order_status/:id',validateMiddleware(orderStatusSchema), updateOrderStatus)
router.delete('/order_status/:id', deleteOrderStatus)

// Order Item
router.get('/order_items', getAllOrderItems)
router.post(
    '/order_items', 
    upload('order_items').array('image'),
    validateMiddleware(orderitemSchema), 
    createOrderItem
)
router.get('/order_items/:id', showOrderItem)
router.patch(
    '/order_items/:id', 
    upload('order_items').array('image'),
    validateMiddleware(orderitemSchema), 
    updateOrderItems
),
router.delete('/order_items/:id', deleteOrderItems)

module.exports = router