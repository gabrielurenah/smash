import wrapper from '../utils/async';
import { INTERNAL_SERVER_ERROR, OK } from '../../config/statusCodes';

export default async function ({ request, h }, attributes) {
  const { Model, populate } = attributes;
  const { name } = Model.collection;
  let params = request.query;

  //map query params to find all documents that follow a regex
  Object.keys(params).map(
    key =>
      (params = { ...params, [key]: { $regex: params[key], $options: 'i' } }),
  );

  const [err, data] = await wrapper(
    Model.find(params || {}).populate(populate || ''),
  );

  return err
    ? h.response({ err }).code(INTERNAL_SERVER_ERROR)
    : h.response({ [name]: data }).code(OK);
}
