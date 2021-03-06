const express = require('express')
const router = express.Router()
const Record = require('../models/record')

router.get('/', (req, res) => {
  Record.find({ userId: req.user._id }).exec((err, records) => {
    if (err) return console.error(err)

    let totalAmount = 0
    for (record of records) {
      totalAmount += record.amount
    }

    return res.render('index', { records: records, totalAmount })
  })
})

module.exports = router
