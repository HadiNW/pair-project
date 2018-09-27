const express = require('express');
const router = express.Router()
const Models = require('../../models/index')
const url = '/admin/categories'
const dir = 'admins/categories'

router.get('/', (req, res) => {
    Models.Category.findAll({order: [['id', 'asc']]})
        .then((category) => {
            // res.send(category)
            res.render(`${dir}/`, {category: category})
        })
        .catch((err) => {
            res.send(err)
        })
    
})

router.get('/add', (req, res) => {
    res.render(`${dir}/add`)
})

router.post('/add', (req, res) => {
    Models.Category.create({
        name: req.body.name
    })
    .then(() => {
        res.redirect(`${url}/`)
    })
    .catch((err) => {
        res.send(err)
    })
})

router.get('/:id/edit', (req, res) => {
    Models.Category.findById(req.params.id)
        .then(category => {
            // res.send(category)
            res.render(`${dir}/edit`, {category: category})
        })
    // 
})

router.post('/:id/edit', (req, res) => {
    Models.Category.update({
        name: req.body.name
    }, {where: {id: req.params.id}})
        .then(category => {
            // res.send(category)
            res.redirect(`${url}/`)
        })
        .catch((err) => {
            res.send(err)
        })
    // 
})

router.get('/:id/delete', (req, res) => {
    Models.Category.destroy({where: {id: req.params.id}})
        .then(() => {
            res.redirect(`${url}/`)
        })
        .catch((err) => {
            res.send(err)
        })
    // 
})

module.exports = router