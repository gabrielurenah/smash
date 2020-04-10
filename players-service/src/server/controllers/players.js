import { Player, validatePlayerModel } from '#root/server/models/player';
import {
  OK,
  CREATED,
  INTERNAL_SERVER_ERROR,
  NO_CONTENT,
  BAD_REQUEST,
} from '#root/config/statusCodes';
import wrapper from '../utils/async';
import generateUUID from '../helpers/generateUUID';
import validateData from '../helpers/validateData';

const show = async (req, res) => {
  const [error, players] = await wrapper(Player.findAll());

  return error
    ? res.status(INTERNAL_SERVER_ERROR).send(error.message)
    : res.status(OK).json(players);
};

const create = async (req, res) => {
  const [err, value] = await validateData(req.body, validatePlayerModel);

  if (err) {
    return res.status(err.status).send(err.message);
  }

  const [error, player] = await wrapper(
    Player.create({ ...value, id: generateUUID() }),
  );

  return error
    ? res.status(INTERNAL_SERVER_ERROR).send(error.message)
    : res.status(CREATED).json(player);
};

const update = async (req, res) => {
  const { id } = req.params;
  try {
    const [updated] = await Player.update(req.body, {
      where: { id },
    });

    if (updated) {
      const updatedPlayer = await Player.findOne({ where: { id } });
      return res.status(OK).send(updatedPlayer);
    }

    return res.status(BAD_REQUEST).send('Player not found');
  } catch (error) {
    return res.status(INTERNAL_SERVER_ERROR).send(error.message);
  }
};

const findById = async (req, res) => {
  const [error, player] = await wrapper(
    Player.findOne({
      where: { id: req.params.id },
    }),
  );

  return error
    ? res.status(INTERNAL_SERVER_ERROR).send(error)
    : res.status(OK).json(player);
};

const remove = async (req, res) => {
  const [error, deleted] = await wrapper(
    Player.destroy({
      where: { id: req.params.id },
    }),
  );

  if (error) {
    return res.status(INTERNAL_SERVER_ERROR).send(error.message);
  }

  return deleted
    ? res.status(NO_CONTENT).send('')
    : res.status(BAD_REQUEST).send('Player not found');
};

export { show, create, findById, remove, update };
