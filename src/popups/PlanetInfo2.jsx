import React, { useContext } from "react";
import PopUp from "../components/Popup";
import bg from "../images/popups/Info-popup-bg.png";
import PlanetUser from "../components/PlanetUser";
import { AppContext } from "../AppContext";
import { baseUrl, testToken, testUserId } from "../utils/api";
import { useState } from "react";
import JoinPlanetPopUp from "./JoinPlanetPopUp";

const PlanetInfo2 = ({ popUpHandler, id, isWildCardRound }) => {
  const { groupInfoData, info, user, getInfo, allPlanetData } =
    useContext(AppContext);
  const [joinPopUp, setJoinPopup] = useState(false);
  const [isJoinSuccess, setIsJoinSuccess] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [planetName, setPlanetName] = useState("");

  const closeJoinPopup = (isJoinSuccess) => {
    setJoinPopup(false);
    if (isJoinSuccess === true) {
      window.location.reload();
    }
  };

  const joinPlanet = (id) => {
    fetch(`${baseUrl}/api/activity/galaSpaceRace/joinTeam?planetId=${id}`, {
      method: "POST",
      headers: {
        // userId: testUserId,
        // token: testToken,
        userId: user.userId,
        token: user.token,
        checkTag: "",
        "Content-Type": "application/json",
      },
    }).then((response) =>
      response.json().then((response) => {
        setJoinPopup(true);
        setErrMsg(response.msg);

        if (response.errorCode === 0) {
          setIsJoinSuccess(true);
          setPlanetName(
            allPlanetData.find((item) => item.planetId === id).planetName
          );
          // getInfo();
        } else {
          // setIsJoinSuccess(false);
        }
      })
    );
  };
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

  return (
    <PopUp bg={bg} info={true}>
      <div className="planet-info">
        <button className="closeBtn" onClick={popUpHandler} />
        <p className="info-title">GROUP PARTICIPANTS</p>
        <div className="info-content">
          {data?.map((user, index) => (
            <PlanetUser user={user} index={index + 1} key={index} />
          ))}
          {!data.length && (
            <div className="noData-in-planet-info">No Data Found</div>
          )}
        </div>
        {isWildCardRound && (
          <button className="joinBtn" onClick={() => joinPlanet(id)}>
            Join
          </button>
        )}
      </div>
      {joinPopUp && (
        <JoinPlanetPopUp
          errMsg={errMsg}
          isJoinSuccess={isJoinSuccess}
          closeJoinPopup={closeJoinPopup}
          planetName={planetName}
        />
      )}
    </PopUp>
  );
};

export default PlanetInfo2;
