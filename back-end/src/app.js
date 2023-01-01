const express = require('express');
const cors = require('cors');

const orderRoutes = require('./routes/order.routes');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/orders', orderRoutes);

module.exports = app;
