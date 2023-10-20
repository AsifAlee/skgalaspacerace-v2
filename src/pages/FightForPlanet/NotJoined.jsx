import React, { useContext, useState } from "react";
import Planet from "../../components/Planet";
import mercury from "../../images/figh-for-planet/mercury.png";
import venus from "../../images/figh-for-planet/venus.png";

import earth from "../../images/figh-for-planet/earth.png";

import mars from "../../images/figh-for-planet/mars.png";

import jupiter from "../../images/figh-for-planet/jupiter.png";
import saturn from "../../images/figh-for-planet/saturn.png";
import plato from "../../images/figh-for-planet/saturn.png";
import neptune from "../../images/figh-for-planet/neptune.png";
import PlanetInfo from "../../popups/PlanetInfo";
import infoText from "../../images/figh-for-planet/info-animation.png";
import "../../styles/fight-for-planet.scss";
import { AppContext } from "../../AppContext";
import PlanetInfo2 from "../../popups/PlanetInfo2";
const NotJoined = () => {
  const [planetInfo, setPlanetInfo] = useState(false);
  const [id, setId] = useState(0);
  const togglePlanetInfo = (id) => {
    if (id) setId(id);
    setPlanetInfo((prevState) => !prevState);
  };
  return (
    <div className="not-joined" style={{ marginTop: "6vw" }}>
      <div className="join-title"></div>
      <div>
        <div className="info">
          <img src={infoText} />
        </div>
      </div>
      <div className="orange-info d-flex j-center al-center">
        <p>
          TO BE A MEMEBER ,SEND ANY 1 EVENT GIFT OF YOUR CHOICE ,SYSTEM WILL ADD
          YOU TO A PLANET
        </p>
      </div>
      <div className="planets">
        <div className="planet-row">
          <Planet
            planet={mercury}
            name="MERCURY"
            clickHandler={togglePlanetInfo}
            id={1}
          />
          <Planet
            planet={venus}
            name="VENUS"
            clickHandler={togglePlanetInfo}
            id={2}
          />
        </div>
        <div className="planet-row">
          <Planet
            planet={earth}
            name="EARTH"
            clickHandler={togglePlanetInfo}
            id={3}
          />
          <Planet
            planet={mars}
            name="MARS"
            clickHandler={togglePlanetInfo}
            id={4}
          />
        </div>
        <div className="planet-row">
          <Planet
            planet={jupiter}
            name="JUPITER"
            clickHandler={togglePlanetInfo}
            id={5}
          />
          <Planet
            planet={saturn}
            name="SATURN"
            clickHandler={togglePlanetInfo}
            id={6}
          />
        </div>
        <div className="planet-row">
          <Planet
            planet={plato}
            name="URANUS"
            clickHandler={togglePlanetInfo}
            id={7}
          />
          <Planet
            planet={neptune}
            name="NEPTUNE"
            clickHandler={togglePlanetInfo}
            id={8}
          />
        </div>
      </div>
      {planetInfo && <PlanetInfo2 popUpHandler={togglePlanetInfo} id={id} />}
    </div>
  );
};

export default NotJoined;
