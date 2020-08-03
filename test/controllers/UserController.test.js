const request = require('supertest');
const {
  beforeAction,
  afterAction,
} = require('../setup/_setup');
const User = require('../../api/models/Users');

let api;

beforeAll(async () => {
  api = await beforeAction();
});

afterAll(() => {
  afterAction();
});

test('Get User', async () => {
  const res = await request(api)
    .get('/users')
    .expect(200);

  expect(res.body.users.length).toEqual(13)
  const user = await User.findByPk(res.body.users[0].id);
  console.log(user.dataValues);
  expect(user.dataValues.id).toBe(res.body.users[0].id);
  expect(user.dataValues.firstName).toBe(res.body.users[0].firstName);

});

test('Pagination' , async () => {
  const res = await request(api)
    .get('/users?offset=2&limit=10')
    .expect(200);
    expect(res.body.users.length).toEqual(10);
    expect(res.body.users[0].id).toEqual(3);
});

