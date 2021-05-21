/* eslint-disable no-console */
// import dependencies
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import request from 'superuser';

// make an express app
const app = express();

// allow our server to be called from any website
app.use(cors());
// read JSON from body of request when indicated by Content-Type
app.use(express.json());
// enhanced logging
app.use(morgan('dev'));

// heartbeat route
app.get('/', (req, res) => {
  res.send('city explorer');
});

// API routes:
app.get('/api/location', async (req, res) => {
  try {
    const API_KEY = process.env.LOCATION_DB_API_KEY;

    const response = (await request
      .get('https://us1.locationiq.com/v1/search.php')
      .query({ key: API_KEY, format: 'json', q: req.query.search })).body;
    
    const formatted = {
      formatted_query: response.display_name,
      latitude: response.lat,
      longitude: response.lon
    };
    
    res.json(formatted);
  }
  catch(err) {
    console.log(err);
    res.status(500).json({ error: err.message });  
  }
});

app.get('/api/weather', async (req, res) => {
  try {
    const API_KEY = process.env.WEATHER_DB_API_KEY;

    const response = (await request
      .get('https://api.weatherbit.io/v2.0/forecast/daily')
      .query({ key: API_KEY, format: 'json', q: req.query.search })).body;
    
    const formatted = {
      ...response
    };
    
    res.json(formatted);
  }
  catch(err) {
    console.log(err);
    res.status(500).json({ error: err.message });  
  }
});

app.get('/api/reviews', async (req, res) => {
  try {
    const API_KEY = process.env.YELP_DB_API_KEY;

    const response = (await request
      .get('https://api.weatherbit.io/v2.0/forecast/daily')
      .query({ key: API_KEY, format: 'json', q: req.query.search })).body;
    
    const formatted = {
      ...response
    };
    
    res.json(formatted);
  }
  catch(err) {
    console.log(err);
    res.status(500).json({ error: err.message });  
  }
});

export default app;