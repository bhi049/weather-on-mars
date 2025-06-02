import "../styles/HeroHeader.css";
import { PlanetIcons } from "../icons/icons";

const HeroHeader = () => {
  return (
    <header className="hero-header">
      <h1 className="hero-title">
        <img
          src={PlanetIcons.mars}
          className="planet-icon"
          alt="Mars"
        />
        Mars VS Earth
        <img
          src={PlanetIcons.earth}
          className="planet-icon"
          alt="Earth"
        />
      </h1>
      <p className="hero-subtitle">
        Compare real-time weather between Earth and the Red Planet.
      </p>
    </header>
  );
};

export default HeroHeader;
