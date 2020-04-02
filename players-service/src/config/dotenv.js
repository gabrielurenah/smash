import dotenv from 'dotenv';

dotenv.config();

const DB_URI = process.env.DB_URI;
const PORT = process.env.PORT || 7101;

export { DB_URI, PORT };
