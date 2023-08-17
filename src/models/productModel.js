const db = require('../config/db.js')

class Product {
    static getAll(callback) {
        const query = `SELECT * FROM product`
        db.query(query, (err, result) => {
            if (err) {
                console.error('Error fetching all products: ', err)
                callback(400, null)
                return
            }
            console.log(query, '\nSUCCESS!')
            callback(200, result)
        })
    }

    static get(id, callback) {
        const query = `SELECT * FROM product u WHERE u.ID = ?`
        db.query(query, id, (err, result) => {
            if (err) {
                console.error('Error fetching product ', id, ': ', err)
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

    static create(newProduct, callback) {
        const query = `INSERT INTO PRODUCT SET ?`
        const tempProduct = {
            ID: newProduct.ID,
            FullName: newProduct.FullName,
            TonKho: newProduct.TonKho ? newProduct.TonKho : 0,
            GiaNhap: newProduct.GiaNhap ? newProduct.GiaNhap : 0,
            GiaBan: newProduct.GiaBan ? newProduct.GiaBan : 0
        }
        db.query(query, tempProduct, (err, result) => {
            if (err) {
                console.error('Error create product: ', err)
                callback(400, null)
                return
            }
            console.log(query, tempProduct, '\nSUCCESS!')
            callback(201, result)
        })
    }

    static delete(id, callback) {
        const query1 = `SELECT * FROM product u WHERE u.ID = ?`
        const query2 = `DELETE FROM product u WHERE u.ID = ?`
        db.query(query1, id, (err, result) => {
            if (err) {
                console.error('Error fetching product ', id, ': ', err)
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
                    console.error('Error delete product ', id, ': ', err)
                    callback(400, null)
                    return
                }
                console.log(query2, id, '\nDelete success!')
                callback(200, result)
                return
            })
        })
    }

    static update(id, newProduct, callback) {
        const query1 = `SELECT * FROM product u WHERE u.ID = ?`
        const query2 = `UPDATE product SET ? WHERE ID = ?`

        db.query(query1, id, (err, result) => {
            if (err) {
                console.error('Error fetching product ', id, ': ', err)
                callback(400, null)
                return
            }
            if (result.length === 0) {
                console.log('Not found ID: ', id)
                callback(404, null)
                return
            }
            const tempProduct = {
                ID: newProduct.ID ? newProduct.ID : result[0].ID,
                FullName: newProduct.FullName ? newProduct.FullName : result[0].FullName,
                TonKho: newProduct.TonKho ? newProduct.TonKho : result[0].TonKho,
                GiaNhap: newProduct.GiaNhap ? newProduct.GiaNhap : result[0].GiaNhap,
                GiaBan: newProduct.GiaBan ? newProduct.GiaBan : result[0].GiaBan
            }
            db.query(query2, [tempProduct, id], (err, result) => {
                if (err) {
                    console.error('Error update product ', id, ': ', err)
                    callback(400, null)
                    return
                }
                console.log(query2, id, tempProduct, '\nUpdate success!')
                callback(200, result)
                return
            })
        })
    }

    static getByName(name, callback) {
        const query = "SELECT * FROM product u where u.FullName like \"%" + name + "%\""
        db.query(query, (err, result) => {
            if (err) {
                console.error('Error fetching name ', name, ': ', err)
                callback(400, null)
                return
            }
            console.log(query, '\nSUCCESS!')
            callback(200, result)
        })
    }
}

module.exports = Product