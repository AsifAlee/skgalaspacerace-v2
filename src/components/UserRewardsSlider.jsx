import React, { useEffect, useState } from "react";
import "../styles/slider.scss";
import leftArrow from "../images/figh-for-planet/left-arrow.gif";
import rightArrow from "../images/figh-for-planet/right-arrow.gif";

import SliderDot from "./SliderDot";
import { getRewardsImage } from "../utils/functions";

const UserRewardsSlider = ({
  rewards,
  showRanks,
  eventGifting,
  showIndicators,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // console.log("current index:", currentIndex);
  let intervalId = null;
  const nextSlide = () => {
    setCurrentIndex((prevState) =>
      prevState === rewards?.length - 1 ? 0 : prevState + 1
    );
  };
  const prevSlide = () => {
    setCurrentIndex((prevState) =>
      prevState === 0 ? rewards?.length - 1 : prevState - 1
    );
  };

  useEffect(() => {
    intervalId = setInterval(nextSlide, 3000);

    return () => {
      setCurrentIndex(0);
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    setCurrentIndex(0);
  }, [rewards]);

  return (
    <div className={`slider ${eventGifting && "eventGiftingRewards"}`}>
      <img className="left-arrow" src={leftArrow} onClick={prevSlide} />
      <div className="slider-content">
        {showRanks && (
          <p style={{ fontSize: "3vw", position: "relative", top: "3vw" }}>
            {rewards[currentIndex]?.rank}
          </p>
        )}
        <div className="images">
          <img src={getRewardsImage(rewards[currentIndex]?.name)} />
        </div>
        <div className="desc">
          <span>{rewards[currentIndex]?.desc}</span>
        </div>

        {/* {showIndicators && (
          <div className="indicators">
            {rewards.map((item, index) => (
              <SliderDot isActive={index === currentIndex} />
            ))}
          </div>
        )} */}
      </div>
      <img className="right-arrow" src={rightArrow} onClick={nextSlide} />
    </div>
  );
};

export default UserRewardsSlider;
