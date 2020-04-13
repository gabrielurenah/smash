import wrapper from '../../src/server/utils/async';

const promise1 = new Promise((resolve, reject) => resolve('Success!🎉'));
const promise2 = new Promise((resolve, reject) =>
  reject("There's an error!👎"),
);

describe('checking wrapper func', () => {
  it('if resolved should return an array with null and data', async done => {
    const [err, data] = await wrapper(promise1);
    expect(err).toBeNull();
    expect(data).toEqual('Success!🎉');

    done();
  });

  it('if rejected should return an error', async done => {
    const [err] = await wrapper(promise2);
    expect(err).toEqual("There's an error!👎");

    done();
  });
});
