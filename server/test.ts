import request from 'supertest';
import app from './app';

describe('GET /api/puppies', () => {
  test('should get /api/puppies', async () => {
    const res = await request(app).get('/api/puppies');
    expect(res.statusCode).toEqual(200);
    expect(res.body.length).toEqual(4);
  });
  
});

describe('GET /api/puppies/:id', () => {
  test('GET specific puppy Shibs', async () => {
    const res = await request(app).get('/api/puppies/3');
    expect(res.statusCode).toEqual(200);
    expect(res.body.name).toEqual('Shibs');
  });
});

describe('POST /api/puppies', () => {
  test('POST a new puppy', async () => {
    const newId = Date.now();
    let puppy = {
      id: newId,
      breed: 'Dobberman',
      name: 'Harry',
      birthDate: '2022-01-12'
    }
    const res = await request(app).post('/api/puppies').send(puppy)
    expect(res.statusCode).toEqual(200)
    expect(res.body.length).toEqual(5);
  });
});

describe('DELETE /api/puppies/:id', () => {
  test('DELETE a specific puppy', async () => {
    const res = await request(app).delete('/api/puppies/1');
    expect(res.statusCode).toEqual(200);
    expect(res.body.length).toEqual(4);
  });
});
