const router = require('express').Router()
const {Service} = require('../../db/models')

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

router.post('/admin/services', async (req, res) => {
    try{
        const{title, description, price} = req.body;
        if(title && description && price) {
            const newService = await Service.create({title, description,price});
            res.json({message:'ok', newService})
        } else {
            res.status(400).json({message:'азполните все поля'});
        }
    } catch({message}){
        res.json({message})
    }
})
router.delete('/admin/delServices/:id', async (req,res) =>{
    try{
        const{id} = req.params;
        const result = await Service.destroy({where:{id}});
        if(result){
            res.json({message: 'ok'})
        }
    } catch ({message}){
        res.json({message})
    }
})

router.put('/admin/services/:id/', async (req, res) => {
    try{
        const {id} = req.params
        const{title, description, price} = req.body;

        if(title && description && price){
            const result = Service.update({title, description, price}, {where: {}})
            res.json({result})
        } else{
            res.status(400).json({message: 'Поля не заполнены'})
        }
    } catch({message}){
        res.json({message})
    } 
})

module.exports = router