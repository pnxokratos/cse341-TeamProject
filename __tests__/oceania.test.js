const request = require('supertest');
const express = require('express');
const router = require('../routes/oceania');
const app = express();
app.use('/', router);

describe('Test the Oceania routes', () => {
  test('Test GET method to get all places', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });

});