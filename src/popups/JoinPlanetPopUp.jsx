import React from "react";
import PopUp from "../components/Popup";
import successBg from "../images/popups/hurrah-bg-2.png";
import oopsBg from "../images/popups/oops-bg.png";
import { useContext } from "react";
import { AppContext } from "../AppContext";

const JoinPlanetPopUp = ({
  errMsg,
  isJoinSuccess,
  closeJoinPopup,
  planetName,
}) => {
  const { info } = useContext(AppContext);
  return (
    <PopUp
      bg={info.wildcards <= 0 || isJoinSuccess === false ? oopsBg : successBg}
      isJoin={true}
    >
      <div className="join-planet-popup">
        <button
          className="closeBtn"
          onClick={() => closeJoinPopup(isJoinSuccess)}
        ></button>
        <div className="join-planet-cont">
          {info.wildcards <= 0 ? (
            <p>
              You cannot join the planet at the moment as you do not have the
              required Wildcards in your accout.
              <br />
              Please checkout other offerings at
              <br /> <span style={{ color: "yellow" }}>The SK Gala</span>.
              <br />
              The have some amazing rewards too.
            </p>
          ) : isJoinSuccess ? (
            <p>
              You've successfully joined {planetName} Planet. You can start your
              journey now. Work hard to help your PLANET survive through all the
              dangers.
            </p>
          ) : (
            errMsg
          )}
        </div>
      </div>
    </PopUp>
  );
};

export default JoinPlanetPopUp;
