const express = require('express');
const router = express.Router()

router.get('/', (req, res) => {
    res.render('admins/categories/')
})

router.get('/add', (req, res) => {
    res.render('admins/categories/add')
})

module.exports = router