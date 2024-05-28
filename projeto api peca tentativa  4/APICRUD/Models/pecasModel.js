const connect = require('../Config/database');

const listarTodos = async () => {
  try {
    const connection = await connect();
    const [rows] = await connection.query('SELECT * FROM pecas');
    return rows;
  } catch (error) {
    console.error('Erro ao listar peças:', error);
    throw error;
  }
};

const obterPorId = async (id_peca) => {
  try {
    const connection = await connect();
    const [rows] = await connection.query(
      'SELECT * FROM pecas WHERE id_peca = ?',
      [id_peca]
    );
    return rows[0];
  } catch (error) {
    console.error('Erro ao obter peça:', error);
    throw error;
  }
};

const criar = async ({ nome_peca, descr_peca }) => {
  try {
    const connection = await connect();
    const [result] = await connection.query(
      'INSERT INTO pecas (nome_peca, descr_peca) VALUES (?, ?)',
      [nome_peca, descr_peca]
    );
    return { id_peca: result.insertId, nome_peca, descr_peca };
  } catch (error) {
    console.error('Erro ao criar peça:', error);
    throw error;
  }
};

const atualizar = async (id_peca, { nome_peca, descr_peca }) => {
  try {
    const connection = await connect();
    const [result] = await connection.query(
      'UPDATE pecas SET nome_peca = ?, descr_peca = ? WHERE id_peca = ?',
      [nome_peca, descr_peca, id_peca]
    );
    return result;
  } catch (error) {
    console.error('Erro ao atualizar peça:', error);
    throw error;
  }
};

const deletar = async (id_peca) => {
  try {
    const connection = await connect();
    const [result] = await connection.query(
      'DELETE FROM pecas WHERE id_peca = ?',
      [id_peca]
    );
    return result;
  } catch (error) {
    console.error('Erro ao deletar peça:', error);
    throw error;
  }
};

const buscarPorNome = async (nome_peca) => {
  try {
    const connection = await connect();
    const [rows] = await connection.query(
      'SELECT * FROM pecas WHERE nome_peca LIKE ?',
      [`%${nome_peca}%`]
    );
    return rows;
  } catch (error) {
    console.error('Erro ao buscar peça por nome:', error);
    throw error;
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
