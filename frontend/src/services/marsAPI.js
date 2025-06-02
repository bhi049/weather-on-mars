import axios from 'axios';

const NASA_API_KEY = import.meta.env.VITE_NASA_API_KEY;

export const getMarsWeather = async () => {
  const res = await axios.get(
    `https://api.nasa.gov/insight_weather/?api_key=${NASA_API_KEY}&feedtype=json&ver=1.0`
  );
  return res.data;
};
