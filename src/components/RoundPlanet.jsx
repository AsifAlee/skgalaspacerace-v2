import React from "react";
import "../styles/round2Planet.scss";
const Round2Planet = ({ planet, id, name, clickHandler, toggleRuSure }) => {
  return (
    <div className="round2-planet">
      <span className="name">{name}</span>
      <img
        className="planet-img"
        src={planet}
        onClick={() => clickHandler(id)}
      />
      <div className="join-button" onClick={() => toggleRuSure(id)}>
        <span>JOIN</span>
      </div>
    </div>
  );
};

export default Round2Planet;
