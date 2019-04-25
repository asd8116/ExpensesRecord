const express = require('express')
const router = express.Router()
const Record = require('../models/record')

// 全部 Record
router.get('/', (req, res) => {
  res.send('所有 Record')
})

// Create page
router.get('/new', (req, res) => {
  res.send('new')
})

// Create post
router.post('/', (req, res) => {
  res.send('new')
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
