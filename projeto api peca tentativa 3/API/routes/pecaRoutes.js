// API/routes/pecaRoutes.js

const express = require('express');
const router = express.Router();
const pecaController = require('../controllers/pecaController');

router.get('/pecas', pecaController.listarTodas);
router.get('/pecas/:id', pecaController.obterPorId);
router.post('/pecas', pecaController.criar);
router.put('/pecas/:id', pecaController.atualizar);
router.delete('/pecas/:id', pecaController.deletar);
router.get('/pecas/buscar/:nome', pecaController.buscarPorNome);

module.exports = router;
