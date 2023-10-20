import React, { useContext, useState } from "react";
import "../../styles/fight-for-planet.scss";
import RewardsSlider from "../../components/RewardsSlider";
import { planets, rewards } from "../../utils/constants";
import banner from "../../images/figh-for-planet/leaderboard-banner.png";
import PlanetLbItem from "../../components/PlanetLbItem";
import { AppContext } from "../../AppContext";
import { weeklyRewards } from "../../utils/api";
import stage from "../../images/figh-for-planet/button-stage.png";
import me from "../../images/figh-for-planet/my-pic.png";
import opponentPic from "../../images/figh-for-planet/opponent-pic.png";
import powerIcon from "../../images/figh-for-planet/firepower-icon.png";
import leftArrow from "../../images/figh-for-planet/left-arrow.gif";
import rightArrow from "../../images/figh-for-planet/right-arrow.gif";
import myRocket from "../../images/figh-for-planet/my-spaceship.gif";
import oppRocket from "../../images/figh-for-planet/opponent-spaceship.gif";
import FightBwPlanets from "./FightBwPlanets";
import MatchSchedule from "../../popups/MatchSchedule";
import MyPlanetUpdates from "../../popups/MyPlanetUpdates";
import SvgaPlayer from "../../components/SvgaPlayer";
import planetSvga from "../../images/scroll-plane-icon.svga";
import PlanetInfo from "../../popups/PlanetInfo";
import {
  getCurrenTime,
  getCurrentTimeStamp,
  getUtcTimeInMilliSeconds,
  gotoProfile,
} from "../../utils/functions";
import { useEffect } from "react";
import unknown from "../../images/figh-for-planet/unknown-user.png";

import earth from "../../images/figh-for-planet/earth-icon.png";
import venus from "../../images/figh-for-planet/venus-icon.png";
import mercury from "../../images/figh-for-planet/mercury-icon.png";
import jupiter from "../../images/figh-for-planet/jupiter-icon.png";
import mars from "../../images/figh-for-planet/mars-icon.png";
import neptune from "../../images/figh-for-planet/neptune-icon.png";
import saturn from "../../images/figh-for-planet/saturn-icon.png";
import uranus from "../../images/figh-for-planet/uranus-icon.png";
import helmet from "../../images/game-area/helmet.png";
import PlanetSvga from "../../components/SvgaPlayer";

