import wrapper from './async';
import { INTERNAL_SERVER_ERROR, OK } from '../../config/statusCodes';

export default async function({ h }, Model) {
  const { name } = Model.collection;
  const [err, data] = await wrapper(Model.find());

  return err
    ? h.response({ err }).code(INTERNAL_SERVER_ERROR)
    : h.response({ [name]: data }).code(OK);
}
