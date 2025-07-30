const express = require('express');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
const port = 3000;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

app.get('/', async (req, res) => {
  const result = await pool.query('SELECT NOW()');
  res.send(`PostgreSQL time: ${result.rows[0].now}`);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
