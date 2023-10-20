import React, { useContext, useState } from "react";
import "../../styles/event-gifting.scss";
import { userOverall } from "../../utils/testData";
import Topper from "../../components/Topper";
import GiftingLeaderboardItem from "../../components/GiftingLeaderboardItem";
import { AppContext } from "../../AppContext";
import { userOverallPot } from "../../utils/beansPot";

const UserOverallBoard = () => {
  const { giftingLeaderboard, info } = useContext(AppContext);
  const { userOverall } = giftingLeaderboard;

  const calculateEstRewards = (index) => {
    const percent = userOverallPot.find((item) => item.rank === index).percent;
    const result = Math.floor((percent / 100) * info.userOverallBeansPot);

    return result;
  };

  const toggleSeeMore = () => {
    setSeeMore((prevState) => !prevState);
  };
  const [seeMore, setSeeMore] = useState(true);

  return (
    <div className="board">
      <div className="topper-section">
        {userOverall[0] && (
          <div
            style={{
              position: "relative",
              left: "32vw",
              top: "2vw",
              width: "35vw",
            }}
          >
            <Topper
              index={1}
              user={userOverall[0]}
              isTalent={false}
              calculateEstRewards={calculateEstRewards}
              showEst={true}
              isPrev={false}
            />
          </div>
        )}
        {userOverall[1] && (
          <div
            style={{
              position: "relative",
              top: "-31vw",
              left: "3vw",
              width: "35vw",
            }}
          >
            <Topper
              index={2}
              user={userOverall[1]}
              isTalent={false}
              calculateEstRewards={calculateEstRewards}
              showEst={true}
              isPrev={false}
            />
          </div>
        )}
        {userOverall[2] && (
          <div
            style={{
              position: "relative",
              top: "-71vw",
              left: "62vw",
              width: "35vw",
            }}
          >
            <Topper
              index={3}
              user={userOverall[2]}
              isTalent={false}
              calculateEstRewards={calculateEstRewards}
              showEst={true}
              isPrev={false}
            />
          </div>
        )}
      </div>
      <div className={`restWinners`}>
        {userOverall.slice(3, seeMore ? 10 : 20).map((item, index) => (
          <GiftingLeaderboardItem
            user={item}
            index={index + 4}
            isTalent={false}
            showEst={false}
            calculateEstRewards={calculateEstRewards}
            isPrev={true}
          />
        ))}
      </div>
      {userOverall.length > 10 && (
        <button
          className={seeMore ? "seeMore" : "seeLess"}
          onClick={toggleSeeMore}
        />
      )}
      {userOverall?.length === 0 && (
        <div className="noDataFound">No Data Found</div>
      )}
    </div>
  );
};

export default UserOverallBoard;
