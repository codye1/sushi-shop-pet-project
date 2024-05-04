const actionContoller = require('../controllers/action-contoller')
const productController = require('../controllers/product-controller')
const restaurantsController = require('../controllers/restaurants-controller')
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
router.post('/addresses',authMiddleware,UserController.addAddress)
router.delete('/addresses',authMiddleware,UserController.deleteAddress)
router.put('/addresses',authMiddleware,UserController.putAddress),
router.post('/save/birth-date',authMiddleware,UserController.saveBirthDate)
router.post('/save/name',authMiddleware,UserController.saveName)
router.post('/save/email',authMiddleware,UserController.saveEmail)
router.post('/uploadimg',authMiddleware,UserController.uploadImg)
router.get('/products',productController.getProducts)
router.get('/products/:id',productController.getProductsById)
router.get('/add-product',productController.addProduct)
router.get('/actions',actionContoller.getActions)
router.get('/add-action',actionContoller.addAction)
router.get('/restaurants',restaurantsController.getRestaurantss)
router.get('/add-restaurant',restaurantsController.addRestaurants)
module.exports = router