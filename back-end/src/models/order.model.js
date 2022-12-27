const OrderModel = (sequelize, DataTypes) => {
  const Order = sequelize.define(
    'Order',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      orderNfId: DataTypes.INTEGER,
      emissionDate: DataTypes.DATE,
      value: DataTypes.STRING,
      orderStatusBuyer: DataTypes.STRING,
      orderNumber: DataTypes.STRING,
      buyerId: {
        type: DataTypes.INTEGER,
        foreignKey: true,
      },
      providerId: {
        type: DataTypes.INTEGER,
        foreignKey: true,
      },
    },
    {
      timestamps: false,
      tableName: 'orders',
    },
  );

  Order.associate = (models) => {
    Order.belongsTo(models.Buyer, { foreignKey: 'buyerId', as: 'buyer' });
    Order.belongsTo(models.Provider, {
      foreignKey: 'providerId',
      as: 'provider',
    });
  };

  return Order;
};

module.exports = OrderModel;
