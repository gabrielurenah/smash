import { Player } from '#root/server/models/player';

const show = async (req, res, next) => {
  const players = await Player.findAll();

  return res.status(200).json(players);
};

export { show };