const Joined = () => {
  const {
    info,
    matchStarted,
    matchesFinished,
    groupInfoData,
    allPlanetData,
    matchInfo,
    user,
  } = useContext(AppContext);
  const { matchSchedule1v1 } = matchInfo;

  const { weekIndex } = info;
  const [showSchedule, setShowSchedule] = useState(false);
  const [showPlanetUpdates, setShowPlanetUpdates] = useState(false);
  const [planetInfo, setPlanetInfo] = useState(false);
  const [selectedPlanetData, setSelectedData] = useState([]);
  const [opponentPlanetName, setOpponentPlanetName] = useState("");

  const [matchDay, setIsMatchDay] = useState(false);
  const [currentMatch, setCurrentMatch] = useState(null);
  // let currentMatch;

  const checkMatchDay = () => {
    console.log("match day called");
    const currentTime = getUtcTimeInMilliSeconds(getCurrenTime());
    console.log("current time:", getCurrenTime());
    console.log(
      "current milli  time:",
      getUtcTimeInMilliSeconds(getCurrenTime())
    );

    matchSchedule1v1.forEach((item) => {
      if (
        currentTime >=
          getUtcTimeInMilliSeconds(item.startTime.replace(/-/g, "/")) &&
        currentTime <=
          getUtcTimeInMilliSeconds(item.endTime.replace(/-/g, "/")) &&
        info?.opponentUserId > 0
      ) {
        setIsMatchDay(true);
        setCurrentMatch(item);
        return item;
      }
    });
  };

  const togglePlanetInfo = (id) => {
    if (id) {
      setSelectedData(
        id === 1
          ? groupInfoData["mercury"]
          : id === 2
          ? groupInfoData["venus"]
          : id === 3
          ? groupInfoData["earth"]
          : id === 4
          ? groupInfoData["mars"]
          : id === 5
          ? groupInfoData["jupiter"]
          : id === 6
          ? groupInfoData["saturn"]
          : id === 7
          ? groupInfoData["uranus"]
          : groupInfoData["neptune"]
      );

      setPlanetInfo((prevState) => !prevState);
    } else {
      setPlanetInfo((prevState) => !prevState);
    }
  };

  const toggleSchedule = () => {
    setShowSchedule((prevState) => !prevState);
  };

  const togglePlanetUpdates = () => {
    setShowPlanetUpdates((prevState) => !prevState);
  };

  const weekRewards = weeklyRewards.find(
    (item) => item.weekIndex === weekIndex
  );

  useEffect(() => {
    if (currentMatch) {
      getOpponentPlanetName();
    }
  }, [currentMatch, matchSchedule1v1]);
  const getOpponentPlanetName = () => {
    let idToFilterWith;
    const opponentPlaneIdObj = currentMatch?.matchInfoList?.find(
      (item) =>
        info?.planetId === item?.planetId ||
        info.planetId === item?.opponentPlanetId
    );
    if (opponentPlaneIdObj) {
      idToFilterWith =
        info?.planetId === opponentPlaneIdObj["opponentPlanetId"]
          ? opponentPlaneIdObj["planetId"]
          : opponentPlaneIdObj["opponentPlanetId"];
      // console.log("opponet id:", idToFilterWith);

      setOpponentPlanetName(
        idToFilterWith === 1
          ? "Mercury"
          : idToFilterWith === 2
          ? "Venus"
          : idToFilterWith === 3
          ? "Earth"
          : idToFilterWith === 4
          ? "Mars"
          : idToFilterWith === 5
          ? "Jupiter"
          : idToFilterWith === 6
          ? "Saturn"
          : idToFilterWith === 7
          ? "Uranus"
          : "Neptune"
      );
    }
  };

  useEffect(() => {
    checkMatchDay();
  }, [currentMatch, matchSchedule1v1, matchDay, info]);

  const getPlanetImage = (id) => {
    if (id === 1) {
      return mercury;
    } else if (id === 2) {
      return venus;
    } else if (id === 3) {
      return earth;
    } else if (id === 4) {
      return mars;
    } else if (id === 5) {
      return jupiter;
    } else if (id === 6) {
      return saturn;
    } else if (id === 7) {
      return uranus;
    } else if (id === 8) {
      return neptune;
    }
  };

  const getSinglePlanetData = (id) => {
    let data =
      id === 1
        ? groupInfoData["mercury"]
        : id === 2
        ? groupInfoData["venus"]
        : id === 3
        ? groupInfoData["earth"]
        : id === 4
        ? groupInfoData["mars"]
        : id === 5
        ? groupInfoData["jupiter"]
        : id === 6
        ? groupInfoData["saturn"]
        : id === 7
        ? groupInfoData["uranus"]
        : id === 8
        ? groupInfoData["neptune"]
        : [];

    return data;
  };

  return (
    <div className="joined-planet">
      {info?.matchStage >= 1 ? (
        <FightBwPlanets togglePlanetUpdates={togglePlanetUpdates} />
      ) : (
        <>
          <div className="tabs">
            <button className="myplanet" onClick={togglePlanetUpdates} />
            <button className="schedule" onClick={toggleSchedule} />
          </div>
          {info.matchStage == 0 && matchDay && (
            <div>
              <div className="current-match">
                <div className="schedule" onClick={toggleSchedule}>
                  <img src={helmet} />
                  <div className="match-info">
                    <span>{currentMatch?.startTime}</span>
                    <span>{currentMatch?.endTime}</span>
                  </div>
                </div>
                <img src={stage} className="base" />
              </div>
            </div>
          )}

          {info.matchStage === -1 ? (
            <div className="planets-overlay">
              <PlanetSvga src={planetSvga} />
            </div>
          ) : (
            <div className="match-started-info">
              <ul>
                <li>
                  <span className="highlight">WINNER</span> WILL BE THE ONE WITH{" "}
                  <span className="highlight">MAXIMUN FIREPOWER </span> AT THE
                  END OF THE MATCH
                </li>
                <li>
                  YOUR OPPONENT WILL BE OF THE{" "}
                  <span className="highlight">SAME RANK</span> AS YOU ON THE
                  RESPECTIVE <span className="highlight">OPPOSITION TEAM</span>.
                </li>
                <li>
                  A PART OF <span className="highlight">LOSER'S FIREPOWER</span>
                  WILL BE <span className="highlight"> REDUCED</span> &{" "}
                  <span className="highlight">ADDED</span> TO THE{" "}
                  <span className="highlight">WINNER'S FIREPOWER</span> TALLY.
                </li>
                <li>
                  <span className="highlight">UNMATCHED</span> PLAYERS WILL HAVE
                  <span className="highlight">NO IMPACT</span> AS THEY HAD NO
                  OPPONENTS
                </li>
              </ul>
            </div>
          )}

          <div className="rewards">
            <div className="slider-container">
              <RewardsSlider
                rewards={weekRewards?.rewards || []}
                showRanks={false}
                showIndicators={true}
              />
            </div>
          </div>
          {matchDay && info.matchStage == 0 && (
            <div>
              <div className="match-banner">
                <span className="title">MY MATCH</span>

                <span className="endTime">{`Ends in ${currentMatch?.endTime}`}</span>
              </div>
              <div className="match-layout">
                <div className="my-team">
                  <img src={me} className="me" />
                  <div className="my-firepower">
                    <span>MY FIREPOWER:</span>
                    <div className="firepower">
                      <span>{info.firePower}</span>
                      <img src={powerIcon} />
                    </div>

                    <img src={leftArrow} className="leftArr" />
                  </div>
                  <img
                    className="my-team-user"
                    src={unknown}
                    onClick={() => gotoProfile(user?.userId)}
                  />
                  <div className="my-rocket">
                    <img src={myRocket} />
                  </div>
                </div>

                <div className="my-opp-team">
                  <img src={opponentPic} className="opp" />
                  <img
                    className="opp-team-user"
                    src={unknown}
                    onClick={() => gotoProfile(info?.opponentUserId)}
                  />
                  <div className="opp-firepower">
                    <span>OPPONENT'S FIREPOWER:</span>
                    <div className="firepower">
                      <span>{info.opponentFirepower}</span>
                      <img src={powerIcon} />
                    </div>
                  </div>
                  <div className="planet-name">
                    <span>{opponentPlanetName}</span>
                  </div>
                  <div className="opp-rocket">
                    <img src={oppRocket} />
                  </div>
                </div>

                <img src={stage} className="match-base" />
              </div>
            </div>
          )}
          <div className="leader-board-sec">
            <img className="banner" src={banner} />
            <div className="leaderboard">
              {allPlanetData?.map((planet, index) => (
                <PlanetLbItem
                  planet={planet}
                  index={index}
                  togglePlanetInfo={togglePlanetInfo}
                  data={getSinglePlanetData(planet?.planetId)}
                  getPlanetImage={getPlanetImage}
                />
              ))}
            </div>
          </div>
        </>
      )}

      {showSchedule && (
        <MatchSchedule
          popUpHandler={toggleSchedule}
          schedData={matchInfo?.matchSchedule1v1}
        />
      )}
      {showPlanetUpdates && (
        <MyPlanetUpdates popUpHandler={togglePlanetUpdates} />
      )}
      {planetInfo && (
        <PlanetInfo
          popUpHandler={togglePlanetInfo}
          data={selectedPlanetData}
          bigHeight={true}
        />
      )}
    </div>
  );
};

export default Joined;
