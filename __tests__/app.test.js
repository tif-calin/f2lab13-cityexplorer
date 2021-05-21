import client from '../lib/client.js';
import supertest from 'supertest';
import app from '../lib/app.js';
import { execSync } from 'child_process';

const request = supertest(app);

describe('API Routes', () => {

  afterAll(async () => {
    return client.end();
  });

  describe('/api/cats', () => {
    
    it('VERB to /api/route [with context]', async () => {
    
      // expect(response.status).toBe(200);
      // expect(response.body).toEqual(?);
      
    });

  });
});