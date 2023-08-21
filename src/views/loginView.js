class LoginView {
    login(res, status, result) {
        if (status === 200) {
            res.status(status).json({
                result: 'Success',
                message: result
            })
        } else {
            res.status(status).json({
                result: 'Fail',
                message: result
            })
        }
    }
}

module.exports = new LoginView