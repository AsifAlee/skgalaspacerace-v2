import React, { useContext } from "react";
import { getRewardsImage } from "../utils/functions";
import { AppContext } from "../AppContext";

const HistorySliderItem = ({ item, index }) => {
  const { getRewardDetails } = useContext(AppContext);
  return (
    <div className="history-slider-item ">
      <div className="img-with-bg">
        <img src={getRewardsImage(item.desc)} />
      </div>
      <span>{getRewardDetails(item.desc, item.count)}</span>
    </div>
  );
};

export default HistorySliderItem;
