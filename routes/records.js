const express = require('express')
const router = express.Router()
const Record = require('../models/record')

// 全部 Record
router.get('/', (req, res) => {
  res.send('所有 Record')
})

// Create page
router.get('/new', (req, res) => {
  return res.render('new')
})

// Create post
router.post('/', (req, res) => {
  const record = Record({ ...req.body, userId: req.user._id })

  record.save(err => {
    if (err) return console.error(err)
    return res.redirect('/')
  })
})

// edit page
router.get('/:id/edit', (req, res) => {
  Record.findOne({ _id: req.params.id, userId: req.user._id }, (err, record) => {
    if (err) return console.error(err)
    return res.render('edit', { record: record })
  })
})

// edit post
router.put('/:id', (req, res) => {
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
router.delete('/:id/delete', (req, res) => {
  Record.findOne({ _id: req.params.id, userId: req.user._id }, (err, record) => {
    if (err) return console.error(err)
    record.remove(err => {
      if (err) return console.error(err)
      return res.redirect('/')
    })
  })
})

module.exports = router
