import "../styles/WeatherCard.css";
import { Icon } from "@iconify/react";
import { Icons } from "../icons/icons";

const WeatherCard = ({ title, temperature, wind, pressure, color, sol }) => {
  return (
    <div className="weather-card" style={{ borderColor: color }}>
      <h2 style={{ color }}>
        {sol ? `Mars Weather (Sol ${sol})` : title}
      </h2>
      <p className="icon">
        <Icon icon={Icons.tempature} width="50" />
        <strong>Temperature:</strong> {temperature}
      </p>
      <p className="icon">
        <Icon icon={Icons.wind} width="50" />
        <strong>Wind Speed:</strong> {wind}
      </p>
      <p className="icon">
        <Icon icon={Icons.pressure} width="50" />
        <strong>Pressure:</strong> {pressure}
      </p>
    </div>
  );
};

export default WeatherCard;
