import { list, findById, create, update, remove } from './controller';
import { URL_SPECIALS_MOVESETS } from '../../../config/urls';

const specialsRoutes = [
  {
    method: 'GET',
    path: `${URL_SPECIALS_MOVESETS}/`,
    handler: list,
  },
  {
    method: 'GET',
    path: `${URL_SPECIALS_MOVESETS}/{id}`,
    handler: findById,
  },
  {
    method: 'POST',
    path: `${URL_SPECIALS_MOVESETS}/`,
    handler: create,
  },
  {
    method: 'PUT',
    path: `${URL_SPECIALS_MOVESETS}/{id}`,
    handler: update,
  },
  {
    method: 'DELETE',
    path: `${URL_SPECIALS_MOVESETS}/{id}`,
    handler: remove,
  },
];

export { specialsRoutes };
