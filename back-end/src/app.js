const express = require('express');
const cors = require('cors');

const orderRoutes = require('./routes/order.routes');
const middlewares = require('./middlewares/notFound.middleware');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/orders', orderRoutes);

app.use('/*', middlewares.notFound);

module.exports = app;
