const Joi = require('joi')

const shippingfeeSchema = Joi.object({
    location: Joi.string().required(),
    fee: Joi.number().precision(2).required()
})

module.exports = shippingfeeSchema