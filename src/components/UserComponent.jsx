import React, { useContext } from "react";
import powerIcon from "../images/figh-for-planet/firepower-icon.png";
import { AppContext } from "../AppContext";
import { getRewardsImage } from "../utils/functions";
const UserComponent = ({ user, index }) => {
  const { info } = useContext(AppContext);
  return (
    <div className="user-component">
      <div className="left-div">
        <span className="index">{index}.</span>
        <span className="uname">{user.nickname}</span>
      </div>
      <div className="right-div">
        <img
          src={
            info.matchStage <= 1
              ? getRewardsImage("Firepower")
              : info.matchStage === 2
              ? getRewardsImage("Growth Points")
              : getRewardsImage("Trophies")
          }
        />
        <span style={{ position: "relative", bottom: "-1vw" }}>
          {user.userScore}
        </span>
      </div>
    </div>
  );
};

export default UserComponent;
