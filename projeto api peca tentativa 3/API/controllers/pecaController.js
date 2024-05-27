// API/controllers/pecaController.js

const pecaModel = require('../models/pecaModel');

const pecaController = {
  listarTodas: async (req, res) => {
    try {
      const [rows] = await pecaModel.listarTodas();
      res.json(rows);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao buscar peças' });
    }
  },

  obterPorId: async (req, res) => {
    const id_peca = req.params.id;
    try {
      const [rows] = await pecaModel.obterPorId(id_peca);
      if (rows.length === 0) {
        res.status(404).json({ error: 'Peça não encontrada' });
      } else {
        res.json(rows[0]);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao buscar peça' });
    }
  },

  criar: async (req, res) => {
    const { nome_peca, descr_peca } = req.body;
    try {
      const [result] = await pecaModel.criar(nome_peca, descr_peca);
      res.status(201).json({ id_peca: result.insertId, nome_peca, descr_peca });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao criar peça' });
    }
  },

  atualizar: async (req, res) => {
    const id_peca = req.params.id;
    const { nome_peca, descr_peca } = req.body;
    try {
      const [result] = await pecaModel.atualizar(id_peca, nome_peca, descr_peca);
      if (result.affectedRows === 0) {
        res.status(404).json({ error: 'Peça não encontrada' });
      } else {
        res.json({ id_peca, nome_peca, descr_peca });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao atualizar peça' });
    }
  },

  deletar: async (req, res) => {
    const id_peca = req.params.id;
    try {
      const [result] = await pecaModel.deletar(id_peca);
      if (result.affectedRows === 0) {
        res.status(404).json({ error: 'Peça não encontrada' });
      } else {
        res.json({ mensagem: 'Peça deletada com sucesso' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao deletar peça' });
    }
  },

  buscarPorNome: async (req, res) => {
    const nome_peca = req.params.nome;
    try {
      const [rows] = await pecaModel.buscarPorNome(nome_peca);
      res.json(rows);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao buscar peças por nome' });
    }
  }
};

module.exports = pecaController;