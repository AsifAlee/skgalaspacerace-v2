import React from "react";
import "../styles/leaderboard-item.scss";
import unknow from "../images/figh-for-planet/unknown-user.png";
import level from "../images/event-gifting/levimg.png";
import beanIcon from "../images/bean-icon.png";
import gems from "../images/gems.png";
import firePower from "../images/figh-for-planet/firepower-icon.png";
import trophies from "../images/figh-for-planet/throphy-icon.png";

import {
  getLevelImage,
  getRewardsImage,
  gotoProfile,
} from "../utils/functions";
import { useContext } from "react";
import { AppContext } from "../AppContext";
const GiftingLeaderboardItem = ({
  index,
  user,
  isTalent,
  showEst,
  calculateEstRewards,
  isPrev,
  isRound,
  roundValue,
}) => {
  const { info } = useContext(AppContext);
  return (
    <div className="gifttingboard-item">
      <div className="leftDiv">
        <span className="index">{index}.</span>
        <img
          className="users"
          src={user.portrait ? user.portrait : unknow}
          onClick={() => gotoProfile(user.userId)}
        />
        <div className="user-details">
          <span className="name">{user.nickname}</span>
          <img
            src={getLevelImage(
              isTalent ? user.actorLevel : user.userLevel,
              isTalent
            )}
            style={{ width: isTalent && "8vw" }}
          />
        </div>
      </div>
      {showEst && (
        <div className="middleDiv">
          <span>{isPrev ? "Rewards Won" : "Est Rewards"}</span>
          <div className="d-flex al-center">
            <img src={beanIcon} />
            <span>{calculateEstRewards(index)}</span>
          </div>
        </div>
      )}
      {!isRound ? (
        <div className="rightDiv">
          <img src={isTalent ? gems : beanIcon} />
          <span>{user.userScore}</span>
        </div>
      ) : (
        <div className="rightDiv">
          <img
            src={
              roundValue <= 1
                ? getRewardsImage("Firepower")
                : roundValue === 2
                ? getRewardsImage("Growth Points")
                : getRewardsImage("Trophies")
            }
          />
          <span>{user?.userScore}</span>
        </div>
      )}
    </div>
  );
};

export default GiftingLeaderboardItem;
