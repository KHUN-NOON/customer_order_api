const Joi = require('joi')

const validation = (schema) => 
    (payload) => {
    if ( Joi.isSchema(schema) ) {
        return schema.validate(payload, {abortEarly: true})
    } else {
        throw new Error('The provided schema is not a Joi Schema')
    }
}

module.exports = validation