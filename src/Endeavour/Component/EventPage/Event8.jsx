import Landing from "../LandingPage/Landing";
import Im from "../../../assets/EVENTCARD E-Sports.jpg";
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
            name="E-Sports"
            desc="Get ready to experience the adrenaline-fueled battleground action like never before
as E-Cell proudly presents BGMI Clash: College Esports Extravaganza! Join us for
an electrifying esports event that will bring together the finest gamers from across
the campus to compete in the ultimate showdown of skill, strategy, and teamwork.
"
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
                  The event will be of 24 hour
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
                <li>
                  ● Each squad can have a minimum of 1 player and a maximum of 5
                  players.
                </li>
                <li>
                  ● Teams will play a series of three matches in Squad mode.
                </li>
                <li>
                  ● Points will be awarded based on placement and kills in each
                  match.
                </li>
                <li>● 1st Place: 10 points</li>
                <li>● 2nd Place: 6 points</li>
                <li>● 3rd Place: 5 points</li>
                <li>● 4th Place: 4 points</li>
                <li>● 5th Place: 3 points</li>
                <li>● 6th-10th Place: 1 point</li>
                <li>● Each Kill: 1 point</li>
              </ul>
            </div>
            <div className="m-8 ">
              <h3 className="text-3xl font-serif mb-4">Benefits</h3>
              <ul className="font-mono text-md ">
                <li>
                  ● Gaming events provide a recreational outlet for students,
                  offering a break from academic stress and promoting mental
                  well-being.
                </li>
                <li>
                  ● For students interested in careers in gaming, esports, or
                  event management, participating in or organizing such events
                  can provide valuable experience and networking opportunities.
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col justify-center  ">
            <div className="m-8  ">
              <h3 className="text-2xl font-serif mb-4 ">
                Round 1: Squad Qualifiers
              </h3>
              <ul className="font-mono text-md ">
                <li>
                  ● Squad Mode, 1–5 players per team. (5th player will be backup
                  player)
                </li>
                <li>● 3 matches will be played.</li>
                <li>
                  ● The total points from all three matches will determine the
                  squads moving on to Round 2.
                </li>
                <li>● Top 10 squads will advance to Round 2.</li>
              </ul>
            </div>

            <div className="m-8  ">
              <h3 className="text-2xl font-serif mb-4 ">Round- 2</h3>
              <ul className="font-mono text-md ">
                <li>● 10 teams from Round 1 will qualify for Round 2</li>
                <li>● Two matches will be there, Miramar and Erangle.</li>
                <li>
                  ● Winners will be decided based on the total points of both
                  the matches.
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
