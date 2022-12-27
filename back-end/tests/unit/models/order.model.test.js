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

  describe('Has associations', () => {
    const Buyer = 'Buyer';
    const Provider = 'Provider';

    before(() => {
      Order.associate({ Buyer });
      Order.associate({ Provider });
    });

    it('defined a belongsTo association with Buyer', () => {
      expect(Order.belongsTo).to.have.been.calledWith(Buyer);
    });

    it('defined a belongsTo association with Provider', () => {
      expect(Order.belongsTo).to.have.been.calledWith(Provider);
    });
  });
});
