import React, { useContext } from "react";
import PopUp from "../components/Popup";
import bg from "../images/popups/Info-popup-bg.png";
import ScheduleComponent from "../components/ScheduleComponent";

const MatchSchedule = ({ popUpHandler, schedData }) => {
  return (
    <PopUp
      bg={bg}
      popUpHandler={popUpHandler}
      title="UPCOMING MATCHES"
      schedule={true}
    >
      <div className="schedule">
        <button className="closeBtn" onClick={popUpHandler} />
        <div className="schedule-content">
          {schedData?.map((item, index) => (
            <ScheduleComponent
              index={index + 1}
              start={item.startTime}
              end={item.endTime}
            />
          ))}
        </div>
      </div>
    </PopUp>
  );
};

export default MatchSchedule;
