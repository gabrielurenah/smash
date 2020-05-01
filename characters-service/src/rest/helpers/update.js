import wrapper from '../utils/async';
import { INTERNAL_SERVER_ERROR, CREATED } from '../../config/statusCodes';

export default async function ({ request, h }, Model) {
  //make model name singular
  const name = Model.collection.name.slice(0, -1);

  const [error, updatedFranchise] = await wrapper(
    Model.findByIdAndUpdate(
      { _id: request.params.id },
      { $set: request.payload },
      { new: true },
    ),
  );

  return error
    ? h
        .response({
          msg: `Error updating ${name}`,
          error,
        })
        .code(INTERNAL_SERVER_ERROR)
    : h.response(updatedFranchise).code(CREATED);
}
