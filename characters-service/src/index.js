import Hapi from '@hapi/hapi';
import { PORT } from './config/dotenv';
import connectToDB from './services/mongo';

connectToDB();

const server = Hapi.server({
  port: PORT,
  host: '0.0.0.0',
});

server.route({
  method: 'GET',
  path: '/',
  handler: () => 'Hello World!',
});

exports.start = async () => {
  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
  return server;
};

exports.init = async () => {
  await server.initialize();
  return server;
};

process.on('unhandledRejection', err => {
  console.log(err);
  process.exit(1);
});
