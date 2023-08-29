const { Seeder } = require('mongoose-data-seed')
const OrderStatusModel = require('../models/orderstatus')

const data = [
  {
    status_code: 'PENDING',
    status_name: 'pending'
  },
  {
    status_code: 'COMPLETE',
    status_name: 'complete'
  },
  {
    status_code: 'CANCEL',
    status_name: 'cancel'
  }
]

class OrderstatusSeeder extends Seeder {

  async shouldRun() {
    return OrderStatusModel.countDocuments().exec().then(count => count === 0);
  }

  async run() {
    return OrderStatusModel.create(data);
  }
}

module.exports = OrderstatusSeeder
