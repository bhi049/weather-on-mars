import "../styles/HeroHeader.css";
import { PlanetIcons } from "../icons/icons";

const HeroHeader = ( {inputCity, setInputCity, setSearchedCity} ) => {
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

      <div className="city-input-row">
        <label htmlFor="city">Search City: </label>
        <input
        id="city"
        type="text"
        value={inputCity}
        placeholder="Helsinki"
        onChange={(e) => setInputCity(e.target.value)} 
        />
        <button
          className="search-button"
          onClick={() => setSearchedCity(inputCity)}
        >
          Search
        </button>
      </div>
    </header>
  );
};

export default HeroHeader;
