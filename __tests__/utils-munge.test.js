import locationData from '../data/geo.js';
import weatherData from '../data/weather.js';
import yelpData from '../data/yelp.js';

describe('API Routes', () => {

  afterAll(async () => {
    return client.end();
  });

  describe('/api/location', () => {
    
    it('GET /api/location', async () => {
    
      // expect(response.status).toBe(200);
      // expect(response.body).toEqual(?);
      
    });

  });
});