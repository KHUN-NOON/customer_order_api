const CustomerModel = require('../models/customer')

exports.getAllCustomer = async (req, res) => {
    try {
        const { page = 1, limit = 10 } = req.query

        const customers = await CustomerModel.find()
        .limit(limit * 1)
        .skip((page - 1) * limit)
        .exec()

        const count = await CustomerModel.count()

        res.json({
            message: 'success',
            customers,
            totalPages: Math.ceil(count / limit),
            currentPage: page
        })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

exports.createCustomer = async (req, res) => {
    try {
        const { body } = req

        const customer = await CustomerModel.create(body)

        res.json({
            message: 'success',
            customer
        })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

exports.showCustomer = async (req, res) => {
    try {
        const { id } = req.params

        const customer = await CustomerModel.findById(id)

        res.json({
            message: 'success',
            customer
        })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

exports.updateCustomer = async (req, res) => {
    try {
        const { id } = req.params

        const customer = await CustomerModel.findByIdAndUpdate(id, req.body)

        res.json({
            message: 'success',
            customer
        })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

exports.deleteCustomer = async (req, res) => {
    try {
        const { id } = req.params

        const customer = await CustomerModel.findByIdAndDelete(id)

        res.json({
            message: 'success',
            customer
        })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

