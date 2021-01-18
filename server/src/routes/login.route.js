const express = require('express')
const router = express.Router()
const loginController = require('../controllers/login.controller')

router.get('/', (req, res)=>{
    res.send('login')
})
router.post('/', loginController.checkUser)

module.exports = router