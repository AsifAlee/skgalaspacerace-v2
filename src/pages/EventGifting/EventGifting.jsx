import React, { useContext, useState } from "react";
import "../../styles/event-gifting.scss";
import stage from "../../images/event-gifting/stage.png";
import tag from "../../images/event-gifting/gifts-tag.png";
import GiftComponent from "../../components/GiftComponent";
import beansPotTag from "../../images/event-gifting/bean-pot-text.png";
import beansIcon from "../../images/bean-icon.png";
import rewBanner from "../../images/figh-for-planet/rewards-banner.png";
import TabButton from "../../components/TabButton";

import TalentRewards from "./TalentRewards";
import UserRewards from "./UserRewards";
import leaderboardTag from "../../images/figh-for-planet/leaderboard-banner.png";
import UserLeaderboard from "./UserLeaderboard";
import TalentLeaderboar from "./TalentLeaderboar";
import { AppContext } from "../../AppContext";

const EventGifting = () => {
  const [rewardsMainTabs, setRewardsMainTabs] = useState({
    user: true,
    talent: false,
  });
  const [leaderboardTabs, setLeaderboardTabs] = useState({
    user: true,
    talent: false,
  });
  const { info } = useContext(AppContext);

  const swtichTabs = (name) => {
    if (name === "user") {
      setLeaderboardTabs({
        user: true,
        talent: false,
      });
    } else {
      setLeaderboardTabs({
        user: false,
        talent: true,
      });
    }
  };
  const toggleRewardsTabs = (name) => {
    if (name === "user") {
      setRewardsMainTabs({
        user: true,
        talent: false,
      });
    } else {
      setRewardsMainTabs({
        user: false,
        talent: true,
      });
    }
  };
  return (
    <div className="event-gifting">
      <div className="gift-container">
        <div className="gifts">
          <GiftComponent
            rank={1}
            name="Space Rocket"
            price="77,000"
            id="40011771"
          />
          <GiftComponent
            rank={2}
            name="Spaceship"
            price="25,000"
            id="40001654"
          />
          <GiftComponent rank={3} name="Carnival" price="1,000" id="40001493" />

          <img src={stage} className="base" />
          <img className="tag" src={tag} />
        </div>
      </div>
      <div className="beanspot-container">
        <div className="beans-pot">
          <div className="beans-pot-img">
            <div className="beans-amt">
              <img src={beansIcon} />
              <span>{info.userOverallBeansPot}</span>
            </div>
          </div>
          <div className="beanspot-base">
            <img src={beansPotTag} className="beans-pot-tag" />
          </div>
        </div>
      </div>
      <div className="rewards-container">
        <img className="rew-banner" src={rewBanner} />
        <div className="rewards-tabs">
          <TabButton
            handleClick={toggleRewardsTabs}
            name="user"
            btnImg={rewardsMainTabs.user ? "userSelect" : "userUn"}
            showArrowImg={false}
            width="22vw"
          />
          <TabButton
            handleClick={toggleRewardsTabs}
            name="talent"
            btnImg={rewardsMainTabs.talent ? "talentSelect" : "talentUn"}
            showArrowImg={false}
            width="22vw"
          />
        </div>
        {rewardsMainTabs.talent ? <TalentRewards /> : <UserRewards />}
      </div>
      <div className="leaderboard">
        <img src={leaderboardTag} className="leaderboard-banner" />
        <div className="leaderbrd-main-tabs">
          <TabButton
            handleClick={swtichTabs}
            name="user"
            btnImg={leaderboardTabs.user ? "userSelect" : "userUn"}
            showArrowImg={false}
            width="22vw"
          />
          <TabButton
            handleClick={swtichTabs}
            name="talent"
            btnImg={leaderboardTabs.talent ? "talentSelect" : "talentUn"}
            showArrowImg={false}
            width="22vw"
          />
        </div>
        {leaderboardTabs.user ? <UserLeaderboard /> : <TalentLeaderboar />}
      </div>
    </div>
  );
};

export default EventGifting;
