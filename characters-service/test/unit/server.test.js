import mongoose from 'mongoose';

import { init } from '../../src/index';

describe('GET /', () => {
  let server;

  beforeAll(async done => {
    await mongoose.connect('mongodb://localhost:27017/tired-af', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    done();
  });

  beforeEach(async done => {
    server = await init();
    done();
  });

  afterEach(async done => {
    await server.stop();
    done();
  });

  afterAll(async done => {
    await mongoose.connection.close();
    done();
  });

  it('responds with 200', async done => {
    const res = await server.inject({
      method: 'get',
      url: '/',
    });

    expect(res.statusCode).toBe(200);
    done();
  });
});
