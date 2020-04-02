import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import setupRoutes from './routes';
import { PORT } from '../config/dotenv';

const app = express();

app.use(bodyParser.json());

app.use(
  cors({
    origin: (origin, cb) => cb(null, true),
    credentials: true,
  }),
);

setupRoutes(app);

app.listen(PORT, () =>
  console.log(`Players service is 🏃‍♀️💨 on http://0.0.0.0:${PORT}`),
);
