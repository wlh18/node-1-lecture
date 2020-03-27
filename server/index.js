const express = require('express')

const controller = require('./controller')
const app = express()
const port = 4000

app.get('/api/users', controller.getUsers)

app.get('/api/users/:id', controller.getUser)

app.listen(port, () => console.log(`Listening on port ${port}`))
