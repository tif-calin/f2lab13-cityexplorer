export function formatLocation(data) {
  return {
    formatted_query: data.display_name,
    latitude: data.lat,
    longitude: data.lon
  };
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

}

export function formatEvents(data) {
  
}