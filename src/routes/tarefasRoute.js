const express = require('express')
const router = express.Router()
const controller = require('../controller/tarefasController')

router.get('/', controller.get)
router.get('/concluidas', controller.getConcluidos)
router.get('/buscar/:colaborador', controller.getByColaborador)
router.get('/dataInclusao', controller.getByDataInclusao)
router.get('/:id', controller.getById)


module.exports = router