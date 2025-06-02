import { useEffect, useState } from "react";
import { getEarthWeather } from "./services/earthAPI";
import { getMarsWeather } from "./services/marsAPI";
import WeatherCard from "./components/WeatherCard";
import "./App.css";

function App() {
  const [mars, setMars] = useState(null);
  const [earth, setEarth] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const marsData = await getMarsWeather();
      const sol = marsData.sol_keys[0];
      setMars({ ...marsData[sol], sol });

      const earthData = await getEarthWeather("Helsinki");
      setEarth(earthData);
    };
    fetchData();
  }, []);

  return (
    <div className="app-container">
      <h1>Mars And Earth Weather</h1>
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
            title={`Earth Weather (Helsinki)`}
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

export default App
