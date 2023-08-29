const Joi = require('joi')

const orderitemSchema = Joi.object({
    customer_id: Joi.string().required(),
    status_id: Joi.string().required(),
    shipping_fee_id: Joi.string().required(),
    items: Joi.string()
})

module.exports = orderitemSchema