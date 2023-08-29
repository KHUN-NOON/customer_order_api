const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const api_endpoints = require('./v1/v1')

router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json())

router.get('/', (req, res) => {
    res.send('Customer Order Api')
})

router.use('/api/v1', api_endpoints)

module.exports = router