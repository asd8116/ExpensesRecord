const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const User = require('../user')
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

  const user = User({
    name: 'test',
    email: 'test@email.com',
    password: '123123'
  })

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(user.password, salt, (err, hash) => {
      user.password = hash
      user.save().then(user => {
        Record.create({
          name: '午餐',
          category: 'food', // 顯示出的是圖示
          date: '2019-04-05',
          amount: '100',
          userId: user._id
        })
      })
    })
  })

  console.log('done')
})
