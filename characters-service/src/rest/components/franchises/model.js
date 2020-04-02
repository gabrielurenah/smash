import mongoose from 'mongoose';

const Franchise = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 255,
  },
});

export default mongoose.model('Franchise', Franchise);
