import React, { useContext } from "react";
import "../styles/header.scss";
import LanguageDropdown from "./LanguageDropdown";
import { AppContext } from "../AppContext";
import Marquee from "react-fast-marquee";
import { useEffect } from "react";
import { useState } from "react";
import unknowUser from "../images/figh-for-planet/unknown-user.png";
import tickerTape1Heart from "../images/tickertape/tickertape-1-heart.png";
import tickerTape1Heart2 from "../images/tickertape/tickertape-2-heart.png";
import { getRewardsImage, gotoProfile } from "../utils/functions";

import headerSvga from "../images/header2.svga";
import HeaderSvga from "./HeaderSvga";
const Header = ({ showMarquee }) => {
  const { selectedLng, changeLanguage, gameLeaderBoard, getRewardDetails } =
    useContext(AppContext);

  const [marqueeData, setMarqueeData] = useState([]);
  const formatMarqueeData = () => {
    let allData = [];
    allData = gameLeaderBoard.map((item) => {
      let newData;
      let newItem = JSON.parse(item?.desc);

      if (newItem.find((item) => item?.desc === "Beans")) {
        if (newItem.find((item) => item?.desc === "Beans").count > 0) {
          newData = { ...item, desc: JSON.parse(item?.desc) };
        }
      }

      return newData;
    });
    setMarqueeData(allData);
  };
  useEffect(() => {
    if (gameLeaderBoard) {
      formatMarqueeData();
    }
  }, [gameLeaderBoard]);
  return (
    <div className="header">
      <LanguageDropdown
        selectedLanguage={selectedLng}
        changeLanguage={changeLanguage}
      />
      {showMarquee && (
        <div style={{ position: "relative", top: "109vw" }}>
          <Marquee>
            {marqueeData?.slice(0, 10)?.map((item) => {
              return (
                <div className="game-marquee">
                  <div className="marquee-item">
                    <img
                      src={item?.portrait ? item?.portrait : unknowUser}
                      className="marq-user-img"
                      onClick={() => gotoProfile(item?.userId)}
                    />

                    <div
                      className="marq-user-details"
                      style={{ fontWeight: "bold" }}
                    >
                      <span className="name">{`${item?.nickname?.slice(
                        0,
                        6
                      )} has won`}</span>
                      {item?.desc?.slice(0, 1)?.map((rewItem) => (
                        <div
                          className="d-flex al-center"
                          style={{ marginLeft: ".6vw" }}
                        >
                          <span className="rew-desc">
                            {getRewardDetails(rewItem?.desc, rewItem?.count)}
                          </span>
                          <img
                            src={getRewardsImage(rewItem?.desc)}
                            className="rew-img"
                          />
                        </div>
                      ))}
                      <span>.&nbsp;Congratulations!</span>
                    </div>
                    <img className="end-img" src={tickerTape1Heart} />
                  </div>
                </div>
              );
            })}
          </Marquee>
        </div>
      )}
      {showMarquee && (
        <div style={{ position: "relative", top: "83vw" }}>
          <Marquee>
            {marqueeData?.slice(10, 20)?.map((item) => {
              return (
                <div className="game-marquee2">
                  <div className="marquee-item">
                    <img
                      src={item?.portrait ? item?.portrait : unknowUser}
                      className="marq-user-img"
                      onClick={() => gotoProfile(item?.userId)}
                    />

                    <div
                      className="marq-user-details"
                      style={{ fontWeight: "bold" }}
                    >
                      <span className="name">{`${item?.nickname?.slice(
                        0,
                        6
                      )} has won`}</span>
                      {item?.desc?.slice(0, 1)?.map((rewItem) => (
                        <div
                          className="d-flex al-center"
                          style={{ marginLeft: ".6vw" }}
                        >
                          <span className="rew-desc">
                            {getRewardDetails(rewItem?.desc, rewItem?.count)}
                          </span>
                          <img
                            src={getRewardsImage(rewItem?.desc)}
                            className="rew-img"
                          />
                        </div>
                      ))}
                      .&nbsp;Congratulations!
                    </div>
                    <img className="end-img" src={tickerTape1Heart2} />
                  </div>
                </div>
              );
            })}
          </Marquee>
        </div>
      )}

      <div className="headerSvga">
        <HeaderSvga src={headerSvga} />
      </div>
    </div>
  );
};

export default Header;
