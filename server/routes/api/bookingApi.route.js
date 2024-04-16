const router = require('express').Router()
const { Sequelize } = require('sequelize')
const {Booking} = require('../../db/models')
const {Service} = require('../../db/models')
const {User} = require('../../db/models')

router.get('/user/:id/bookings', async(req, res) => {
    try{
        const {id} = req.params
        const bookings = await Booking.findOne({
            where: {userId:id},
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

router.post('/user/newBooking', async(req, res) =>{
    try{
        const {userId, serviceId, startDate, status} = req.body
        const result = Booking.create({userId, serviceId, startDate, status});
        if(result){
            res.json(result)
        }
    } catch({message}){
        res.json({message})
    }
})

// router.get('/admin/booking', async(req, res) => {

// })

router.put('/admin/booking/:id', async(req, res) =>{

})


module.exports = router