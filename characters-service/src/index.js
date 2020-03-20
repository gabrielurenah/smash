import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Mongo => connection Succesfull👌');
  })
  .catch(err => {
    console.log('ERROR⚠️', err);
  });

console.log('werking');
