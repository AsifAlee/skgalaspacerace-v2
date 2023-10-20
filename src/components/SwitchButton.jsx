import React, { useState } from "react";
import "../styles/switch-button.scss";
export const SwitchButton = (props) => {
  const { bg, texts, onToggle, isPot, isLeaderBoard, talentDaily } = props;
  const [isOn, setIsOn] = useState(false);

  function handleToggle() {
    setIsOn(!isOn);
    if (onToggle) {
      onToggle();
    }
  }

  return (
    <div
      className={`switch-button ${isPot ? "mt1" : ""}`}
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <button
        className={`slider-button ${isOn ? "on" : "off"}`}
        style={{
          width: isLeaderBoard && "55%",
          fontSize: isLeaderBoard && "2.9vw",
        }}
      >
        {isOn ? texts[1] : texts[0]}
      </button>
      <div
        className={`slider-handle ${isOn ? "left" : "right"}`}
        onClick={handleToggle}
      />
    </div>
  );
};
