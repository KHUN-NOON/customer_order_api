const mongoose = require('mongoose')

const dbUser = process.env.MONGODB_USERNAME
const dbPass = process.env.MONGODB_PASSWORD
const dbUrl = process.env.MONGODB_URL
const dbName = process.env.MONGODB_NAME

const url = `mongodb://${dbUrl}/${dbName}`;

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    socketTimeoutMS: 10000
})

const conn = mongoose.connection

conn.on('connected', function (ref) {
    connected = true
    console.log('connected to mongo server.')
})

conn.on('error', function (err) {
    connected = false
    console.log('error connection to mongo server!')
    console.log(err)
})

process.on('exit', () => {
    conn.close()
})

module.exports = conn
