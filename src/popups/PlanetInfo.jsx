import React, { useContext } from "react";
import PopUp from "../components/Popup";
import bg from "../images/popups/Info-popup-bg.png";
import PlanetUser from "../components/PlanetUser";
// import { AppContext } from "../AppContext";

const PlanetInfo = ({ popUpHandler, data, bigHeight }) => {
  // debugger;
  return (
    <PopUp bg={bg} info={true}>
      <div className="planet-info">
        <button className="closeBtn" onClick={popUpHandler} />
        <p className="info-title">GROUP PARTICIPANTS</p>
        <div className="info-content" style={{ height: bigHeight && "42vw" }}>
          {data?.map((user, index) => (
            <PlanetUser user={user} index={index + 1} key={index} />
          ))}
          {!data.length && <div>No Data Found</div>}
        </div>
      </div>
    </PopUp>
  );
};

export default PlanetInfo;
