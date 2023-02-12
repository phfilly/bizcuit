const express = require('express')
const controllers = require("../controllers")
const router = express.Router()

router.post('/save', (req, res, next) => controllers.createTodo(req, res, next))

router.get('/all', (req, res, next) => controllers.getAllTodos(req, res, next))

router.patch('/update/:id', (req, res, next) => controllers.updateTodo(req, res, next))

module.exports = router