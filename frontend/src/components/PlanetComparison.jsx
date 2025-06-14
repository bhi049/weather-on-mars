import "../styles/PlanetComparison.css";
import MotionWrapper from "./MotionWrapper";

const PlanetComparison = () => {
  const data = [
    { feature: "Day Length", earth: "24h", mars: "24h 37min" },
    { feature: "Year Length", earth: "365 days", mars: "687 days" },
    { feature: "Gravity", earth: "9.8 m/s²", mars: "3.7 m/s²" },
    { feature: "Avg Temperature", earth: "15°C", mars: "-60°C" },
  ];

  return (
    <MotionWrapper delay={0.2}>
    <div className="comparison-section">
      <h2 className="comparison-title">Comparison</h2>
      <table className="comparison-table">
        <thead>
          <tr>
            <th>Feature</th>
            <th>Earth</th>
            <th>Mars</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.feature}</td>
              <td>{row.mars}</td>
              <td>{row.earth}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
</MotionWrapper>
  );
};

export default PlanetComparison;
