const { Router } = require('express')

const usersRouter = require('./user.routes')
const notesRouter = require("./notes.routes");
const tagsRouter = require("./tags.routes");

const router = Router()

router.use('/users', usersRouter)
router.use("/notes", notesRouter);
router.use("/tags/", tagsRouter);

module.exports = router