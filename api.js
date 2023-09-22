const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 3000;

// Configuração do pool de conexões para o PostgreSQL
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'LANCHONETEDB',
  password: 'adm1030#$',
  port: 5432,
});

// Configuração do express para lidar com JSON
app.use(express.json());

// Rota para resgatar os dados da tabela com base no código
app.get('/getProduct/:codigo', (req, res) => {
  const codigo = req.params.codigo;

  // Consulta SQL para buscar o produto pelo código
  const query = {
    text: 'SELECT * FROM caixa_lanchonete WHERE codigo = $1',
    values: [codigo],
  };

  // Executa a consulta
  pool.query(query)
    .then(result => {
      if (result.rows.length > 0) {
        // Envia os dados do produto em formato JSON
        res.json(result.rows[0]);
      } else {
        res.status(404).json({ message: 'Produto não encontrado' });
      }
    })
    .catch(error => {
      res.status(500).json({ error: error.message });
    });
});

// Rota para servir a página HTML
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
