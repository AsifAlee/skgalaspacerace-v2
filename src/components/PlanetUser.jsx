import React from "react";
import "../styles/planet-user.scss";
import levelImg from "../images/event-gifting/levimg.png";
import frame from "../images/game-area/leaderboard-game-frame.png";
import unknown from "../images/figh-for-planet/unknown-user.png";
import firePowerIcon from "../images/figh-for-planet/firepower-icon.png";
import { getLevelImage, gotoProfile } from "../utils/functions";
const PlanetUser = ({ user, index }) => {
  return (
    <div className="planet-user">
      <div className="left-div">
        <div
          className={`index ${
            index === 1
              ? "one"
              : index === 2
              ? "two"
              : index === 3
              ? "three"
              : "four"
          }`}
        >
          {index}
        </div>
        <div className="images" onClick={() => gotoProfile(user.userId)}>
          <img src={frame} className="helmet" />
          <img src={user.portrait ? user.portrait : unknown} className="user" />
        </div>
        <div className="nameNLevel">
          <span className="name">{user.nickname}</span>
          <img src={getLevelImage(user.userLevel, false)} className="level" />
        </div>
      </div>
      <div className="right-div">
        <img src={firePowerIcon} />
        <span>{user.userScore}</span>
      </div>
    </div>
  );
};

export default PlanetUser;
