import mongoose from 'mongoose';

import { connect, clearDatabase, closeDatabase } from '../db-handler';
import { init } from '../../src/index';

describe('GET /', () => {
  let server;

  /**
   * Connect to a new in-memory database before running any tests.
   */
  beforeAll(async done => {
    await connect();
    done();
  });

  beforeEach(async done => {
    server = await init();
    done();
  });

  afterEach(async done => {
    await server.stop();
    await clearDatabase();
    done();
  });

  /**
   * Remove and close the db and server.
   */
  afterAll(async done => {
    await closeDatabase();
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
