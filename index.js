const express = require('express')
const app = express()
const routes = require('./src/routes')
const createHttpError = require('http-errors')
const cors = require('cors')
require('./src/connections/connection')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(routes)

app.use((req, res, next) => {
    next(createHttpError(404))
})

module.exports = app