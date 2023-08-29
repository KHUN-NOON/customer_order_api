const shippingfeeModel = require('../models/shippingfee')

exports.getAllShippingFee = async (req, res) => {
    try {
        const { page = 1, limit = 10 } = req.query

        const fees = await shippingfeeModel.find()
        .limit(limit * 1)
        .skip((page - 1) * limit)
        .exec()

        const count = await shippingfeeModel.count()

        res.json({
            message: 'success',
            fees,
            totalPages: Math.ceil(count / limit),
            currentPage: page
        })
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

exports.createShippingFee = async (req, res) => {
    try {
        const fee = await shippingfeeModel.create(req.body)

        res.json({
            message: 'success',
            fee
        })
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

exports.showshippingfee = async (req, res) => {
    try {
        const { id } = req.params

        const fee = await shippingfeeModel.findById(id)

        res.json({
            message: 'success',
            fee
        })
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

exports.updateShippingfee = async (req, res) => {
    try {
        const { id } = req.params

        const fee = await shippingfeeModel.findByIdAndUpdate(id, req.body)

        res.json({
            message: 'success',
            fee
        })
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

exports.deleteShippingfee = async (req, res) => {
    try {
        const { id } = req.params

        const fee = await shippingfeeModel.findByIdAndDelete(id)

        res.json({
            message: 'success',
            fee
        })
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}