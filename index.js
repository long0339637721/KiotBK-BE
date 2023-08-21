const express = require('express')
const cors = require('cors');
const morgan = require('morgan')
const fs = require('fs');
const path = require('path');
const session = require('express-session');

const route = require('./src/routes/route')

const port = 5000
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const accessLogStream = fs.createWriteStream(path.join('log'), { flags: 'a' })
app.use(morgan('combined', { stream: accessLogStream }))

app.use(
    session({
        secret: 'your_secret_key',
        resave: false,
        saveUninitialized: true,
        cookie: {
            maxAge: 18000000,
            expires: false
        }
    })
)

app.get('/', (req, res) => {
    res.json({ 'Message': 'OK' });
})

route(app)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})