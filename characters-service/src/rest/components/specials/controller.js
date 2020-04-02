import Special from './model';
import {
  OK,
  INTERNAL_SERVER_ERROR,
  CREATED,
} from '../../../config/statusCodes';
import wrapper from '../../utils/async';
import showSpecials from '../../utils/list';
import createSpecial from '../../utils/create';
import removeSpecial from '../../utils/remove';

/**
 * List of Specials
 * @param {Object} request
 * @param {Object} h
 * @returns {JSON} of Specials
 */
const list = async (request, h) => {
  return showSpecials({ request, h }, Special);
};

/**
 * Finds one specific Special
 * @param {Object} request
 * @param {Object} h
 * @returns {JSON} of a Special
 */
const findById = async (request, h) => {
  const [error, special] = await wrapper(
    Special.findById({ _id: request.params.id }),
  );

  return error
    ? h.response({ error }).code(INTERNAL_SERVER_ERROR)
    : h.response({ special }).code(OK);
};

/**
 * Creates a Special
 * @param {Object} request
 * @param {Object} h
 * @returns The saved Special
 */
const create = async (request, h) => {
  return await createSpecial({ request, h }, Special);
};

/**
 * Updates a Special
 * @param {Object} request
 * @param {Object} h
 * @returns The Special updated
 */
const update = async (request, h) => {
  const [error, updatedSpecial] = await wrapper(
    Special.findByIdAndUpdate(
      { _id: request.params.id },
      { $set: request.payload },
      { new: true },
    ),
  );

  return error
    ? h
        .response({
          msg: 'Error updating Special',
          error,
        })
        .code(INTERNAL_SERVER_ERROR)
    : h.response(updatedSpecial).code(CREATED);
};

/**
 * Removes a specific Special
 * @param {Object} request
 * @param {Object} h
 * @returns status of NO_CONTENT.
 */
const remove = async (request, h) => {
  return await removeSpecial({ request, h }, Special);
};

export { list, findById, create, update, remove };
