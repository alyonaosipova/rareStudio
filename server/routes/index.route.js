const router = require("express").Router();
const authApiRouter = require('./api/authApi.route')
const serviceApiRouter = require('./api/serviceApi.route')
const bookingApiRouter = require('./api/bookingApi.route')

router.use('/api/auth', authApiRouter)
router.use('/api/service', serviceApiRouter)
router.use('/api/bookings', bookingApiRouter)
module.exports = router;
