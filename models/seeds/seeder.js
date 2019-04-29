const mongoose = require('mongoose')
const Record = require('../record')

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/records', {
  useNewUrlParser: true,
  useCreateIndex: true
})
const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  console.log('db connected!')

  Record.create({
    name: '公車',
    category: 'travel',
    date: '2019-04-24',
    amount: '60'
  })

  console.log('done')
})
