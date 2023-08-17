const express = require('express')
const productController = require('../controllers/productController')

const router = express.Router()

router.get('/all', productController.getAll)
router.get('/:id', productController.get)
router.post('/create', productController.create)
router.delete('/delete/:id', productController.delete)
router.put('/update/:id', productController.update)
router.get('/search/:name', productController.getByName)

module.exports = router;