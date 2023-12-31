import React from "react";
import { getRewardsImage } from "../utils/functions";

const SliderItem = ({ item }) => {
  return (
    <div className="slider-item">
      <img src={getRewardsImage(item?.desc)} />
    </div>
  );
};

export default SliderItem;
