import mongoUnit from 'mongo-unit';
import supertest from 'supertest';
import mongoose from 'mongoose';

import db from '../../db';
import app from '../../app';

const fakeDeployments = [{
  _id: '5edb60b869a53b55c485233e',
  url: 'www.google.com',
  deployedAt: '2020-12-01T00:00:00.000Z',
  version: '0.1',
  templateName: 'Template name',
}];

describe('Post Endpoints', () => {
  beforeAll(async () => {
    await mongoUnit.start();
    const dbUrl = mongoUnit.getUrl();
    await db.setup(dbUrl);
  });

  afterAll(async () => {
    await mongoUnit.stop();
    await mongoose.connection.close();
  });

  beforeEach(async () => {
    await mongoUnit.initDb(mongoUnit.getUrl(), {
      deployments: fakeDeployments,
    });
  });
  afterEach(async () => {
    await mongoUnit.dropDb(mongoUnit.getUrl());
  });

  it('should create a new post', async () => {
    const res = await supertest(app)
      .get('/deployments');

    expect(res.status).toEqual(200);
    expect(res.body.length).toBe(1);
    expect(res.body).toMatchObject(fakeDeployments);
  });
});
