const userRoute = require('./userRoute')
const customerRoute = require('./customerRoute')
const productRoute = require('./productRoute')
const loginRoute = require('./loginRoute')
const verifySession = require('../middleware/verifySession')

const route = (app) => {
    app.use('/auth', loginRoute)
    app.use(verifySession)
    app.use('/user', userRoute)
    app.use('/customer', customerRoute)
    app.use('/product', productRoute)
}

module.exports = route