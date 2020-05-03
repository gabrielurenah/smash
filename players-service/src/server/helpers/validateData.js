import { BAD_REQUEST } from '../../config/statusCodes';

/**
 * Validates the body of the request following a Model Schema and also checks
 * if the new entry is unique.
 * @param {Object} body contains the raw body of the request.
 * @param {Function} validate Joi schema to validate agains the request.
 * @return {Array} first value is an error object, the second one is the
 * validated body of the request.
 */
export default async function validateData(body, validate) {
  const { value, error } = validate(body);

  if (error) {
    return [{ status: BAD_REQUEST, message: error.details[0].message }, null];
  }

  return [null, value];
}
