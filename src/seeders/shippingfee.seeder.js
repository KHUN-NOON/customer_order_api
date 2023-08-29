const { Seeder } = require('mongoose-data-seed')
const ShippingFeeModel = require('../models/shippingfee')
const { faker } = require('@faker-js/faker')

const generateShippingFee = () => {
  return {
    location: faker.location.city(),
    fee: faker.finance.amount(5, 1000, 2)
  }
}


const data = faker.helpers.multiple(generateShippingFee, {
  count: 10
})

class ShippingfeeSeeder extends Seeder {

  async shouldRun() {
    return ShippingFeeModel.countDocuments().exec().then(count => count === 0);
  }

  async run() {
    return ShippingFeeModel.create(data);
  }
}

module.exports = ShippingfeeSeeder
