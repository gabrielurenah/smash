import mongoose from 'mongoose';
import Joi from '@hapi/joi';

const Special = mongoose.Schema({
  neutral: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 255,
  },
  side: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 255,
  },
  up: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 255,
  },
  down: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 255,
  },
});

export const validateSpecials = specials => {
  const schema = Joi.object({
    neutral: Joi.string().min(1).max(255).required(),
    side: Joi.string().min(1).max(255).required(),
    up: Joi.string().min(1).max(255).required(),
    down: Joi.string().min(1).max(255).required(),
  }).options({ stripUnknown: true });

  return schema.validate(specials);
};

export default mongoose.model('Special', Special);
