import { DataTypes, Model } from 'sequelize';

import sequelize from '#root/db/connection';

export class Sponsor extends Model {}

Sponsor.init(
  {
    name: {
      allowNull: false,
      unique: false,
      type: DataTypes.STRING,
    },
  },
  {
    modelName: 'sponsors',
    sequelize,
  },
);
