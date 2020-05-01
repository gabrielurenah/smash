import Character from './model';
import createCharacter from '../../helpers/create';
import findOneCharacter from '../../helpers/findById';
import removeCharacter from '../../helpers/remove';
import showCharacters from '../../helpers/list';
import updateCharacter from '../../helpers/update';
import { validateCharacter } from './model';

/**
 * List of Characters
 * @param {Object} request
 * @param {Object} h
 * @returns {JSON} of Characters
 */
const list = async (request, h) => {
  return await showCharacters(
    { request, h },
    { Model: Character, populate: 'franchise specialsMoveset' },
  );
};

/**
 * Finds one specific Character
 * @param {Object} request
 * @param {Object} h
 * @returns {JSON} of a Character
 */
const findById = async (request, h) => {
  return await findOneCharacter({ request, h }, Character);
};

/**
 * Creates a Character
 * @param {Object} request
 * @param {Object} h
 * @returns The saved Character
 */
const create = async (request, h) => {
  return await createCharacter({ request, h }, Character, validateCharacter);
};

/**
 * Updates a Character
 * @param {Object} request
 * @param {Object} h
 * @returns The Character updated
 */
const update = async (request, h) => {
  return await updateCharacter({ request, h }, Character);
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
