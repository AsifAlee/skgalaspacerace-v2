import React, { useEffect } from "react";
import "../styles/popup.scss";
const PopUp = (props) => {
  const {
    children,
    bg,
    title,
    popUpHandler,
    isAccPopUp,
    isRewards,
    isGame,
    isMilestone,
    isCollSold,
    isSendCard,
    isOverflow,
    schedule,
    isRewardHist,
    planeInfo,
    info,
    game,
    guide,
    isJoin,
  } = props;

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <div className="overlay">
      <div
        className="content"
        style={{
          backgroundImage: `url(${bg})`,
          minHeight: `${
            planeInfo
              ? "117vw"
              : game
              ? "96vw"
              : isGame
              ? "63vw"
              : isRewardHist
              ? "90vw"
              : ""
          }`,
          height: isSendCard && "117vw",
          width: `${
            schedule
              ? "100%"
              : game
              ? "90%"
              : guide
              ? "90%"
              : isRewardHist
              ? "97vw"
              : info
              ? "90%"
              : isJoin
              ? "94vw"
              : ""
          }`,
          overflowY: isOverflow ? "auto" : "",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            marginTop: "-2vw",
            justifyContent: "center",
          }}
        >
          {/* <img
            src={title}
            className="title"
            style={{ visibility: title ? "visible" : "hidden" }}
          /> */}
          {/* <button className="closeBtn" onClick={popUpHandler}></button> */}

          <p className="title">{title}</p>
        </div>
        {children}
      </div>
    </div>
  );
};

export default PopUp;
