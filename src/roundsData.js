export const matchScheduleInfoFinal = [
  {
    matchId: 1,
    startTime: "2023-12-11 00:00:00",
    endTime: "2023-12-18 00:00:00",
    matchInfoList: [
      //   {
      //     planetId: 1,
      //     opponentPlanetId: 2,
      //   },
      //   {
      //     planetId: 3,
      //     opponentPlanetId: 4,
      //   },
      //   {
      //     planetId: 5,
      //     opponentPlanetId: 6,
      //   },
      //   {
      //     planetId: 7,
      //     opponentPlanetId: 8,
      //   },
    ],
  },
  {
    matchId: 2,
    startTime: "2023-12-11 00:00:00",
    endTime: "2023-12-18 00:00:00",
    matchInfoList: [
      //   {
      //     planetId: 5,
      //     opponentPlanetId: 6,
      //   },
      //   {
      //     planetId: 7,
      //     opponentPlanetId: 8,
      //   },
    ],
  },
  {
    matchId: 3,
    startTime: "2023-12-11 00:00:00",
    endTime: "2023-12-18 00:00:00",
    matchInfoList: [
      {
        planetId: 7,
        opponentPlanetId: 8,
      },
    ],
  },
];

// export const matchFinalDetailInfoList = [
//   {
//     matchId: 1,
//     matchWinAndLostInfoList: [
//       {
//         winnerPlanet: 1,
//         loserPlanet: 2,
//       },
//       {
//         winnerPlanet: 3,
//         loserPlanet: 4,
//       },
//       {
//         winnerPlanet: 5,
//         loserPlanet: 6,
//       },
//       {
//         winnerPlanet: 7,
//         loserPlanet: 8,
//       },
//     ],
//   },

//   {
//     matchId: 2,
//     matchWinAndLostInfoList: [
//       {
//         winnerPlanet: 1,
//         loserPlanet: 2,
//       },
//       {
//         winnerPlanet: 3,
//         loserPlanet: 7,
//       },
//     ],
//   },

//   {
//     matchId: 3,
//     matchWinAndLostInfoList: [
//       {
//         winnerPlanet: 1,
//         loserPlanet: 7,
//       },
//     ],
//   },
// ];

export const matchFinalDetailInfoList = [
  {
    matchId: 1,
    matchWinAndLostInfoList: [
      {
        winnerPlanet: 1,
        loserPlanet: 7,
      },
      {
        winnerPlanet: 2,
        loserPlanet: 8,
      },
      {
        winnerPlanet: 5,
        loserPlanet: 3,
      },
      {
        winnerPlanet: 6,
        loserPlanet: 4,
      },
    ],
  },
  {
    matchId: 2,
    matchWinAndLostInfoList: [
      {
        winnerPlanet: 1,
        loserPlanet: 2,
      },
      {
        winnerPlanet: 5,
        loserPlanet: 6,
      },
    ],
  },
  {
    matchId: 3,
    matchWinAndLostInfoList: [
      {
        winnerPlanet: 5,
        loserPlanet: 1,
      },
    ],
  },
];
