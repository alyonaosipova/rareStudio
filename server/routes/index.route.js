const router = require("express").Router();
const authApiRouter = require('./api/authApi.route')

router.use('/api/sign', authApiRouter)

module.exports = router;
