const loginModel = require('../models/loginModel')
const loginView = require('../views/loginView')

class LoginController {
    login(req, res) {
        loginModel.login(req, (status, users) => {
            loginView.login(res, status, users)
        })
    }
}

module.exports = new LoginController