const userController = require('../controllers/user-controller')
const UserController  = require('../controllers/user-controller')
const authMiddleware = require('../middlewares/auth-middleware')

const Router = require('express').Router

const router = new Router()

router.post('/send', UserController.sendSMSCode)
router.post('/login', UserController.login)
router.get('/refresh', UserController.refresh)
router.post('/logout', UserController.logout)
router.post('/refreshsmscode', UserController.refreshSMSToken)
router.get('/users',authMiddleware,UserController.getAllUsers)

module.exports = router