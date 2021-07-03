const express = require('express')
const { registerController, getAllUser, loginController } = require('../controllers/users')
const router = express.Router()


router.post('/register', registerController)
router.post('/login', loginController)
router.get('/users', getAllUser)

module.exports = router