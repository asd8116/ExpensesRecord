const express = require('express')
const router = express.Router()
const Record = require('../models/record')
const { authenticated } = require('../config/auth')

// 全部 Record
router.get('/', authenticated, (req, res) => {
  res.send('所有 Record')
})

// Create page
router.get('/new', authenticated, (req, res) => {
  return res.render('new')
})

// Create post
router.post('/', authenticated, (req, res) => {
  const record = Record({ ...req.body, userId: req.user._id })

  record.save(err => {
    if (err) return console.error(err)
    return res.redirect('/')
  })
})

// edit page
router.get('/:id/edit', authenticated, (req, res) => {
  Record.findOne({ _id: req.params.id, userId: req.user._id }, (err, record) => {
    if (err) return console.error(err)
    return res.render('edit', { record: record })
  })
})

// edit post
router.put('/:id', authenticated, (req, res) => {
  Record.findOne({ _id: req.params.id, userId: req.user._id }, (err, record) => {
    if (err) return console.error(err)

    Object.assign(record, req.body)

    record.save(err => {
      if (err) return console.error(err)
      return res.redirect('/')
    })
  })
})

// delete post
router.delete('/:id/delete', authenticated, (req, res) => {
  Record.findOne({ _id: req.params.id, userId: req.user._id }, (err, record) => {
    if (err) return console.error(err)
    record.remove(err => {
      if (err) return console.error(err)
      return res.redirect('/')
    })
  })
})

module.exports = router
