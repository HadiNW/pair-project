const express = require('express');
const router = express.Router()

router.get('/', (req, res) => {
    res.render('admins/books/')
})

router.get('/add', (req, res) => {
    res.render('admins/books/add')
})

module.exports = router