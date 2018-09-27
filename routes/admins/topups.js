const express = require('express');
const router = express.Router();
const Models = require('../../models/index')
const url = '/admin/topups'
const dir = 'admins/topups'
const Helpers = require('../../helpers/helpers')

router.get('/', (req, res) => {
    Models.TopUp.findAll(
        {
            include: [{model: Models.Customer}],
            order: [['isApproved', 'asc']]
        }
        )
        .then((data) => {
            res.render(`${dir}/`, {data: data, helpers: Helpers})
            // res.send(Helpers.getTrue())
        })
})
// /admin/topups/1/approve/1
router.get('/:tId/approve/:cId', (req, res) => {
   Models.Customer.findById(req.params.cId)
    .then(customer => {
        // res.send(customer)
        Models.TopUp.findById(req.params.tId)
            .then((topup) => {
                // res.send(topup)
                Models.Customer.update({
                    balance: customer.balance + topup.amount
                }, {where: {id: req.params.cId}})
                .then(() => {
                    Models.TopUp.update({isApproved: true}, {where: {id: req.params.tId}})
                    .then(() => {
                        res.redirect(`${url}/`)
                    })
                    
                })
            })
    })
})

router.get('/:tId/reject/:cId', (req, res) => {
   
    Models.TopUp.update({isApproved: false}, {where: {id: req.params.tId}})
        .then(() => {
                 res.redirect(`${url}/`)
        })
               
 })




module.exports = router