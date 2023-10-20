import { baseUrl } from "./api";

export const formatNumbers = (numberToConvert) => {
  if (numberToConvert >= 1000000) {
    return (numberToConvert / 1000000).toFixed(1) + "M";
  } else if (numberToConvert >= 1000) {
    return (numberToConvert / 1000).toFixed(1) + "K";
  } else {
    return numberToConvert.toString();
  }
};

export const getLevelImage = (level, isTalent) => {
  const talentLevelUrl = `${baseUrl}/streamkar/common/img/tlv`;
  const userLevelUrl = `${baseUrl}/streamkar/common/img/ulv`;
  if (isTalent) {
    return `${talentLevelUrl}/${level}.png`;
  } else {
    return `${userLevelUrl}/${level}.png`;
  }
};

export const gotoProfile = (id) => {
  window.location.href = `http://www.kktv1.com/m/?roomid=${id}`;
};

export const getDateTimeIsoString = (year, month, day, isStart) => {
  const endDate = new Date(year, month, day);

  if (!isStart) {
    endDate.setHours(23, 59, 59, 999);
  } else {
    endDate.setHours(0, 0, 0, 0);
  }
  // Format the date and time into a string
  const formattedDate = endDate.toISOString();

  return formattedDate;
};
export function getRewardsImage(rewDesc) {
  var rewImg;

  if (rewDesc?.includes("Raging Bull Profile Frame")) {
    rewImg = baseUrl + "/streamkar/rewards/valentineFrameUser.png";
  } else if (rewDesc?.includes("fireBrandAudioTheme")) {
    rewImg = baseUrl + "/streamkar/rewards/fireBrandAudioTheme.png";
  } else if (rewDesc?.includes("Bugatti Veyron Entrance")) {
    rewImg = baseUrl + "/streamkar/rewards/bugati.png";
  } else if (rewDesc?.includes("Hawk entrance")) {
    rewImg = baseUrl + "/streamkar/rewards/hawk.png";
  } else if (rewDesc?.includes("Hawk Entrance")) {
    rewImg = baseUrl + "/streamkar/rewards/hawk.png";
  } else if (rewDesc?.includes("F22 entrance")) {
    rewImg = baseUrl + "/streamkar/rewards/f22.png";
  } else if (rewDesc?.includes("Rider entrance")) {
    rewImg = baseUrl + "/streamkar/rewards/rider.png";
  } else if (rewDesc?.includes("Radiance Silver profile frame")) {
    rewImg = baseUrl + "/streamkar/rewards/radianceSilver.png";
  } else if (rewDesc?.includes("Radiance Gold profile frame")) {
    rewImg = baseUrl + "/streamkar/rewards/radianceGold.png";
  } else if (rewDesc?.includes("Maharaja entrance")) {
    rewImg = baseUrl + "/streamkar/rewards/Maharaja-rewards.png";
  } else if (rewDesc?.includes("Maharaja Entrance")) {
    rewImg = baseUrl + "/streamkar/rewards/Maharaja-rewards.png";
  } else if (rewDesc?.includes("PARTY GLITTER room skin")) {
    rewImg = baseUrl + "/streamkar/rewards/partyGliter.png";
  } else if (rewDesc?.includes("GameMaster profile frame")) {
    rewImg = baseUrl + "/streamkar/rewards/gameMasterProfileFrame.png";
  } else if (rewDesc?.includes("Phoenix entrance")) {
    rewImg = baseUrl + "/streamkar/rewards/phoenix.png";
  } else if (rewDesc?.includes("Royal Profile Frame")) {
    rewImg = baseUrl + "/streamkar/rewards/royalProfileFrame.png";
  } else if (rewDesc?.includes("Bomber entrance")) {
    rewImg = baseUrl + "/streamkar/rewards/bomber.png";
  } else if (rewDesc?.includes("Phantom entrance")) {
    rewImg = baseUrl + "/streamkar/rewards/phantom.png";
  } else if (rewDesc?.includes("Phantom Entrance")) {
    rewImg = baseUrl + "/streamkar/rewards/phantom.png";
  } else if (rewDesc?.includes("Glory Profile frame")) {
    rewImg = baseUrl + "/streamkar/rewards/glory-frame.png";
  } else if (rewDesc?.includes("Celebration room skin")) {
    rewImg = baseUrl + "/streamkar/rewards/celebrationRoomskin.png";
  } else if (rewDesc?.includes("Ace High profile frame")) {
    rewImg = baseUrl + "/streamkar/rewards/ace.png";
  } else if (rewDesc?.includes("FireBrand profile frame")) {
    rewImg = baseUrl + "/streamkar/rewards/firebrand Profile frame.png";
  } else if (rewDesc?.includes("Party Glitter room skin")) {
    rewImg = baseUrl + "/streamkar/rewards/partyGliter.png";
  } else if (rewDesc?.includes("Thunder audio theme")) {
    rewImg = baseUrl + "/streamkar/rewards/thunderAudio.png";
  } else if (rewDesc?.includes("Rusty Ranger entrance")) {
    rewImg = baseUrl + "/streamkar/rewards/rustyRanger.png";
  } else if (rewDesc?.includes("Rusty Ranger Entrance")) {
    rewImg = baseUrl + "/streamkar/rewards/rustyRanger.png";
  } else if (rewDesc?.includes("Gold Luxury Entrance")) {
    rewImg = baseUrl + "/streamkar/rewards/goldLuxury.png";
  } else if (rewDesc?.includes("King of Road audio theme")) {
    rewImg = baseUrl + "/streamkar/rewards/kingOfRoadRoomSkin.png";
  } else if (rewDesc?.includes("Kingpin entrance")) {
    rewImg = baseUrl + "/streamkar/rewards/kingspin.png";
  } else if (rewDesc?.includes("Bunny profile frame")) {
    rewImg = baseUrl + "/streamkar/rewards/bunnyFrame.gif";
  } else if (rewDesc?.includes("Fury profile frame")) {
    rewImg = baseUrl + "/streamkar/rewards/furyFrame.png";
  } else if (rewDesc?.includes("Fury Profile Frame")) {
    rewImg = baseUrl + "/streamkar/rewards/furyFrame.png";
  } else if (rewDesc?.includes("beansbag")) {
    rewImg = baseUrl + "/streamkar/rewards/beanbag.png";
  } else if (rewDesc?.includes("SVIP")) {
    rewImg = baseUrl + "/streamkar/rewards/svip.png";
  } else if (rewDesc?.includes("VIP")) {
    rewImg = baseUrl + "/streamkar/rewards/vip.png";
  } else if (rewDesc?.includes("Phantom Entrance")) {
    rewImg = baseUrl + "/streamkar/rewards/phantom.png";
  } else if (rewDesc?.includes("Fish World audio theme")) {
    rewImg = baseUrl + "/streamkar/rewards/fishWorldRoomskin.png";
  } else if (rewDesc?.includes("Solar Flare Entrance")) {
    rewImg = baseUrl + "/streamkar/rewards/solar.png";
  } else if (rewDesc?.includes("Special SK Gala Frame")) {
    rewImg = baseUrl + "/streamkar/rewards/galaSpecial.png";
  } else if (rewDesc?.includes("Royal Carriage Entrance")) {
    rewImg = baseUrl + "/streamkar/rewards/royal.png";
  } else if (rewDesc?.includes("7 digit Lucky ID")) {
    rewImg = baseUrl + "/streamkar/rewards/luckyId.png";
  } else if (rewDesc?.includes("Beans")) {
    rewImg = baseUrl + "/streamkar/rewards/beanbag.png";
  } else if (rewDesc?.includes("Firepower")) {
    rewImg = baseUrl + "/streamkar/rewards/firepower.png";
  } else if (rewDesc?.includes("Kingpin Profile Frame")) {
    rewImg = baseUrl + "/streamkar/rewards/kingpinFrame.png";
  } else if (rewDesc?.includes("Royalty Profile Frame")) {
    rewImg = baseUrl + "/streamkar/rewards/royaltiProfileFrame.png";
  } else if (rewDesc?.includes("wildcard")) {
    rewImg = baseUrl + "/streamkar/rewards/wildcard.png";
  } else if (rewDesc?.includes("Wildcards")) {
    rewImg = baseUrl + "/streamkar/rewards/wildcard.png";
  } else if (rewDesc?.includes("Trophies")) {
    rewImg = baseUrl + "/streamkar/rewards/trophies.png";
  } else if (rewDesc?.includes("trophies")) {
    rewImg = baseUrl + "/streamkar/rewards/trophies.png";
  } else if (rewDesc?.includes("Boss Profile Frame")) {
    rewImg = baseUrl + "/streamkar/rewards/bossFrame.png";
  } else if (rewDesc?.includes("Gala Superstar Audio theme")) {
    rewImg = baseUrl + "/streamkar/rewards/galasuperstarroomskin.png";
  } else if (rewDesc?.includes("Bunny Profile Frame")) {
    rewImg = baseUrl + "/streamkar/rewards/bunnyFrame.gif";
  } else if (rewDesc?.includes("Gala Star Audio theme")) {
    rewImg = baseUrl + "/streamkar/rewards/galaroomskin.jpg";
  } else if (rewDesc?.includes("Loved One Profile Frame")) {
    rewImg = baseUrl + "/streamkar/rewards/loveFrame.png";
  } else if (rewDesc?.includes("Party Glitter Audio theme")) {
    rewImg = baseUrl + "/streamkar/rewards/partyGliter.png";
  } else if (rewDesc?.includes("follower Card")) {
    rewImg = baseUrl + "/streamkar/rewards/followerCard.png";
  } else if (rewDesc?.includes("Doyen Profile Frame")) {
    rewImg = baseUrl + "/streamkar/rewards/doyenFrame.png";
  } else if (rewDesc?.includes("Victory Slide Entrance")) {
    rewImg = baseUrl + "/streamkar/rewards/victorySlide.png";
  } else if (rewDesc?.includes("The Master Audio Theme")) {
    rewImg = baseUrl + "/streamkar/rewards/theMasterRoomSkin.png";
  } else if (rewDesc?.includes("Party Junkie Profile Frame")) {
    rewImg = baseUrl + "/streamkar/rewards/partyJunkle.png";
  } else if (rewDesc?.includes("SK Royal Kingdom Entrance")) {
    rewImg = baseUrl + "/streamkar/rewards/royalKingdom.png";
  } else if (rewDesc?.includes("Conqueror Profile Frame")) {
    rewImg = baseUrl + "/streamkar/rewards/conquerorFrame.png";
  } else if (rewDesc?.includes("Monarch Audio Theme")) {
    rewImg = baseUrl + "/streamkar/rewards/monarchRoom.png";
  } else if (rewDesc?.includes("Premier Profile Frame")) {
    rewImg = baseUrl + "/streamkar/rewards/premierFrame.png";
  } else if (rewDesc?.includes("Rustry Ranger Entrance")) {
    rewImg = baseUrl + "/streamkar/rewards/rustyRanger.png";
  } else if (rewDesc?.includes("Rusty Ranger Entrance")) {
    rewImg = baseUrl + "/streamkar/rewards/rustyRanger.png";
  } else if (rewDesc?.includes("Blazing Profile Frame")) {
    rewImg = baseUrl + "/streamkar/rewards/blazingFrame.png";
  } else if (rewDesc?.includes("Spaceship Entrance")) {
    rewImg = baseUrl + "/streamkar/rewards/spaceship.png";
  } else if (rewDesc?.includes("Monarch Entrance")) {
    rewImg = baseUrl + "/streamkar/rewards/monarch.png";
  } else if (rewDesc?.includes("Monarch entrance")) {
    rewImg = baseUrl + "/streamkar/rewards/monarch.png";
  } else if (rewDesc?.includes("November Billionaire Profile Frame")) {
    rewImg = baseUrl + "/streamkar/rewards/novemberBillionaireFrame.png";
  } else if (rewDesc?.includes("Discoverer Audio Theme")) {
    rewImg = baseUrl + "/streamkar/rewards/discovererAudioTheme.png";
  } else if (rewDesc?.includes("Space Warrior Profile Frame")) {
    rewImg = baseUrl + "/streamkar/rewards/warrior.png";
  } else if (rewDesc?.includes("FireBrand Audio Theme")) {
    rewImg = baseUrl + "/streamkar/rewards/fireBrandAudioTheme.png";
  } else if (rewDesc?.includes("GALA Special Profile Frame")) {
    rewImg = baseUrl + "/streamkar/rewards/galaSpecial.png";
  } else if (rewDesc?.includes("Raging Bull Profile Frame")) {
    rewImg = baseUrl + "/streamkar/rewards/valentineFrameUser.png";
  } else if (rewDesc?.includes("Sea Wolf Profile Frame")) {
    rewImg = baseUrl + "/streamkar/rewards/seawolfFrame.png";
  } else if (rewDesc?.includes("Sea Wold Profile Frame")) {
    rewImg = baseUrl + "/streamkar/rewards/seawolfFrame.png";
  } else if (rewDesc?.includes("Victory Audio Theme")) {
    rewImg = baseUrl + "/streamkar/rewards/victoryFrame.png";
  } else if (rewDesc?.includes("Gold Luxury Entrance")) {
    rewImg = baseUrl + "/streamkar/rewards/goldLuxury.png";
  } else if (rewDesc?.includes("Brave Heart Profile Frame")) {
    rewImg = baseUrl + "/streamkar/rewards/braveHeart.png";
  } else if (rewDesc?.includes("Space Traveller Profile Frame")) {
    rewImg = baseUrl + "/streamkar/rewards/travellor.png";
  } else if (rewDesc?.includes("Space Audio Theme")) {
    rewImg = baseUrl + "/streamkar/rewards/SpaceAudioTheme.png";
  } else if (rewDesc?.includes("Space Warrior Profile Frame")) {
    rewImg = baseUrl + "/streamkar/rewards/warrior.png";
  } else if (rewDesc?.includes("Gala Special Profile Frame")) {
    rewImg = baseUrl + "/streamkar/rewards/galaSpecial.png";
  } else if (rewDesc?.includes("Orbit Profile Frame")) {
    rewImg = baseUrl + "/streamkar/rewards/orbit.png";
  } else if (rewDesc?.includes("Orbit Theme")) {
    rewImg = baseUrl + "/streamkar/rewards/OrbitAudioTheme.png";
  } else if (rewDesc?.includes("Space Champ Profile Frame")) {
    rewImg = baseUrl + "/streamkar/rewards/champ.png";
  } else if (rewDesc?.includes("Fiery profile frame")) {
    rewImg = baseUrl + "/streamkar/rewards/victoryFrame.png";
  } else if (rewDesc?.includes("Luminary profile frame")) {
    rewImg = baseUrl + "/streamkar/rewards/luminarFrame.png";
  } else if (rewDesc?.includes("Voyager profile frame")) {
    rewImg = baseUrl + "/streamkar/rewards/voyagerProfileFrame.png";
  } else if (rewDesc?.includes("Space Theme")) {
    rewImg = baseUrl + "/streamkar/rewards/SpaceAudioTheme.png";
  } else if (rewDesc?.includes("Crust Theme")) {
    rewImg = baseUrl + "/streamkar/rewards/CrustAudioTheme.png";
  } else if (rewDesc?.includes("Growth Points")) {
    rewImg = baseUrl + "/streamkar/rewards/growth.png";
  } else if (rewDesc?.includes("Super Star Profile Frame")) {
    rewImg = baseUrl + "/streamkar/rewards/superstartMic.png";
  } else if (rewDesc?.includes("Hummer Premium Entrance")) {
    rewImg = baseUrl + "/streamkar/rewards/hummer.png";
  } else if (rewDesc?.includes("Gala VvIP Profile Frame")) {
    rewImg = baseUrl + "/streamkar/rewards/galaVipProfile.png";
  } else if (rewDesc?.includes("Maharaja Premium Entrance")) {
    rewImg = baseUrl + "/streamkar/rewards/maharajaPremium.png";
  } else {
    rewImg = baseUrl + "/streamkar/rewards/noRew.png";
  }

  return rewImg;
}

