import Franchise from './model';
import createFranchise from '../../helpers/create';
import findOneFranchise from '../../helpers/findById';
import removeFranchise from '../../helpers/remove';
import showFranchises from '../../helpers/list';
import updateFranchise from '../../helpers/update';

/**
 * List of Franchises
 * @param {Object} request
 * @param {Object} h
 * @returns {JSON} of Franchise
 */
const list = async (request, h) => {
  return showFranchises({ request, h }, { Model: Franchise });
};

/**
 * Finds one specific Franchise
 * @param {Object} request
 * @param {Object} h
 * @returns {JSON} of a Franchise
 */
const findById = async (request, h) => {
  return await findOneFranchise({ request, h }, Franchise);
};

/**
 * Creates a Franchise
 * @param {Object} request
 * @param {Object} h
 * @returns The saved Franchise
 */
const create = async (request, h) => {
  return await createFranchise({ request, h }, Franchise);
};

/**
 * Updates a Franchise
 * @param {Object} request
 * @param {Object} h
 * @returns The Franchise updated
 */
const update = async (request, h) => {
  return await updateFranchise({ request, h }, Franchise);
};

/**
 * Removes a specific Franchise
 * @param {Object} request
 * @param {Object} h
 * @returns status of NO_CONTENT.
 */
const remove = async (request, h) => {
  return await removeFranchise({ request, h }, Franchise);
};

export { list, findById, create, update, remove };
