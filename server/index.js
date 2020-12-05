require('./helpers/mysql')
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const port = 1000
const app = express()

app.use(express.json())
app.use(cors())

app.use('/auth', require('./routes/auth'))
app.use('/vacations', require('./routes/vacations'))
app.use('/followers', require('./routes/followers'))


app.listen(port, () => console.log(`Server ${port} is live`))