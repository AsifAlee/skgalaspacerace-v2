import React, { useContext, useEffect, useState } from "react";
import { SwitchButton } from "../../components/SwitchButton";
import switchBg from "../../images/event-gifting/slide-button-bg.png";
import "../../styles/event-gifting.scss";

import Topper from "../../components/Topper";
import GiftingLeaderboardItem from "../../components/GiftingLeaderboardItem";
import { AppContext } from "../../AppContext";

const TalentMonthlyBoard = () => {
  const { giftingLeaderboard } = useContext(AppContext);
  const { talentMonthlyNow, talentMonthlyPrev } = giftingLeaderboard;

  const [switchTabs, setSwitchTabs] = useState({
    current: true,
    prev: false,
  });
  const toggleSwitch = () => {
    setSwitchTabs({ current: !switchTabs.current, prev: !switchTabs.prev });
  };
  useEffect(() => {
    if (switchTabs.current) {
      setSelectedData(talentMonthlyNow);
    } else {
      setSelectedData(talentMonthlyPrev);
    }
  }, [switchTabs, giftingLeaderboard]);

  const toggleSeeMore = () => {
    setSeeMore((prevState) => !prevState);
  };
  const [seeMore, setSeeMore] = useState(true);
  const [selectedData, setSelectedData] = useState([]);
  return (
    <div className="board">
      <SwitchButton
        texts={["CURRENT", "PREVIOUS"]}
        bg={switchBg}
        isPot={0}
        onToggle={toggleSwitch}
        isLeaderBoard={1}
        talentDaily={true}
      />
      <div className="topper-section">
        {selectedData && selectedData[0] && (
          <div
            style={{
              position: "relative",
              left: "32vw",
              top: "2vw",
              width: "35vw",
            }}
          >
            <Topper index={1} user={selectedData[0]} isTalent={true} />
          </div>
        )}
        {selectedData && selectedData[1] && (
          <div
            style={{
              position: "relative",
              top: "-31vw",
              left: "3vw",
              width: "35vw",
            }}
          >
            <Topper index={2} user={selectedData[1]} isTalent={true} />
          </div>
        )}
        {selectedData && selectedData[2] && (
          <div
            style={{
              position: "relative",
              top: "-71vw",
              left: "62vw",
              width: "35vw",
            }}
          >
            <Topper index={3} user={selectedData[2]} isTalent={true} />
          </div>
        )}
      </div>
      <div className={`restWinners`}>
        {seeMore
          ? selectedData
              ?.slice(3, 10)
              ?.map((item, index) => (
                <GiftingLeaderboardItem
                  user={item}
                  index={index + 4}
                  isTalent={true}
                />
              ))
          : selectedData
              ?.slice(3, 20)
              ?.map((item, index) => (
                <GiftingLeaderboardItem
                  user={item}
                  index={index + 4}
                  isTalent={true}
                />
              ))}
      </div>
      {switchTabs?.current && talentMonthlyNow?.length > 10 ? (
        <button
          className={seeMore ? "seeMore" : "seeLess"}
          onClick={toggleSeeMore}
        />
      ) : (
        ""
      )}
      {switchTabs?.prev && talentMonthlyPrev?.length > 10 ? (
        <button
          className={seeMore ? "seeMore" : "seeLess"}
          onClick={toggleSeeMore}
        />
      ) : (
        ""
      )}

      {switchTabs.current && talentMonthlyNow?.length === 0 && (
        <div className="noDataFound">No Data Found</div>
      )}
      {switchTabs.prev && talentMonthlyPrev?.length === 0 && (
        <div className="noDataFound">No Data Found</div>
      )}
    </div>
  );
};

export default TalentMonthlyBoard;
