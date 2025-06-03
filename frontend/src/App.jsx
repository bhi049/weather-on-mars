import { useEffect, useState } from "react";
import { getEarthWeather } from "./services/earthAPI";
import { getMarsWeather } from "./services/marsAPI";
import WeatherCard from "./components/WeatherCard";
import "./App.css";
import HeroHeader from "./components/HeroHeader";

function App() {
  const [mars, setMars] = useState(null);
  const [earth, setEarth] = useState(null);
  const [inputCity, setInputCity] = useState("Helsinki");
  const [searchedCity, setSearchedCity] = useState("Helsinki");

  useEffect(() => {
    const fetchMarsWeather = async () => {
      const marsData = await getMarsWeather();
      const sol = marsData.sol_keys[0];
      setMars({ ...marsData[sol], sol });
    };
    fetchMarsWeather();
  }, []);

  useEffect(() => {
    const fetchEarthWeather = async () => {
      const data = await getEarthWeather(searchedCity);
      setEarth(data);
    };
    fetchEarthWeather();
  }, [searchedCity]);

  return (
    <div className="app-container">
      <HeroHeader inputCity={inputCity} setInputCity={setInputCity} setSearchedCity={setSearchedCity} />
      <div className="cards-container">
        {mars && (
          <WeatherCard
            temperature={`${mars.AT?.av} °C`}
            wind={`${mars.HWS?.av} m/s`}
            pressure={`${mars.PRE?.av} Pa`}
            color="#FF4500"
            sol={mars.sol}
          />
        )}

        {earth && (
          <WeatherCard
            title={`Earth Weather (${searchedCity})`}
            temperature={`${earth.main?.temp} °C`}
            wind={`${earth.wind?.speed} m/s`}
            pressure={`${earth.main?.pressure} hPa`}
            color="#00BFFF"
          />
        )}
      </div>
    </div>
  );
}

export default App;
