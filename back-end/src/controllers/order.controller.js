const OrderService = require('../services/order.service');

const getAll = async (_req, res) => {
  try {
    const orders = await OrderService.getAll();
    res.status(200).json(orders);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

module.exports = {
  getAll,
};
