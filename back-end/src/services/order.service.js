const { Order, Buyer, Provider } = require('../models');

const getAll = async () => {
  const orders = await Order.findAll({
    include: [
      {
        model: Buyer,
        as: 'buyer',
      },
      {
        model: Provider,
        as: 'provider',
      },
    ],
  });
  return orders;
};

module.exports = {
  getAll,
};
