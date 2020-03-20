module.exports.up = (queryInterface, DataTypes) => {
  return queryInterface.createTable(
    'players',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      fullName: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      playerTag: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      deletedAt: {
        allowNull: true,
        type: DataTypes.DATE,
      },
    },
    {
      charset: 'utf8',
    },
  );
};

module.exports.down = queryInterface => queryInterface.dropTable('players');
