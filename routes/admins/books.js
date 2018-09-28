const express = require('express');
const router = express.Router();
const Models = require('../../models/index')
const sequelize = Models.sequelize
const url = '/admin/books'
const dir = 'admins/books'

const multer  = require('multer')
// const upload = multer({ des: 'uploads/' })

const storage = multer.diskStorage({
    destination: './public/uploads/',
    filename: function(req, file, cb) {
      let extArray = file.mimetype.split('/')
      let extension = extArray[extArray.length - 1]
      cb(null, file.fieldname + '-' + Date.now() + '.' + extension)
    }
  })
  
  const uploads = multer({storage})

  router.post('/add', uploads.single('image'),(req, res) => {
    Models.Book.create({
        name: req.body.name,
        price: req.body.price,
        CategoryId: req.body.category,
        description: req.body.description,
        image: req.file.filename,
        stock: req.body.stock
        
    })
        .then((books) => {
            res.redirect(`${url}/`)
        })
        .catch(err => {
            res.send(err)
            // res.redirect(`${dir}/add`, {books: books})
        })

    // res.send(req.file.filename)
    
})




router.get('/', (req, res) => {
    // sequelize.query(`SELECT * FROM "Books", "Category" WHERE `, { raw: true}).spread(users => {
    //     res.send(users)
    // })
    // .catch(err => {
    //     console.log(err)
    // })
    Models.Book.findAll(
        {   
            include: [{model: Models.Category}],
            order: [['id', 'asc']],

        }
        )
        .then((books) => {
            res.render(`${dir}/`, {books: books})
            // res.send(books)
        })
        .catch(err => {
            res.send(err.message)
        })
    
})

router.get('/add', (req, res) => {
    Models.Category.findAll()
        .then((category) => {
            res.render(`${dir}/add`, {category: category})
            // res.send(category)
        })
        .catch(err => {
            res.send(err)
        })
    
})


router.get('/:id/edit', (req, res) => {
    let category = null
    Models.Category.findAll()
        .then((cat) => {
            // res.send(category)
            category = cat
            return  Models.Book.findById(req.params.id)
        })   
        .then((book) => {
            // res.send(category)
            res.render('admins/books/edit', {book: book, category: category})
        })
        .catch(err => {
            res.send(err)
        })
    
})



module.exports = router