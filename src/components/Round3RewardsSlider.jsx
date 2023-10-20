import React, { useContext, useEffect, useState } from "react";
import "../styles/slider2.scss";
import leftArrow from "../images/figh-for-planet/left-arrow.gif";
import rightArrow from "../images/figh-for-planet/right-arrow.gif";

import SliderDot from "./SliderDot";
import { getRewardsImage } from "../utils/functions";
import { AppContext } from "../AppContext";

const Round3RewardsSlider = ({
  rewards,
  showRanks,
  eventGifting,
  isGame,
  hideArrows,
  showIndicators,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  let intervalId = null;
  const nextSlide = () => {
    setCurrentIndex((prevState) =>
      prevState === rewards?.length - 2 ? 0 : prevState + 1
    );
  };
  const prevSlide = () => {
    setCurrentIndex((prevState) =>
      prevState === 0 ? rewards?.length - 2 : prevState - 1
    );
  };

  useEffect(() => {
    intervalId = setInterval(nextSlide, 2000);

    return () => {
      clearInterval(intervalId);
      setCurrentIndex(0);
    };
  }, []);

  useEffect(() => {
    setCurrentIndex(0);
  }, [rewards]);
  return (
    <div className={`slider2 ${eventGifting && "eventGiftingRewards2"}`}>
      {!hideArrows && (
        <img className="left-arrow" src={leftArrow} onClick={prevSlide} />
      )}

      <div className="slider-content">
        {showRanks && (
          <p style={{ fontSize: "3vw" }}>{rewards[currentIndex]?.rank}</p>
        )}

        {!isGame ? (
          <div className="rew-container">
            {rewards[currentIndex]?.pageRewards?.map((singleRew, index) => {
              return (
                <div className="reward-item" key={index}>
                  <img src={getRewardsImage(singleRew.desc)} />
                  <p>{singleRew.name}</p>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="rew-container">
            {rewards[currentIndex]?.map((singleRew, index) => {
              return (
                <div className="reward-item" key={index}>
                  <img
                    src={getRewardsImage(singleRew.desc)}
                    style={{ width: isGame && "19vw" }}
                  />
                  <p>{singleRew.desc}</p>
                </div>
              );
            })}
          </div>
        )}

        {showIndicators && (
          <div className="indicators">
            {rewards.map((item, index) => (
              <SliderDot isActive={index === currentIndex} />
            ))}
          </div>
        )}

        {/* )} */}
      </div>
      {!hideArrows && (
        <img className="right-arrow" src={rightArrow} onClick={nextSlide} />
      )}
    </div>
  );
};

export default Round3RewardsSlider;
