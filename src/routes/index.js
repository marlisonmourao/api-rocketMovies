const { Router } = require('express')

const usersRouter = require('./user.routes')

const router = Router()

router.use('/users', usersRouter)

module.exports = router