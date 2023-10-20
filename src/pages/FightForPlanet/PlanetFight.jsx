import React, { useContext } from "react";
import "../../styles/fight-for-planet.scss";

import Joined from "./Joined";
import NotJoined from "./NotJoined";
import { AppContext } from "../../AppContext";
const PlanetFight = () => {
  const { info } = useContext(AppContext);

  return (
    <div className="fight-for-planet">
      {info.beansSent ? <Joined /> : <NotJoined />}
    </div>
  );
};

export default PlanetFight;
