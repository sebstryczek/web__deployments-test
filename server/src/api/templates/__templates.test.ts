import mongoUnit from 'mongo-unit';
import supertest from 'supertest';
import mongoose from 'mongoose';

import db from '../../db';
import app from '../../app';

const fakeTemplates = [
  {
    _id: '5edbae1923f790666f273d11',
    name: 'Natural One',
    versions: [
      '1.0.0',
      '1.0.1',
      '1.1.0',
      '2.0.0',
    ],
  },
  {
    _id: '5edbae1923f790666f273d12',
    name: 'Techno 01',
    versions: [
      '1.0.0',
      '1.1.1',
      '2.0.1',
    ],
  },
  {
    _id: '5edbae1923f790666f273d13',
    name: 'Sporty',
    versions: [
      '1.0.0',
      '1.1.0',
      '1.2.0',
      '1.2.1',
      '1.3.0',
      '2.0.0',
    ],
  },
];

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
      templates: fakeTemplates,
    });
  });
  afterEach(async () => {
    await mongoUnit.dropDb(mongoUnit.getUrl());
  });

  it('should create a new post', async () => {
    const res = await supertest(app)
      .get('/templates');

    expect(res.status).toEqual(200);
    expect(res.body.length).toBe(3);
    expect(res.body).toMatchObject(fakeTemplates);
  });
});
