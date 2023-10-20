import { createContext, useEffect, useState } from "react";
import { baseUrl, testUserId } from "./utils/api";
import earth from "./images/figh-for-planet/earth-icon.png";
import venus from "./images/figh-for-planet/venus-icon.png";
import mercury from "./images/figh-for-planet/mercury-icon.png";
import jupiter from "./images/figh-for-planet/jupiter-icon.png";
import mars from "./images/figh-for-planet/mars-icon.png";
import neptune from "./images/figh-for-planet/neptune-icon.png";
import saturn from "./images/figh-for-planet/saturn-icon.png";
import uranus from "./images/figh-for-planet/uranus-icon.png";

import earthImg from "./images/figh-for-planet/earth.png";
import venusImg from "./images/figh-for-planet/venus.png";
import mercuryImg from "./images/figh-for-planet/mercury.png";
import jupiterImg from "./images/figh-for-planet/jupiter.png";
import marsImg from "./images/figh-for-planet/mars.png";
import neptuneImg from "./images/figh-for-planet/neptune.png";
import saturnImg from "./images/figh-for-planet/saturn.png";
import uranusImg from "./images/figh-for-planet/uranus.png";
import { matchFinalDetailInfoList, matchScheduleInfoFinal } from "./roundsData";

export const AppContext = createContext("");

