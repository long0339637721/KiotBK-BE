const express = require('express')
const userRoutes = require('./src/routes/userRoute')
const route = require('./src/routes/route')

const app = express()
const port = 5000

app.use(express.json())

app.get('/', (req, res) => {
    res.json({ 'message': 'ok' });
})

route(app)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})