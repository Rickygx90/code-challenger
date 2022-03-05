const express = require('express')
const cors = require('cors')
const routes = require('./routes/index')
const app = express()

app.use(cors())
app.set('port', 5000)
app.use(routes)

app.listen(app.get('port'))
console.log(`Server on port: ${app.get('port')}`)
