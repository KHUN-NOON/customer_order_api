const OrderStatusModel = require('../models/orderstatus')

exports.getAllOrderStatus = async (req, res) => {
    try {
        const status = await OrderStatusModel.find()

        res.json({
            message: 'suceess',
            status
        })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

exports.createOrderStatus = async (req, res) => {
    try {
        const { body } = req

        const status = await OrderStatusModel.create({
            status_code: body.status_code,
            status_name: body.status_name
        })

        res.json(status)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

exports.showOrderStatus = async (req, res) => {
    try {
        const { id } = req.params

        const status = await OrderStatusModel.findById(id)

        res.json({
            message: 'success',
            status
        })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

exports.updateOrderStatus = async (req, res) => {
    try {
        const { id } = req.params

        const check = await OrderStatusModel.findById(id)

        if ( check.default === false ) {
            const status = await OrderStatusModel.findByIdAndUpdate(id, req.body)

            res.json({
                message: 'success',
                status
            })
        } else {
            res.json({
                message: "Can't update default status!",
                status: null
            })
        }
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

exports.deleteOrderStatus = async (req, res) => {
    try {
        const { id } = req.params

        const check = await OrderStatusModel.findById(id)

        if ( check.default === false ) {
            const status = await OrderStatusModel.findByIdAndDelete(id)

            res.json({
                message: 'success',
                status
            })
        } else {
            res.json({
                message: "Can't delete default status!",
                status: null
            })
        }
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}