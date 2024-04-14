const router = require('express').Router()
const {Service} = require('../../db/models/service')

router.get('/user', async (req, res) => {
    const services = await Service.findAll()
    res.json({services})
})

router.post('/')
module.exports = router