export const EventProvider = ({ children }) => {
  const [allPlanetData, setAllPlanetData] = useState([]);
  const [info, setInfo] = useState({
    weekIndex: 0,
    monthIndex: 0,
    gamePoints: 0,
    chances: 0,
    planetId: 0,
    firePower: 0,
    wildCards: 0,
    growth: 0,
    trophies: 0,
    rankInPlanet: 0,
    canJoinPlanetManually: false,
    userOverallBeansPot: 0,
    planetName: "",
    gameIndex: 0,
    weeklyBeansPotList: [],
    monthlyBeansPotList: [],
    opponentFirepower: 0,
    opponentUserId: 0,
    matchStage: 0,
    beansPotMap: {},
    beansSent: 0,
  });
  const [myPlanetInfo, setMyPlanetInfo] = useState({
    planetId: 5,
    planetName: "",
    firePower: 0,
    wildcards: 0,
    growth: 0,
    trophies: 0,
    userNum: 0,
    round_1_scores: 0,
    round_2_scores: 0,
    strength: 0,
  });
  const [matchInfo, setMatchInfo] = useState({
    matchSchedule1v1: [],
    matchScheduleFinal: [],
    match1v1Detail: [],
    matchFinalDetails: [],
  });
  const [giftingLeaderboard, setGiftingLeaderboard] = useState({
    userOverall: [],
    talentOverall: [],
    weeklyUserNow: [],
    weeklyUserPrev: [],
    weeklyTalentNow: [],
    weeklyTalentPrev: [],
    userMonthlyNow: [],
    userMonthlyPrev: [],
    talentMonthlyNow: [],
    talentMonthlyPrev: [],
  });
  const [user, setUser] = useState({
    userId: 0,
    token: "",
  });
  const [groupInfoData, setGroupInfoData] = useState({
    mercury: [],
    venus: [],
    earth: [],
    mars: [],
    jupiter: [],
    saturn: [],
    uranus: [],
    neptune: [],
    count: 0,
  });

  const [roundsLbData, setRoundsLbData] = useState({
    myRound1: [],
    myRound2: [],
    myRound3: [],
    oppRound1: [],
    oppRound2: [],
    oppRound3: [],
  });

  const [gameLeaderBoard, setGameLeaderBoard] = useState([]);
  const [rewardsHistory, setRewardsHistory] = useState([]);
  const matchStarted = true;
  const [selectedLng, setSelectedLng] = useState(1);
  const changeLanguage = (index) => {
    setSelectedLng(index);
  };

  const getInfo = () => {
    fetch(
      `${baseUrl}/api/activity/galaSpaceRace/getUserEventInfo?userId=${user.userId}`
    )
      .then((response) =>
        response.json().then((response) => {
          setInfo({
            ...info,
            weekIndex: response.data.weekIndex,
            // weekIndex: 9,

            monthIndex: response.data.monthIndex,
            // monthIndex: 11,

            gamePoints: response.data.gamePoints,
            chances: response.data.chance,
            planetId: response.data.planetId,
            // planetId: 0,

            firePower: response.data.firePower,
            wildCards: response.data.wildCards,
            // wildCards: 0,
            growth: response.data.growth,
            trophies: response.data.trophies,
            rankInPlanet: response.data.rankInPlanet,
            canJoinPlanetManually: response.data.canJoinPlanetManually,
            // canJoinPlanetManually: true,

            userOverallBeansPot: response.data.beansPotMap.total,
            planetName: response.data.planetName,
            gameIndex: response.data.gameIndex,
            weeklyBeansPotList: response.data.weeklyBeansPotList,
            monthlyBeansPotList: response.data.monthlyBeansPotList,
            wildcards: response.data.wildcards,
            opponentUserId: response.data.opponentUserId,
            opponentFirepower: response.data.opponentFirepower,
            matchStage: response.data.matchStage,
            // matchStage: 2,
            beansPotMap: response.data.beansPotMap,
            beansSent: response.data.totalBeansSend,
          });
        })
      )
      .catch((error) => {});
  };

  const getMyPlanetInfo = () => {
    fetch(
      `${baseUrl}/api/activity/galaSpaceRace/getPlanetInfo?planetId=${info.planetId}`
    )
      .then((response) =>
        response.json().then((response) => {
          setMyPlanetInfo({
            ...myPlanetInfo,
            planetId: response.data[0].planetId,
            planetName: response.data[0].planetName,
            firePower: response.data[0].firePower,
            wildcards: response.data[0].wildcards,
            growth: response.data[0].growth,
            trophies: response.data[0].trophies,
            userNum: response.data[0].userNum,
            round_1_scores: response.data[0].round_1_scores,
            round_2_scores: response.data[0].round_2_scores,
            strength: response.data[0].strength,
          });
        })
      )
      .catch((error) => {});
  };

  const getOveralllUser = () => {
    fetch(
      `${baseUrl}/api/activity/eidF/getLeaderboardInfoV2?eventDesc=20231001_gala&rankIndex=11&pageNum=1&pageSize=20`
    )
      .then((response) =>
        response.json().then((response) => {
          setGiftingLeaderboard((prevState) => ({
            ...prevState,
            userOverall: response?.data?.list || [],
          }));
        })
      )
      .catch((error) => {
        console.error(error);
      });
  };

  const getOveralllTalent = () => {
    fetch(
      `${baseUrl}/api/activity/eidF/getLeaderboardInfoV2?eventDesc=20231001_gala&rankIndex=12&pageNum=1&pageSize=20`
    )
      .then((response) =>
        response.json().then((response) => {
          setGiftingLeaderboard((prevState) => ({
            ...prevState,
            talentOverall: response?.data?.list || [],
          }));
        })
      )
      .catch((error) => {
        console.error(error);
      });
  };
  const getWeeklylUser = () => {
    fetch(
      `${baseUrl}/api/activity/eidF/getLeaderboardInfoV2?eventDesc=20231001_gala&rankIndex=13&pageNum=1&pageSize=20&dayIndex=${info.weekIndex}`
    )
      .then((response) =>
        response.json().then((response) => {
          setGiftingLeaderboard((prevState) => ({
            ...prevState,
            weeklyUserNow: response?.data?.list || [],
          }));
        })
      )
      .catch((error) => {
        console.error(error);
      });
  };

  const getWeeklylUserPrev = () => {
    fetch(
      `${baseUrl}/api/activity/eidF/getLeaderboardInfoV2?eventDesc=20231001_gala&rankIndex=13&pageNum=1&pageSize=20&dayIndex=${
        info.weekIndex - 1
      }`
    )
      .then((response) =>
        response.json().then((response) => {
          setGiftingLeaderboard((prevState) => ({
            ...prevState,
            weeklyUserPrev: response?.data?.list || [],
          }));
        })
      )
      .catch((error) => {
        console.error(error);
      });
  };

  const getWeeklyTalent = () => {
    fetch(
      `${baseUrl}/api/activity/eidF/getLeaderboardInfoV2?eventDesc=20231001_gala&rankIndex=14&pageNum=1&pageSize=20&dayIndex=${info.weekIndex}`
    )
      .then((response) =>
        response.json().then((response) => {
          setGiftingLeaderboard((prevState) => ({
            ...prevState,
            weeklyTalentNow: response?.data?.list || [],
          }));
        })
      )
      .catch((error) => {
        console.error(error);
      });
  };
  const getWeeklyTalentPrev = () => {
    fetch(
      `${baseUrl}/api/activity/eidF/getLeaderboardInfoV2?eventDesc=20231001_gala&rankIndex=14&pageNum=1&pageSize=20&dayIndex=${
        info.weekIndex - 1
      }`
    )
      .then((response) =>
        response.json().then((response) => {
          setGiftingLeaderboard((prevState) => ({
            ...prevState,
            weeklyTalentPrev: response?.data?.list || [],
          }));
        })
      )
      .catch((error) => {
        console.error(error);
      });
  };

  const getMonthlyUser = () => {
    fetch(
      `${baseUrl}/api/activity/eidF/getLeaderboardInfoV2?eventDesc=20231001_gala&rankIndex=15&pageNum=1&pageSize=20&dayIndex=${info.monthIndex}`
    )
      .then((response) =>
        response.json().then((response) => {
          setGiftingLeaderboard((prevState) => ({
            ...prevState,
            userMonthlyNow: response?.data?.list || [],
          }));
        })
      )
      .catch((error) => {
        console.error(error);
      });
  };
  const getMonthlyUserPrev = () => {
    fetch(
      `${baseUrl}/api/activity/eidF/getLeaderboardInfoV2?eventDesc=20231001_gala&rankIndex=15&pageNum=1&pageSize=20&dayIndex=${
        info.monthIndex - 1
      }`
    )
      .then((response) =>
        response.json().then((response) => {
          setGiftingLeaderboard((prevState) => ({
            ...prevState,
            userMonthlyPrev: response?.data?.list || [],
          }));
        })
      )
      .catch((error) => {
        console.error(error);
      });
  };

  const getMonthlyTalent = () => {
    fetch(
      `${baseUrl}/api/activity/eidF/getLeaderboardInfoV2?eventDesc=20231001_gala&rankIndex=16&pageNum=1&pageSize=20&dayIndex=${info.monthIndex}`
    )
      .then((response) =>
        response.json().then((response) => {
          setGiftingLeaderboard((prevState) => ({
            ...prevState,
            talentMonthlyNow: response?.data?.list || [],
          }));
        })
      )
      .catch((error) => {
        console.error(error);
      });
  };
  const getMonthlyTalentPrev = () => {
    fetch(
      `${baseUrl}/api/activity/eidF/getLeaderboardInfoV2?eventDesc=20231001_gala&rankIndex=16&pageNum=1&pageSize=20&dayIndex=${
        info.monthIndex - 1
      }`
    )
      .then((response) =>
        response.json().then((response) => {
          setGiftingLeaderboard((prevState) => ({
            ...prevState,
            talentMonthlyPrev: response?.data?.list || [],
          }));
        })
      )
      .catch((error) => {
        console.error(error);
      });
  };

  const getGroupParticipant = (id) => {
    fetch(
      `${baseUrl}/api/activity/eidF/getLeaderboardInfoV2?eventDesc=20231001_gala&rankIndex=${
        info?.matchStage <= 1 ? 17 : info?.matchStage == 2 ? 19 : 20
      }&pageNum=1&pageSize=20&dayIndex=${id}`
    )
      .then((response) =>
        response.json().then((response) => {
          setGroupInfoData((prevState) => ({
            ...prevState,
            count: response?.data.count || 0,
          }));
          if (id === 1) {
            setGroupInfoData((prevState) => ({
              ...prevState,
              mercury: response?.data.list || [],
            }));
          } else if (id === 2) {
            setGroupInfoData((prevState) => ({
              ...prevState,
              venus: response?.data.list || [],
            }));
          } else if (id === 3) {
            setGroupInfoData((prevState) => ({
              ...prevState,
              earth: response?.data.list || [],
            }));
          } else if (id === 4) {
            setGroupInfoData((prevState) => ({
              ...prevState,
              mars: response?.data?.list || [],
            }));
          } else if (id === 5) {
            setGroupInfoData((prevState) => ({
              ...prevState,
              jupiter: response?.data?.list || [],
            }));
          } else if (id === 6) {
            setGroupInfoData((prevState) => ({
              ...prevState,
              saturn: response?.data?.list || [],
            }));
          } else if (id === 7) {
            setGroupInfoData((prevState) => ({
              ...prevState,
              uranus: response?.data?.list || [],
            }));
          } else if (id === 8) {
            setGroupInfoData((prevState) => ({
              ...prevState,
              neptune: response?.data?.list || [],
            }));
          }
        })
      )
      .catch((error) => {
        console.error(error);
      });
  };
  const getGameLeaderboardData = () => {
    fetch(
      `${baseUrl}/api/activity/eidF/getWinnerRankInfo?eventDesc=20231001_gala&rankIndex=1&pageNum=1&pageSize=20`
    )
      .then((response) =>
        response.json().then((response) => {
          setGameLeaderBoard(response.data.list || []);
        })
      )
      .catch((error) => {
        console.error(error);
      });
  };

  const getRewardHistroy = () => {
    fetch(
      `${baseUrl}/api/activity/eidF/getRecordInfo?eventDesc=20231001_gala&rankIndex=2&pageNum=1&pageSize=20&type=1&userId=${user.userId}`
    )
      .then((response) =>
        response.json().then((response) => {
          setRewardsHistory(response.data.list);
        })
      )
      .catch((error) => {
        console.error(error);
      });
  };

  const getRewardDetails = (desc, count) => {
    let text = "";

    desc === "Beans"
      ? (text = `${count} Beans`)
      : desc === "gems"
      ? (text = `${count} Gems`)
      : desc === "Wildcards"
      ? (text = `${count} Wildcards`)
      : desc === "Trophies"
      ? (text = `${count} Trophies`)
      : desc === "Growth Points"
      ? (text = `${count} Growth Points`)
      : desc === "Firepower"
      ? (text = `${count} Firepower`)
      : (text = `${desc}  x${count > 1 ? `${count} days` : `${count} day`}`);

    return text;
  };
  const getMatchInfo = () => {
    fetch(`${baseUrl}/api/activity/galaSpaceRace/getMatchInfo`)
      .then((response) =>
        response.json().then((response) => {
          setMatchInfo({
            matchSchedule1v1: response.data.matchScheduleInfo1v1,
            match1v1Detail: response.data.match1v1DetailInfoList,
            matchScheduleFinal: response.data.matchScheduleInfoFinal,
            matchFinalDetails: response.data.matchFinalDetailInfoList,
            // matchScheduleFinal: matchScheduleInfoFinal,
            // matchFinalDetails: matchFinalDetailInfoList,
          });
        })
      )
      .catch((error) => {
        console.error(error);
      });
  };

  const getAllPlanetData = () => {
    fetch(`${baseUrl}/api/activity/galaSpaceRace/getPlanetInfo`)
      .then((response) =>
        response.json().then((response) => {
          setAllPlanetData(response?.data);
        })
      )
      .catch((error) => {
        console.error(error);
      });
  };

  const getRoundsData = (id, isMe) => {
    let roundsUrl = `${baseUrl}/api/activity/eidF/getLeaderboardInfoV2?eventDesc=20231001_gala&rankIndex=${
      info.matchStage === 1 ? 17 : info.matchStage === 2 ? 19 : 20
    }&pageNum=1&pageSize=20&dayIndex=${id}`;
    console.log("rounds url is:", roundsUrl);
    fetch(
      `${baseUrl}/api/activity/eidF/getLeaderboardInfoV2?eventDesc=20231001_gala&rankIndex=${
        info.matchStage === 1 ? 17 : info.matchStage === 2 ? 19 : 20
      }&pageNum=1&pageSize=20&dayIndex=${id}`
    )
      .then((response) => response.json())
      .then((response) => {
        if (info.matchStage === 1) {
          if (isMe) {
            setRoundsLbData((prevState) => ({
              ...prevState,
              myRound1: response.data.list || [],
            }));
          } else {
            setRoundsLbData((prevState) => ({
              ...prevState,
              oppRound1: response.data.list || [],
            }));
          }
        } else if (info.matchStage === 2) {
          if (isMe) {
            setRoundsLbData((prevState) => ({
              ...prevState,
              myRound2: response.data.list || [],
            }));
          } else {
            setRoundsLbData((prevState) => ({
              ...prevState,
              oppRound2: response.data.list || [],
            }));
          }
        } else if (info.matchStage === 3) {
          if (isMe) {
            setRoundsLbData((prevState) => ({
              ...prevState,
              myRound3: response.data.list || [],
            }));
          } else {
            setRoundsLbData((prevState) => ({
              ...prevState,
              oppRound3: response.data.list || [],
            }));
          }
        }
      });
  };

  const getPreviousRoundsData = (planetId, matchId, isMe, round = 0) => {
    let theUrl = `${baseUrl}/api/activity/eidF/getLeaderboardInfoV2?eventDesc=20231001_gala&rankIndex=${18}&pageNum=1&pageSize=20&dayIndex=${
      matchId + "," + planetId
    }`;
    console.log("previous rounds url:", theUrl);
    fetch(
      `${baseUrl}/api/activity/eidF/getLeaderboardInfoV2?eventDesc=20231001_gala&rankIndex=${18}&pageNum=1&pageSize=20&dayIndex=${
        matchId + "," + planetId
      }`
    )
      .then((response) => response.json())
      .then((response) => {
        if (matchId === 1) {
          if (isMe) {
            setRoundsLbData((prevState) => ({
              ...prevState,
              myRound1: response.data.list || [],
            }));
          } else {
            setRoundsLbData((prevState) => ({
              ...prevState,
              oppRound1: response.data.list || [],
            }));
          }
        } else if (matchId === 2) {
          if (round === 2) {
            if (isMe) {
              setRoundsLbData((prevState) => ({
                ...prevState,
                myRound1: response.data.list || [],
              }));
            } else {
              setRoundsLbData((prevState) => ({
                ...prevState,
                oppRound1: response.data.list || [],
              }));
            }
          } else if (round === 3) {
            if (isMe) {
              setRoundsLbData((prevState) => ({
                ...prevState,
                myRound2: response.data.list || [],
              }));
            } else {
              setRoundsLbData((prevState) => ({
                ...prevState,
                oppRound2: response.data.list || [],
              }));
            }
          }
        }
      });
  };

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

  const getPlanetImageForRows = (id) => {
    if (id === 1) {
      return mercuryImg;
    } else if (id === 2) {
      return venusImg;
    } else if (id === 3) {
      return earthImg;
    } else if (id === 4) {
      return marsImg;
    } else if (id === 5) {
      return jupiterImg;
    } else if (id === 6) {
      return saturnImg;
    } else if (id === 7) {
      return uranusImg;
    } else if (id === 8) {
      return neptuneImg;
    }
  };

  const getPlanetName = (id) => {
    if (id === 1) {
      return "Mercury";
    } else if (id === 2) {
      return "Venus";
    } else if (id === 3) {
      return "Earth";
    } else if (id === 4) {
      return "Mars";
    } else if (id === 5) {
      return "Jupiter";
    } else if (id === 6) {
      return "Saturn";
    } else if (id === 7) {
      return "Uranus";
    } else if (id === 8) {
      return "Neptune";
    }
  };

  useEffect(() => {
    getMonthlyUser();
    getMonthlyUserPrev();
    getMonthlyTalent();
    getMonthlyTalentPrev();
    getWeeklyTalent();
    getMonthlyTalentPrev();
    getWeeklylUser();
    getWeeklylUserPrev();
    getWeeklyTalentPrev();
  }, [info, info.weekIndex, info.monthIndex]);

  useEffect(() => {
    if (info.planetId) {
      getMyPlanetInfo();
    }
  }, [info.planetId]);

  useEffect(() => {
    getInfo();
    getGameLeaderboardData();
    getRewardHistroy();
    getAllPlanetData();
    getMatchInfo();

    getOveralllUser();
    getOveralllTalent();
  }, [user.userId, info.matchStage, info.planetId]);

  useEffect(() => {
    if (user.userId) {
      getInfo();
    }
  }, [user]);

  useEffect(() => {
    getGroupParticipant(1);
    getGroupParticipant(2);
    getGroupParticipant(3);
    getGroupParticipant(4);
    getGroupParticipant(5);
    getGroupParticipant(6);
    getGroupParticipant(7);
    getGroupParticipant(8);
  }, [info]);

  useEffect(() => {
    try {
      window.phone.getUserInfo(function (userInfo) {
        setUser({
          userId: userInfo?.userId ? userInfo?.userId : 0,
          token: userInfo?.token ? userInfo?.token : "",
        });
      });
    } catch (_error) {
      console.error("Can't get userInfo by window.phone.getUserInfo");
    }
  }, []);
  return (
    <AppContext.Provider
      value={{
        // weekIndex,
        matchStarted,
        // matchesFinished,

        // wildCardRound,
        info,
        selectedLng,
        changeLanguage,
        giftingLeaderboard,
        user,
        groupInfoData,
        gameLeaderBoard,
        getInfo,
        rewardsHistory,
        getRewardDetails,
        myPlanetInfo,
        allPlanetData,
        getGameLeaderboardData,
        getRewardHistroy,
        matchInfo,
        getGroupParticipant,

        roundsLbData,
        getPlanetImage,
        getPlanetName,
        getRoundsData,
        getPreviousRoundsData,
        getAllPlanetData,
        getMyPlanetInfo,
        getPlanetImageForRows,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
