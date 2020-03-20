import dotenv from 'dotenv';

dotenv.config();

const DB_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/db';
const PORT = process.env.PORT || 7100;

export { DB_URI, PORT };
