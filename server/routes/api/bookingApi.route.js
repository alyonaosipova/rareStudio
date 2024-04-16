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

router.get('/admin/booking', async(req, res) => {
    try{
        const result = await Booking.findAll()
        res.json({result})
    } catch ({message}){
        res.json({message})
    }
})

router.put('/admin/booking/:id', async(req, res) =>{
    try{
        const {id} = req.params
        const{status} = req.body
        if(status){
            const resultBooking = await Booking.update({where: {id} }, {status})
            if (result[0] > 0) {
                const updateBookig = await Booking.findOne({ where: { id } });
                res.json({ updateBookig });
              } else {
                res.json({ message: "Not update" });
              }
        }
    } catch ({message}){
        res.json({message})
    }
})

router.delete('/admin/delBooking/:id', async (req, res) =>{
    try {
        const {id} = req.params
        const delBooking = await Booking.destroy({where: {id}})

        if(delBooking){
            res.json({ id: +id });
        }
    } catch({message}){
        res.json({message})
    }
})


module.exports = router