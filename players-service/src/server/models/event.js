import { DataTypes, Model } from 'sequelize';

import sequelize from '#root/db/connection';

export class Event extends Model {}

Event.init(
  {
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    dateOfEvent: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    linkToEvent: {
      allowNull: true,
      type: DataTypes.STRING,
    },
  },
  {
    modelName: 'events',
    sequelize,
  },
);
