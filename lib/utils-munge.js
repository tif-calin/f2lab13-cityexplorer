export function formatLocation(data) {
  return data.map(local => {
    return {
      formatted_query: local.display_name,
      latitude: local.lat,
      longitude: local.lon
    };
  });
}

export function formatWeather(data) {
  return data.data.map(weather => { 
    return {
      forecast: weather.weather.description, 
      time: weather.valid_date 
    };
  });
}

export function formatYelp(data) {
  return data.businesses.map(business => {
    return {
      name: business.name,
      image_url: business.image_url,
      price: business.price,
      rating: business.rating,
      url: business.url
    };
  });
}

export function formatTrails(data) {
  return data;
}

export function formatEvents(data) {
  return data;
}