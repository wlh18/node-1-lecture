const users = require('../data.json')

module.exports = {
  getAllUsers: (req, res) => {
    //Allow for any query present on the user object
    // const filteredUsers = users.filter(user => {
    //   let include = true
    //   for (let key in req.query) {
    //     if (!user[key].includes(req.query[key])) {
    //       include = false
    //     }
    //   }
    //   return include
    // })

    // res.status(200).send(filteredUsers)

    if (req.query.email) {
      const filteredUsers = users.filter(user => {
        return user.email.includes(req.query.email)
      })

      res.status(200).send(filteredUsers)
    } else {
      res.status(200).send(users)
    }
  },

  getOneUser: (req, res) => {
    const user = users.find(element => {
      return element.id === +req.params.id
    })

    if (user) {
      res.status(200).send(user)
    } else {
      res.status(404).send('User not found')
    }
  },
}
