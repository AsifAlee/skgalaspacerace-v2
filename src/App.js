import "./App.scss";
import Header from "./components/Header";
// import { weeks } from "./utils/api";
import letsPlayTag from "./images/figh-for-planet/topper-design.png";
import TabButton from "./components/TabButton";

import { useContext, useState } from "react";
import PlanetFight from "./pages/FightForPlanet/PlanetFight";
import selectArrow from "./images/figh-for-planet/selected-tab-arrow.gif";
import selectArrowUn from "./images/figh-for-planet/unselected-tab-arrow.png";

import EventGifting from "./pages/EventGifting/EventGifting";
import GameArea from "./pages/GameArea/GameArea";
import Guide from "./popups/Guide";
import { AppContext } from "./AppContext";
import { tab } from "@testing-library/user-event/dist/tab";

function App() {
  const [tabs, setTabs] = useState({
    gameArea: true,
    fightForPlanet: false,
    giftingLeaderboard: false,
  });

  const [showGuide, setShowGuide] = useState(false);
  const toggleGuide = () => {
    setShowGuide((prevState) => !prevState);
  };
  const { gameLeaderBoard } = useContext(AppContext);

  const toggleMainTabs = (name) => {
    if (name === "gameArea") {
      setTabs({
        gameArea: true,
        fightForPlanet: false,
        giftingLeaderboard: false,
      });
    } else if (name === "fightForPlanet") {
      setTabs({
        gameArea: false,
        fightForPlanet: true,
        giftingLeaderboard: false,
      });
    }
    if (name === "giftingLeaderboard") {
      setTabs({
        gameArea: false,
        fightForPlanet: false,
        giftingLeaderboard: true,
      });
    }
  };
  return (
    <div className="App">
      <Header showMarquee={tabs.gameArea} />

      <button className="guideBtn" onClick={toggleGuide} />

      <>
        <div className="main-tabs">
          <img src={letsPlayTag} className="lets-play-title" />
          <div
            style={{ position: "absolute", top: "18vw", left: "-1vw" }}
            className="d-flex"
          >
            <TabButton
              handleClick={toggleMainTabs}
              name="gameArea"
              btnImg={tabs.gameArea ? "gameArea" : "gameAreaUn"}
              arrowImage={tabs.gameArea ? selectArrow : selectArrowUn}
              showArrowImg={true}
            />
            <TabButton
              handleClick={toggleMainTabs}
              name="fightForPlanet"
              btnImg={
                tabs.fightForPlanet ? "fightForPlanet" : "fightForPlanetUn"
              }
              arrowImage={tabs.fightForPlanet ? selectArrow : selectArrowUn}
              showArrowImg={true}
            />

            <TabButton
              handleClick={toggleMainTabs}
              name="giftingLeaderboard"
              btnImg={
                tabs.giftingLeaderboard ? "giftingBoard" : "giftingBoardUn"
              }
              arrowImage={tabs.giftingLeaderboard ? selectArrow : selectArrowUn}
              showArrowImg={true}
            />
          </div>
        </div>
      </>
      {tabs.fightForPlanet ? (
        <PlanetFight />
      ) : tabs.giftingLeaderboard ? (
        <EventGifting />
      ) : (
        <GameArea />
      )}
      {showGuide && <Guide popUpHandler={toggleGuide} />}
      <p className="rights">All Rights reserved by streamkar</p>
    </div>
  );
}

export default App;
