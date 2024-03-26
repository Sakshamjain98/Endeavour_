import Landing from "../LandingPage/Landing"
import Im from "../../../assets/EVENTCARD Treasure Hunt.jpg";
import location from "../../../assets/location.gif"
import calendar from "../../../assets/calendar.gif"
import purse from "../../../assets/purse.gif"
import customer from "../../../assets/customer.gif"
import first from "../../../assets/First.png"
import second from "../../../assets/second.png"
import third from "../../../assets/third.png"
// import Prize from "../../Prize/Prize";
function Event1() {
    return (
    <div className="" id="event-1" style={{
      // background: "linear-gradient(to bottom, #c8e1ec,#1a8fbe,#045b95,#7ccce4)",
    }}>
        <div className="flex bg-white flex-col md:flex-row border min-h-[100vh] pt-10 justify-center items-center overflow-hidden">
          <div className="w-40% md:w-[50%] flex mt-10 justify-center items-center">
            <img className="w-[80%]  pr-0" src={Im} alt="" />
          </div>
            <div className="w-[60%]">
          <Landing name="Treasure Hunt" desc="“Not all treasure silver and gold, mate.” - Jack Sparrow Be a part of our campus
treasure hunt, which capacitates you to solve the clues based on various places of
our campus.
We will give participation certificates to all the participants and prizes to the winner.
"></Landing>
            </div>
        </div>
        <div className="flex justify-center mt-3 flex-col "
        >
         
          <div>
          <h1 className="text-center text-black md:text-7xl text-4xl font-serif my-8 mt-4">Additional Information </h1>
             <div className="flex flex-col md:flex-row items-center   justify-center my-[10px] gap-0 ">
          <div className=" md:flex md:justify-between  w-[80%] m-2 p-4 md:w-[40%]" style={{
              background: 'rgba( 255, 255, 255, 0.3 )',
              boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
              backdropFilter: 'blur( 2.5px )',
              webkitBackdropFilter: 'blur( 2.5px )',
              borderRadius: '10px',
              border: '1px solid rgba( 255, 255, 255, 0.18 )'
            }}>
            <div className="flex justify-center items-center">
              <img
                src={location}
                alt="location"
                className=" w-[100px] h-[100px]"
              />
              <div className=" mt-[8px] font-serif sm:text-[18px] text-[16px] text-center text-black">
                <span className="font-extrabold text-black">Venue</span> <br />
                 KIET <br />
                Group of Institution, Ghaziabad
              </div>
            </div>
          </div>
          <div className="md:flex md:justify-between  w-[80%] m-2 p-4 md:w-[40%]" style={{
              background: 'rgba( 255, 255, 255, 0.3 )',
              boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
              backdropFilter: 'blur( 2.5px )',
              webkitBackdropFilter: 'blur( 2.5px )',
              borderRadius: '10px',
              border: '1px solid rgba( 255, 255, 255, 0.18 )'
            }}>
            <div className="flex justify-center items-center">
              <img
                src={customer}
                alt="location"
                className=" w-[80px] h-[80px] mt-[20px] mx-[20px]"
              />
              <div className=" mt-[8px] font-serif sm:text-[18px] text-[16px] text-center text-black">
                <span className="font-extrabold text-black">Number Of members in a team</span> <br />
                1–4 members <br />
                The event consists of only 1 rounds

              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center   justify-center my-[10px] gap-0 " >
        <div className="md:flex md:justify-between  py-[10px] w-[80%] m-2 md:w-[40%] " style={{
              background: 'rgba( 255, 255, 255, 0.3 )',
              boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
              backdropFilter: 'blur( 2.5px )',
              webkitBackdropFilter: 'blur( 2.5px )',
              borderRadius: '10px',
              border: '1px solid rgba( 255, 255, 255, 0.18 )'
            }}>
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
          <div className="md:flex md:justify-between items-center w-[80%] m-2 md:w-[40%] py-[20px]" style={{
              background: 'rgba( 255, 255, 255, 0.3 )',
              boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
              backdropFilter: 'blur( 2.5px )',
              webkitBackdropFilter: 'blur( 2.5px )',
              borderRadius: '10px',
              border: '1px solid rgba( 255, 255, 255, 0.18 )'
            }}>
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
          <h1 className="text-center text-black text-7xl font-serif mt-4">Prize</h1>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center my-4">
            <div className=" w-[80%] md:w-[25%] h-[40vh] md:h-[60vh] m-4 flex items-center justify-center flex-col" style={{
              background: 'rgba( 255, 255, 255, 0.3 )',
              boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
              backdropFilter: 'blur( 2.5px )',
              webkitBackdropFilter: 'blur( 2.5px )',
              borderRadius: '10px',
              border: '1px solid rgba( 255, 255, 255, 0.18 )'
            }}>
              <img src={second} className="w-[60%] h-[50%]" alt="" />
              <h1 className="text-5xl font-serif">WINNER</h1>
              <h2 className="text-2xl font-serif">Rs. 1200</h2>
            </div>
            <div className="w-[80%] md:w-[25%] h-[40vh] md:h-[60vh] m-4 flex items-center justify-center flex-col" style={{
              background: 'rgba( 255, 255, 255, 0.3 )',
              boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
              backdropFilter: 'blur( 2.5px )',
              webkitBackdropFilter: 'blur( 2.5px )',
              borderRadius: '10px',
              border: '1px solid rgba( 255, 255, 255, 0.18 )'
            }}>
              <img src={first} className="w-[80%] h-[70%]" alt="" />
              <h1 className="text-5xl font-serif">WINNER</h1>
              <h2 className="text-2xl font-serif">Rs. 1200</h2>
            </div>
            <div className="w-[80%] md:w-[25%] h-[40vh] md:h-[60vh] flex items-center justify-center flex-col" style={{
              background: 'rgba( 255, 255, 255, 0.3 )',
              boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
              backdropFilter: 'blur( 2.5px )',
              webkitBackdropFilter: 'blur( 2.5px )',
              borderRadius: '10px',
              border: '1px solid rgba( 255, 255, 255, 0.18 )'
            }}>
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
          <li>● Any kind of cheating will lead to direct disqualification.</li>
          <li>● Passing the answers to other teams is strictly not allowed.</li>
          <li>Participants have to maintain the decorum.</li>
          <li>● All the participants have to follow all the rules of the game.</li>
        </ul>
          </div>
          <div className="m-8 ">
          <h3 className="text-3xl font-serif mb-4">Benefits</h3>
        <ul className="font-mono text-md ">
          <li>● Encourages creativity and thinking outside the box.</li>
          <li>● Enhances creative thinking skills</li>
          </ul>
          </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="m-8  ">
            <h3 className="text-2xl font-serif mb-4 ">ROUND</h3>
            <ul className="font-mono text-md ">
           <li>
            ● The participants will be provided with clues. The participants have to
           </li>
           <li>
● guess the correct answer for proceeding to the next clue.
           </li>
           <li>
● All the answers to the clues would be a building or location inside the
campus.
           </li>
           <li>

● There will be five tracks in which the team will be participating in this event
after solving the clues, teams will reach the three tracks in which there will be
three caskets and at last it will end to a single track.
           </li>
           <li>

● At last, the team which solves all the clues in minimum time and reaches the
final casket will be the winner.
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