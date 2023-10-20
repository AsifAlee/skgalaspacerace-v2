import React, { useContext, useEffect, useState } from "react";
import PopUp from "../components/Popup";
import bg from "../images/popups/planet-info-popup.png";
import strengthIcon from "../images/figh-for-planet/strength-icon.png";
import firePower from "../images/figh-for-planet/firepower-icon.png";
import wildIcon from "../images/popups/wild-card-icon.png";
import UserComponent from "../components/UserComponent";
// import { userOverall } from "../utils/testData";
import { AppContext } from "../AppContext";
import { getRewardsImage } from "../utils/functions";

const MyPlanetUpdates = ({ popUpHandler }) => {
  const { myPlanetInfo, info, groupInfoData } = useContext(AppContext);
  const { matchStage } = info;
  const [planetData, setPlanetData] = useState([]);
  let planetId;
  useEffect(() => {
    planetId = info.planetId;
    if (info.planetId) {
      setPlanetData(
        info.planetId === 1
          ? groupInfoData["mercury"]
          : planetId === 2
          ? groupInfoData["venus"]
          : planetId === 3
          ? groupInfoData["earth"]
          : planetId === 4
          ? groupInfoData["mars"]
          : planetId === 5
          ? groupInfoData["jupiter"]
          : planetId === 6
          ? groupInfoData["saturn"]
          : planetId === 7
          ? groupInfoData["uranus"]
          : planetId === 8
          ? groupInfoData["neptune"]
          : []
      );
    }
  }, [info, groupInfoData]);

  const toggleSeeMore = () => {
    setSeeMore((prevState) => !prevState);
  };
  const [seeMore, setSeeMore] = useState(true);

  return (
    <PopUp bg={bg} popUpHandler={popUpHandler} schedule={true} planeInfo={true}>
      <div className="planet-updates">
        <button className="closeBtn" onClick={popUpHandler} />
        <div className="title-div">
          <span className="name">{info.planetName}</span>
        </div>
        <div>
          <div className="div1">
            <div className="leftDiv">
              <p className="tag">PLANET STRENGTH</p>
              <div className="strength">
                <img src={strengthIcon} />
                <span
                  style={{
                    position: "relative",
                    bottom: "2vw",
                    left: "-1vw",
                  }}
                >
                  {myPlanetInfo.strength}
                </span>
              </div>
            </div>
            <div className="rightDiv">
              <p className="tag">TOTAL MEMBERS</p>
              <div className="strength">
                <span
                  style={{
                    position: "relative",
                    bottom: "2vw",
                    left: "1vw",
                  }}
                >
                  {myPlanetInfo.userNum}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="div2">
          <div className="item1">
            <span className="firework-title">{`My ${
              matchStage <= 1
                ? "Firepower"
                : matchStage === 2
                ? "Growth points"
                : "Trophies"
            }`}</span>
            <div className="power">
              <img
                src={
                  matchStage <= 1
                    ? getRewardsImage("Firepower")
                    : matchStage === 2
                    ? getRewardsImage("Growth Points")
                    : getRewardsImage("Trophies")
                }
              />
              <span
                style={{
                  fontSize: "3vw",
                  color: "#ce4f0a",
                  position: "relative",
                  top: "1vw",
                }}
              >
                {matchStage <= 1
                  ? info?.firePower
                  : matchStage === 2
                  ? info.growth
                  : info.trophies}
              </span>
            </div>
          </div>
          <div className="item2">
            <span className="firework-title">My Wildcards</span>
            <div className="power">
              <img src={wildIcon} />
              <span
                style={{
                  fontSize: "3vw",
                  color: "#ce4f0a",
                  position: "relative",
                  right: "-1vw",
                }}
              >
                {info?.wildcards}
              </span>
            </div>
          </div>
        </div>
        <div className="my-rank">
          <span style={{ fontSize: "4vw" }}>
            MY RANK IN PLANET:{info.rankInPlanet}
          </span>
        </div>
        {info.rankInPlanet > 0 && (
          <div className="restUsers">
            {planetData?.slice(0, seeMore ? 10 : 20)?.map((item, index) => (
              <UserComponent user={item} key={index} index={index + 1} />
            ))}
          </div>
        )}

        {planetData?.length > 10 && (
          <button
            className={seeMore ? "popupSeeMore" : "popupSeeLess"}
            onClick={toggleSeeMore}
          />
        )}
      </div>
    </PopUp>
  );
};

export default MyPlanetUpdates;
