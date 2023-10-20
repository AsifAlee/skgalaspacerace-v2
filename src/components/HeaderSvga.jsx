import React, { useEffect, useRef } from "react";
import SVGA from "svgaplayerweb";

const HeaderSvga = ({ src, snookerTable, stick, crane, foosball, start }) => {
  const playerRef = useRef(null);
  var player, parser;
  useEffect(() => {
    player = new SVGA.Player("#headerSvga");
    parser = new SVGA.Parser("#headerSvga");
    parser.load(src, function (videoItem) {
      player.setVideoItem(videoItem);
      playerRef.current.startAnimation();
    });
    playerRef.current = player;
    return () => {
      player.clear();
    };
  }, []);
  const handleStartClick = () => {
    playerRef.current.startAnimation();
  };
  const handleStopClick = () => {
    // console.log("stop animation calledd");
    playerRef.current.stopAnimation();
    initializeSVGAPlayer();
  };
  useEffect(() => {
    if (start) {
      handleStartClick();
    } else {
      handleStopClick();
    }
  }, [start]);

  const initializeSVGAPlayer = () => {
    player = new SVGA.Player("#headerSvga");
    parser = new SVGA.Parser("#headerSvga");
    parser.load(src, function (videoItem) {
      player.setVideoItem(videoItem);
    });
    playerRef.current = player;
  };

  return (
    <>
      <div id="headerSvga" style={{ width: "100%", height: "100%" }}></div>
    </>
  );
};

export default HeaderSvga;
