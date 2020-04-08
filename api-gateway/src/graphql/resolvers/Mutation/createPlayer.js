import PlayersService from '#root/adapters/PlayersService';

const createPlayerResolver = async (obj, { fullName, playerTag }) => {
  return await PlayersService.createPlayer({ fullName, playerTag });
};

export default createPlayerResolver;
