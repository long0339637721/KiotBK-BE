const userRoute = require('./userRoute')
const customerRoute = require('./customerRoute')
const productRoute = require('./productRoute')

const route = (app) => {
    app.use('/user', userRoute)
    app.use('/customer', customerRoute)
    app.use('/product', productRoute)
}

module.exports = route