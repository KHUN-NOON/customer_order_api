const Joi = require('joi')

const orderstatusSchema = Joi.object({
    status_code: Joi.string().uppercase().required(),
    status_name: Joi.string().required(),
    default: Joi.boolean().default(false)
})

module.exports = orderstatusSchema