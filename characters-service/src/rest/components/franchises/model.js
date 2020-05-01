import mongoose from 'mongoose';
import Joi from '@hapi/joi';

const Franchise = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 255,
  },
});

export const validateFranchise = franchise => {
  const schema = Joi.object({
    name: Joi.string().min(4).max(255).required(),
  }).options({ stripUnknown: true });

  return schema.validate(franchise);
};

export default mongoose.model('Franchise', Franchise);
