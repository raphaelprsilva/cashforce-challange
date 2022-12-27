const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} = require('sequelize-test-helpers');
const chai = require('chai');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);

const { expect } = chai;

const OrderModel = require('../../../src/models/order.model');

describe('OrderModel tests ', () => {
  const Order = OrderModel(sequelize, dataTypes);
  const order = new Order();

  describe('Has name "Order"', () => {
    checkModelName(Order)('Order');
  });

  describe('Has all required properties', () => {
    [
      'orderNfId',
      'emissionDate',
      'value',
      'orderStatusBuyer',
      'orderNumber',
      'buyerId',
      'providerId',
    ].forEach(checkPropertyExists(order));
  });
});
