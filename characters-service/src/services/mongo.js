import mongoose from 'mongoose';
import { DB_URI } from '../config/dotenv';

export default function () {
  mongoose
    .connect(DB_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Mongo => connection Succesfull👌');
    })
    .catch((err) => {
      console.log('ERROR⚠️', err);
    });
}
