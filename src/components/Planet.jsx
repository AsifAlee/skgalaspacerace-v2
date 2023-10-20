import React from "react";
import "../styles/planet.scss";

const Planet = ({ planet, name, clickHandler, id }) => {
  return (
    <div className="planet" onClick={() => clickHandler(id)}>
      <img className="planet-img" src={planet} />
      <div className="planet-name">
        <span>{name}</span>
      </div>
    </div>
  );
};

export default Planet;
