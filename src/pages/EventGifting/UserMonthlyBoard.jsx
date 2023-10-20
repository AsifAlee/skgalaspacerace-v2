import React, { useContext, useEffect, useRef, useState } from "react";
import { SwitchButton } from "../../components/SwitchButton";
import switchBg from "../../images/event-gifting/slide-button-bg.png";
import "../../styles/event-gifting.scss";
// import { userMonthlyNow, userMonthlyPrev } from "../../utils/testData";
import Topper from "../../components/Topper";
import GiftingLeaderboardItem from "../../components/GiftingLeaderboardItem";
import { AppContext } from "../../AppContext";
import { userMonthlyPot } from "../../utils/beansPot";

const UserMonthlyBoard = () => {
  const { giftingLeaderboard, info } = useContext(AppContext);
  const { userMonthlyNow, userMonthlyPrev } = giftingLeaderboard;
  const { monthlyBeansPotList } = info;

  const [switchTabs, setSwitchTabs] = useState({
    current: true,
    prev: false,
  });
  const [selectedData, setSelectedData] = useState([]);
  const [seeMore, setSeeMore] = useState(true);

  const toggleSwitch = () => {
    setSwitchTabs({ current: !switchTabs.current, prev: !switchTabs.prev });
  };

  const calculateEstRewards = (index) => {
    const totalBeansPot = switchTabs.current
      ? monthlyBeansPotList.find((item) => item.index === info.monthIndex)
          ?.beansPotValue
      : monthlyBeansPotList.find((item) => item.index === info.monthIndex - 1)
          ?.beansPotValue;

    const percent = userMonthlyPot.find((item) => item.rank === index)?.percent;
    const result = Math.floor((percent / 100) * totalBeansPot);

    return result;
  };
  useEffect(() => {
    if (switchTabs.current) {
      setSelectedData(userMonthlyNow);
    } else {
      setSelectedData(userMonthlyPrev);
    }
  }, [switchTabs, giftingLeaderboard]);

  const toggleSeeMore = () => {
    setSeeMore((prevState) => !prevState);
  };

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
        {selectedData?.slice(3, seeMore ? 10 : 20).map((item, index) => (
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
      {switchTabs.current && userMonthlyNow?.length > 10 ? (
        <button
          className={seeMore ? "seeMore" : "seeLess"}
          onClick={toggleSeeMore}
        />
      ) : (
        ""
      )}
      {switchTabs.prev && userMonthlyPrev?.length > 10 ? (
        <button
          className={seeMore ? "seeMore" : "seeLess"}
          onClick={toggleSeeMore}
        />
      ) : (
        ""
      )}

      {switchTabs.current && userMonthlyNow?.length === 0 && (
        <div className="noDataFound">No Data Found</div>
      )}
      {switchTabs.prev && userMonthlyPrev?.length === 0 && (
        <div className="noDataFound">No Data Found</div>
      )}
    </div>
  );
};

export default UserMonthlyBoard;
