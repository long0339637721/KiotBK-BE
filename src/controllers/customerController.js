const customerModel = require('../models/customerModel')
const customerView = require('../views/customerView')

class CustomerController {
    getAll(req, res) {
        customerModel.getAll((status, customers) => {
            customerView.getAll(res, status, customers)
        })
    }

    get(req, res) {
        let id = req.params.id
        customerModel.get(id, (status, customer) => {
            customerView.get(res, status, customer)
        })
    }

    create(req, res) {
        let newCustomer = req.body
        customerModel.create(newCustomer, (status, result) => {
            customerView.create(res, status, result)
        })
    }

    delete(req, res) {
        let id = req.params.id
        customerModel.delete(id, (status, result) => {
            customerView.delete(res, status, result)
        })
    }

    update(req, res) {
        let id = req.params.id
        let newCustomer = req.body
        customerModel.update(id, newCustomer, (status, result) => {
            customerView.update(res, status, result)
        })
    }

    getBySdt(req, res) {
        let sdt = req.params.sdt
        customerModel.getBySdt(sdt, (status, result) => {
            customerView.getBySdt(res, status, result)
        })
    }
}

module.exports = new CustomerController