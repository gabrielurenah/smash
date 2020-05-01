import { Player } from '../../src/server/models/player';
import { show } from '../../src/server/controllers/players';
import { OK } from '../../src/config/statusCodes';

describe('PlayersHandlers', () => {
  describe('show', () => {
    afterEach(() => {
      jest.restoreAllMocks();
    });

    it('should return a list of players', async () => {
      console.log('Playeeerr', Player);
      Player.findAll = jest.fn().mockResolvedValue([{ id: 1 }]);
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockResolvedValue(),
      };
      const result = await show({}, mockRes);

      console.log('REEE', { result });

      expect(mockRes.status).toHaveBeenCalledWith(OK);
      expect(mockRes.json).toHaveBeenCalledWith([{ id: 1 }]);
    });
  });
});
