const express = require("express");
const cors = require("cors");

// Routes
const usersRouter = require('./routes/users.routes');
const paymentsRouter = require('./routes/payments.routes');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use('/users', usersRouter);
app.use('/payments', paymentsRouter);

app.listen(PORT, () => {
  console.log(`Servidor online na porta ${PORT}`);
});

module.exports = app;
