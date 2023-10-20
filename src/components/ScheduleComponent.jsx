import React, { useEffect, useState } from "react";
import {
  getCurrenTime,
  getMonthTime,
  getUtcTimeInMilliSeconds,
} from "../utils/functions";

const ScheduleComponent = ({ index, start, end }) => {
  const [isTimeMatched, setIsTimeMatched] = useState(false);

  const currentTime = getUtcTimeInMilliSeconds(getCurrenTime());
  const startTime = getUtcTimeInMilliSeconds(start.replace(/ /g, "T"));
  const endTime = getUtcTimeInMilliSeconds(end.replace(/ /g, "T"));

  useEffect(() => {
    if (currentTime >= startTime && currentTime <= endTime) {
      // console.log("time matched:");

      setIsTimeMatched(true);
    }
  }, [start, end]);

  return (
    <div className="schedule-component">
      <div
        className={`index ${
          index === 1
            ? "one"
            : index === 2
            ? "two"
            : index === 3
            ? "three"
            : "four"
        }`}
      >
        {index}
      </div>
      <div
        className="details"
        style={{ border: isTimeMatched && "2px solid #1adff6" }}
      >
        <span>{start} &nbsp; - &nbsp; </span>
        <span>{end}</span>
      </div>
    </div>
  );
};

export default ScheduleComponent;
