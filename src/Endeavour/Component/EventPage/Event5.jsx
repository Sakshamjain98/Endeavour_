import Landing from "../LandingPage/Landing";
import Im from "../../../assets/EVENTCARD  Movie-A-thon.jpg";
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
        <div className="w-40% md:w-[50%] flex mt-10 justify-center items-center">
          <img className="w-[80%]  pr-0" src={Im} alt="" />
        </div>
        <div className="w-[60%]">
          <Landing
            name="Movie-A-thon"
            desc="Welcome to Movie-A-thon, where creativity, humour, and feasibility collide! Teams
will choose a popular movie, delve into its climax and plot, and pitch alternative
business ideas inspired by the characters or storyline. Awards await the best pitches
in humour, feasibility, and overall creativity. Get ready to unleash your inner
entrepreneur and reimagine the world of business through the lens of your favorite
films!"
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
                <li>
                  ● Any kind of cheating will lead to direct disqualification.
                </li>
                <li>
                  ● Team E-Cell holds the right to remove any participant from
                  the event.
                </li>
                <li>● Partial answers will be considered as wrong.</li>
                <li>
                  ● The participants should answer within the given time limit.
                </li>
                <li>● You can’t withdraw once you have registered.</li>
                <li>
                  ● In case of a tie in the second round, there will be a
                  tie-breaker round.
                </li>
              </ul>
            </div>
            <div className="m-8 ">
              <h3 className="text-3xl font-serif mb-4">Benefits</h3>
              <ul className="font-mono text-md ">
                <li>
                  ● Enhances Pitching Skills: Participating in a movie pitch
                  battle hones your ability to present ideas succinctly and
                  persuasively.
                </li>
                <li>
                  ● Industry Exposure: Offers valuable exposure to industry
                  professionals, potentially opening doors for collaboration and
                  opportunities.
                </li>
                <li>
                  ● Networking Opportunities: Facilitates connections with
                  fellow filmmakers, producers, and decision-makers, fostering a
                  supportive professional network.
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="m-8  ">
              <h3 className="text-2xl font-serif mb-4 ">ROUND 1</h3>
              <ul className="font-mono text-md ">
                <li>
                  ● Participants will receive summaries of screenplays or plots
                  of well-known films in the form of 5 case studies with
                  predetermined questions.
                </li>
                <li>
                  ● Teams answer the questions within a time limit of 30
                  minutes.
                </li>
                <li>
                  ● The top 8 teams with the most number of correct answers
                  progress to the next round.
                </li>
              </ul>
            </div>
            <div className="m-8  ">
              <h3 className="text-2xl font-serif mb-4 ">ROUND 2</h3>
              <ul className="font-mono text-md ">
                <li>
                  ● Entrepreneurial Kickoff: Teams initiate their business
                  journey by forming groups and selecting popular movies like 3
                  Idiots or Tarzan (The Wonder Car) for their pitches.
                </li>
                <li>
                  ● Cinematic Analysis: Teams dissect the chosen movie`s climax
                  and plot, extracting crucial elements to inspire and shape
                  their innovative business concepts.
                </li>
                <li>
                  ● Movie-Inspired Business Plans: The entrepreneurial plan
                  revolves around integrating the identified plot and climax
                  elements, providing a unique and creative foundation for their
                  pitches.
                </li>
                <li>● You have to name that startup with a tagline.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event1;
