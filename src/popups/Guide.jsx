import React, { useContext } from "react";
import PopUp from "../components/Popup";
import bg from "../images/event-gifting/event-gfting-leaderboard.png";
import guideTag from "../images/popups/guide-title.png";
import { AppContext } from "../AppContext";

const Guide = ({ popUpHandler }) => {
  const { selectedLng } = useContext(AppContext);
  return (
    <PopUp bg={bg} guide={true}>
      <div className="guide-popup">
        <img src={guideTag} className="guide-tag" />
        <button className="closeBtn" onClick={popUpHandler} />
        {selectedLng === 1 ? (
          <div className="guide-content">
            <div className="text-div">
              There will be three stages and 8 Planets in this event. Each
              Planet will be a TEAM.
              <br />
              Chance to Play: spend 10K beans on event gifts for getting a
              chance.
              <br />
              Chance to join a team: send any 1 event gift.
            </div>
            <div style={{ borderRadius: "2vw" }}>
              <table className="info-table">
                <tr>
                  <td>Sr</td>
                  <td>Date</td>
                  <td>Game will produce</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>1st - 31st Oct</td>
                  <td>Firepower</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>1st Nov - 17th Dec</td>
                  <td>Firepower + Wildcards</td>
                </tr>
                <tr>
                  <td>3</td>

                  <td>18th - 24th Dec</td>
                  <td>Growth Points</td>
                </tr>
                <tr>
                  <td>4</td>

                  <td>25th - 31st Dec</td>
                  <td>Trophies</td>
                </tr>
              </table>
            </div>

            <div className="stage1">
              <h3>Stage 1:Joining a planet</h3>
              <div className="text-div">
                <ul>
                  <li>
                    To join a Planet, users have to
                    <span className="highlight">send</span>
                    at least 1 event gift.
                  </li>
                  <li>
                    System will <span className="highlight">randomly</span> add
                    users to any one Planet.
                  </li>
                  <li>
                    Users{" "}
                    <span className="highlight">
                      will not be able to change
                    </span>{" "}
                    the planet once added to the Planet at this stage.
                  </li>
                </ul>
              </div>
            </div>

            <div className="stage1">
              <h3>Stage 2:1v1 Match Week</h3>
              <div className="text-div">
                <ul>
                  <li>
                    Once added to the Planet, the user will see his{" "}
                    <span className="highlight">own</span> spaceship on the
                    leaderboard.
                  </li>
                  <li>
                    To <span className="highlight">weaponize</span> the
                    spaceship, the user needs to play the game.{" "}
                  </li>
                  <li>
                    The game will give out{" "}
                    <span className="highlight">FIREPOWER</span> , which will be
                    <span className="highlight">added</span> to the spaceship.
                  </li>
                  <li>
                    On the basis of these Firepower, the users will be arranged
                    <span className="highlight">
                      amongst themselves on the Planet’s internal rankings.
                    </span>
                  </li>
                  <li>
                    Every week from{" "}
                    <span className="highlight">
                      Friday to the upcoming Sunday
                    </span>
                    , matches would be connected between the 2 users from the 2
                    different Planets. Like Rank 1 from Planet A vs Rank 1 from
                    Planet B and so on.
                  </li>
                  <li>
                    User's <span className="highlight">Firepower</span> at the
                    end of each round, will be taken into consideration.
                  </li>
                  <li>
                    <span className="highlight">
                      20% Firepower of the loser will be deducted from his
                      current Firepower collection and it will be transferred to
                      the winner.
                    </span>
                  </li>
                  <li>
                    Players who are{" "}
                    <span className="highlight"> not matched</span> will have no
                    impact.
                  </li>
                  <li>
                    In case, at the end of the match, the Firepower of both the
                    opponents are the same, none of them will receive any extra
                    rewards
                  </li>
                  <li>
                    Every week, <span className="highlight">4 users</span> with
                    maximum Firepower collection will receive extra{" "}
                    <span className="highlight">5,000 Beans</span> each.
                  </li>
                </ul>
              </div>
            </div>

            <div className="match-schedule">
              <h3>Match Schedule</h3>

              <div style={{ borderRadius: "2vw" }}>
                <table className="info-table">
                  <tr>
                    <td>Week</td>
                    <td>Start Date & Time</td>
                    <td>End Date & Time</td>
                  </tr>
                  <tr>
                    <td>Week 1</td>
                    <td>2023-10-06 00:00:00</td>
                    <td>2023-10-09 00:00:00</td>
                  </tr>
                  <tr>
                    <td>Week 2</td>

                    <td>2023-10-13 00:00:00</td>
                    <td>2023-10-16 00:00:00</td>
                  </tr>
                  <tr>
                    <td>Week 3</td>
                    <td>2023-10-20 00:00:00</td>
                    <td>2023-10-23 00:00:00</td>
                  </tr>
                  <tr>
                    <td>Week 4</td>
                    <td>2023-10-27 00:00:00</td>
                    <td>2023-10-30 00:00:00</td>
                  </tr>
                  <tr>
                    <td>Week 5</td>
                    <td>2023-11-03 00:00:00</td>
                    <td>2023-11-06 00:00:00</td>
                  </tr>
                  <tr>
                    <td>Week 6</td>

                    <td>2023-11-10 00:00:00</td>
                    <td>2023-11-13 00:00:00</td>
                  </tr>
                  <tr>
                    <td>Week 7</td>

                    <td>2023-11-17 00:00:00</td>
                    <td>2023-11-20 00:00:00</td>
                  </tr>
                  <tr>
                    <td>Week 8</td>
                    <td>2023-11-24 00:00:00</td>
                    <td>2023-11-27 00:00:00</td>
                  </tr>
                  <tr>
                    <td>Week 9</td>
                    <td>2023-12-01 00:00:00</td>
                    <td>2023-12-04 00:00:00</td>
                  </tr>
                  <tr>
                    <td>Week 10</td>
                    <td>2023-12-08 00:00:00</td>
                    <td>2023-12-11 00:00:00</td>
                  </tr>
                </table>
              </div>
            </div>

            <div className="stage1">
              <h3>Team Strength</h3>
              <div className="text-div">
                <ul>
                  <li>
                    Planets on the ranking board will be ranked based on
                    <span className="highlight">STRENGTH</span>.
                  </li>
                  <li>
                    Each Planet will have its{" "}
                    <span className="highlight">own</span> Strength.
                  </li>
                  <li>
                    Strength will be determined on the basis of the number of
                    <span className="highlight">
                      members in the Planet X the Firepower collected by each
                      user.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="stage1">
              <h3>Stage 3:Battle Period</h3>
              <div className="text-div">
                <ul>
                  <li>
                    11th December onwards,
                    <span className="highlight">Three rounds</span> of matches
                    between the Planets will be conducted.
                  </li>
                  <li>
                    In these matches, the total Strengths of the Planets, at the
                    end of the match, will be used to determine the winners.
                  </li>
                </ul>
              </div>
            </div>

            <div className="stage1">
              <h3>Round 1: 11th to 17th December</h3>
              <div className="text-div">
                <ul>
                  <li>
                    On{" "}
                    <span className="highlight">
                      December 17th, at 23:59.59
                    </span>{" "}
                    , the Planet with the maximum Strength will be considered as
                    the winner.
                  </li>
                  <li>
                    The Strength of the losing team will be transferred to the
                    winning team.
                  </li>
                  <li>
                    The losing Planets will be{" "}
                    <span className="highlight">out</span> at the end of this
                    round,<span className="highlight">4</span>
                    Planets will move on to the next round.
                  </li>
                  <li>
                    All the users who were{" "}
                    <span className="highlight">
                      a part of the losing team will be out too.
                    </span>
                  </li>
                  <li>
                    Strength in this round will be calculated on the basis of:
                    <span className="highlight">
                      (number of Members X Total Firepower collected by the
                      members) + (number of Members X Wildcards collected by the
                      members)
                    </span>
                  </li>

                  <li>
                    Once the losing players and their respective Planets are
                    eliminated, their progress in firepower will{" "}
                    <span className="highlight">reset</span> . But the Wildcards
                    collected by the players will remain in their accounts.
                  </li>
                </ul>
              </div>
            </div>

            <div className="stage1">
              <h3>Round 2 WILD-CARD round: 18th-24th December</h3>
              <div className="text-div">
                <ul>
                  <li>
                    <span className="highlight">1st November onwards,</span> the
                    distribution of WILDCARDS will start.
                  </li>
                  <li>
                    The Wildcards will <span className="highlight">stay</span>{" "}
                    in the user's account even if they lose the weekly match.
                  </li>
                  <li>
                    The collected Wildcards will come into{" "}
                    <span className="highlight">use</span> in this round.
                  </li>
                  <li>
                    Users who were part of losing Planets and were eliminated,
                    with the help of Wildcards, can{" "}
                    <span className="highlight">join</span> any four qualified
                    Planets of their choice.
                  </li>
                  <li>
                    New users who have played the game and have Wildcards, will
                    also be able to join any Planet of their choice.
                  </li>

                  <li>
                    To join, users have to visit the webpage and manually choose
                    to join the Planet of their choice.
                  </li>

                  <li>
                    From{" "}
                    <span className="highlight">
                      December 18th to December 24th,
                    </span>{" "}
                    the existing Firepower and Wildcards{" "}
                    <span className="highlight">collected</span> by the users,
                    will be{" "}
                    <span className="highlight">
                      converted to Growth Points
                    </span>
                  </li>
                  <li>
                    Strength of the team in this round will be calculated on the
                    basis of{" "}
                    <span className="highlight">
                      the number of Members X Total GROWTH Points of the
                      Members.
                    </span>
                  </li>
                  <li>
                    The teams <span className="highlight">losing</span> this
                    round will be <span className="highlight">eliminated</span>,
                    and <span className="highlight">2</span>
                    finalists will go against each other in the final round.
                  </li>
                  <li>
                    The winning team will{" "}
                    <span className="highlight">acquire</span> the Strength of
                    the losers.
                  </li>
                </ul>
              </div>
            </div>

            <div className="stage1">
              <h3>Round 3: 25th to 31st December</h3>
              <div className="text-div">
                <ul>
                  <li>
                    In this round, <span className="highlight">Trophies</span>{" "}
                    will be given instead of Growth Points.
                  </li>
                  <li>
                    The existing Growth Points in the account of the users will
                    be converted to trophies in the ratio of 1:1
                  </li>
                  <li>
                    Strength will be calculated on the basis{" "}
                    <span className="highlight">
                      of the number of members X the number of trophies
                      collected by the members.
                    </span>
                  </li>
                  <li>
                    <span className="highlight">
                      During the Match time, eliminated or new users cannot join
                      the Planets.
                    </span>
                  </li>
                  <li>
                    <span className="highlight">
                      The Planet with maximum Strength at the end of the event
                      will be the winner of this Space Race
                    </span>
                  </li>

                  <li>
                    <span className="highlight">
                      The Top 5 users from Runner-Up team of Round 3 will win
                      Rewards from Runner-Up Beans Pot.
                    </span>
                  </li>
                </ul>{" "}
                <div style={{ borderRadius: "2vw" }}>
                  <table className="info-table">
                    <tr>
                      <td>Rank</td>
                      <td>Rewards</td>
                    </tr>
                    <tr>
                      <td>1st</td>
                      <td>40% of beanspot</td>
                    </tr>
                    <tr>
                      <td>2nd</td>
                      <td>30% of beanspot</td>
                    </tr>
                    <tr>
                      <td>3rd,4th,5th</td>
                      <td>10% of beanspot</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>

            <div className="stage1">
              <h3>Weekly Leaderboard Rankings</h3>
              <div className="text-div">
                <ul>
                  <li>
                    The User weekly leaderboard will be based on the number of
                    Beans spent on event gifts, during the weekly cycle.
                  </li>
                  <li>
                    Weekly Cycle: Sunday 00:00 GMT - Saturday 23:59:59 GMT.
                  </li>
                  <li>
                    The result of matches conducted in Stage 2 and Stage 3 will
                    not affect the rankings on this leaderboard.
                  </li>
                  <li>
                    30th Dec will be the last day of the Final Week’s weekly
                    cycle.
                  </li>
                  <li>
                    The talent leaderboard will be based on the number of gems
                    received.
                  </li>
                </ul>
              </div>
            </div>

            <div className="stage1">
              <h3>Overall Leaderboard Rankings</h3>
              <div className="text-div">
                <ul>
                  <li>
                    The talent leaderboard will be based on the number of gems
                    received.
                  </li>
                  <li>
                    The user leaderboard will be based on the Beans spent on
                    event gifts during the event tenure.
                  </li>
                  <li>
                    The result of matches conducted in Stage 2 and Stage 3 will
                    not affect the rankings on this leaderboard.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="guide-content">
            <div className="text-div">
              Iss event mein 8 Planets aur iss event ko 3 stages mein khela
              jayega. Harr Planet ko ek team ki tarah consider kiya jayega.
              <br />
              Game khelne ke liye: 10K beans spend karein event gifts par ek
              chance ke liye.
              <br />
              Team ko join karne ke liye: koi bhi Ek event gift send karein.
            </div>
            <div style={{ borderRadius: "2vw" }}>
              <table className="info-table">
                <tr>
                  <td>Sr</td>
                  <td>Date</td>
                  <td>Game will produce</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>1st - 31st Oct</td>
                  <td>Firepower</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>1st Nov - 17th Dec</td>
                  <td>Firepower + Wildcards</td>
                </tr>
                <tr>
                  <td>3</td>

                  <td>18th - 24th Dec</td>
                  <td>Growth Points</td>
                </tr>
                <tr>
                  <td>4</td>

                  <td>25th - 31st Dec</td>
                  <td>Trophies</td>
                </tr>
              </table>
            </div>

            <div className="stage1">
              <h3>Stage 1: Planet ka hissa hona</h3>
              <div className="text-div">
                <ul>
                  <li>
                    Planet ka hissa hone ke liye, users ko koi bhi ek event gift
                    bhejna hoga.
                  </li>
                  <li>
                    {" "}
                    System <span className="highlight">randomly</span> user ko
                    kisi ek Planet mein add karega
                  </li>
                  <li>
                    Users ko Planets change karne ka option nahi hoga iss stage
                    mein.
                  </li>
                </ul>
              </div>
            </div>

            <div className="stage1">
              <h3>Stage 2:1v1 Match Week</h3>
              <div className="text-div">
                <ul>
                  <li>
                    Join hone ke baad, user ko{" "}
                    <span className="highlight">khud ki</span> Spaceship dikhegi
                    leaderboard par.
                  </li>
                  <li>
                    Spaceship ko <span className="highlight">weaponize</span>{" "}
                    karne ke liye, user ko game khelna hoga.
                  </li>
                  <li>
                    {" "}
                    Game <span className="highlight">FIREPOWER</span> dega, jo
                    spaceship par add hoga.
                  </li>
                  <li>
                    Firepower jo user ne <span className="highlight">add</span>{" "}
                    kiya hai uske basis par user’s ka spaceship life determine
                    hoga.
                  </li>
                  <li>
                    Firepower ke basis par,{" "}
                    <span className="highlight">
                      users ko Planet ke internal leaderboard ranking mein
                      arrange kiya jayega.
                    </span>
                  </li>
                  <li>
                    Har hafte, Friday se lekar aane wale Sunday tak, 2 users ko
                    connect kiya jayega 2 alag Planets se, iss match ke liye.
                    Example ke taur par, Planet A ke Rank 1 user ko Planet B ke
                    Rank 1 user ke saath match khelna hoga.
                  </li>
                  <li>
                    User ke Firepower ke basis par winner ko determine kiya
                    jayega.
                  </li>
                  <li>
                    Har round ke end mein, harne wale user ke 20% Firepower
                    deduct karke winner ko diye jayenge.
                  </li>
                  <li>
                    Jinn player ko match nahi kiya gaya hai, unpe koi effect
                    nahi hoga.
                  </li>
                  <li>
                    Aise situation mein, jis mein dono player ke Firepower same
                    hai, aise mein koi Firepower transfer nahi hoga.
                  </li>
                  <li>
                    Har hafte, aise 4 users jinka Firepower sabse zyada hai,
                    unhe extra 5000 Beans diye jayenge.
                  </li>
                </ul>
              </div>
            </div>

            <div className="match-schedule">
              <h3>Match Schedule</h3>
              <div style={{ borderRadius: "2vw" }}>
                <table className="info-table">
                  <tr>
                    <td>Week</td>
                    <td>Start Date & Time</td>
                    <td>End Date & Time</td>
                  </tr>
                  <tr>
                    <td>Week 1</td>
                    <td>2023-10-06 00:00:00</td>
                    <td>2023-10-09 00:00:00</td>
                  </tr>
                  <tr>
                    <td>Week 2</td>

                    <td>2023-10-13 00:00:00</td>
                    <td>2023-10-16 00:00:00</td>
                  </tr>
                  <tr>
                    <td>Week 3</td>
                    <td>2023-10-20 00:00:00</td>
                    <td>2023-10-23 00:00:00</td>
                  </tr>
                  <tr>
                    <td>Week 4</td>
                    <td>2023-10-27 00:00:00</td>
                    <td>2023-10-30 00:00:00</td>
                  </tr>
                  <tr>
                    <td>Week 5</td>
                    <td>2023-11-03 00:00:00</td>
                    <td>2023-11-06 00:00:00</td>
                  </tr>
                  <tr>
                    <td>Week 6</td>

                    <td>2023-11-10 00:00:00</td>
                    <td>2023-11-13 00:00:00</td>
                  </tr>
                  <tr>
                    <td>Week 7</td>

                    <td>2023-11-17 00:00:00</td>
                    <td>2023-11-20 00:00:00</td>
                  </tr>
                  <tr>
                    <td>Week 8</td>
                    <td>2023-11-24 00:00:00</td>
                    <td>2023-11-27 00:00:00</td>
                  </tr>
                  <tr>
                    <td>Week 9</td>
                    <td>2023-12-01 00:00:00</td>
                    <td>2023-12-04 00:00:00</td>
                  </tr>
                  <tr>
                    <td>Week 10</td>
                    <td>2023-12-08 00:00:00</td>
                    <td>2023-12-11 00:00:00</td>
                  </tr>
                </table>
              </div>
            </div>

            <div className="stage1">
              <h3>Team Strength</h3>
              <div className="text-div">
                <ul>
                  <li>
                    Planet ranking board par teams ko{" "}
                    <span className="highlight">STRENGTH</span> ke basis par
                    rank kiya jayega.
                  </li>
                  <li>
                    {" "}
                    Harr Planet ka <span className="highlight">
                      khudka
                    </span>{" "}
                    Strength hoga.
                  </li>
                  <li>
                    <span className="highlight">
                      Planet Strength = Planet ke members X Har member ka
                      Firepower
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="stage1">
              <h3>Stage 3:Battle Period</h3>
              <div className="text-div">
                <ul>
                  <li>
                    Har round ke end par{" "}
                    <span className="highlight">Planet ke Strength</span> ke
                    basis par <span className="highlight">winners</span>
                    decide honge.
                  </li>
                  <li>
                    11th December se, Planets ke beech matches ke Three rounds
                    honge.
                  </li>
                </ul>
              </div>
            </div>

            <div className="stage1">
              <h3>Round 1: 11th to 17th December</h3>
              <div className="text-div">
                <ul>
                  <li>
                    <span className="highlight">17th December ko 23.59.59</span>
                    pe jis Planet ke pass maximum Strength hoga, unn Planets ko
                    winner consider kiya jayega.
                  </li>
                  <li>
                    Losing team ka Strength winning team ko transfer kiya
                    jayega.
                  </li>
                  <li>
                    Losing Planets <span className="highlight">out</span> ho
                    jayenge, aur <span className="highlight">4</span> Planets
                    next round ke liye qualify karen gy.
                  </li>
                  <li>
                    <span className="highlight">
                      Jo users losing team ka part the who sare users bhi out
                      honge.
                    </span>
                  </li>
                  <li>
                    Iss round ka Strength calculation:
                    <span className="highlight">
                      (Planet ke total member X Unn Members ka collect kiye hue
                      Firepower) + (Planet ke total member X Unn Members ka
                      collect kiye hue Wildcards).
                    </span>
                  </li>

                  <li>
                    Ek bar losing players aur unke respective Planets eliminate
                    ho jaate hai, collect kiye hue Firepower{" "}
                    <span className="highlight">reset</span> honge. Par users ne
                    jo Wildcards collect kiye hai, woh unke accounts
                    <span className="highlight">mein rahenge</span> .
                  </li>
                </ul>
              </div>
            </div>

            <div className="stage1">
              <h3>Round 2 WILD-CARD round: 18th-24th December</h3>
              <div className="text-div">
                <ul>
                  <li>
                    <span className="highlight">1st November se</span> ,
                    WILDCARDS ka distribution start hoga.
                  </li>
                  <li>
                    Wildcards user ke account mein{" "}
                    <span className="highlight">rahenge</span> , inpar Stage 2
                    ke weekly <span className="highlight">match harne</span> pe
                    koi effect nahi hoga.
                  </li>
                  <li>
                    Collect kiye hue Wildcards ka use iss round mein{" "}
                    <span className="highlight">use</span> hoga.
                  </li>
                  <li>
                    Users jo losing Planets ka hissa the aur jo eliminate
                    hogaye, woh webpage par maujud 4 Planet mein se kisi bhi 1
                    Planet ko <span className="highlight">join</span> kar sakte
                    hai.
                  </li>
                  <li>
                    New user jo pehle kisi bhi planet ka hissa nahi tha par usne
                    game khelkar Wildcard collect kiya hai vo bhi kisi bhi ek
                    Planet ko join kar sakta hai.
                  </li>

                  <li>
                    Planet ko join karne ke liye, users ko webpage par jake
                    manually kisi 1 Planet ko join karna hoga.
                  </li>

                  <li>
                    <span className="highlight">
                      18th December se 24th December ke bich,
                    </span>
                    jo existing Firepower aur Wildcards collect kiye hai users
                    ne, unhe
                    <span className="highlight">
                      Growth Points mein convert
                    </span>{" "}
                    kiya jayega.
                  </li>
                  <li>
                    Planet ka Strength calculation iss round mein:
                    <span className="highlight">
                      Number of members X Members ne collect kiye hue Growth
                      Points.
                    </span>
                  </li>
                  <li>
                    Jo Planet, iss round mein match harr jayega, vo Planet
                    eliminate hoga, aur 2 Planets ko Finals mein khelne ka mauka
                    milega.
                  </li>
                  <li>
                    Winning team losing team ka Strength{" "}
                    <span className="highlight">acquire</span> karega.
                  </li>
                </ul>
              </div>
            </div>

            <div className="stage1">
              <h3>Round 3: 25th to 31st December</h3>
              <div className="text-div">
                <ul>
                  <li>
                    {" "}
                    Iss round mein, <span className="highlight">
                      Trophies
                    </span>{" "}
                    diye jayege user ko.
                  </li>
                  <li>
                    Existing Growth points ko 1:1 ratio mein convert kiya jayega
                    Trophies mein.
                  </li>
                  <li>
                    Iss round mein Planets ka strength calculation:
                    <span className="highlight">
                      Number of members X Members ne collect kiye Trophies.
                    </span>
                  </li>

                  <li>
                    <span className="highlight">
                      Match ke daruan, teams aur users jo eliminate hogaye hain,
                      unhe dobara join karne ka mauka nahi milega.
                    </span>
                  </li>

                  <li>
                    <span className="highlight">
                      Jis Planet ke paas maximum Strength hogaya event khatam
                      hone tak, vo Planet iss Space Race ka winner hoga.
                    </span>
                  </li>

                  <li>
                    <span className="highlight">
                      Round 3 ke Runner-Up Planet ke Top 5 users ko Runner-Up
                      Beans Pot se Beans Rewards milenge
                    </span>
                  </li>
                </ul>
                <div style={{ borderRadius: "2vw" }}>
                  <table className="info-table">
                    <tr>
                      <td>Rank</td>
                      <td>Rewards</td>
                    </tr>
                    <tr>
                      <td>1st</td>
                      <td>40% of beanspot</td>
                    </tr>
                    <tr>
                      <td>2nd</td>
                      <td>30% of beanspot</td>
                    </tr>
                    <tr>
                      <td>3rd,4th,5th</td>
                      <td>10% of beanspot</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>

            <div className="stage1">
              <h3>Weekly Leaderboard Rankings</h3>
              <div className="text-div">
                <ul>
                  <li>
                    User weekly leaderboard, Weekly cycle dauran event gifts pe
                    kiye gaye Beans spending ke basis pe arrange hoga.
                  </li>
                  <li>
                    Weekly Cycle: Sunday 00:00 GMT - Saturday 23:59:59 GMT.
                  </li>
                  <li>
                    Stage 2 aur Stage 3 mein conduct kiye gaye matches ka result
                    ka effect inn ranking par{" "}
                    <span className="highlight"> NAHI</span> hoga.
                  </li>
                  <li>30th Dec akhri Weekly Cycle ka akhri din hoga.</li>
                  <li>
                    Talent leaderboard gems received ke basis par arrange hoga.
                  </li>
                </ul>
              </div>
            </div>

            <div className="stage1">
              <h3>Overall Leaderboard Rankings</h3>
              <div className="text-div">
                <ul>
                  <li>
                    Talent leaderboard gems received ke basis par arrange hoga.
                  </li>
                  <li>
                    User leaderboard pure event mein event gifts par kiye hue
                    Beans spending ke basis pe arrange hoga.
                  </li>
                  <li>
                    Stage 2 aur Stage 3 mein conduct kiye gaye matches ka result
                    ka effect inn ranking par{" "}
                    <span className="highlight">NAHI</span> hoga.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </PopUp>
  );
};

export default Guide;
