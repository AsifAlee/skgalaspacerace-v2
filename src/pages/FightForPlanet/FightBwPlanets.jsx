import React, { useContext, useState } from "react";
import strengthIcon from "../../images/figh-for-planet/strength-icon.png";
import RewardsSlider from "../../components/RewardsSlider";
import { AppContext } from "../../AppContext";
import { weeklyRewards } from "../../utils/api";
import stage from "../../images/event-gifting/stage.png";
import mercury from "../../images/figh-for-planet/mercury.png";
import vs from "../../images/figh-for-planet/vs.png";
import leaderboardBanner from "../../images/figh-for-planet/leaderboard-banner.png";
import TabButton from "../../components/TabButton";
import beansIcon from "../../images/bean-icon.png";
import beansRunnerup from "../../images/figh-for-planet/runnerup.png";
import beansPoTag2 from "../../images/figh-for-planet/bean-pot-text-2.png";
import WilCardRound from "./WilCardRound";
import MatchSchedule from "../../popups/MatchSchedule";
import { getCurrenTime, getUtcTimeInMilliSeconds } from "../../utils/functions";
import { useEffect } from "react";
import UserRoundLeaderBoard from "./UserRoundLeaderBoard";
import OppositeRoundLeaderBoard from "./OppositeLeaderBoard";
import {
  round1Rewards,
  round2Rewards,
  round3Rewards,
} from "../../utils/constants";

import Round3RewardsSlider from "../../components/Round3RewardsSlider";
import { userWeeklyPot } from "../../utils/beansPot";
import NotJoined from "./NotJoined";

