const Joi = require('joi')

const customerSchema = Joi.object({
    name: Joi.string().required(),
    phone: Joi.string().required(),
    address: Joi.string()
})

module.exports = customerSchema