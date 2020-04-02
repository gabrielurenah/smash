import mongoose from 'mongoose';

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
});

export default mongoose.model('Character', Character);
