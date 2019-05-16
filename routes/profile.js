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
router.put('/edit', (req, res) => {
  User.findOne({ email: req.user.email }).then(user => {
    user.name = req.body.name
    user.date = moment().format('YYYY-MM-DD')
    user.save(err => {
      if (err) return console.error(err)
      res.redirect('/profile')
    })
  })
})

module.exports = router
