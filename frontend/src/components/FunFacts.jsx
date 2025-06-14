import "../styles/FunFacts.css";
import MarsIcon from "../assets/Mars.png";
import EarthIcon from "../assets/Earth.png";
import MotionWrapper from "./MotionWrapper";

const marsFacts = [
  "A day on Mars is called a 'sol'.",
  "Mars has two moons: Phobos and Deimos.",
  "Mars is home to the tallest volcano in the solar system: Olympus Mons.",
  "A year on Mars is 687 Earth days.",
];

const earthFacts = [
  "Earth is the only planet known to support life.",
  "About 71% of Earth's surface is water.",
  "Earth has one moon — Luna.",
  "Earth’s atmosphere is 78% nitrogen and 21% oxygen.",
];

const FunFacts = () => {
  return (
    <MotionWrapper delay={0.2}>
    <section id="facts" className="fun-facts-section">
      <h2 className="section-title">Fun Facts</h2>

      <div className="planet-facts-container">
        {/* Mars Facts */}
        <div className="planet-box mars">
          <img src={MarsIcon} alt="Mars" className="planet-icon-facts" />
          <h3>Mars Facts</h3>
          <ul>
            {marsFacts.map((fact, i) => (
              <li key={`mars-${i}`}>🔸 {fact}</li>
            ))}
          </ul>
        </div>

        {/* Earth Facts */}
        <div className="planet-box earth">
          <img src={EarthIcon} alt="Earth" className="planet-icon-facts" />
          <h3>Earth Facts</h3>
          <ul>
            {earthFacts.map((fact, i) => (
              <li key={`earth-${i}`}>🔹 {fact}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
    </MotionWrapper>
  );
};

export default FunFacts;
