const fastify = require('fastify')();
const { executeQuery } = require('./config/db');

fastify.get('/users', async (req, reply) => {
   try {
      const query = 'SELECT Id, BatchNumber, TransactionDate, LotNumber FROM tbl_user_reports LIMIT 100000';
      const result = await executeQuery(query);
      const total = result.length;

      const response = {
         message: "Running from Fastify",
         total: total,
         data: result
      };

      reply.send(response);
   } catch (error) {
      // Handle errors
      reply.status(500).send(error.message);
   }
});


fastify.get('/users/:id', async (req, reply) => {
   try {
      const userId = req.params.id;
      const query = 'SELECT id, user_name FROM tbl_users WHERE id = ?';
      const params = [userId];

      // Execute the SQL query using executeQuery function
      const result = await executeQuery(query, params);
      reply.send(result);
   } catch (error) {
      // Handle errors
      reply.status(500).send(error.message);
   }
});

fastify.listen({ port: 3001 }, (err) => {
   if (err) throw err;
   console.log(`Server listening on ${fastify.server.address().port}`);
});

// Run: nodemon server.js