const { Router } = require('express')
const users = require('../controllers/users')

const routes = Router()

routes.post('/user', users.create)
routes.get('/user', users.read)
routes.put('/user/:id', users.update)
routes.delete('/user/:id', users.delete)

module.exports = routes