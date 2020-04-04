import { DataTypes, Model } from 'sequelize';

import sequelize from '#root/db/connection';

export class Player extends Model {}

Player.init(
  {
    fullName: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    playerTag: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  },
  {
    modelName: 'players',
    sequelize,
  },
);
