import wrapper from '../utils/async';
import { INTERNAL_SERVER_ERROR, NO_CONTENT } from '../../config/statusCodes';

export default async function ({ request, h }, Model) {
  //make model name singular
  const name = Model.collection.name.slice(0, -1);

  const [error, _] = await wrapper(
    Model.findByIdAndRemove({
      _id: request.params.id,
    }),
  );

  return error
    ? h
        .response({ msg: `Error deleting the ${name}`, error })
        .code(INTERNAL_SERVER_ERROR)
    : h.response().code(NO_CONTENT);
}
