const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../swagger-output.json');

const orderRoutes = require('./routes/order.routes');
const middlewares = require('./middlewares/notFound.middleware');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (_req, res) => {
  res.send('Bem vindo(a) à Cashforce API!');
});

app.use('/orders', orderRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use('/*', middlewares.notFound);

module.exports = app;
