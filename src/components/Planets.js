import React from "react";
import { useSelector } from "react-redux";

const Planet = ({ planet }) => {
  const getFontSize = (population) => {
    let fontSize = 10;
    fontSize = Math.floor(population * 0.0000000001);
    console.log(fontSize);
    return `${
      fontSize < 0 || !fontSize ? 16 : fontSize > 40 ? 40 : fontSize
    }px`;
  };
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
      <div className="planet">
        <div
          style={{ fontSize: `${getFontSize(planet.population)}` }}
          className="planet-header"
        >
          {planet.name}
        </div>
        <div className="planet-content">
          <p>terrain: {planet.terrain}</p>
          <p>Population: {planet.population}</p>
          <p>Rotation Speed: {planet.rotation_period}</p>
        </div>
      </div>
    </div>
  );
};

const Planets = () => {
  const { searchResult } = useSelector((state) => {
    return state.search;
  });
  return (
    <>
      {searchResult.length > 0 && <h5 className="p-1">List page</h5>}
      <div className="row">
        {searchResult.map((planet, index) => {
          return <Planet key={`planet-${index}`} planet={planet} />;
        })}
      </div>
    </>
  );
};

export default Planets;
