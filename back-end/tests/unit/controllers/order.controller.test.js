const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const OrderService = require('../../../src/services/order.service');
const OrderController = require('../../../src/controllers/order.controller');
const { allOrders } = require('../mocks/order.mock');

describe('Order Controller', () => {
  it('should return status 200 and list of orders', async () => {
    const res = {};
    const req = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(OrderService, 'getAll').resolves([allOrders]);

    await OrderController.getAll(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith([allOrders]);
  });
});
