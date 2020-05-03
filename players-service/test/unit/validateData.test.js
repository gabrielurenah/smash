import validateData from '#root/server/helpers/validateData';
import { BAD_REQUEST } from '../../src/config/statusCodes';

describe('validate data from request', () => {
  it('should be defined', () => {
    expect(validateData).toBeDefined();
  });
  it('should return an array with null error and value of ok', async () => {
    const myMock = jest.fn(() => ({ value: 'ok', error: null }));

    const [error, value] = await validateData({}, myMock);

    expect(error).toBeNull;
    expect(value).toBe('ok');
  });
  it('should return array with error and value of null', async () => {
    const myMock = jest.fn(() => ({
      value: null,
      error: { details: [{ message: 'something is missing' }] },
    }));

    const [error, value] = await validateData({}, myMock);

    expect(error.status).toBe(BAD_REQUEST);
    expect(value).toBeNull;
  });
});
