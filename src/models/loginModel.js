const db = require('../config/db.js')
const bcrypt = require('bcrypt')

class Login {
    static login(req, callback) {
        const query = 'SELECT * FROM User WHERE Username = ?'
        db.query(query, req.body.Username, (err, result) => {
            if (err) {
                console.error('Error fetching username: ', err)
                callback(400, 'Error fetching username')
                return
            }
            if (result.length === 0) {
                console.log('Username doesn\'t exist', req.body)
                callback(401, 'Username doesn\'t exist')
                return
            }
            bcrypt.compare(req.body.Pass, result[0].Pass, (error, result) => {
                if (error) {
                    console.log('Error compare pass: ', error)
                    callback(400, 'Error compare pass')
                    return
                }
                if (!result) {
                    console.log('Password is not correct', req.body)
                    callback(401, 'Password is not correct')
                    return
                }
                req.session.user = {
                    username: req.body.Username
                };
                console.log('Login success', req.body)
                callback(200, 'Login success')
            })
        })
    }
}

module.exports = Login