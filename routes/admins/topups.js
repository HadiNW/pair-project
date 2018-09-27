const express = require('express');
const router = express.Router();
const Models = require('../../models/index')
const url = '/admin/topups'
const dir = 'admins/topups'

router.get('/', (req, res) => {
    Models.TopUp.findAll({order: [['isApproved', 'asc']]})
        .then((data) => {
            res.render(`${dir}/`, {data: data})
        })
})




module.exports = router