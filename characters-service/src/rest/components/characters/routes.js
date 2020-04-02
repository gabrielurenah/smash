import { list, findById, create, update, remove } from './controller';
import { URL_CHARACTERS } from '../../../config/urls';

export const charactersRoutes = [
  {
    method: 'GET',
    path: `${URL_CHARACTERS}/`,
    handler: list,
  },
  {
    method: 'GET',
    path: `${URL_CHARACTERS}/{id}`,
    handler: findById,
  },
  {
    method: 'POST',
    path: `${URL_CHARACTERS}/`,
    handler: create,
  },
  {
    method: 'PUT',
    path: `${URL_CHARACTERS}/{id}`,
    handler: update,
  },
  {
    method: 'DELETE',
    path: `${URL_CHARACTERS}/{id}`,
    handler: remove,
  },
];
