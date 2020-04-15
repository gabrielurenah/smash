import { URL_PLAYERS, URL_SPONSORS } from '#root/config/urls';
import playerRoutes from './player';
import sponsorsRoutes from './sponsor';

const setupRoutes = app => {
  app.use(URL_PLAYERS, playerRoutes);
  app.use(URL_SPONSORS, sponsorsRoutes);
};

export default setupRoutes;
