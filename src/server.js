const express = require('express')
const database = require('./database/sqlite')

const routes = require('./routes')

const app = express()
app.use(express.json())

app.use(routes)

database()

const PORT = 3333

app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`)
});