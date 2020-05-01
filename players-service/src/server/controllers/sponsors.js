import { Sponsor, validateSponsorModel } from '../models/sponsor';
import {
  OK,
  CREATED,
  INTERNAL_SERVER_ERROR,
  NO_CONTENT,
  BAD_REQUEST,
} from '#root/config/statusCodes';
import wrapper from '../utils/async';
import validateData from '../helpers/validateData';

const show = async (req, res) => {
  const [error, sponsors] = await wrapper(Sponsor.findAll());

  return error
    ? res.status(INTERNAL_SERVER_ERROR).send(error.message)
    : res.status(OK).json(sponsors);
};

const create = async (req, res) => {
  const [err, data] = await validateData(req.body, validateSponsorModel);

  if (err) return res.status(BAD_REQUEST).send(err);

  const [error, sponsor] = await wrapper(Sponsor.create(data));

  return error
    ? res.status(INTERNAL_SERVER_ERROR).send(error.message)
    : res.status(CREATED).json(sponsor);
};

const update = async (req, res) => {
  const { id } = req.params;
  try {
    const [updated] = await Sponsor.update(req.body, {
      where: { id },
    });

    if (updated) {
      const updatedSponsor = await Sponsor.findOne({ where: { id } });
      return res.status(OK).send(updatedSponsor);
    }

    return res.status(BAD_REQUEST).send('Sponsor not found');
  } catch (error) {
    return res.status(INTERNAL_SERVER_ERROR).send(error.message);
  }
};

const findById = async (req, res) => {
  const [error, sponsor] = await wrapper(
    Sponsor.findOne({
      where: { id: req.params.id },
    }),
  );

  return error
    ? res.status(INTERNAL_SERVER_ERROR).send(error)
    : res.status(OK).json(sponsor);
};

const remove = async (req, res) => {
  const [error, deleted] = await wrapper(
    Sponsor.destroy({
      where: { id: req.params.id },
    }),
  );

  if (error) {
    return res.status(INTERNAL_SERVER_ERROR).send(error.message);
  }

  return deleted
    ? res.status(NO_CONTENT).send('')
    : res.status(BAD_REQUEST).send('Sponsor not found');
};

export { show, create, findById, remove, update };
