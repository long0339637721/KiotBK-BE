class ProductView {
    getAll(res, status, result) {
        if (status === 200) {
            res.status(status).json({
                result: 'Success',
                message: 'Get all products',
                size: result.length,
                products: result
            })
        }
        else {
            res.status(status).json({
                result: 'Fail',
                message: 'Something wrong happened, please try again'
            })
        }
    }

    get(res, status, result) {
        if (status === 200) {
            res.status(status).json({
                result: 'Success',
                message: 'Get product by ID',
                product: result
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
                message: 'Something wrong happened, please try again'
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
                message: 'Something wrong happened, please try again'
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
                message: 'Something wrong happened, please try again'
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
                message: 'Something wrong happened, please try again'
            })
        }
    }

    getByName(res, status, result) {
        if (status === 200) {
            res.status(status).json({
                result: 'Success',
                message: 'Get by name',
                size: result.length,
                products: result
            })
        }
        else {
            res.status(status).json({
                result: 'Fail',
                message: 'Something wrong happened, please try again'
            })
        }
    }
}

module.exports = new ProductView