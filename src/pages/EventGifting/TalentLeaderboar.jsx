import React, { useState } from "react";
import TabButton from "../../components/TabButton";
import TalentMonthlyBoard from "./TalentMonthlyBoard";
import TalentWeeklyBoard from "./TalentWeeklyBoard";
import TalentOVerallBoard from "./TalentOverallBoard";

const TalentLeaderboar = () => {
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
    <div className="leaderboard-container">
      <div className="userLeaderboard">
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
        {tabs.monthly ? (
          <TalentMonthlyBoard />
        ) : tabs.weekly ? (
          <TalentWeeklyBoard />
        ) : (
          <TalentOVerallBoard />
        )}
      </div>
    </div>
  );
};

export default TalentLeaderboar;
