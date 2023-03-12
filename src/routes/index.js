const { Router } = require('express')

const usersRouter = require('./user.routes')
const notesRouter = require("./notes.routes");

const router = Router()

router.use('/users', usersRouter)
router.use("/notes", notesRouter);

module.exports = router