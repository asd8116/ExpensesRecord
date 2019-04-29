const express = require('express')
const router = express.Router()
const Records = require('../models/record')
const { authenticated } = require('../config/auth')

router.get('/month/:month', authenticated, (req, res) => {
  const month = req.params.month
  Records.find({ userId: req.user._id }, (err, records) => {
    if (err) return console.log('month filter err!')
    const recordChoose = records.filter(record => {
      return month === record.date.substring(5, 7)
    })

    let totalAmount = 0
    for (record of recordChoose) {
      totalAmount += record.amount
    }

    res.render('index', { records: recordChoose, totalAmount })
  })
})

router.get('/category/:category', authenticated, (req, res) => {
  Records.find({ category: req.params.category, userId: req.user._id }, (err, records) => {
    if (err) return console.log('category filter err')

    let totalAmount = 0
    for (record of records) {
      totalAmount += record.amount
    }

    res.render('index', { records: records, totalAmount })
  })
})

module.exports = router
