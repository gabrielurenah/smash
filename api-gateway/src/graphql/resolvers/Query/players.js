import PlayersService from '#root/adapters/PlayersService';

const playersResolver = async () => {
  return await PlayersService.fetchAllPlayers();
};

export default playersResolver;
