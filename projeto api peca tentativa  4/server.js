const express = require('express');
const app = express();
const pecaRoutes = require('../projeto api peca tentativa  4/APICRUD/Routes/pecasRoutes');  // Verifique este caminho

app.use(express.json());
app.use('/pecas', pecaRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
