const express = require('express');
const router = express.Router();
const Models = require('../../models/index')
const url = '/admin/topups'
const dir = 'admins/topups'

router.get('/', (req, res) => {
    Models.TopUp.findAll(
        {
            include: [{model: Models.Customer}],
            order: [['isApproved', 'asc']]
        }
        )
        .then((data) => {
            res.render(`${dir}/`, {data: data})
            // res.send(data)
        })
})




module.exports = router