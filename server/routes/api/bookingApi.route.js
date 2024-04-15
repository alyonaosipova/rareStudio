const router = require('express').Router()
const { Sequelize } = require('sequelize')
const {Booking} = require('../../db/models/booking')
const {Service} = require('../../db/models/service')
const {User} = require('../../db/models/user')

router.get('/user/booking', async(req, res) => {
   const bookings = await Booking.find({
    where: {},
    include:{
        model:models.Service,
        where:{
            serviceId: Sequelize.col('Service.')
        }
    }
   })
})
Catalog.find({
    where: { id: itemId },
    include: {
        model: models.ProductCategory,
        where: { language_id: Sequelize.col('Catalog.language_id') }
    }
});