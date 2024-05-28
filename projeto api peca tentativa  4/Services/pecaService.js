const pecaModel = require('../../projeto api peca tentativa  4/APICRUD/Models/pecasModel');

const listarTodos = () => {
  return pecaModel.listarTodos();
};

const obterPorId = (id_peca) => {
  return pecaModel.obterPorId(id_peca);
};

const criar = (peca) => {
  return pecaModel.criar(peca);
};

const atualizar = (id_peca, peca) => {
  return pecaModel.atualizar(id_peca, peca);
};

const deletar = (id_peca) => {
  return pecaModel.deletar(id_peca);
};

const buscarPorNome = (nome_peca) => {
  return pecaModel.buscarPorNome(nome_peca);
};

module.exports = {
  listarTodos,
  obterPorId,
  criar,
  atualizar,
  deletar,
  buscarPorNome,
};
