const express = require('express')
const router = express.Router()
const {auth,register,login} = require('../controller/authentication')
router.get('/',auth)
router.post('/register',register)
router.get('/login',login)
module.exports = router