const express = require('express')
const Router = express.Router()

const AuthController = require('./app/controllers/authController')
const ProjectController = require('./app/controllers/projectController')

Router.use('/auth', AuthController)
Router.use('/projects', ProjectController)

module.exports = Router