import React from "react";
import { userOverall } from "../../utils/testData";
import Topper from "../../components/Topper";
import GiftingLeaderboardItem from "../../components/GiftingLeaderboardItem";
import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../../AppContext";
import { useEffect } from "react";
import { userWeeklyPot } from "../../utils/beansPot";

const OppositeRoundLeaderBoard = ({ round }) => {
  const { roundsLbData, info } = useContext(AppContext);
  const { oppRound1, oppRound2, oppRound3 } = roundsLbData;

  const [seeMore, setSeeMore] = useState(true);
  const [selectedData, setSelectedData] = useState(oppRound1);

  useEffect(() => {
    if (round === 1) {
      setSelectedData(oppRound1);
    } else if (round === 2) {
      setSelectedData(oppRound2);
    } else if (round === 3) {
      setSelectedData(oppRound3);
    }
  }, [roundsLbData, round]);

  const toggleSeeMore = () => {
    setSeeMore((prevState) => !prevState);
  };

  const calculateEstRewards = (index) => {
    const percent = userWeeklyPot.find((item) => item.rank === index).percent;
    const result = Math.floor((percent / 100) * info.beansPotMap.champion);

    return result;
  };
  return (
    <div className="leaderboard">
      <div className="topper-section">
        {selectedData[0] && (
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
              user={selectedData[0]}
              isRound={true}
              roundValue={round}
              calculateEstRewards={calculateEstRewards}
              showEst={round === 3}
            />
          </div>
        )}
        {selectedData[1] && (
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
              user={selectedData[1]}
              isRound={true}
              roundValue={round}
              calculateEstRewards={calculateEstRewards}
              showEst={round === 3}
            />
          </div>
        )}
        {selectedData[2] && (
          <div
            style={{
              position: "relative",
              top: "-71vw",
              left: "61vw",
              width: "35vw",
            }}
          >
            <Topper
              index={3}
              user={selectedData[2]}
              isRound={true}
              roundValue={round}
              calculateEstRewards={calculateEstRewards}
              showEst={round === 3}
            />
          </div>
        )}
      </div>
      <div className={`restWinners`}>
        {selectedData.slice(3, seeMore ? 11 : 21).map((item, index) => (
          <GiftingLeaderboardItem
            user={item}
            index={index + 4}
            isRound={true}
            roundValue={round}
            calculateEstRewards={calculateEstRewards}
            showEst={round === 3 && index <= 1 ? true : false}
          />
        ))}
      </div>
      {selectedData.length > 10 && (
        <button
          className={seeMore ? "seeMore" : "seeLess"}
          onClick={toggleSeeMore}
        />
      )}
      {selectedData?.length === 0 && (
        <div className="noDataFound">No Data Found</div>
      )}
    </div>
  );
};

export default OppositeRoundLeaderBoard;
