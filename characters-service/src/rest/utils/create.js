import wrapper from './async';
import { INTERNAL_SERVER_ERROR, CREATED } from '../../config/statusCodes';

export default async function({ request, h }, Model) {
  const data = new Model(request.payload);
  const [error, savedData] = await wrapper(data.save());

  return error
    ? h
        .response({ msg: `Error creating the ${name}`, error })
        .code(INTERNAL_SERVER_ERROR)
    : h.response(savedData).code(CREATED);
}
