const express = require('express');
const router = express.Router();
const pecaController = require('../Controller/pecaController');

router.get('/', pecaController.listarTodos);
router.get('/:id', pecaController.obterPorId);
router.post('/', pecaController.criar);
router.put('/:id', pecaController.atualizar);
router.delete('/:id', pecaController.deletar);
router.get('/buscar/:nome', pecaController.buscarPorNome);

module.exports = router;
