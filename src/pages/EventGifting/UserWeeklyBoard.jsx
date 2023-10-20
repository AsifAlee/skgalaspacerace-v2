import React, { useContext, useEffect, useState } from "react";
import { SwitchButton } from "../../components/SwitchButton";
import switchBg from "../../images/event-gifting/slide-button-bg.png";
import "../../styles/event-gifting.scss";
// import { userWeeklyNow, userWeeklyPrev } from "../../utils/testData";
import Topper from "../../components/Topper";
import GiftingLeaderboardItem from "../../components/GiftingLeaderboardItem";
import { AppContext } from "../../AppContext";
import { userWeeklyPot } from "../../utils/beansPot";

const UserWeeklyBoard = () => {
  const [switchTabs, setSwitchTabs] = useState({
    current: true,
    prev: false,
  });
  const { giftingLeaderboard, info } = useContext(AppContext);
  const { weeklyBeansPotList } = info;
  const { weeklyUserPrev, weeklyUserNow } = giftingLeaderboard;

  const calculateEstRewards = (index) => {
    const totalBeansPot = switchTabs.current
      ? weeklyBeansPotList?.find((item) => item?.index === info?.weekIndex)
          ?.beansPotValue
      : weeklyBeansPotList?.find((item) => item?.index === info?.weekIndex - 1)
          ?.beansPotValue;

    const percent = userWeeklyPot?.find(
      (item) => item?.rank === index
    )?.percent;
    const result = Math.floor((percent / 100) * totalBeansPot);

    return result;
  };

  const toggleSwitch = () => {
    setSwitchTabs({ current: !switchTabs.current, prev: !switchTabs.prev });
  };
  useEffect(() => {
    if (switchTabs.current) {
      setSelectedData(weeklyUserNow);
    } else {
      setSelectedData(weeklyUserPrev);
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
            <Topper
              index={1}
              user={selectedData[0]}
              isTalent={false}
              showEst={true}
              calculateEstRewards={calculateEstRewards}
              isPrev={switchTabs.prev ? true : false}
            />
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
            <Topper
              index={2}
              user={selectedData[1]}
              isTalent={false}
              showEst={true}
              calculateEstRewards={calculateEstRewards}
              isPrev={switchTabs.prev ? true : false}
            />
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
            <Topper
              index={3}
              user={selectedData[2]}
              isTalent={false}
              showEst={true}
              calculateEstRewards={calculateEstRewards}
              isPrev={switchTabs.prev ? true : false}
            />
          </div>
        )}
      </div>
      <div className={`restWinners`}>
        {selectedData.slice(3, seeMore ? 10 : 20).map((item, index) => (
          <GiftingLeaderboardItem
            user={item}
            index={index + 4}
            isTalent={false}
            showEst={index <= 1 ? true : false}
            calculateEstRewards={calculateEstRewards}
            isPrev={switchTabs.prev ? true : false}
          />
        ))}
      </div>
      {switchTabs.current && weeklyUserNow.length > 10 ? (
        <button
          className={seeMore ? "seeMore" : "seeLess"}
          onClick={toggleSeeMore}
        />
      ) : (
        ""
      )}
      {switchTabs.prev && weeklyUserPrev.length > 10 ? (
        <button
          className={seeMore ? "seeMore" : "seeLess"}
          onClick={toggleSeeMore}
        />
      ) : (
        ""
      )}

      {switchTabs.current && weeklyUserNow?.length === 0 && (
        <div className="noDataFound">No Data Found</div>
      )}
      {switchTabs.prev && weeklyUserPrev?.length === 0 && (
        <div className="noDataFound">No Data Found</div>
      )}
    </div>
  );
};

export default UserWeeklyBoard;
