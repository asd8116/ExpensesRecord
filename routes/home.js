const express = require('express')
const router = express.Router()
const Record = require('../models/record')

router.get('/', (req, res) => {
  Record.find((err, records) => {
    if (err) return console.error(err)
    return res.render('index', { records: records })
  })
})

module.exports = router