const FightBwPlanets = ({ togglePlanetUpdates }) => {
  const [showSchedule, setShowSchedule] = useState(false);
  const {
    myPlanetInfo,
    allPlanetData,
    getRoundsData,
    info,
    matchInfo,
    getPlanetName,
    getPlanetImage,
    getPreviousRoundsData,
    getPlanetImageForRows,
  } = useContext(AppContext);
  const { matchStage } = info;
  const [round3Players, setRound3Players] = useState({
    player1: 0,
    player2: 0,
  });
  const [matchDay, setIsMatchDay] = useState(false);
  const [currentMatch, setCurrentMatch] = useState(null);
  const [opponentStrength, setOpponentStrength] = useState(0);

  const { matchFinalDetails, matchScheduleFinal } = matchInfo;

  const [round1OppId, setRound1OppId] = useState(null);
  const [round2OppId, setRound2OppId] = useState(null);
  const [round3OppId, setRound3OppId] = useState(null);
  const [round1MyId, setRound1MyId] = useState(null);
  const [round2MyId, setRound2MyId] = useState(null);
  const [round3MyId, setRound3MyId] = useState(null);

  const [currentRoundMyId, setCurrentRoundMyId] = useState(null);
  const [currentRoundOppId, setCurrentRoundOppId] = useState(null);
  const [opponentIdForPvP, setOpponentIdForPvP] = useState(null);

  const [rewwardsTabs, setRewardsTabs] = useState({
    round1: info.matchStage === 1 ? true : false,
    round2: info.matchStage === 2 ? true : false,
    round3: info.matchStage === 3 ? true : false,
  });

  const [boardTabs, setBoardTabs] = useState({
    round1: info.matchStage === 1 ? true : false,
    round2: info.matchStage === 2 ? true : false,
    round3: info.matchStage === 3 ? true : false,
  });

  const [leaderboardTabs, setLeaderboardTabs] = useState({
    user: true,
    talent: false,
  });
  const [winnerTabs, setWinnerTabs] = useState({
    winner: true,
    runnerUp: false,
  });

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
  const swtichWinnerTabs = (name) => {
    if (name === "winner") {
      setWinnerTabs({
        winner: true,
        runnerUp: false,
      });
    } else {
      setWinnerTabs({
        winner: false,
        runnerUp: true,
      });
    }
  };

  const swithcBoardTabs = (name) => {
    if (name === "round1") {
      setBoardTabs({
        round1: true,
        round2: false,
        round3: false,
      });
    } else if (name === "round2") {
      setBoardTabs({
        round1: false,
        round2: true,
        round3: false,
      });
    } else {
      setBoardTabs({
        round1: false,
        round2: false,
        round3: true,
      });
    }
  };

  const switchRewardsTabs = (name) => {
    if (name === "round1") {
      setRewardsTabs({
        round1: true,
        round2: false,
        round3: false,
      });
    } else if (name === "round2") {
      setRewardsTabs({
        round1: false,
        round2: true,
        round3: false,
      });
    } else {
      setRewardsTabs({
        round1: false,
        round2: false,
        round3: true,
      });
    }
  };
  const checkMatchDay = () => {
    let currentTime = getUtcTimeInMilliSeconds(getCurrenTime());
    // let currentTime = getUtcTimeInMilliSeconds("2023-09-24 10:00:00");

    matchScheduleFinal?.find((item) => {
      if (
        currentTime >=
          getUtcTimeInMilliSeconds(item.startTime.replace(/ /g, "T")) &&
        currentTime <= getUtcTimeInMilliSeconds(item.endTime.replace(/ /g, "T"))
      ) {
        setIsMatchDay(true);
        setCurrentMatch(item);

        return item;
      }
    });
    // console.log("match found is:");
  };

  const toggleSchedule = () => {
    setShowSchedule((prevState) => !prevState);
  };

  const getMyAndOppCurrentIdForRounds = () => {
    let currentMatchedObj = matchScheduleFinal?.find(
      (item) => item.matchId === matchStage
    );

    // console.log("matched object:", currentMatchedObj);

    if (currentMatchedObj) {
      const myMatch = currentMatchedObj.matchInfoList.find(
        (item) =>
          info.planetId === item.planetId ||
          info.planetId === item.opponentPlanetId
      );
      // console.log("my match is :", myMatch);
      if (!myMatch) {
        setCurrentRoundMyId(currentMatchedObj?.matchInfoList[0]?.planetId);
        setCurrentRoundOppId(
          currentMatchedObj?.matchInfoList[0]?.opponentPlanetId
        );
      } else {
        if (info.planetId === myMatch["planetId"]) {
          setCurrentRoundMyId(myMatch["planetId"]);
          setCurrentRoundOppId(myMatch["opponentPlanetId"]);
        } else {
          setCurrentRoundMyId(myMatch["opponentPlanetId"]);
          setCurrentRoundOppId(myMatch["planetId"]);
        }
      }
    }
  };

  console.log("round 1 opp id:", round1OppId);
  console.log("round 1 my id:", round1MyId);

  console.log("round 2 opp id:", round2OppId);
  console.log("round 2 my id:", round2MyId);

  const getIdForPreviousRounds = () => {
    let matchesFound;
    let myMatch;

    if (matchStage === 2) {
      // when round is 2 set round 1 ids
      matchesFound = matchFinalDetails?.find((item) => item.matchId === 1);

      // setRound1Match(matchesFound?.matchId);

      myMatch = matchesFound?.matchWinAndLostInfoList?.find(
        (item) =>
          item?.winnerPlanet === info?.planetId ||
          item?.loserPlanet === info?.planetId
      );
      if (myMatch) {
        if (info.planetId === myMatch["winnerPlanet"]) {
          setRound1MyId(myMatch["winnerPlanet"]);
          setRound1OppId(myMatch["loserPlanet"]);
        } else {
          setRound1MyId(myMatch["loserPlanet"]);
          setRound1OppId(myMatch["winnerPlanet"]);
        }
      }
    } else if (matchStage === 3) {
      // when round is 2 set round 1  round 2 ids

      let round1Matches;
      let round1CurrentMatch;
      let round2Matches;
      let round2CurrentMatch;

      round1Matches = matchFinalDetails?.find((item) => item.matchId === 1);
      // setRound2Match(matchesFound?.matchId);

      // console.log("round matches found:", round1Matches);
      if (round1Matches) {
        round1CurrentMatch = round1Matches?.matchWinAndLostInfoList?.find(
          (item) =>
            item.winnerPlanet === info.planetId ||
            item.loserPlanet === info.planetId
        );

        // console.log("round 1 current match:", round1CurrentMatch);

        if (round1CurrentMatch) {
          if (info.planetId === round1CurrentMatch["winnerPlanet"]) {
            setRound1MyId(round1CurrentMatch["winnerPlanet"]);
            setRound1OppId(round1CurrentMatch["loserPlanet"]);
          } else {
            setRound1MyId(round1CurrentMatch["loserPlanet"]);
            setRound1OppId(round1CurrentMatch["winnerPlanet"]);
          }
        }
      }

      // setting round 2 ids
      round2Matches = matchFinalDetails?.find((item) => item.matchId === 2);

      // console.log("round 2 matches:", round2Matches);
      if (round2Matches) {
        round2CurrentMatch = round2Matches?.matchWinAndLostInfoList.find(
          (item) =>
            item.winnerPlanet === info.planetId ||
            item.loserPlanet === info.planetId
        );

        if (round2CurrentMatch) {
          if (info.planetId === round2CurrentMatch["winnerPlanet"]) {
            setRound2MyId(round2CurrentMatch["winnerPlanet"]);
            setRound2OppId(round2CurrentMatch["loserPlanet"]);
          } else {
            setRound2MyId(round2CurrentMatch["loserPlanet"]);
            setRound2OppId(round2CurrentMatch["winnerPlanet"]);
          }
        }
      }
    }
  };

  const getOpponentPlanetIdNStrength = () => {
    let idToFilterWith;
    const opponentPlaneIdObj = currentMatch?.matchInfoList?.find(
      (item) =>
        info?.planetId === item?.planetId ||
        info.planetId === item?.opponentPlanetId
    );
    // console.log("oppon planet:", opponentPlaneIdObj);
    if (opponentPlaneIdObj) {
      idToFilterWith =
        info?.planetId === opponentPlaneIdObj["opponentPlanetId"]
          ? opponentPlaneIdObj["planetId"]
          : opponentPlaneIdObj["opponentPlanetId"];
      // console.log("opponet id:", idToFilterWith);

      setOpponentStrength(
        allPlanetData?.find((item) => item.planetId === idToFilterWith)
          ?.strength
      );
      setOpponentIdForPvP(
        allPlanetData?.find((item) => item.planetId === idToFilterWith)
          ?.planetId
      );
    }
  };

  useEffect(() => {
    if (currentRoundMyId) getRoundsData(currentRoundMyId, true);
  }, [currentRoundMyId, info]);

  useEffect(() => {
    if (currentRoundOppId) getRoundsData(currentRoundOppId, false);
  }, [currentRoundOppId, info]);

  useEffect(() => {
    if (currentMatch) {
      getOpponentPlanetIdNStrength();
    }
  }, [currentMatch, matchScheduleFinal, info]);

  useEffect(() => {
    if (matchScheduleFinal && matchStage >= 1 && matchStage <= 3) {
      getMyAndOppCurrentIdForRounds();
    }
  }, [matchStage, matchScheduleFinal, info]);

  useEffect(() => {
    if (matchFinalDetails && matchStage >= 2) {
      getIdForPreviousRounds();
    }
  }, [matchFinalDetails.length, matchInfo, info]);

  useEffect(() => {
    checkMatchDay();
  }, [matchScheduleFinal, info]);

  useEffect(() => {
    if (matchStage === 3 && matchScheduleFinal) {
      const match = matchScheduleFinal.find((item) => item.matchId === 3);
      const matchObj = match?.matchInfoList[0];

      if (matchObj) {
        if (info.planetId === matchObj?.planetId) {
          setRound3Players({
            player1: matchObj.planetId,
            player2: matchObj.opponentPlanetId,
          });
        } else if (info.planetId === matchObj?.opponentPlanetId) {
          setRound3Players({
            player1: matchObj.opponentPlanetId,
            player2: matchObj.planetId,
          });
        } else {
          setRound3Players({
            player1: matchObj.planetId,
            player2: matchObj.opponentPlanetId,
          });
        }
      }

      // setRound3Players({
      //   player1: matchScheduleFinal.find((item) => item.matchId === 3)
      //     ?.matchInfoList[0]?.planetId,
      //   player2: matchScheduleFinal.find((item) => item.matchId === 3)
      //     ?.matchInfoList[0]?.opponentPlanetId,
      // });
    }
  }, [matchScheduleFinal, info]);

  console.log("round3 players:", round3Players);

  //  getting previos rounds data when round is 2
  useEffect(() => {
    if (info.matchStage === 2 && round1MyId !== null && round1OppId !== null) {
      getPreviousRoundsData(round1MyId, 1, true, 2);
      getPreviousRoundsData(round1OppId, 1, false, 2);
    }
  }, [round1MyId, round1OppId]);

  //  getting previos rounds data when round is 3
  useEffect(() => {
    if (
      info.matchStage === 3 &&
      round1MyId !== null &&
      round1OppId !== null &&
      round2MyId !== null &&
      round2OppId !== null
    ) {
      getPreviousRoundsData(round1MyId, 1, true, 3);
      getPreviousRoundsData(round1OppId, 1, false, 3);

      getPreviousRoundsData(round2MyId, 2, true, 3);
      getPreviousRoundsData(round2OppId, 2, false, 3);
    }
  }, [round1MyId, round1OppId, round2MyId, round2OppId]);

  return (
    <div className="fight-bw-planets">
      <>
        {info?.canJoinPlanetManually &&
        matchStage === 2 &&
        info?.planetId === 0 ? (
          <WilCardRound />
        ) : !info?.canJoinPlanetManually &&
          matchStage === 2 &&
          info?.planetId === 0 ? (
          <div>
            <WilCardRound />
          </div>
        ) : (
          <>
            <div className="match-started-info">
              {matchStage === 2 ? (
                <ul>
                  <li>
                    PLANET WITH MAXIMUM STRENGTH{" "}
                    <span>
                      <img src={strengthIcon} />
                    </span>
                    AT THE END OF THE ROUND WILL BE CONSIDERED AS WINNER
                  </li>
                  <li>
                    THE STRENGTH{" "}
                    <span>
                      <img src={strengthIcon} />
                    </span>{" "}
                    OF THE LOOSER TEAM WILL BE TRANSFERED TO THE WINNING TEAM.
                  </li>
                  <li>
                    IN THIS ROUND,LOOSING PLANET WILL BE ELIMINATED ALONG WITH
                    IT'S MEMBERS. IF ELIMINATED, USERS WILL NOT BE ABLE TO
                    PARTICIPATE IN THE FINAL ROUND.
                  </li>
                </ul>
              ) : matchStage === 1 ? (
                <ul>
                  <li>
                    PLANET WITH MAXIMUM STRENGTH{" "}
                    <span>
                      <img src={strengthIcon} />
                    </span>
                    AT THE END OF THE ROUND WILL BE CONSIDERED AS WINNER
                  </li>
                  <li>
                    THE STRENGTH{" "}
                    <span>
                      <img src={strengthIcon} />
                    </span>{" "}
                    OF THE LOOSER TEAM WILL BE TRANSFERED TO THE WINNING TEAM.
                  </li>
                  <li>
                    After Round 1, all the losing members who were in losing
                    Planets, will be eliminated but will be able to rejoin using
                    Wildcards.
                  </li>
                  <li>
                    After Round 2, all the losing members who were in losing
                    Planets, will be eliminated and will not be able to rejoin
                    the event
                  </li>
                </ul>
              ) : (
                <ul>
                  <li>
                    PLANET WITH MAXIMUM STRENGTH{" "}
                    <span>
                      <img src={strengthIcon} />
                    </span>
                    AT THE END OF THE ROUND WILL BE CONSIDERED AS WINNER
                  </li>
                  <li>
                    TOP 5 CONTRIBUTORS IN THE WINNING TEAM WILL RECIEVE THE
                    BEANS FROM BEANS POT.
                  </li>
                </ul>
              )}
            </div>
            {matchStage >= 3 && (
              <div className="winners-btn">
                <TabButton
                  handleClick={swtichWinnerTabs}
                  name="winner"
                  btnImg={winnerTabs.winner ? "winnerSel" : "winnerUn"}
                  showArrowImg={false}
                  width="27vw"
                />
                <TabButton
                  handleClick={swtichWinnerTabs}
                  name="runner"
                  btnImg={winnerTabs.runnerUp ? "runnerSel" : "runnerUn"}
                  showArrowImg={false}
                  width="27vw"
                />
              </div>
            )}
            {matchStage >= 3 && (
              <div className="beanspot-container">
                <div className="beans-pot">
                  <div className="beans-pot-img">
                    <div className="beans-amt">
                      <img src={beansIcon} />
                      <span>
                        {winnerTabs.winner
                          ? info.beansPotMap.champion
                          : info.beansPotMap.runner_up}
                      </span>
                    </div>
                  </div>
                  <div className="beanspot-base">
                    <img
                      src={winnerTabs.winner ? beansPoTag2 : beansRunnerup}
                      className="beans-pot-tag"
                    />
                  </div>
                </div>
              </div>
            )}

            {matchStage <= 3 && (
              <div className="rewards">
                <div className="rewards-tabs">
                  <button
                    className={`round1 ${
                      rewwardsTabs.round1 ? "round1Sel" : "round1Un"
                    }`}
                    onClick={() => {
                      switchRewardsTabs("round1");
                    }}
                  />
                  <button
                    className={`round2 ${
                      rewwardsTabs.round2 ? "round2Sel" : "round2Un"
                    }`}
                    onClick={() => {
                      if (matchStage < 2) {
                        return;
                      }
                      switchRewardsTabs("round2");
                    }}
                  />
                  <button
                    className={`round3 ${
                      rewwardsTabs.round3 ? "round3Sel" : "round3Un"
                    }`}
                    onClick={() => {
                      if (matchStage < 3) {
                        return;
                      }
                      switchRewardsTabs("round3");
                    }}
                  />
                </div>
                <div className="slider-container">
                  {rewwardsTabs.round1 ? (
                    <Round3RewardsSlider
                      rewards={round1Rewards}
                      showIndicators={true}
                      showRanks={true}
                    />
                  ) : rewwardsTabs.round2 ? (
                    <Round3RewardsSlider
                      rewards={round2Rewards}
                      showIndicators={true}
                      showRanks={true}
                    />
                  ) : (
                    <RewardsSlider rewards={round3Rewards} showRanks={true} />
                  )}
                </div>
              </div>
            )}

            <div className="tabs">
              {info.planetId ? (
                <button className="myplanet" onClick={togglePlanetUpdates} />
              ) : (
                ""
              )}

              <button className="schedule" onClick={toggleSchedule} />
            </div>

            <div>
              {/* round 1 & 2 me vs opp */}
              {matchDay === true &&
                matchStage >= 1 &&
                matchStage < 3 &&
                info.planetId && (
                  <div className="meVsOpp">
                    <div className="myPlanet">
                      <div className="myinfo">
                        <span style={{ color: "white" }}>
                          MY PLANET STRENGTH
                        </span>
                        <div className="strength">
                          <span>{myPlanetInfo.strength}</span>
                          <img src={strengthIcon} />
                        </div>
                      </div>
                      <div className="imageDiv">
                        <img
                          src={getPlanetImageForRows(myPlanetInfo.planetId)}
                        />
                      </div>
                    </div>
                    <div className="oopPlanet">
                      <div className="myinfo">
                        <span style={{ color: "white" }}>
                          OPPOSITE PLANET STRENGTH
                        </span>
                        <div className="strength">
                          <span>{opponentStrength}</span>
                          <img src={strengthIcon} />
                        </div>
                      </div>
                      <div className="imageDiv">
                        <img src={getPlanetImageForRows(opponentIdForPvP)} />
                      </div>
                    </div>
                    <img className="vs" src={vs} />

                    <img src={stage} className="base" />
                  </div>
                )}

              {/* round3 me vs opp */}
              {matchDay === true && matchStage >= 3 && (
                <div className="meVsOpp">
                  <div className="myPlanet">
                    <div className="myinfo">
                      <span style={{ color: "white" }}>
                        {`${
                          info.planetId === round3Players.player1
                            ? "MY"
                            : getPlanetName(round3Players.player1)
                        } PLANET STRENGTH`}
                      </span>
                      <div className="strength">
                        <span>
                          {
                            allPlanetData.find(
                              (item) => item.planetId === round3Players.player1
                            )?.strength
                          }
                        </span>
                        <img src={strengthIcon} />
                      </div>
                    </div>
                    <div className="imageDiv">
                      <img src={getPlanetImageForRows(round3Players.player1)} />
                    </div>
                  </div>
                  <div className="oopPlanet">
                    <div className="myinfo">
                      <span style={{ color: "white" }}>
                        {/* {`${getPlanetName(
                          round3Players.player2
                        )} PLANET STRENGTH`} */}
                        OPPOSITE PLANET STRENGTH
                      </span>
                      <div className="strength">
                        <span>
                          {
                            allPlanetData.find(
                              (item) => item.planetId === round3Players.player2
                            )?.strength
                          }
                        </span>
                        <img src={strengthIcon} />
                      </div>
                    </div>
                    <div className="imageDiv">
                      <img src={getPlanetImageForRows(round3Players.player2)} />
                    </div>
                  </div>
                  <img className="vs" src={vs} />

                  <img src={stage} className="base" />
                </div>
              )}
            </div>

            <div>
              <div className="leader-board-sec">
                <img className="banner" src={leaderboardBanner} />
                <div className="round-tabs">
                  {info.planetId ? (
                    <button
                      className={`round1 ${
                        boardTabs.round1 ? "round1Sel" : "round1Un"
                      }`}
                      onClick={() => {
                        swithcBoardTabs("round1");
                      }}
                    />
                  ) : (
                    ""
                  )}
                  {info.planetId ? (
                    <button
                      className={`round2 ${
                        boardTabs.round2 ? "round2Sel" : "round2Un"
                      }`}
                      onClick={() => {
                        if (matchStage < 2 && info.planetId) {
                          return;
                        }
                        swithcBoardTabs("round2");
                      }}
                    />
                  ) : (
                    ""
                  )}

                  <button
                    className={`round3 ${
                      boardTabs.round3 ? "round3Sel" : "round3Un"
                    }`}
                    onClick={() => {
                      if (matchStage < 3) {
                        return;
                      }
                      swithcBoardTabs("round3");
                    }}
                  />
                </div>
                {boardTabs.round3 && info.matchStage === 3 && (
                  <div className="est-info">
                    <p>
                      NOTE: Est. Rewards displayed are for winning Planet's
                      users only.
                    </p>
                  </div>
                )}
                {boardTabs.round3 &&
                  info.planetId !== round3Players.player1 &&
                  info.planetId !== round3Players.player2 &&
                  info.matchStage === 3 && (
                    <div className="est-info">
                      <p>
                        NOTE: You are not a part of this event anymore.These are
                        the details of the the ongoing match
                      </p>
                    </div>
                  )}

                <div className="leaderbrd-main-tabs">
                  <div
                    onClick={() => swtichTabs("user")}
                    className={`imgBtn ${
                      leaderboardTabs.user ? "orangeSel" : "orangeUn"
                    }`}
                  >
                    <span className="div-span">
                      {boardTabs.round1 || boardTabs.round2
                        ? "My Planet"
                        : matchStage === 3 &&
                          info.planetId === round3Players.player1
                        ? "My Planet"
                        : matchStage === 3
                        ? getPlanetName(round3Players.player1)
                        : ""}
                    </span>
                  </div>

                  <div
                    className={`imgBtn ${
                      leaderboardTabs.talent ? "oppPlanetSel" : "oppPlanetUn"
                    }`}
                    onClick={() => swtichTabs("talent")}
                  ></div>
                </div>

                {leaderboardTabs.user ? (
                  <UserRoundLeaderBoard
                    round={boardTabs.round1 ? 1 : boardTabs.round2 ? 2 : 3}
                  />
                ) : (
                  <OppositeRoundLeaderBoard
                    round={boardTabs.round1 ? 1 : boardTabs.round2 ? 2 : 3}
                  />
                )}
              </div>
            </div>
          </>
        )}
      </>

      {showSchedule && (
        <MatchSchedule
          popUpHandler={toggleSchedule}
          schedData={matchInfo?.matchScheduleFinal}
        />
      )}
    </div>
  );
};

export default FightBwPlanets;
