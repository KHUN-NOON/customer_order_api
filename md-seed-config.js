const mongoose = require('mongoose')
const OrderstatusSeeder = require('./src/seeders/orderstatus.seeder')
const CustomersSeeder = require('./src/seeders/customers.seeder')
const ShippingFeeSeeder = require('./src/seeders/shippingfee.seeder')
const dotenv = require('dotenv').config()

const dbUser = dotenv.parsed.MONGODB_USERNAME
const dbPass = dotenv.parsed.MONGODB_PASSWORD
const dbUrl = dotenv.parsed.MONGODB_URL
const dbName = dotenv.parsed.MONGODB_NAME

const mongoURL = `mongodb://${dbUser}:${dbPass}@${dbUrl}/${dbName}`

/**
 * Seeders List
 * order is important
 * @type {Object}
 */
const seedersList = {
  OrderstatusSeeder,
  CustomersSeeder,
  ShippingFeeSeeder
}
/**
 * Connect to mongodb implementation
 * @return {Promise}
 */
const connect = async () =>
  await mongoose.connect(mongoURL, { useNewUrlParser: true })
/**
 * Drop/Clear the database implementation
 * @return {Promise}
 */
const dropdb = async () => mongoose.connection.db.dropDatabase()

module.exports = {
  seedersList,
  connect,
  dropdb
}
