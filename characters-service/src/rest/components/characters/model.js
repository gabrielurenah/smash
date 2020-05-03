import mongoose from 'mongoose';
import Joi from '@hapi/joi';

const Character = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 100,
  },
  franchise: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Franchise',
    required: true,
  },
  specialsMoveset: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Special',
    required: true,
  },
  mainImage: {
    type: String,
    required: true,
  },
  stockImage: {
    type: String,
    required: true,
  },
  source: {
    type: String,
    required: true,
    enum: ['SSB64', 'SSBM', 'SSBB', 'SSB4', 'SSBU'],
  },
});

// eslint-disable-next-line no-useless-escape
const urlRegex = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/i;
const objectIdRegex = /^[a-f\d]{24}$/i;

export const validateCharacter = character => {
  const schema = Joi.object({
    name: Joi.string().min(4).max(100).required(),
    franchise: Joi.string().pattern(new RegExp(objectIdRegex)).required(),
    specialsMoveset: Joi.string().pattern(new RegExp(objectIdRegex)).required(),
    mainImage: Joi.string().pattern(new RegExp(urlRegex)).required(),
    stockImage: Joi.string().pattern(new RegExp(urlRegex)).required(),
    source: Joi.string().required(),
  }).options({ stripUnknown: true });

  return schema.validate(character);
};

export default mongoose.model('Character', Character);
