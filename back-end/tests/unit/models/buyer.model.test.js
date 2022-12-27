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
  const buyer = new Buyer();

  describe('Has name "Buyer"', () => {
    checkModelName(Buyer)('Buyer');
  });

  describe('Has all required properties', () => {
    ['id', 'name', 'tradingName', 'cnpjId', 'confirm'].forEach(
      checkPropertyExists(buyer),
    );
  });
});
