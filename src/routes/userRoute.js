const express = require('express')
const userController = require('../controllers/userController')

const router = express.Router()

router.get('/all', userController.getAll)
router.get('/:id', userController.get)
router.post('/create', userController.create)
router.delete('/delete/:id', userController.delete)
router.put('/update/:id', userController.update)
router.get('/role/:role', userController.getByRole)

module.exports = router;