import { DataTypes, Model } from 'sequelize';
import Joi from '@hapi/joi';

import sequelize from '#root/db/connection';

export class Player extends Model {}

Player.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.UUID,
    },
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

export const validatePlayerModel = (player) => {
  const model = Joi.object({
    fullName: Joi.string().max(255).required(),
    playerTag: Joi.string().max(255).required(),
  }).options({ stripUnknown: true });

  return model.validate(player);
};
