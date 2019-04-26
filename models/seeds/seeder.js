const mongoose = require('mongoose')
const Record = require('../record')

mongoose.connect('mongodb://localhost/records', {
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
    name: 'asd8116',
    category: '交通',
    date: '2019-04-24 14:12:30.561Z',
    amount: '60'
  })

  console.log('done')
})
