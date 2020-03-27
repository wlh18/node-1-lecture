const users = require('../data.json')

module.exports = {
  getUsers: (req, res) => {
    if (req.query.email) {
      const filteredUsers = users.filter(user =>
        user.email.includes(req.query.email)
      )
      return res.status(200).send(filteredUsers)
    }

    res.status(200).send(users)
  },

  getUser: (req, res) => {
    const user = users.find(user => user.id === +req.params.id)

    if (user) {
      res.status(200).send(user)
    } else {
      res.status(404).send('User not found')
    }
  },
}
