const userRoute = require('./userRoute')

const route = (app) => {
    app.use('/user', userRoute)
}

module.exports = route