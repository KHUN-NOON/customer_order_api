const OrderItemModel = require('../models/orderitem')
const path = require('path')
const fs = require('fs')

exports.getAllOrderItems = async (req, res) => {
    try {
        const { page = 1, limit = 10 } = req.query

        const items = await OrderItemModel.find()
        .limit(limit * 1)
        .skip((page - 1) * limit) 
        .populate('customer_id status_id shipping_fee_id')
        .lean()

        const count = await OrderItemModel.count()

        const updatedResults = items.map((v) => {
            return {
                ...v,
                items: v.items.map(addImageUrl)
            }
        })

        res.json({
            message: 'success',
            order_items: updatedResults,
            totalPages: Math.ceil(count / limit),
            currentPage: page
        })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

exports.createOrderItem = async (req, res) => {
    try {
        const { body, files } = req

        const parseItems = JSON.parse(JSON.parse(body.items))

        const item = await OrderItemModel.create({
            customer_id: body.customer_id,
            status_id: body.status_id,
            shipping_fee_id: body.shipping_fee_id,
            items: modItems(parseItems, files)
        })

        res.json({
            message: 'success',
            item
        })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

exports.showOrderItem = async(req, res) => {
    try {
        const { id } = req.params

        const item = await OrderItemModel.findById(id)
        .populate('customer_id status_id shipping_fee_id')
        .lean()

        const updatedItem = {
            ...item,
            image_url: item.items.map(addImageUrl)
        }

        res.json({
            message: 'success',
            order_item: updatedItem
        })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

exports.updateOrderItems = async (req, res) => {
    try {
        const { id } = req.params
        const { body, files } = req

        const parseItems = JSON.parse(JSON.parse(body.items))

        const original = await OrderItemModel.findById(id)

        const filenames = original.items.map(v => v.image)
        
        deleteFiles(filenames)

        await OrderItemModel.findByIdAndDelete(id)

        const items = await OrderItemModel.create({
            customer_id: body.customer_id,
            status_id: body.status_id,
            shipping_fee_id: body.shipping_fee_id,
            items: modItems(parseItems, files)
        })

        res.json({
            message: 'success',
            order_items: items
        })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

exports.deleteOrderItems = async (req, res) => {
    try {
        const { id } = req.params

        const original = await OrderItemModel.findById(id)

        const filenames = original.items.map(v => v.image)

        deleteFiles(filenames)

        const item = await OrderItemModel.findByIdAndDelete(id)

        res.json({
            message: 'success',
            item
        })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const modItems = (parseItems, files) => parseItems.map((val, key) => {
    if ( files.length > 0 ) {
        if ( val.image === files[key].originalname ) {
            return {
                ...val,
                image: files[key].filename
            }
        } else {
            return {
                ...val,
                image: null
            }
        }
    } else {
        return {
            ...val,
            image: null
        }
    }
})

const addImageUrl = (item) => {
    if ( item.image ) {
        return {
            ...item,
            image_url: path.resolve('src/uploads/order_items/', item.image)
        }
    } else {
        return {
            ...item,
            image_url: null
        }
    }
}

const deleteFiles = (filenames) => {
    if ( filenames.length > 0 ) {
        filenames.forEach((v) => {
            if ( v ) {
                fs.unlink(path.resolve('src/uploads/order_items/', v), (error) => {
                    if (error) {
                        throw err
                    }
    
                    console.log(`${v} deleted successfully!`)
                })
            }
        })
    }
}