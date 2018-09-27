const express = require('express');
const router = express.Router()
const categoriesRouter = require('./categories')

router.use('/categories', categoriesRouter)





router.get('/', (req, res) => {
    res.render('admins/')
})

module.exports = router