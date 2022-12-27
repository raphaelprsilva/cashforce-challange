const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} = require('sequelize-test-helpers');
const chai = require('chai');
const sinonChai = require('sinon-chai');

const { expect } = chai;

chai.use(sinonChai);

const ProvierModel = require('../../../src/models/provider.model');

describe('ProvierModel tests ', () => {
  const Provider = ProvierModel(sequelize, dataTypes);
  const provider = new Provider();

  describe('Has name "Provider"', () => {
    checkModelName(Provider)('Provider');
  });

  describe('Has all required properties', () => {
    ['id', 'name', 'tradingName', 'cnpjId'].forEach(
      checkPropertyExists(provider),
    );
  });

  describe('Has associations', () => {
    const Order = 'Order';

    before(() => {
      Provider.associate({ Order });
    });

    it('defined a hasOne association with Order', () => {
      expect(Provider.hasOne).to.have.been.calledWith(Order);
    });
  });
});
