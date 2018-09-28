const express = require('express');
const router = express.Router()
const categoriesRouter = require('./categories')
const booksRouter = require('./books')
const topupRouter = require('./topups')

router.use('/categories', categoriesRouter)
router.use('/books', booksRouter)
router.use('/topups', topupRouter)





router.get('/', (req, res) => {
    res.render('admins/')
})

module.exports = router