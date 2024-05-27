// API/app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const pecaRoutes = require('./API/routes/pecaRoutes');


const app = express();
const port = 3000;

const mysql = require('mysql2');

// conexão com o banco de dados * (para lucas) descobrir como vamos achar o port
const pool = mysql.createPool({
  host: 'localhost', 
  user: 'root',       
  password: '',      
  database: 'peca',   
  port: 3306         // (de lucas )  Pelo que pesquisei a porta é geralmente 3306
});

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Rotas
app.use('/api', pecaRoutes);

// Iniciar 
app.listen(port, () => {
  console.log(`Tudo certo a API vai estar rodando em http://localhost:${port}/api`);
});
