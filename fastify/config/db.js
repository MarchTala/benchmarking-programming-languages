const mysql = require('mysql2/promise');
const config = require('./constant.json');

const pool = mysql.createPool({
   "host": config.DB_HOST,
   "user": config.DB_USER,
   "password": config.DB_PASS,
   "port": config.DB_PORT,
   "database": config.DB_DATABASE
});

// Export an async function to establish the database connection
module.exports.connect = async () => {
   try {
      // Get a connection from the pool
      const connection = await pool.getConnection();
      console.log("Connected to db...");

      // Release the connection back to the pool
      connection.release();
   } catch (error) {
      console.log("Error connecting to db:", error);
      process.exit(1);
   }
};

const executeQuery = async (query, params) => {
   try {
      const [rows, fields] = await pool.query(query, params);
      return rows;
   } catch (error) {
      console.log("Error executing query:", error);
      throw error;
   }
};

module.exports.executeQuery = executeQuery;