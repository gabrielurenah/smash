import Character from './model';
import {
  OK,
  INTERNAL_SERVER_ERROR,
  CREATED,
} from '../../../config/statusCodes';
import wrapper from '../../utils/async';
import showCharacters from '../../helpers/list';
import createCharacter from '../../helpers/create';
import removeCharacter from '../../helpers/remove';

/**
 * List of Characters
 * @param {Object} request
 * @param {Object} h
 * @returns {JSON} of Characters
 */
const list = async (request, h) => {
  return await showCharacters({ request, h }, Character);
};

/**
 * Finds one specific Character
 * @param {Object} request
 * @param {Object} h
 * @returns {JSON} of a Character
 */
const findById = async (request, h) => {
  const [error, characters] = await wrapper(
    Character.findById({ _id: request.params.id }),
  );

  return error
    ? h.response({ error }).code(INTERNAL_SERVER_ERROR)
    : h.response({ characters }).code(OK);
};

/**
 * Creates a Character
 * @param {Object} request
 * @param {Object} h
 * @returns The saved Character
 */
const create = async (request, h) => {
  return await createCharacter({ request, h }, Character);
};

/**
 * Updates a Character
 * @param {Object} request
 * @param {Object} h
 * @returns The Character updated
 */
const update = async (request, h) => {
  const [error, updatedCharacter] = await wrapper(
    Character.findByIdAndUpdate(
      { _id: request.params.id },
      { $set: request.payload },
      { new: true },
    ),
  );

  return error
    ? h
        .response({
          msg: 'Error updating Character',
          error,
        })
        .code(INTERNAL_SERVER_ERROR)
    : h.response(updatedCharacter).code(CREATED);
};

/**
 * Removes a specific Character
 * @param {Object} request
 * @param {Object} h
 * @returns status of NO_CONTENT.
 */
const remove = async (request, h) => {
  return await removeCharacter({ request, h }, Character);
};

export { list, findById, create, update, remove };
