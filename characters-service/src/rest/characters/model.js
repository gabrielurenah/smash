import mongoose from 'mongoose';

const Character = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 100,
  },
  //TO-DO: change for a reference to Franchise Model
  franchise: {
    type: String,
    minLength: 1,
  },
  //TO-DO: change for a reference to Specials Move Model
  specialsMoveset: [
    {
      type: String,
    },
  ],
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
