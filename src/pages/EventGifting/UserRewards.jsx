import React, { useState } from "react";
import TabButton from "../../components/TabButton";
import { giftingrewards } from "../../utils/constants";
import RewardsSlider from "../../components/RewardsSlider";
import UserOverallSlider from "../../components/UserOverallSlider";
const UserRewards = () => {
  const [tabs, setTabs] = useState({
    monthly: true,
    weekly: false,
    overall: false,
  });

  const toggleTabs = (name) => {
    if (name === "monthly") {
      setTabs({
        monthly: true,
        weekly: false,
        overall: false,
      });
    } else if (name === "weekly") {
      setTabs({
        monthly: false,
        weekly: true,
        overall: false,
      });
    } else if (name === "overall") {
      setTabs({
        monthly: false,
        weekly: false,
        overall: true,
      });
    }
  };

  return (
    <div className="user-rewards">
      <div className="inner-tabs">
        <div>
          <TabButton
            handleClick={toggleTabs}
            name="monthly"
            btnImg={tabs.monthly ? "monthlySel" : "monthlyUn"}
            showArrowImg={false}
            width="20vw"
            height="8vw"
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: "1vw",
          }}
        >
          <TabButton
            handleClick={toggleTabs}
            name="weekly"
            btnImg={tabs.weekly ? "weeklySel" : "weeklyUn"}
            showArrowImg={false}
            width="18vw"
            height="8vw"
          />
        </div>

        <div
          style={{
            position: "absolute",
            top: "1vw",
            left: "36vw",
          }}
        >
          <TabButton
            handleClick={toggleTabs}
            name="overall"
            btnImg={tabs.overall ? "overallSel" : "overallUn"}
            showArrowImg={false}
            width="16vw"
            height="8vw"
          />
        </div>
      </div>
      <div className="rewards-container">
        {tabs.monthly ? (
          <RewardsSlider
            rewards={giftingrewards.userMonthly}
            showRanks={true}
            eventGifting={true}
            // showIndicators={true}
          />
        ) : tabs.weekly ? (
          <RewardsSlider
            rewards={giftingrewards.userWeekly}
            showRanks={true}
            eventGifting={true}
            // showIndicators={true}
          />
        ) : (
          <UserOverallSlider
            rewards={giftingrewards.userOverall}
            showRanks={true}
            eventGifting={true}
            // showIndicators={true}
          />
        )}
      </div>
    </div>
  );
};

export default UserRewards;
