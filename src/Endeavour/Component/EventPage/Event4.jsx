import Landing from "../LandingPage/Landing";
import Im from "../../../assets/EVENTCARD  IPL Mania.jpg";
import location from "../../../assets/location.gif";
import calendar from "../../../assets/calendar.gif";
import purse from "../../../assets/purse.gif";
import customer from "../../../assets/customer.gif";
import first from "../../../assets/First.png";
import second from "../../../assets/second.png";
import third from "../../../assets/third.png";
function Event1() {
  return (
    <div className="" id="event-1" style={{}}>
      <div className="flex bg-white flex-col md:flex-row border min-h-[100vh] pt-10 justify-center items-center overflow-hidden">
        <div className="w-40% md:w-[50%] flex mt-10  justify-center items-center">
          <img className="w-[80%]  pr-0" src={Im} alt="" />
        </div>
        <div className="w-[60%]">
          <Landing
            name="IPL Mania"
            desc="The event will be of two rounds. The first one will be the fantasy round in which the
teams have to do online prediction in which they need to create a team on the
fantasy app. The winning teams of round 1 will be going to the second round i.e. the
auction round in which the team has to bid on the players of their choice."
          ></Landing>
        </div>
      </div>
      <div className="flex justify-center mt-3 flex-col ">
        <div>
          <h1 className="text-center text-black md:text-7xl text-4xl font-serif my-8 mt-4">
            Additional Information{" "}
          </h1>
          <div className="flex flex-col md:flex-row items-center   justify-center my-[10px] gap-0 ">
            <div
              className=" md:flex md:justify-between  w-[80%] m-2 p-4 md:w-[40%]"
              style={{
                background: "rgba( 255, 255, 255, 0.3 )",
                boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                backdropFilter: "blur( 2.5px )",
                webkitBackdropFilter: "blur( 2.5px )",
                borderRadius: "10px",
                border: "1px solid rgba( 255, 255, 255, 0.18 )",
              }}
            >
              <div className="flex justify-center items-center">
                <img
                  src={location}
                  alt="location"
                  className=" w-[100px] h-[100px]"
                />
                <div className=" mt-[8px] font-serif sm:text-[18px] text-[16px] text-center text-black">
                  <span className="font-extrabold text-black">Venue</span>{" "}
                  <br />
                  KIET <br />
                  Group of Institution, Ghaziabad
                </div>
              </div>
            </div>
            <div
              className="md:flex md:justify-between  w-[80%] m-2 p-4 md:w-[40%]"
              style={{
                background: "rgba( 255, 255, 255, 0.3 )",
                boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                backdropFilter: "blur( 2.5px )",
                webkitBackdropFilter: "blur( 2.5px )",
                borderRadius: "10px",
                border: "1px solid rgba( 255, 255, 255, 0.18 )",
              }}
            >
              <div className="flex justify-center items-center">
                <img
                  src={customer}
                  alt="location"
                  className=" w-[80px] h-[80px] mt-[20px] mx-[20px]"
                />
                <div className=" mt-[8px] font-serif sm:text-[18px] text-[16px] text-center text-black">
                  <span className="font-extrabold text-black">
                    Number Of members in a team
                  </span>{" "}
                  <br />
                  1–4 members <br />
                  The event consists of 2 rounds
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center   justify-center my-[10px] gap-0 ">
            <div
              className="md:flex md:justify-between  py-[10px] w-[80%] m-2 md:w-[40%] "
              style={{
                background: "rgba( 255, 255, 255, 0.3 )",
                boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                backdropFilter: "blur( 2.5px )",
                webkitBackdropFilter: "blur( 2.5px )",
                borderRadius: "10px",
                border: "1px solid rgba( 255, 255, 255, 0.18 )",
              }}
            >
              <div className="flex justify-center items-center  w-[100%]">
                <img
                  src={calendar}
                  alt="location"
                  className=" w-[100px] h-[100px] mt-[20px] "
                />
                <div className=" mt-[8px] font-serif sm:text-[20px] text-[16px] text-center text-black">
                  <span className="font-extrabold text-black">Date</span> <br />
                  4th-5th May 2024 <br />
                  The event will be of 48 hour
                </div>
              </div>
            </div>
            <div
              className="md:flex md:justify-between items-center w-[80%] m-2 md:w-[40%] py-[20px]"
              style={{
                background: "rgba( 255, 255, 255, 0.3 )",
                boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                backdropFilter: "blur( 2.5px )",
                webkitBackdropFilter: "blur( 2.5px )",
                borderRadius: "10px",
                border: "1px solid rgba( 255, 255, 255, 0.18 )",
              }}
            >
              <div className="flex justify-center items-center w-[100%]">
                <img
                  src={purse}
                  alt="location"
                  className=" w-[100px] h-[80px] mt-[20px] mx-[20px]"
                />
                <div className=" mt-[8px] font-serif sm:text-[23px] text-[16px] text-center text-black">
                  <span className="font-extrabold text-black">Fees</span> <br />
                  2000 - 3000 rs <br />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          {/* <Prize/> */}
          <h1 className="text-center text-black text-7xl font-serif mt-4">
            Prize
          </h1>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center my-4">
            <div
              className=" w-[80%] md:w-[25%] h-[40vh] md:h-[60vh] m-4 flex items-center justify-center flex-col"
              style={{
                background: "rgba( 255, 255, 255, 0.3 )",
                boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                backdropFilter: "blur( 2.5px )",
                webkitBackdropFilter: "blur( 2.5px )",
                borderRadius: "10px",
                border: "1px solid rgba( 255, 255, 255, 0.18 )",
              }}
            >
              <img src={second} className="w-[60%] h-[50%]" alt="" />
              <h1 className="text-5xl font-serif">WINNER</h1>
              <h2 className="text-2xl font-serif">Rs. 1200</h2>
            </div>
            <div
              className="w-[80%] md:w-[25%] h-[40vh] md:h-[60vh] m-4 flex items-center justify-center flex-col"
              style={{
                background: "rgba( 255, 255, 255, 0.3 )",
                boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                backdropFilter: "blur( 2.5px )",
                webkitBackdropFilter: "blur( 2.5px )",
                borderRadius: "10px",
                border: "1px solid rgba( 255, 255, 255, 0.18 )",
              }}
            >
              <img src={first} className="w-[80%] h-[70%]" alt="" />
              <h1 className="text-5xl font-serif">WINNER</h1>
              <h2 className="text-2xl font-serif">Rs. 1200</h2>
            </div>
            <div
              className="w-[80%] md:w-[25%] h-[40vh] md:h-[60vh] flex items-center justify-center flex-col"
              style={{
                background: "rgba( 255, 255, 255, 0.3 )",
                boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                backdropFilter: "blur( 2.5px )",
                webkitBackdropFilter: "blur( 2.5px )",
                borderRadius: "10px",
                border: "1px solid rgba( 255, 255, 255, 0.18 )",
              }}
            >
              <img src={third} className="w-[60%] h-[50%]" alt="" />
              <h1 className="text-5xl font-serif">WINNER</h1>
              <h2 className="text-2xl font-serif">Rs. 1200</h2>
            </div>
          </div>
        </div>
        <div className=" flex flex-col">
          <div className="flex flex-col">
            <div className="m-8 ">
              <h3 className="text-3xl font-serif mb-4">Rules</h3>
              <ul className="font-mono text-md ">
                <li>● Only one team is allowed per player in round 1.</li>
                <li>
                  ● If a user is found using more than one team, he’ll be
                  disqualified.
                </li>
                <li>
                  ● The teams have to choose not more than 11 players in rounds
                  1 and 2.
                </li>
                <li>
                  ● The selected players will not be changed after the player is
                  sold to the respective team.
                </li>
              </ul>
            </div>
            <div className="m-8 ">
              <h3 className="text-3xl font-serif mb-4">Benefits</h3>
              <ul className="font-mono text-md ">
                <li>
                  ● Helps enhance management skills and planning efficiency.
                </li>
                <li>● To increase decision-making and learning ability.</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="m-8  ">
              <h3 className="text-2xl font-serif mb-4 ">ROUND 1 (Fantasy)</h3>
              <ul className="font-mono text-md ">
                <li>
                  Each participant will be required to make an account on the
                  IPL app, after which they will be given a Google form where
                  they’ll be asked to fill in their Name and their IPL team name
                  (app username), after filling the Google form, the
                  participants will be given the league link to join the pl
                  fantasy league with the name “KIET E-Cell”, where they will
                  join.
                </li>
                <li>
                  This round will be a one-day event where the players would be
                  required to make a team based on the match-day players, the
                  teams must have at least 1 wicket-keeper, 3 batters, 2
                  All-rounders, and 3 bowlers The participants have to make the
                  team 30 minutes prior to starting of the match.
                </li>
              </ul>
            </div>
            <div className="m-8  ">
              <h3 className="text-2xl font-serif mb-4 ">ROUND 2 (BIDDING)</h3>
              <ul className="font-mono text-md ">
                <li>
                  The winning teams of round 1 will be given 100 crores (Virtual
                  money) and will be given the chance to choose the top 30
                  Marquee players before the auction i.e. via the draft and
                  after choosing the marquee players teams will be shown the
                  pictures of the players via presentation, and they have to bid
                  on the players with the other teams. The team will be shared
                  with a sheet in which the present form of the players through
                  stats and ratings will be given and on that basis they can bid
                  on the player. At last, the team with the highest rating and
                  well-balanced in all aspects will be the winner.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event1;
