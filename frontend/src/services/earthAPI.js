import axios from "axios";

const EARTH_API_KEY = import.meta.env.VITE_EARTH_API_KEY;

export const getEarthWeather = async (city) => {
  const res = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${EARTH_API_KEY}&units=metric`
  );
  return res.data;
};
