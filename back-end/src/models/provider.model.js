const ProviderModel = (sequelize, DataTypes) => {
  const Provider = sequelize.define(
    'Provider',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      tradingName: DataTypes.STRING,
      cnpjId: DataTypes.INTEGER,
    },
    {
      timestamps: false,
      tableName: 'providers',
    },
  );

  Provider.associate = (models) => {
    Provider.hasOne(models.Order, { foreignKey: 'providerId', as: 'order' });
  };

  return Provider;
};

module.exports = ProviderModel;
