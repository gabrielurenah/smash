import wrapper from '../utils/async';
import { INTERNAL_SERVER_ERROR, CREATED } from '#root/config/statusCodes';
import validateData from './validateData';

export default async function (
  { request, h },
  Model,
  validationCallback,
  faker,
) {
  //make model name singular
  const name = Model.collection.name.slice(0, -1);

  const [err, value] = validationCallback
    ? await validateData(request.payload, validationCallback)
    : [null, request.payload];

  if (err) return h.response(err.message).code(err.status);

  const data = new Model(faker || value);

  const [error, savedData] = await wrapper(data.save());

  return error
    ? h
        .response({ msg: `Error creating the ${name}`, error })
        .code(INTERNAL_SERVER_ERROR)
    : h.response(savedData).code(CREATED);
}
