require('dotenv').config();
require('./libs/connection.js');

const express = require('express');
const cors = require('cors');

// Routes
const usersRouter = require('./routes/users.routes.js');
const paymentsRouter = require('./routes/payments.routes.js');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/users', usersRouter);
app.use('/payments', paymentsRouter);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Servidor online na porta ${PORT}`);
});
