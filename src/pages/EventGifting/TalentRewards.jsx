import React, { useCallback, useContext, useState } from "react";
import TabButton from "../../components/TabButton";
import {
  giftingrewards,
  talentDecRewards,
  talentNovRewards,
  talentOctRewards,
} from "../../utils/constants";
import RewardsSlider from "../../components/RewardsSlider";
import RewardsSlider2 from "../../components/RewardSlider2";
import { AppContext } from "../../AppContext";
import { useEffect } from "react";
import RewardsSlider3 from "../../components/RewardsSlider3";

const TalentRewards = () => {
  const { info } = useContext(AppContext);
  const [tabs, setTabs] = useState({
    monthly: true,
    weekly: false,
    overall: false,
  });

  const [talentOverallRewards, setTalentOverallRewards] = useState([]);

  useEffect(() => {
    setTalentOverallRewards(giftingrewards["talentOverall"]);
  }, []);

  const monthlyRewards =
    info.monthIndex === 10
      ? talentOctRewards
      : info.monthIndex === 11
      ? talentNovRewards
      : talentDecRewards;

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
        {tabs.overall ? (
          <RewardsSlider3
            // rewards={giftingrewards["talentOverall"]}
            eventGifting={true}
            showIndicators={true}
            rewards={talentOverallRewards}
            showRanks={true}
          />
        ) : tabs.monthly ? (
          <RewardsSlider2
            rewards={monthlyRewards}
            eventGifting={true}
            showIndicators={true}
            showRanks={true}
          />
        ) : (
          <RewardsSlider
            rewards={giftingrewards["talentWeekly"]}
            eventGifting={true}
            showRanks={false}
            showIndicators={false}
            multiImages={tabs.overall ? true : false}
          />
        )}
      </div>
    </div>
  );
};

export default TalentRewards;
