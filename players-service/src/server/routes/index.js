import { URL_PLAYERS, URL_SPONSORS, URL_EVENTS } from '#root/config/urls';
import playerRoutes from './player';
import sponsorsRoutes from './sponsor';
import eventsRoutes from './event';

const setupRoutes = (app) => {
  app.use(URL_PLAYERS, playerRoutes);
  app.use(URL_SPONSORS, sponsorsRoutes);
  app.use(URL_EVENTS, eventsRoutes);
};

export default setupRoutes;
