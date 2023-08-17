const express = require('express')
const customerController = require('../controllers/customerController')

const router = express.Router()

router.get('/all', customerController.getAll)
router.get('/:id', customerController.get)
router.post('/create', customerController.create)
router.delete('/delete/:id', customerController.delete)
router.put('/update/:id', customerController.update)
router.get('/sdt/:sdt', customerController.getBySdt)

module.exports = router;