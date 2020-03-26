import { list } from './controller';
import { URL_CHARACTERS } from '../../config/urls';

export const charactersRoutes = [
  {
    method: 'GET',
    path: `${URL_CHARACTERS}/`,
    handler: list,
  },
];
