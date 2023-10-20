import React, { useContext } from "react";
import PopUp from "../components/Popup";
import bg from "../images/popups/Info-popup-bg.png";
import { AppContext } from "../AppContext";
import RewardsHistoryComponent from "../components/RewardsComponent";

const RewardsHistory = ({ popUpHandler }) => {
  let { rewardsHistory } = useContext(AppContext);

  return (
    <PopUp bg={bg} title="HISTORY" schedule={true}>
      <div className="rewards-history">
        <button className="closeBtn" onClick={popUpHandler} />
        <div className="history-content">
          {rewardsHistory?.length > 0 ? (
            <>
              <div className="title-div">
                <span>Date/Time</span>
                <span>Rewards</span>
              </div>
              {rewardsHistory?.map((item) => (
                <RewardsHistoryComponent item={item} />
              ))}
            </>
          ) : (
            <div className="no-rec-found">No Record Found</div>
          )}
        </div>
      </div>
    </PopUp>
  );
};

export default RewardsHistory;
