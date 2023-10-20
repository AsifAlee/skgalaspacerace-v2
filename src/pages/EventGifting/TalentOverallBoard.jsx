import React, { useContext, useState } from "react";
import "../../styles/event-gifting.scss";
// import { talentOverall } from "../../utils/testData";
import Topper from "../../components/Topper";
import GiftingLeaderboardItem from "../../components/GiftingLeaderboardItem";
import { AppContext } from "../../AppContext";

const TalentOVerallBoard = () => {
  const toggleSeeMore = () => {
    setSeeMore((prevState) => !prevState);
  };
  const { giftingLeaderboard } = useContext(AppContext);
  const { talentOverall } = giftingLeaderboard;
  const [seeMore, setSeeMore] = useState(true);

  return (
    <div className="board">
      <div className="topper-section">
        {talentOverall[0] && (
          <div
            style={{
              position: "relative",
              left: "32vw",
              top: "2vw",
              width: "35vw",
            }}
          >
            <Topper index={1} user={talentOverall[0]} isTalent={true} />
          </div>
        )}
        {talentOverall[1] && (
          <div
            style={{
              position: "relative",
              top: "-31vw",
              left: "3vw",
              width: "35vw",
            }}
          >
            <Topper index={2} user={talentOverall[1]} isTalent={true} />
          </div>
        )}
        {talentOverall[2] && (
          <div
            style={{
              position: "relative",
              top: "-71vw",
              left: "62vw",
              width: "35vw",
            }}
          >
            <Topper index={3} user={talentOverall[2]} isTalent={true} />
          </div>
        )}
      </div>
      <div className={`restWinners`}>
        {seeMore
          ? talentOverall
              .slice(3, 10)
              .map((item, index) => (
                <GiftingLeaderboardItem
                  user={item}
                  index={index + 4}
                  isTalent={true}
                />
              ))
          : talentOverall
              .slice(3, 20)
              .map((item, index) => (
                <GiftingLeaderboardItem
                  user={item}
                  index={index + 4}
                  isTalent={true}
                />
              ))}
      </div>
      {talentOverall?.length > 10 && (
        <button
          className={seeMore ? "seeMore" : "seeLess"}
          onClick={toggleSeeMore}
        />
      )}
      {talentOverall?.length === 0 && (
        <div className="noDataFound">No Data Found</div>
      )}
    </div>
  );
};

export default TalentOVerallBoard;
