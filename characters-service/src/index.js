import Hapi from '@hapi/hapi';
import { PORT } from './config/dotenv';
import connectToDB from './services/mongo';
import { charactersRoutes } from './config/routes';

const server = Hapi.server({
  port: PORT,
  host: '0.0.0.0',
});

connectToDB();

server.route({
  method: 'GET',
  path: '/',
  handler: () => 'Hello World!',
});
server.route(charactersRoutes);

const init = async () => {
  await server.start();
};

process.on('unhandledRejection', err => {
  console.log(err);
  process.exit(1);
});

init();

export default server;
