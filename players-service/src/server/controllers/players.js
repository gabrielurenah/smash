import { Player } from '#root/server/models/player';
import { OK, CREATED, INTERNAL_SERVER_ERROR } from '#root/config/statusCodes';
import wrapper from '../utils/async';
import generateUUID from '../helpers/generateUUID';

const show = async (req, res) => {
  const [error, players] = await wrapper(Player.findAll());

  return error
    ? res.status(INTERNAL_SERVER_ERROR).send(error)
    : res.status(OK).json(players);
};

const create = async (req, res) => {
  const [error, player] = await wrapper(
    Player.create({ ...req.body, id: generateUUID() }),
  );

  return error
    ? res.status(INTERNAL_SERVER_ERROR).send(error)
    : res.status(CREATED).json(player);
};

export { show, create };