export function getCurrenTime() {
  let today = new Date();
  let hours = today.getUTCHours();
  let minutes = today.getUTCMinutes();
  let seconds = today.getUTCSeconds();
  let finaTime;

  let fullDate =
    today.getUTCFullYear() +
    "-" +
    (today.getUTCMonth() + 1) +
    "-" +
    (today.getUTCDate() <= 9 ? "0" + today.getUTCDate() : today.getUTCDate());
  finaTime =
    `${fullDate}T` +
    (hours > 9 ? hours : "0" + hours) +
    ":" +
    (minutes > 9 ? minutes : "0" + minutes) +
    ":" +
    (seconds > 9 ? seconds : "0" + seconds);

  return finaTime;
}

export function getMonthTime(time) {
  // Replace 'yourUtcTimeString' with your UTC time string
  var yourUtcTimeString = "2023-09-21T15:30:00Z";

  // Create a Date object from the UTC time string
  var utcDate = new Date(yourUtcTimeString);

  // Extract month and time components
  var monthNumeric = utcDate.getUTCMonth() + 1; // Month (0-indexed, so add 1)
  var monthName = utcDate.toLocaleDateString("en-US", { month: "long" }); // Full month name
  var year = utcDate.getUTCFullYear(); // Year
  var hours = utcDate.getUTCHours(); // Hours
  var minutes = utcDate.getUTCMinutes(); // Minutes
  var seconds = utcDate.getUTCSeconds(); // Seconds

  // console.log("Month Numeric: " + monthNumeric);
  // console.log("Month Name: " + monthName);
  // console.log("Year: " + year);
  // console.log("Hours: " + hours);
  // console.log("Minutes: " + minutes);
  // console.log("Seconds: " + seconds);
  // console.log(
  //   "log time:",
  //   `${monthNumeric} ${monthName} ${hours}:${minutes}:${seconds}`
  // );
  return `${monthNumeric} ${monthName.slice(
    0,
    3
  )} ${hours}:${minutes}:${seconds}`;
}

export const getCurrentTimeStamp = () => {
  const current_time_milliseconds = new Date().getTime().toISOString();

  return current_time_milliseconds;
};

// export const getUtcTimeInMilliSeconds = (time) => {
//   const millisecondsSinceEpoch = Date.parse(time);
//   // console.log("utc to milli seconds", millisecondsSinceEpoch);
//   return millisecondsSinceEpoch;
// };

export const getUtcTimeInMilliSeconds = (time) => {
  let t = new Date(time);

  // const millisecondsSinceEpoch = Date.parse(time);
  const millisecondsSinceEpoch = t.getTime() + t.getTimezoneOffset() * 60000;
  return millisecondsSinceEpoch;
};
