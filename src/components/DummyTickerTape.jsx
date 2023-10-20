// import React, { useContext } from "react";
// import { tickerTapeTestData } from "../utils/constants";
// // import tickerTape1Frame from "../images/tickertape/tickertape-1-frame.png";
// // import tickerTape1Heart from "../images/tickertape/tickertape-1-heart.png";
// import unknowUser from "../images/figh-for-planet/unknown-user.png";
// import { getRewardsImage, gotoProfile } from "../utils/functions";
// import { AppContext } from "../AppContext";
// const DummyTickerTape = () => {
//   const { getRewardDetails } = useContext(AppContext);
//   return (
//     <div className="game-marquee">
//       <div className="marquee-item">
//         <img
//           src={unknowUser}
//           className="marq-user-img"
//           onClick={() => gotoProfile(tickerTapeTestData[0]?.userId)}
//         />

//         <div className="marq-user-details">
//           <span className="name">{`${tickerTapeTestData[0]?.nickname?.slice(
//             0,
//             6
//           )} has won`}</span>
//           {tickerTapeTestData[0]?.desc?.map((rewItem) => (
//             <div className="d-flex al-center j-center">
//               <span className="rew-desc">
//                 {getRewardDetails(rewItem?.desc, rewItem?.count)}
//               </span>
//               <img src={getRewardsImage(rewItem?.desc)} className="rew-img" />
//             </div>
//           ))}
//         </div>
//         <img className="end-img" src={tickerTape1Heart} />
//       </div>
//     </div>
//   );
// };

// export default DummyTickerTape;
