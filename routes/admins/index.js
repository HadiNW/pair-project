const express = require('express');
const router = express.Router()
const categoriesRouter = require('./categories')
const booksRouter = require('./books')

router.use('/categories', categoriesRouter)
router.use('/books', booksRouter)





router.get('/', (req, res) => {
    res.render('admins/')
})

module.exports = router