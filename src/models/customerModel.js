const db = require('../config/db.js')

class Customer {
    static getAll(callback) {
        const query = `SELECT * FROM Customer`
        db.query(query, (err, result) => {
            if (err) {
                console.error('Error fetching all customers: ', err)
                callback(400, null)
                return
            }
            console.log(query, '\nSUCCESS!')
            callback(200, result)
        })
    }

    static get(id, callback) {
        const query = `SELECT * FROM customer u WHERE u.ID = ?`
        db.query(query, id, (err, result) => {
            if (err) {
                console.error('Error fetching customer ', id, ': ', err)
                callback(400, null)
                return
            }
            if (result.length === 0) {
                console.log('Not found ID: ', id)
                callback(404, null)
                return
            }
            console.log(query, id, '\nSUCCESS!')
            callback(200, result[0])
        })
    }

    static create(newCustomer, callback) {
        const query = `INSERT INTO customer SET ?`
        const tempCustomer = {
            ID: newCustomer.ID,
            Sdt: newCustomer.Sdt,
            FullName: newCustomer.FullName,
            Sex: newCustomer.Sex,
            BDate: newCustomer.BDate
        }
        db.query(query, tempCustomer, (err, result) => {
            if (err) {
                console.error('Error create customer: ', err)
                callback(400, null)
                return
            }
            console.log(query, tempCustomer, '\nSUCCESS!')
            callback(201, result)
        })
    }

    static delete(id, callback) {
        const query1 = `SELECT * FROM customer u WHERE u.ID = ?`
        const query2 = `DELETE FROM customer u WHERE u.ID = ?`
        db.query(query1, id, (err, result) => {
            if (err) {
                console.error('Error fetching customer ', id, ': ', err)
                callback(400, null)
                return
            }
            if (result.length === 0) {
                console.log('Not found ID: ', id)
                callback(404, null)
                return
            }
            db.query(query2, id, (err, result) => {
                if (err) {
                    console.error('Error delete customer ', id, ': ', err)
                    callback(400, null)
                    return
                }
                console.log(query2, id, '\nDelete success!')
                callback(200, result)
                return
            })
        })
    }

    static update(id, newCustomer, callback) {
        const query1 = `SELECT * FROM customer u WHERE u.ID = ?`
        const query2 = `UPDATE customer SET ? WHERE ID = ?`

        db.query(query1, id, (err, result) => {
            if (err) {
                console.error('Error fetching customer ', id, ': ', err)
                callback(400, null)
                return
            }
            if (result.length === 0) {
                console.log('Not found ID: ', id)
                callback(404, null)
                return
            }
            let tempCustomer = {
                ID: newCustomer.ID ? newCustomer.ID : result[0].ID,
                Sdt: newCustomer.Sdt ? newCustomer.Sdt : result[0].Sdt,
                FullName: newCustomer.FullName ? newCustomer.FullName : result[0].FullName,
                Sex: newCustomer.Sex ? newCustomer.Sex : result[0].Sex,
                BDate: newCustomer.BDate ? newCustomer.BDate : result[0].BDate
            }
            db.query(query2, [tempCustomer, id], (err, result) => {
                if (err) {
                    console.error('Error update customer ', id, ': ', err)
                    callback(400, null)
                    return
                }
                console.log(query2, id, tempCustomer, '\nUpdate success!')
                callback(200, result)
                return
            })
        })
    }

    static getBySdt(sdt, callback) {
        const query = `SELECT * FROM customer u WHERE u.Sdt = ?`
        db.query(query, sdt, (err, result) => {
            if (err) {
                console.error('Error fetching customer by sdt ', sdt, ': ', err)
                callback(400, null)
                return
            }
            if (result.length === 0) {
                console.log('Not found SDT: ', sdt)
                callback(404, null)
                return
            }
            console.log(query, sdt, '\nSUCCESS!')
            callback(200, result[0])
        })
    }
}

module.exports = Customer