import React, { useContext, useState } from "react";
import infoText from "../../images/popups/planet-elim-info.png";
import { AppContext } from "../../AppContext";
import { useEffect } from "react";
import PlanetInfo2 from "../../popups/PlanetInfo2";
import Round2Planet from "../../components/RoundPlanet";
import AreyouSurePopup from "../../popups/AreyouSurePopup";

const WilCardRound = () => {
  const [planetInfo, setPlanetInfo] = useState(false);
  const [rUsurePopup, setRUSurePopup] = useState(false);
  const [id, setId] = useState(0);
  const [round1WinnerPlanets, setRound1WinnerPlanets] = useState([]);

  const {
    groupInfoData,
    matchInfo,
    getPlanetName,
    allPlanetData,
    getPlanetImageForRows,
  } = useContext(AppContext);

  const { matchFinalDetails } = matchInfo;

  const togglePlanetInfo = (id) => {
    if (id) {
      setId(id);
    }
    setPlanetInfo((prevState) => !prevState);
  };

  const toggleRuSure = (id) => {
    if (id) {
      setId(id);
    }
    setRUSurePopup((prevState) => !prevState);
  };

  useEffect(() => {
    setRound1WinnerPlanets(
      matchFinalDetails[0]?.matchWinAndLostInfoList?.map((item) => {
        return item.winnerPlanet;
      })
    );
  }, [matchInfo]);
  return (
    <div className="wild-card-round">
      <div className="join-title"></div>
      <div>
        <div className="info">
          <img src={infoText} />
        </div>
      </div>
      <div className="orange-info d-flex j-center al-center">
        <p>
          Your planet was eliminated in the previous round.But the good news is
          you can join a new Planet with the help of WILDCARDS.
        </p>
      </div>

      {round1WinnerPlanets?.length > 0 && (
        <div className="planets">
          <div className="planet-row">
            <Round2Planet
              planet={getPlanetImageForRows(round1WinnerPlanets[0])}
              name={getPlanetName(round1WinnerPlanets[0])}
              clickHandler={togglePlanetInfo}
              id={round1WinnerPlanets[0]}
              toggleRuSure={toggleRuSure}
            />
            <Round2Planet
              planet={getPlanetImageForRows(round1WinnerPlanets[1])}
              name={getPlanetName(round1WinnerPlanets[1])}
              clickHandler={togglePlanetInfo}
              id={round1WinnerPlanets[1]}
              toggleRuSure={toggleRuSure}
            />
          </div>
          <div className="planet-row">
            <Round2Planet
              planet={getPlanetImageForRows(round1WinnerPlanets[2])}
              name={getPlanetName(round1WinnerPlanets[2])}
              clickHandler={togglePlanetInfo}
              id={round1WinnerPlanets[2]}
              toggleRuSure={toggleRuSure}
            />
            <Round2Planet
              planet={getPlanetImageForRows(round1WinnerPlanets[3])}
              name={getPlanetName(round1WinnerPlanets[3])}
              clickHandler={togglePlanetInfo}
              id={round1WinnerPlanets[3]}
              toggleRuSure={toggleRuSure}
            />
          </div>
        </div>
      )}

      {/* <div className="planets">
        <div className="planet-row">
          <Round2Planet
            planet={getPlanetImageForRows(allPlanetData[0]?.planetId)}
            id={allPlanetData[0]?.planetId}
            name={getPlanetName(allPlanetData[0]?.planetId)}
            clickHandler={togglePlanetInfo}
            toggleRuSure={toggleRuSure}
          />
          <Round2Planet
            planet={getPlanetImageForRows(allPlanetData[1]?.planetId)}
            id={allPlanetData[1]?.planetId}
            name={getPlanetName(allPlanetData[1]?.planetId)}
            clickHandler={togglePlanetInfo}
            toggleRuSure={toggleRuSure}
          />
        </div>
      </div> */}

      {planetInfo && (
        <PlanetInfo2
          popUpHandler={togglePlanetInfo}
          id={id}
          isWildCardRound={true}
          round1WinnerPlanets={round1WinnerPlanets}
        />
      )}
      {rUsurePopup && <AreyouSurePopup popUpHandler={toggleRuSure} id={id} />}
    </div>
  );
};

export default WilCardRound;
