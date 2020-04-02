import { URL_PLAYERS } from '#root/config/urls';
import players from '#root/server/routes/player';

const setupRoutes = app => {
  app.use(URL_PLAYERS, players);
};

export default setupRoutes;
