import Landing from "../LandingPage/Landing";
import Im from "../../../assets/EVENTCARD  Sprinthacks 2.0.jpg";
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
            name="Sprinthacks 2.0 (24 hour Hackathon)"
            desc="Sprinthacks 2.0 is an 24-hour hackathon scheduled to take place in the month of
May. This intense event will bring together passionate individuals from diverse
backgrounds to innovate, collaborate, and create impactful solutions.
Sprinthacks 2.0 provides a platform for participants to showcase their skills, learn
from industry experts, and network with like-minded individuals. This hackathon
encourages creativity, collaboration, and innovation to solve real-world challenges"
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
              <h3 className="text-3xl font-serif mb-4">Judging</h3>
              <ul className="font-mono text-md ">
                <li>
                  ● Judges: Three invited experts in their respective fields
                </li>
                <li>
                  ● Mentors: Ten mentors will be available throughout the event
                  to provide guidance and support to participants. (DSC Alumni)
                </li>
                <li>● Competition Structure</li>
                <li>● Round 1: Online Idea Submission</li>
                <li>
                  ● Participants submit their ideas online prior to the event.
                </li>
                <li>
                  ● 30 teams will be selected to proceed to the final round.
                </li>
                <li>● Final Round: On-Campus</li>
                <li>
                  ● Selected teams come to the campus to build and refine their
                  projects.
                </li>
                <li>
                  ● Projects will be judged based on innovation, technical
                  prowess, feasibility, and impact.
                </li>
              </ul>
            </div>
            <div className="m-8 ">
              <h3 className="text-3xl font-serif mb-4">Benefits</h3>
              <ul className="font-mono text-md ">
                <li>● Builds your skills and boosts up your resume.</li>
                <li>● Allows working with other students and professionals.</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col justify-center  ">
            <div className="m-8  ">
              <h3 className="text-2xl font-serif mb-4 ">DAY- 1</h3>
              <ul className="font-mono text-md ">
                <li>● 11:00 a.m.- Registration Begins</li>
                <li>● 1:00 p.m. - Hacking begins</li>
                <li>● Snacks</li>
                <li>● 5:00 p.m. - First Round of Mentoring</li>
                <li>● 8:00 p.m. - Dinner Provided</li>
                <li>● 11:00 p.m. - Second Round of Mentoring</li>
              </ul>
            </div>

            <div className="m-8  ">
              <h3 className="text-2xl font-serif mb-4 ">DAY- 2</h3>
              <ul className="font-mono text-md ">
                <li>● 8:00 a.m. - Breakfast</li>
                <li>● 11:00 a.m. - Hacking Ends</li>
                <li>● 11:00 a.m. - Final Judging Begins</li>
                <li>● 2:00 p.m. - Results Announcement</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event1;
