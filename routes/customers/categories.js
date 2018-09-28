const express = require('express');
const router = express.Router()



router.get('/', (req, res) => {
    res.render('customers/categories')
})


module.exports = router

