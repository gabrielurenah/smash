import got from 'got';

const PLAYERS_SERVICE_URI = 'http://players-service:7101';

export default class PlayersService {
  static async fetchAllPlayers() {
    const body = await got.get(`${PLAYERS_SERVICE_URI}/api/players`).json();
    return body;
  }
}
