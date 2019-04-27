const express = require('express')

const routes = express.Router()

const AuthMiddleware = require('./app/middlewares/auth')

const controllers = require('./app/controllers')

routes.post('/users', controllers.UserController.store)
routes.post('/sessions', controllers.SessionController.store)

routes.get('/teste', AuthMiddleware, (req, res) => res.json({ ok: true }))

module.exports = routes
