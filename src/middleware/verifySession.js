const verifySession = (req, res, next) => {
    if (!req.session.user) {
        console.log('Authorization verification failed')
        res.status(401).json({
            result: 'Fail',
            message: 'Unauthorized',
        })
    } else {
        console.log('Authorization verification successful')
        next()
    }
}

module.exports = verifySession