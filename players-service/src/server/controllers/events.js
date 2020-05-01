import { Event } from '../models/event';
import {
  OK,
  CREATED,
  INTERNAL_SERVER_ERROR,
  NO_CONTENT,
  BAD_REQUEST,
} from '#root/config/statusCodes';
import wrapper from '../utils/async';

const show = async (req, res) => {
  const [error, events] = await wrapper(Event.findAll());

  return error
    ? res.status(INTERNAL_SERVER_ERROR).send(error.message)
    : res.status(OK).json(events);
};

const create = async (req, res) => {
  const [error, event] = await wrapper(Event.create(req.body));

  return error
    ? res.status(INTERNAL_SERVER_ERROR).send(error.message)
    : res.status(CREATED).json(event);
};

const update = async (req, res) => {
  const { id } = req.params;
  try {
    const [updated] = await Event.update(req.body, {
      where: { id },
    });

    if (updated) {
      const updatedEvent = await Event.findOne({ where: { id } });
      return res.status(OK).send(updatedEvent);
    }

    return res.status(BAD_REQUEST).send('Event not found');
  } catch (error) {
    return res.status(INTERNAL_SERVER_ERROR).send(error.message);
  }
};

const findById = async (req, res) => {
  const [error, event] = await wrapper(
    Event.findOne({
      where: { id: req.params.id },
    }),
  );

  return error
    ? res.status(INTERNAL_SERVER_ERROR).send(error)
    : res.status(OK).json(event);
};

const remove = async (req, res) => {
  const [error, deleted] = await wrapper(
    Event.destroy({
      where: { id: req.params.id },
    }),
  );

  if (error) {
    return res.status(INTERNAL_SERVER_ERROR).send(error.message);
  }

  return deleted
    ? res.status(NO_CONTENT).send('')
    : res.status(BAD_REQUEST).send('Event not found');
};

export { show, create, findById, remove, update };
