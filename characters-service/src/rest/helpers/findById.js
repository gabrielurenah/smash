import wrapper from '../utils/async';
import { INTERNAL_SERVER_ERROR, OK } from '../../config/statusCodes';

export default async function ({ request, h }, Model) {
  //make model name singular
  const name = Model.collection.name.slice(0, -1);

  const [error, data] = await wrapper(
    Model.findById({ _id: request.params.id }),
  );

  return error
    ? h.response({ error }).code(INTERNAL_SERVER_ERROR)
    : h.response({ [name]: data }).code(OK);
}
