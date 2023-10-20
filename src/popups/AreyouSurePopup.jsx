import React, { useContext, useState } from "react";
import PopUp from "../components/Popup";
import bg from "../images/popups/rusurepopup.png";
import { baseUrl } from "../utils/api";
import { AppContext } from "../AppContext";
import JoinPlanetPopUp from "./JoinPlanetPopUp";

const AreyouSurePopup = ({ popUpHandler, id }) => {
  const [joinPopUp, setJoinPopup] = useState(false);
  const [isJoinSuccess, setIsJoinSuccess] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [planetName, setPlanetName] = useState("");
  const { user, allPlanetData } = useContext(AppContext);

  const closeJoinPopup = (isJoinSuccess) => {
    setJoinPopup(false);
    if (isJoinSuccess === true) {
      window.location.reload();
    }
  };
  const joinPlanet = () => {
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
            allPlanetData?.find((item) => item?.planetId === id)?.planetName
          );
          // getInfo();
        } else {
          // setIsJoinSuccess(false);
        }
      })
    );
  };
  return (
    <PopUp bg={bg} info={true}>
      <div className="areUSurePopup">
        <button className="closeBtn" onClick={popUpHandler} />

        <p className="text">Planets cannot be changed once you join a one</p>

        <div className="join-button" onClick={joinPlanet}>
          <span>JOIN</span>
        </div>
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

export default AreyouSurePopup;
