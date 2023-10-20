import React from "react";
import beanIcon from "../images/bean-icon.png";
import { getLevelImage, getRewardsImage } from "../utils/functions";
import { baseUrl } from "../utils/api";
const GiftComponent = ({ rank, name, price, id }) => {
  return (
    <div
      className={`gift-component ${
        rank === 1 ? "rank1" : rank === 2 ? " rank2" : "rank3"
      }`}
    >
      <div className="title">
        <p className="gift-name">{name}</p>
        <div className="amount">
          <span className="price">{price}</span>
          <img src={beanIcon} className="giftBeans" />
        </div>
      </div>
      <img src={`${baseUrl}/streamkar/gifts/${id}.png`} className="gift-img" />
    </div>
  );
};

export default GiftComponent;
