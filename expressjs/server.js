const express = require('express');
const mysql = require('mysql2/promise');
const config = require('./config/constant.json');

const app = express();

const pool = mysql.createPool({
   host: config.DB_HOST,
   user: config.DB_USER,
   password: config.DB_PASS,
   port: config.DB_PORT,
   database: config.DB_DATABASE
});

app.get('/users', async (req, res) => {
   try {
      const query = 'SELECT Id, BatchNumber, TransactionDate, LotNumber FROM tbl_user_reports LIMIT 100000';
      const [rows] = await pool.query(query);
      const total = rows.length;

      const response = {
         message: "Running from ExpressJS",
         total: total,
         data: rows
      };

      res.send(response);
   } catch (error) {
      console.error('Error executing query:', error);
      res.status(500).send(error.message);
   }
});

const PORT = 3000;
app.listen(PORT, () => {
   console.log(`Server listening on port ${PORT}`);
});
