import { DataTypes, Model } from 'sequelize';
import Joi from '@hapi/joi';

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
// eslint-disable-next-line no-useless-escape
const urlRegex = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/i;

export const validateEventModel = event => {
  const model = Joi.object({
    name: Joi.string().max(255).required(),
    linkToEvent: Joi.string().pattern(new RegExp(urlRegex)).required(),
    dateOfEvent: Joi.date().raw().required(),
  }).options({ stripUnknown: true });

  return model.validate(event);
};
