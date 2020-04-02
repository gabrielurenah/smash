import { list, findById, create, update, remove } from './controller';
import { URL_FRANCHISES } from '../../../config/urls';

const franchisesRoutes = [
  {
    method: 'GET',
    path: `${URL_FRANCHISES}/`,
    handler: list,
  },
  {
    method: 'GET',
    path: `${URL_FRANCHISES}/{id}`,
    handler: findById,
  },
  {
    method: 'POST',
    path: `${URL_FRANCHISES}/`,
    handler: create,
  },
  {
    method: 'PUT',
    path: `${URL_FRANCHISES}/{id}`,
    handler: update,
  },
  {
    method: 'DELETE',
    path: `${URL_FRANCHISES}/{id}`,
    handler: remove,
  },
];

export { franchisesRoutes };
