const router = require("express").Router();
const authApiRouter = require('./api/authApi.route')

router.use('api/auth', authApiRouter)

module.exports = router;
