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
  source: {
    type: String,
    required: true,
    enum: ['SSB64', 'SSBM', 'SSBB', 'SSB4', 'SSBU'],
  },
});

export default mongoose.model('Character', Character);
