import React from "react";
import PopUp from "../components/Popup";
import bg from "../images/popups/hurrah-bg.png";
import oopsBg from "../images/popups/oops-bg.png";

import beansIcon from "../images/bean-icon.png";
import RewardsSlider2 from "../components/RewardSlider2";

const GamePopup = ({
  popUpHandler,
  rewards,
  errorCode,
  errMsg,
  rewardContent,
  isDecimalInput,
}) => {
  return (
    <PopUp bg={errorCode === 0 ? bg : oopsBg} game={true}>
      <div className="game-popup">
        <button className="closeBtn" onClick={popUpHandler} />
        {isDecimalInput === true ? (
          <div className="decimal-warn">Input value cannot be decimal</div>
        ) : errorCode === 0 ? (
          <div className="game-rewards">
            <RewardsSlider2 rewards={rewards} isGame={true} hideArrows={true} />
          </div>
        ) : errorCode === 10000004 ? (
          <div className="not-enough-points">You dont have enough points</div>
        ) : (
          <div className="error-mesg">{errMsg}</div>
        )}
        {errorCode === 0 && (
          <div className="text">
            <p>
              Congratulations on winning {rewardContent}.<br /> Continue playing
              to win rewards.
            </p>
          </div>
        )}
      </div>
    </PopUp>
  );
};

export default GamePopup;
