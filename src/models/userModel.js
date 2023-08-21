const db = require('../config/db.js')
const bcrypt = require('bcrypt')

class User {
    static getAll(callback) {
        const query = `SELECT * FROM User`
        db.query(query, (err, result) => {
            if (err) {
                console.error('Error fetching all users: ', err)
                callback(400, null)
                return
            }
            console.log(query, '\nSUCCESS!')
            callback(200, result)
        })
    }

    static get(id, callback) {
        const query = `SELECT * FROM User u WHERE u.ID = ?`
        db.query(query, id, (err, result) => {
            if (err) {
                console.error('Error fetching user ', id, ': ', err)
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

    static create(newUser, callback) {
        const query1 = `INSERT INTO USER SET ?`
        const query2 = `INSERT INTO ${newUser.role == "admin" ? "ADMIN" : "SELLER"} VALUES (?)`
        bcrypt.hash(newUser.Pass, Number(process.env.HASH_ROUNDS), (err, hash) => {
            if (err) {
                console.log('Error hash: ', err)
                callback(400, null)
                return
            }
            const tempUser = {
                ID: newUser.ID,
                FullName: newUser.FullName,
                Sex: newUser.Sex,
                BDate: newUser.BDate,
                Username: newUser.Username,
                Pass: hash
            }
            db.query(query1, tempUser, (err, result) => {
                if (err) {
                    console.error('Error create user: ', err)
                    callback(400, null)
                    return
                }
                console.log(query1, tempUser, '\nSUCCESS!')
                db.query(query2, newUser.ID, (err, result) => {
                    if (err) {
                        console.error('Error add', newUser.role, err)
                        callback(400, null)
                        return
                    }
                    console.log(query2, newUser.ID, '\nSUCCESS!')
                    callback(201, result)
                })
            })
        })
    }

    static delete(id, callback) {
        const query1 = `SELECT * FROM User u WHERE u.ID = ?`
        const query2 = `DELETE FROM User u WHERE u.ID = ?`
        db.query(query1, id, (err, result) => {
            if (err) {
                console.error('Error fetching user ', id, ': ', err)
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
                    console.error('Error delete user ', id, ': ', err)
                    callback(400, null)
                    return
                }
                console.log(query2, id, '\nDelete success!')
                callback(200, null)
                return
            })
        })
    }

    static update(id, newUser, callback) {
        const query1 = `SELECT * FROM User u WHERE u.ID = ?`
        const query2 = `UPDATE User SET ? WHERE ID = ?`

        db.query(query1, id, (err, result) => {
            if (err) {
                console.error('Error fetching user ', id, ': ', err)
                callback(400, null)
                return
            }
            if (result.length === 0) {
                console.log('Not found ID: ', id)
                callback(404, null)
                return
            }
            bcrypt.hash((newUser.Pass ? newUser.Pass : result[0].Pass), Number(process.env.HASH_ROUNDS), (err, hash) => {
                if (err) {
                    console.log('Error hash: ', err)
                    callback(400, null)
                    return
                }
                let tempUser = {
                    ID: newUser.ID ? newUser.ID : result[0].ID,
                    FullName: newUser.FullName ? newUser.FullName : result[0].FullName,
                    Sex: newUser.Sex ? newUser.Sex : result[0].Sex,
                    BDate: newUser.BDate ? newUser.BDate : result[0].BDate,
                    Username: newUser.Username ? newUser.Username : result[0].Username,
                    Pass: hash
                }
                db.query(query2, [tempUser, id], (err, result) => {
                    if (err) {
                        console.error('Error update user ', id, ': ', err)
                        callback(400, null)
                        return
                    }
                    console.log(query2, id, tempUser, '\nUpdate success!')
                    callback(200, result)
                    return
                })
            })
        })
    }

    static getByRole(role, callback) {
        const query = `SELECT * FROM user u where u.ID in (select ID from ${role})`
        db.query(query, role, (err, result) => {
            if (err) {
                console.error('Error fetching role ', role, ': ', err)
                callback(400, null)
                return
            }
            console.log(query, '\nSUCCESS!')
            callback(200, result[0])
        })
    }
}

module.exports = User