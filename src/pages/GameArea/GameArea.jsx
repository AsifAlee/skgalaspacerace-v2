import React, { useContext, useState } from "react";
import "../../styles/game-area.scss";

import stage from "../../images/event-gifting/stage.png";
import userArtInfo from "../../images/game-area/user-spaceship-info-art.png";
import leaderboardTag from "../../images/figh-for-planet/leaderboard-banner.png";
import GameLeaderboardItem from "../../components/GameLeaderbordItem";
import helmet from "../../images/game-area/helmet.png";
import GamePopup from "../../popups/GamePopup";
import RewardsHistory from "../../popups/RewardsHistory";
import { baseUrl, testToken, testUserId } from "../../utils/api";
import { AppContext } from "../../AppContext";
import gameScreenTxt from "../../images/game-area/game-screen-text.png";
import { useEffect } from "react";

const GameArea = () => {
  const [seeMore, setSeeMore] = useState(true);
  const [gamePopup, setGamePopup] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [rewardsHist, setRewardsHist] = useState(false);
  const [isInputZero, setIsInputZero] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [inputValue, setInputValue] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isDecimalInput, setIsDecimalInput] = useState(false);
  const {
    user,
    info,
    gameLeaderBoard,
    getInfo,
    getRewardHistroy,
    getGameLeaderboardData,
    getGroupParticipant,
    getRewardDetails,
    getRoundsData,
    getAllPlanetData,
    getMyPlanetInfo,
  } = useContext(AppContext);
  const [errorCode, setErrorCode] = useState(null);
  const [gameRewards, setGameRewards] = useState([]);
  const [rewardsContent, setRewardsContent] = useState([]);
  const [gameClass, setGameClass] = useState({
    game: "",
    foreEver: "",
  });
  const [warn, setWarn] = useState("");
  const [gameTime, setGameTime] = useState(0);
  const [shakeText, setShakeText] = useState(false);

  useEffect(() => {
    if (info.gameIndex === 1 || info.gameIndex === 2) {
      setGameClass({
        game: "game1",
        foreEver: "game1Forever",
      });
      setGameTime(2500);
    } else if (info.gameIndex === 3 || info.gameIndex === 4) {
      setGameClass({
        game: "game2",
        foreEver: "game2Forever",
      });
      setGameTime(1000);
    } else if (info.gameIndex === 5 || info.gameIndex === 6) {
      setGameClass({
        game: "game3",
        foreEver: "game3Forever",
      });
      setGameTime(1000);
    } else if (info.gameIndex === 7) {
      setGameClass({
        game: "game4",
        foreEver: "game4Forever",
      });
      setGameTime(2500);
    }
  }, [info.gameIndex]);

  const toggleRewHistory = () => {
    setRewardsHist((prevState) => !prevState);
  };

  const toggleSeeMore = () => {
    setSeeMore((prevState) => !prevState);
  };
  const toggleGamePopup = () => {
    setIsDisabled(false);
    setGamePopup((prevState) => !prevState);
  };
  const formatData = (originalArray) => {
    const newArray = [];
    for (let i = 0; i < originalArray?.length; i += 2) {
      newArray?.push(originalArray?.slice(i, i + 2));
    }
    // console.log("new Array", newArray);
    return newArray;
  };
  const onUpCheck = (e) => {
    let max;
    if (/[+-.]/.test(e.key)) {
      setInputValue("");
    } else {
      // let max = userInfo.throwsLeft < 99 ?  userInfo.throwsLeft : 99;
      if (info.chances <= 999 && info.chances > 0) {
        max = info.chances;
      } else if (info.chances > 999) {
        max = 999;
      } else if (info.chances === 0) {
        max = 1;
      }
      let number = inputValue > max ? max : inputValue <= 0 ? "" : inputValue;
      setInputValue(parseInt(number));
    }
  };
  const onChangeHandle = (event) => {
    if (!event.target.value) {
      setIsInputZero(true);
    } else {
      setIsInputZero(false);
    }
    setInputValue(parseInt(event.target.value));
  };

  const playGame = () => {
    if (!inputValue) {
      setWarn("Enter Some value");
      setShakeText(true);
      return;
    } else {
      setShakeText(false);
    }
    if (inputValue.toString().includes(".")) {
      setIsDecimalInput(true);
      setGamePopup(true);
      return;
    }

    if (isDisabled) {
      return;
    }
    setIsDisabled(true);
    if (!inputValue) {
      setIsInputZero(true);
      setIsDisabled(false);
      return;
    }
    fetch(
      `${baseUrl}/api/activity/galaSpaceRace/playGame?playCount=${inputValue}`,
      {
        method: "POST",
        headers: {
          checkTag: "",
          userId: user.userId,
          token: user.token,
          // userId: testUserId,
          // token: testToken,
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) =>
        response.json().then((response) => {
          setErrorCode(response.errorCode);
          setErrMsg(response?.msg);
          if (response.errorCode === 0) {
            setIsPlaying(true);
            setGameRewards(formatData(response.data.rewardDTOList));
            setRewardsContent(response.data.rewardContent);
            getRewardHistroy();
            getGameLeaderboardData();
            getGroupParticipant(info.planetId);
            getAllPlanetData();
            getMyPlanetInfo();
            getInfo();
          }
          setTimeout(() => {
            setGamePopup(true);
            setIsPlaying(false);
            // getInfo();
            setInputValue(1);
            setIsDisabled(false);
            // getRewardHistroy();
            // getGameLeaderboardData();
            // getGroupParticipant(info.planetId);
            // getAllPlanetData();
            // getMyPlanetInfo();
          }, gameTime);
        })
      )
      .catch((error) => {
        console.error(error);
        setInputValue(1);
        setIsDisabled(false);
        setIsPlaying(false);
      });
  };
  return (
    <div className="game-area">
      <div className="info-container">
        <div className="game-info">
          <div className={`firepower ${!info.firePower && "blackNWhite"}`}>
            <span className="title">FIRE POWER COLLECTED</span>
            <span className="value">{info.firePower}</span>
          </div>
          <div className={`growth ${!info.growth && "blackNWhite"}`}>
            <span className="title">GROWTH POINT</span>
            <span className="value">{info.growth}</span>
          </div>
          <div className={`trophies ${!info.trophies && "blackNWhite"}`}>
            <span className="title">TROPHIES</span>
            <span className="value">{info.trophies}</span>
          </div>

          <div className={`wildcards ${!info.wildcards && "blackNWhite"}`}>
            <span className="title">Wildcards</span>
            <span className="value">{info.wildcards}</span>
          </div>

          <img src={userArtInfo} className="art" />
          <img src={stage} className="stage" />
        </div>
        <div>
          <div className="game-section">
            <div className="game-screen">
              <button className="rewards-hist" onClick={toggleRewHistory} />
              <div className="chances">
                <span>{`MY CHANCES : ${info.chances}`}</span>
              </div>
              <div
                className={`play-area ${
                  isPlaying ? gameClass.game : gameClass.foreEver
                }`}
              ></div>
            </div>
            <div className="chances-n-play-btns">
              <div className="type-chances">
                <img src={helmet} className="helmet" />
                <input
                  type="number"
                  value={inputValue}
                  min={1}
                  max={999}
                  onChange={onChangeHandle}
                  onKeyUp={onUpCheck}
                  pattern="[0-9]*"
                  style={{ border: isInputZero ? "1px solid red" : "" }}
                />
                {shakeText && (
                  <span className={`warning-text shaking-text`}>
                    Enter some value
                  </span>
                )}
              </div>
              <img src={gameScreenTxt} className="game-screen-text" />

              <button
                className={`playBtn ${isDisabled && "blackNWhite"}`}
                onClick={playGame}
              />

              <img src={stage} className="base" />
            </div>
          </div>
        </div>
        <div>
          <div className="leaderboard-sec">
            <img src={leaderboardTag} className="banner" />
            <div className="board ">
              <div className="winnerList">
                {seeMore
                  ? gameLeaderBoard
                      ?.slice(0, 10)
                      ?.map((item, index) => (
                        <GameLeaderboardItem user={item} index={index + 1} />
                      ))
                  : gameLeaderBoard
                      ?.slice(0, 21)
                      ?.map((item, index) => (
                        <GameLeaderboardItem user={item} index={index + 1} />
                      ))}
              </div>
              {gameLeaderBoard?.length > 10 && (
                <button
                  className={seeMore ? "gameSeeMore" : "gameSeeLess"}
                  onClick={toggleSeeMore}
                />
              )}

              {gameLeaderBoard?.length === 0 && (
                <div className="gameNoDataFound">No Data Found</div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div id="extraContent"></div>
      {gamePopup && (
        <GamePopup
          popUpHandler={toggleGamePopup}
          rewards={gameRewards}
          errorCode={errorCode}
          errMsg={errMsg}
          rewardContent={rewardsContent}
          isDecimalInput={isDecimalInput}
        />
      )}
      {rewardsHist && <RewardsHistory popUpHandler={toggleRewHistory} />}
    </div>
  );
};

export default GameArea;
