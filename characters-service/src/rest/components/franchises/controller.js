import Franchise from './model';
import {
  OK,
  INTERNAL_SERVER_ERROR,
  CREATED,
  NO_CONTENT,
} from '../../../config/statusCodes';
import wrapper from '../../utils/async';
import showFranchises from '../../utils/list';

/**
 * List of Franchises
 * @param {Object} request
 * @param {Object} h
 * @returns {JSON} of Franchise
 */
const list = async (request, h) => {
  return showFranchises({ request, h }, Franchise);
};

/**
 * Finds one specific Franchise
 * @param {Object} request
 * @param {Object} h
 * @returns {JSON} of a Franchise
 */
const findById = async (request, h) => {
  const [error, franchise] = await wrapper(
    Franchise.findById({ _id: request.params.id }),
  );

  return error
    ? h.response({ error }).code(INTERNAL_SERVER_ERROR)
    : h.response({ franchise }).code(OK);
};

/**
 * Creates a Franchise
 * @param {Object} request
 * @param {Object} h
 * @returns The saved Franchise
 */
const create = async (request, h) => {
  const franchise = new Franchise(request.payload);
  const [error, savedFranchise] = await wrapper(franchise.save());

  return error
    ? h
        .response({ msg: 'Error creating the Franchise', error })
        .code(INTERNAL_SERVER_ERROR)
    : h.response(savedFranchise).code(CREATED);
};

/**
 * Updates a Franchise
 * @param {Object} request
 * @param {Object} h
 * @returns The Franchise updated
 */
const update = async (request, h) => {
  const [error, updatedFranchise] = await wrapper(
    Franchise.findByIdAndUpdate(
      { _id: request.params.id },
      { $set: request.payload },
      { new: true },
    ),
  );

  return error
    ? h
        .response({
          msg: 'Error updating franchise',
          error,
        })
        .code(INTERNAL_SERVER_ERROR)
    : h.response(updatedFranchise).code(CREATED);
};

/**
 * Removes a specific Franchise
 * @param {Object} request
 * @param {Object} h
 * @returns status of NO_CONTENT.
 */
const remove = async (request, h) => {
  const [error, _] = await wrapper(
    Franchise.findByIdAndRemove({
      _id: request.params.id,
    }),
  );

  return error
    ? h
        .response({ msg: 'Error deleting franchise', error })
        .code(INTERNAL_SERVER_ERROR)
    : h.response().code(NO_CONTENT);
};

export { list, findById, create, update, remove };
