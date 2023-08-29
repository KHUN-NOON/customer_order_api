const validation = require('../validation')

const validateMiddleware = (schema) =>
(req, res, next) => {
    const payload = req.body
    const validate = validation(schema)

    try {
        const validated = validate(payload)

        req.body = validated.value

        if ( validated.error ) {
            res.json({
                message: validated.error.details[0].message
            })
        } else {
            next()
        }
    } catch (error) {
        res.json({
            message: error.message
        })
    }
}

module.exports = validateMiddleware