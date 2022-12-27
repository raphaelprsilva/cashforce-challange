const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} = require('sequelize-test-helpers');
const chai = require('chai');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);

const BuyerModel = require('../../../src/models/buyer.model');

describe('BuyerModel tests ', () => {
  const Buyer = BuyerModel(sequelize, dataTypes);

  describe('Has name "Buyer"', () => {
    checkModelName(Buyer)('Buyer');
  });
});
