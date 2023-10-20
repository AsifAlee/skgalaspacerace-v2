import React from "react";
import one from "../images/figh-for-planet/1.png";

import unknownUser from "../images/figh-for-planet/unknown-user.png";
import frame from "../images/game-area/leaderboard-game-frame.png";
import levelImg from "../images/event-gifting/levimg.png";
import "../styles/leaderboard-item.scss";
import LeaderBoardSlider from "./LeaderboardSlider";
import { leaderBoardSliderData } from "../utils/testData";
import { getLevelImage, gotoProfile } from "../utils/functions";

const rewards = [
  {
    name: "beans pot",
    desc: "beansbag",
  },
  {
    name: "beans pot",
    desc: "beansbag",
  },
  {
    name: "beans pot",
    desc: "beansbag",
  },
];
const GameLeaderboardItem = ({ user, index }) => {
  //   const { index, name, pic } = planet;
  let data;
  const formatData = (originalArray) => {
    const newArray = [];
    for (let i = 0; i < originalArray?.length; i += 3) {
      newArray?.push(originalArray?.slice(i, i + 3));
    }

    return newArray;
  };
  if (user.desc) {
    data = formatData(JSON.parse(user?.desc));
  }

  return (
    <div className="gameboard-item">
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
      <div className="lb-item">
        <div className="left">
          <div className="images" onClick={() => gotoProfile(user?.userId)}>
            <img src={frame} className="rank" />
            <img
              src={user.portrait ? user.portrait : unknownUser}
              className="user"
            />
          </div>
          <div className="nameNlevel">
            <div className="name">
              <p>{user.nickname}</p>
            </div>
            <img src={getLevelImage(user.userLevel, false)} />
          </div>
        </div>

        <div className="right d-flex j-center al-center">
          <LeaderBoardSlider rewards={data} />
        </div>
      </div>
    </div>
  );
};

export default GameLeaderboardItem;
