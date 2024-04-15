const router = require("express").Router();
const authApiRouter = require('./api/authApi.route')
const serviceApiRouter = require('./api/serviceApi.route')

router.use('/api/auth', authApiRouter)
router.use('/api/service', serviceApiRouter)

module.exports = router;
