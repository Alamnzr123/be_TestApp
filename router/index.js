const express = require('express')
const ControllerUser = require('../controller/user')
const errorHandler = require('../middleware/error')
const { verifyToken } = require('../middleware/auth')
const router = express.Router()

router.post('/api/register', ControllerUser.register)
router.post('/api/login', ControllerUser.login)

router.use(verifyToken)

router.post('/api/createProfile', ControllerUser.createProfile)
router.get('/api/getProfile', ControllerUser.getProfile)
router.put('/api/updateProfile', ControllerUser.updateProfile)

router.use(errorHandler)

module.exports = router