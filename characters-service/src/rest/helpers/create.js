import wrapper from '../utils/async';
import { INTERNAL_SERVER_ERROR, CREATED } from '../../config/statusCodes';

export default async function({ request, h }, Model, faker) {
  //make model name singular
  const name = Model.collection.name.slice(0, -1);

  const data = new Model(faker || request.payload);

  const [error, savedData] = await wrapper(data.save());

  return error
    ? h
        .response({ msg: `Error creating the ${name}`, error })
        .code(INTERNAL_SERVER_ERROR)
    : h.response(savedData).code(CREATED);
}
