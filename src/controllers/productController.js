const productModel = require('../models/productModel')
const productView = require('../views/productView')

class ProductController {
    getAll(req, res) {
        productModel.getAll((status, result) => {
            productView.getAll(res, status, result)
        })
    }

    get(req, res) {
        let id = req.params.id
        productModel.get(id, (status, result) => {
            productView.get(res, status, result)
        })
    }

    create(req, res) {
        let newProduct = req.body
        productModel.create(newProduct, (status, result) => {
            productView.create(res, status, result)
        })
    }

    delete(req, res) {
        let id = req.params.id
        productModel.delete(id, (status, result) => {
            productView.delete(res, status, result)
        })
    }

    update(req, res) {
        let id = req.params.id
        let newProduct = req.body
        productModel.update(id, newProduct, (status, result) => {
            productView.update(res, status, result)
        })
    }

    getByName(req, res) {
        let name = req.params.name
        productModel.getByName(name, (status, result) => {
            productView.getByName(res, status, result)
        })
    }
}

module.exports = new ProductController