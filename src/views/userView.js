class UserView {
    getAll(res, status, users) {
        if (users) {
            res.status(status).json({
                result: 'Success',
                message: 'Get all users',
                size: users.length,
                users: users
            })
        }
        else {
            res.status(status).json({
                result: 'Fail',
                message: 'Something wrong happened, please try again'
            })
        }
    }

    get(res, status, user) {
        if (status === 200) {
            res.status(status).json({
                result: 'Success',
                message: 'Get user by ID',
                users: user
            })
        }
        else if (status === 404) {
            res.status(status).json({
                result: 'Fail',
                message: 'ID not exist, please check again'
            })
        }
        else {
            res.status(status).json({
                result: 'Fail',
                message: 'Something wrong happened, please try again',
            })
        }
    }

    create(res, status, result) {
        if (status === 201) {
            res.status(status).json({
                result: 'Success',
                message: result
            })
        }
        else {
            res.status(status).json({
                result: 'Fail',
                message: result
            })
        }
    }

    delete(res, status, result) {
        if (status === 200) {
            res.status(status).json({
                result: 'Success',
                message: result
            })
        }
        else if (status === 404) {
            res.status(status).json({
                result: 'Fail',
                message: 'ID not exist, please check again'
            })
        }
        else {
            res.status(status).json({
                result: 'Fail',
                message: 'Something wrong happened, please try again',
            })
        }
    }

    update(res, status, result) {
        if (status === 200) {
            res.status(status).json({
                result: 'Success',
                message: result
            })
        }
        else if (status === 404) {
            res.status(status).json({
                result: 'Fail',
                message: 'ID not exist, please check again'
            })
        }
        else {
            res.status(status).json({
                result: 'Fail',
                message: 'Something wrong happened, please try again',
            })
        }
    }
}

module.exports = new UserView