import { OK, INTERNAL_SERVER_ERROR } from '../../config/statusCodes';
import Character from './model';
import wrapper from '../utils/async';

/**
 * List of Characters
 * @param {Object} request
 * @param {Object} h
 * @returns {JSON} of Characters
 */
const list = async (request, h) => {
  const [err, characters] = await wrapper(Character.find());
  return err
    ? h.response({ err }).code(INTERNAL_SERVER_ERROR)
    : h.response({ characters }).code(OK);
};

export { list };
