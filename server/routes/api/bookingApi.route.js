const router = require('express').Router()
const { Sequelize } = require('sequelize')
const {Booking} = require('../../db/models')
const {Service} = require('../../db/models')
const {User} = require('../../db/models')

router.get('/user/booking', async(req, res) => {
    try{
        const bookings = await Booking.findAll({
            where: {},
            include: {
                model: Service,
                attributes: ['title'], 
                // where: {
                //     serviceId: Sequelize.col('Service.id')
                // }
            }
   })
   res.status(200).json({bookings})
} catch({message}){
    res.json(message)
   }
})

router.get('/admin/booking', async(req, res) => {

})

router.put('/admin/booking/:id', async(req, res) =>{

})


module.exports = router