/* eslint-disable no-console */
// import dependencies
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

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
    const LOCATION_KEY = process.env.LOCATION_DB_API_KEY;
  }
  catch(err) {
    console.log(err);
    res.status(500).json({ error: err.message });  
  }
});

app.get('/api/weather', async (req, res) => {
  try {
    const WEATHER_KEY = process.env.WEATHER_DB_API_KEY;
  }
  catch(err) {
    console.log(err);
    res.status(500).json({ error: err.message });  
  }
});

app.get('/api/reviews', async (req, res) => {
  try {
    const YELP_KEY = process.env.YELP_DB_API_KEY;
  }
  catch(err) {
    console.log(err);
    res.status(500).json({ error: err.message });  
  }
});

export default app;