import Hapi from '@hapi/hapi';

import './services/mongoosePlugins';
import './services/mongooseObjectValidation';
import { PORT } from './config/dotenv';
import connectToDB from './services/connection';
import {
  charactersRoutes,
  franchisesRoutes,
  specialsRoutes,
} from './config/routes';

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
server.route(franchisesRoutes);
server.route(specialsRoutes);

const init = async () => {
  await server.start();
  console.log('character service is  🏃‍♂️💨 on', server.info.uri);
};

process.on('unhandledRejection', err => {
  console.log(err);
  process.exit(1);
});

init();

export default server;
