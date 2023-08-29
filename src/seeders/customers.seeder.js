const { Seeder } = require('mongoose-data-seed')
const CustomerModel = require('../models/customer')
const { faker } = require('@faker-js/faker')

const generateCustomers = () => {
  return {
    name: faker.internet.userName(),
    phone: faker.phone.number(),
    address: faker.location.secondaryAddress()
  }
}

const data = faker.helpers.multiple(generateCustomers, {
  count: 10
})

class CustomersSeeder extends Seeder {

  async shouldRun() {
    return CustomerModel.countDocuments().exec().then(count => count === 0)
  }

  async run() {
    return CustomerModel.create(data)
  }
}

module.exports = CustomersSeeder
