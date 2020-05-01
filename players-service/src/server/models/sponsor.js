import { DataTypes, Model } from 'sequelize';
import Joi from '@hapi/joi';

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

export const validateSponsorModel = sponsor => {
  const model = Joi.object({
    name: Joi.string().max(255).required(),
  }).options({ stripUnknown: true });

  return model.validate(sponsor);
};
