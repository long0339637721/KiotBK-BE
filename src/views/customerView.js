class CustomerView {
    getAll(res, status, customers) {
        if (status === 200) {
            res.status(status).json({
                result: 'Success',
                message: 'Get all customers',
                size: customers.length,
                customers: customers
            })
        }
        else {
            res.status(status).json({
                result: 'Fail',
                message: 'Something wrong happened, please try again'
            })
        }
    }

    get(res, status, customer) {
        if (status === 200) {
            res.status(status).json({
                result: 'Success',
                message: 'Get customer by ID',
                customer: customer
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

    getBySdt(res, status, customer) {
        if (status === 200) {
            res.status(status).json({
                result: 'Success',
                message: 'Get customer by Sdt',
                customer: customer
            })
        }
        else if (status === 404) {
            res.status(status).json({
                result: 'Fail',
                message: 'Sdt not exist, please check again'
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

module.exports = new CustomerView