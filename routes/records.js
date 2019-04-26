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
  const record = Record(req.body)

  record.save(err => {
    if (err) return console.error(err)
    return res.redirect('/')
  })
})

// edit page
router.get('/:id/edit', (req, res) => {
  res.render('edit')
})

// edit post
router.get('/:id', (req, res) => {
  res.send('edit')
})

// delete post
router.get('/:id/delete', (req, res) => {
  res.send('delete')
})

module.exports = router
