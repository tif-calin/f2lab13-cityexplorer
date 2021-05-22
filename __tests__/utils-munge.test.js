import locationData from '../data/geo.js';
import weatherData from '../data/weather.js';
import yelpData from '../data/yelp.js';
import { formatLocation, formatWeather, formatYelp } from '../lib/utils-munge.js';

describe('munging functions', () => {
    
  it('munge /api/location response', async () => {
    const expected = {
      formatted_query: 'Portland, Multnomah County, Oregon, USA',
      latitude: '45.5202471',
      longitude: '-122.6741949'
    };
    const actual = formatLocation(locationData)[0];
  
    expect(actual).toEqual(expected);
    
  });
    
  it('munge /api/weather response', async () => {
    const expected = {
      forecast: 'Scattered clouds',
      time: '2020-05-05'
    };
    const actual = formatWeather(weatherData)[0];
  
    expect(actual).toEqual(expected);
    
  });
    
  it('munge /api/reviews response', async () => {
    const expected = {
      name: 'Jim’s Good Food',
      image_url: 'https://s3-media3.fl.yelpcdn.com/bphoto/PvP5Iv3JIuH1TVA1amFsOA/o.jpg',
      price: '$$',
      rating: 4.5,
      url: 'https://www.yelp.com/biz/jim-s-good-food-sacramento?adjust_creative=SIP1Dfwy1M0HWzdgGg9H9g&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=SIP1Dfwy1M0HWzdgGg9H9g'
    };
    const actual = formatYelp(yelpData)[0];
  
    expect(actual).toEqual(expected);
    
  });

});