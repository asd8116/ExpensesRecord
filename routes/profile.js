const express = require('express')
const router = express.Router()
const User = require('../models/user')
const moment = require('moment')

// profile
router.get('/', (req, res) => {
  const date = moment(req.user.date).format('YYYY-MM-DD')
  res.render('profile', { date })
})

// profile edit page
router.get('/edit', (req, res) => {
  res.render('profileEdit')
})

// profile edit
router.post('/edit', (req, res) => {
  res.send('profileEdit')
})

module.exports = router
