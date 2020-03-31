const express = require('express')
const controller = require('./controller')

const app = express()
const PORT = 4000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Welcome my friend to port 4000')
})

app.get('/api/users', controller.getAllUsers)
app.get('/api/users/:id', controller.getOneUser)
app.post('/api/users', controller.createUser)

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
