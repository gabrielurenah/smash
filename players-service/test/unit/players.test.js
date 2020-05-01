import validateData from '#root/server/helpers/validateData';

describe('validate data from request', () => {
  it('should be defined', () => {
    expect(validateData).toBeDefined();
  });
});
