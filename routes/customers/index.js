const express = require('express');
const router = express.Router()
const about = require('./about')
const contact = require('./contact')
const login = require('./login')

router.use('/login', login)
router.use('/about', about)
router.use('/contact', contact)



router.get('/', (req, res) => {
    res.render('customers')
})


module.exports = router