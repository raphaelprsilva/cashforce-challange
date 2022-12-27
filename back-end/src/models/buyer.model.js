const BuyerModel = (sequelize, DataTypes) => {
  const Buyer = sequelize.define(
    'Buyer',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      tradingName: DataTypes.STRING,
      cnpjId: DataTypes.INTEGER,
      confirm: DataTypes.INTEGER,
    },
    {
      timestamps: false,
      tableName: 'buyers',
    },
  );

  Buyer.associate = (models) => {
    Buyer.hasOne(models.Order, { foreignKey: 'buyerId', as: 'order' });
  };

  return Buyer;
};

module.exports = BuyerModel;
