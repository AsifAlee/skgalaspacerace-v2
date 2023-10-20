import React from "react";

import planetIcon from "../images/figh-for-planet/venus-icon.png";
import unknownUser from "../images/figh-for-planet/unknown-user.png";
import strengthIcon from "../images/figh-for-planet/strength-icon.png";
import "../styles/leaderboard-item.scss";

import one from "../images/figh-for-planet/1.png";
import two from "../images/figh-for-planet/2.png";
import three from "../images/figh-for-planet/3.png";
import four from "../images/figh-for-planet/4.png";
import five from "../images/figh-for-planet/5.png";
import six from "../images/figh-for-planet/6.png";
import seven from "../images/figh-for-planet/7.png";
import eight from "../images/figh-for-planet/8.png";
const PlanetLbItem = ({
  planet,
  togglePlanetInfo,
  data,
  index,
  getPlanetImage,
}) => {
  // debugger;
  return (
    <div className="planet-lb-item">
      <div className="index">
        <img
          src={
            index === 0
              ? one
              : index === 1
              ? two
              : index === 2
              ? three
              : index === 3
              ? four
              : index === 4
              ? five
              : index === 5
              ? six
              : index === 6
              ? seven
              : eight
          }
        />
      </div>
      <div className="left">
        <img src={getPlanetImage(planet?.planetId)} />
        <div className="name">
          <p>{planet?.planetName}</p>
        </div>
      </div>
      <div className="middle" onClick={() => togglePlanetInfo(planet.planetId)}>
        {data?.slice(0, 3)?.map((item, index) => (
          <img
            src={item.portrait ? item.portrait : unknownUser}
            className={index === 0 ? "img1" : index === 2 ? "img2" : "img3"}
          />
        ))}
        {/* <img src={unknownUser} className="img1" />
         <img src={unknownUser} className="img2" />
         <img src={unknownUser} className="img3" /> */}
      </div>
      <div className="right-div d-flex j-center al-center">
        <img src={strengthIcon} />
        <span>{planet.strength}</span>
      </div>
    </div>
  );
};

export default PlanetLbItem;
