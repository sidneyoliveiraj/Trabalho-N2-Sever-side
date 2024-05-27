const mysql = require('mysql2/promise');

//conexão com o banco de dados 
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'peca',
  port: 3306
});

const pecaModel = {
  listarTodas: async () => {
    const [rows] = await pool.query('SELECT * FROM pecas');
    return rows;
  },

  obterPorId: async (id_peca) => {
    const [rows] = await pool.query('SELECT * FROM pecas WHERE id_peca = ?', [id_peca]);
    return rows;
  },

  criar: async (nome_peca, descr_peca) => {
    const [result] = await pool.query('INSERT INTO pecas (nome_peca, descr_peca) VALUES (?, ?)', [nome_peca, descr_peca]);
    return result;
  },

  atualizar: async (id_peca, nome_peca, descr_peca) => {
    const [result] = await pool.query('UPDATE pecas SET nome_peca = ?, descr_peca = ? WHERE id_peca = ?', [nome_peca, descr_peca, id_peca]);
    return result;
  },

  deletar: async (id_peca) => {
    const [result] = await pool.query('DELETE FROM pecas WHERE id_peca = ?', [id_peca]);
    return result;
  },

  buscarPorNome: async (nome_peca) => {
    const [rows] = await pool.query('SELECT * FROM pecas WHERE nome_peca LIKE ?', [`%${nome_peca}%`]);
    return rows;
  }
};

module.exports = pecaModel;
