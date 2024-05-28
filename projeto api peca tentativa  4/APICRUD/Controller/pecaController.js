const pecaService = require('../../Services/pecaService'); 

const listarTodos = async (req, res) => {
  try {
    const pecas = await pecaService.listarTodos();
    res.json(pecas);
  } catch (error) {
    res.status(500).send('Erro ao listar peças.');
  }
};

const obterPorId = async (req, res) => {
  try {
    const peca = await pecaService.obterPorId(req.params.id);
    if (peca) {
      res.json(peca);
    } else {
      res.status(404).send('Peça não encontrada.');
    }
  } catch (error) {
    res.status(500).send('Erro ao obter peça.');
  }
};

const criar = async (req, res) => {
  try {
    const novaPeca = await pecaService.criar(req.body);
    res.status(201).json(novaPeca);
  } catch (error) {
    res.status(500).send('Erro ao criar peça.');
  }
};

const atualizar = async (req, res) => {
  try {
    const resultado = await pecaService.atualizar(req.params.id, req.body);
    if (resultado.affectedRows > 0) {
      res.send('Peça atualizada com sucesso.');
    } else {
      res.status(404).send('Peça não encontrada.');
    }
  } catch (error) {
    res.status(500).send('Erro ao atualizar peça.');
  }
};

const deletar = async (req, res) => {
  try {
    const resultado = await pecaService.deletar(req.params.id);
    if (resultado.affectedRows > 0) {
      res.send('Peça deletada com sucesso.');
    } else {
      res.status(404).send('Peça não encontrada.');
    }
  } catch (error) {
    res.status(500).send('Erro ao deletar peça.');
  }
};

const buscarPorNome = async (req, res) => {
  try {
    const pecas = await pecaService.buscarPorNome(req.params.nome);
    res.json(pecas);
  } catch (error) {
    res.status(500).send('Erro ao buscar peças por nome.');
  }
};

module.exports = {
  listarTodos,
  obterPorId,
  criar,
  atualizar,
  deletar,
  buscarPorNome,
};
