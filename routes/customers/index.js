const express = require('express');
const router = express.Router()
const about = require('./about')
const contact = require('./contact')
const login = require('./login')
const Models = require('../../models/index')


router.use('/login', login)
router.use('/about', about)
router.use('/contact', contact)



router.get('/', (req, res) => {
    Models.Category.findAll({})
        .then((category) => {
            Models.Book.findAll({order: [['createdAt', 'asc']]})
                .then((book) => {
                    res.render('customers/', {category: category, book: book})
                    // res.send(book[0].name)
                })            
        })
        .catch((err) => {
            res.send(err)
        })    
})

router.get('/sort/', (req, res) => {
    Models.Book.findAll({where: {CategoryId: req.query.cat}})
        .then(book => {
            res.render('customers/sort', {book: book})
        })
})

router.post('/transaction', (req, res) => {
    res.send(req.body)
})

router.get('/register', (req, res) => {
    res.render('customers/register')
})


module.exports = router