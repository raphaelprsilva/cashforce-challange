const { expect } = require('chai');
const sinon = require('sinon');
const { Order, Buyer, Provider } = require('../../../src/models');
const OrderService = require('../../../src/services/order.service');
const { allOrders } = require('../mocks/order.mock');

describe('Order Service', () => {
  describe('when getAll is called', () => {
    beforeEach(() => {
      sinon.stub(Order, 'findAll').resolves([allOrders]);
    });

    afterEach(() => {
      sinon.restore();
    });

    it('should return an array', async () => {
      const [orders] = await OrderService.getAll();

      expect(orders).to.be.an('array');
      expect(orders[0].id).to.be.equal(1);
    });

    it('should return an array with 3 orders', async () => {
      const [orders] = await OrderService.getAll();

      expect(orders).to.be.an('array');
      expect(orders.length).to.be.equal(3);
    });

    it('should have all properties', async () => {
      const [orders] = await OrderService.getAll();

      expect(orders[0]).to.have.property('id');
      expect(orders[0]).to.have.property('orderNfId');
      expect(orders[0]).to.have.property('emissionDate');
      expect(orders[0]).to.have.property('value');
      expect(orders[0]).to.have.property('orderStatusBuyer');
      expect(orders[0]).to.have.property('orderNumber');
      expect(orders[0]).to.have.property('buyerId');
      expect(orders[0]).to.have.property('providerId');
      expect(orders[0]).to.have.property('buyer');
      expect(orders[0]).to.have.property('provider');
    });
  });
});
