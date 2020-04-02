import mongoose from 'mongoose';

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

export default mongoose.model('Special', Special);
