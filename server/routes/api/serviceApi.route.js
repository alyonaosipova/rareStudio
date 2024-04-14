const router = require('express').Router()
const {Service} = require('../../db/models/service')
async function txt(){
const services = await Service.findAll()
console.log(services);
}
router.get('/user/services', async (req, res) => {
    const services = await Service.findAll({
        attributes:[title, description, price]
    })
    res.json({services})
})

router.get('/admin/services', async (req, res) => {
    const services = await Service.findAll()
    res.json({services})
})

router

module.exports = router