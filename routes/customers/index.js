const express = require('express');
const router = express.Router()
const about = require('./about')
const contact = require('./contact')
const login = require('./login')
const Models = require('../../models/index')
const sequelize = Models.sequelize


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
router.get('/transactions', (req, res) => {
    let query = `SELECT * FROM "Transactions", "Transaction_Details", "Books" WHERE  "Transactions"."id" =  "Transaction_Details"."TransactionId"  AND "Books"."id" = "Transaction_Details"."BookId"`
    sequelize.query(`${query}`, { raw: true}).spread(books => {
        // res.send(books)
        res.render('customers/transaction', {books: books})
    })
    .catch(err => {
        console.log(err)
    })   
})

router.post('/transaction', (req, res) => {
    // res.send(req.body)
    Models.Transaction.create({
        date: new Date(),
        CustimerId: 1,
        isComplete: false
    })
    .then((succ) => {
        // Models.Transaction_Detail.create({
        //     TransactionId :1,
        //     BookId: req.body.book,
        //     total: req.body.total
        // })
        res.send(succ)
    })
})
router.post('/transaction/checkout/', (req, res) => {
    // res.send(req.body)
    Models.Customer.findById(1)
        .then((customer) => {          
            
            if (customer.balance >= req.body.total) {
               return Models.Customer.update({
                    balance: customer.balance - req.body.total
                }, {where: {id: 1}})
                
            }else{
                //transaction/. transaction
            }
        })
        .then(() => {
            res.send('updated')
        })
        .catch(err => {
            res.send(err)
        }) 
})

router.get('/register', (req, res) => {
    res.render('customers/register')
})

router.post('/register', (req, res) => {
    Models.Customer.create({
        name: req.body.name,
        email: req.body.email,
        address: req.body.address,
        password: req.body.password
    })
    .then((customer) => {
        res.render('customers/login', {msg: 'Register success please login'})
    })
    .catch((err) => {
        res.send(err)
    })
})

router.post('/login', (req, res) => {
    // res.send(req.body)
    Models.Customer.findOne({where:{email: req.body.email}})
        .then((user) => {
            res.send(user)
        })
        .catch(err => {
            res.send(err)
        })
})


module.exports = router