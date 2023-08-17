const userModel = require('../models/userModel')
const userView = require('../views/userView')

class UserController {
    getAll(req, res) {
        userModel.getAll((status, users) => {
            userView.getAll(res, status, users)
        })
    }

    get(req, res) {
        let id = req.params.id
        userModel.get(id, (status, user) => {
            userView.get(res, status, user)
        })
    }

    create(req, res) {
        let newUser = req.body
        userModel.create(newUser, (status, result) => {
            userView.create(res, status, result)
        })
    }

    delete(req, res) {
        let id = req.params.id
        userModel.delete(id, (status, result) => {
            userView.delete(res, status, result)
        })
    }

    update(req, res) {
        let id = req.params.id
        let newUser = req.body
        userModel.update(id, newUser, (status, result) => {
            userView.update(res, status, result)
        })
    }
}

module.exports = new UserController