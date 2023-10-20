import React from "react";
import {
  getLevelImage,
  getRewardsImage,
  gotoProfile,
} from "../utils/functions";
import rank1 from "../images/event-gifting/gold.png";
import rank2 from "../images/event-gifting/silver.png";
import rank3 from "../images/event-gifting/bronze.png";
import levelImg from "../images/event-gifting/levimg.png";
import beans from "../images/bean-icon.png";
import gems from "../images/gems.png";

import unknown from "../images/figh-for-planet/unknown-user.png";

import "../styles/topper.scss";
import { useContext } from "react";
import { AppContext } from "../AppContext";

const Topper = (props) => {
  const {
    index,
    user,
    isTalent,
    calculateEstRewards,
    showEst,
    isPrev,
    isRound,
    roundValue,
  } = props;
  const { info } = useContext(AppContext);
  return (
    <div className="topper">
      <div className="topper-images" onClick={() => gotoProfile(user.userId)}>
        <img
          src={index === 1 ? rank1 : index === 2 ? rank2 : rank3}
          className={index === 1 ? "rank" : index === 2 ? "rank2" : "rank3"}
        />
        <img src={user.portrait ? user.portrait : unknown} className="user" />
      </div>
      <div
        className="topper-details"
        style={{
          gap: isTalent || isRound ? "2.5vw" : "",
          padding: isTalent || isRound ? "3vw" : "",
        }}
      >
        <p className="name">{user.nickname}</p>
        <img
          src={getLevelImage(
            isTalent ? user.actorLevel : user.userLevel,
            isTalent
          )}
          className="levelImg"
          style={{ width: isTalent && "6vw" }}
        />
        {showEst && (
          <div className="estimatedBeans">
            <span>{isPrev ? "Rewards won" : "Est Rewards"}</span>
            <div className="d-flex j-center al-center">
              <img src={beans} />
              <span>{calculateEstRewards(index)}</span>
            </div>
          </div>
        )}

        {/* <div className="beans-spent">
          <img src={isTalent ? gems : beans} />
          <span>{user.userScore}</span>
        </div> */}

        {!isRound ? (
          <div className="beans-spent">
            <img src={isTalent ? gems : beans} />
            <span>{user.userScore}</span>
          </div>
        ) : (
          <div className="beans-spent">
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
    </div>
  );
};
export default Topper;
