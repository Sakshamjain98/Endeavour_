import Landing from "../LandingPage/Landing"
import Im from "../../../assets/Event.jpg";
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
        <div className="flex bg-white flex-col md:flex-row border  pt-20 justify-center items-center overflow-hidden">
          <div className="w-40% flex  justify-center items-center">
            <img className="w-[80%]  pr-0" src={Im} alt="" />
          </div>
            <div className="w-[60%]">
          <Landing></Landing>
            </div>
        </div>
        <div className="flex justify-center mt-3 flex-col "
        >
         
          <div>
          <h1 className="text-center text-black md:text-7xl text-4xl font-serif my-8 mt-4">Additional Information </h1>
             <div className="md:flex flex-col md:flex-row    md:justify-around my-[10px] gap-0 ">
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
                className=" w-[100px] h-[120px]"
              />
              <div className=" mt-[8px] font-serif sm:text-[23px] text-[16px] text-center text-black">
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
              <div className=" mt-[8px] font-serif sm:text-[23px] text-[16px] text-center text-black">
                <span className="font-extrabold text-black">Number Of members in a team</span> <br />
                1–4 members <br />
                The event consists of two rounds

              </div>
            </div>
          </div>
        </div>
        <div className="md:flex md:justify-around my-[10px] gap-0 " >
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
              <div className=" mt-[8px] font-serif sm:text-[23px] text-[16px] text-center text-black">
                <span className="font-extrabold text-black">Date</span> <br />
                4th-5th May 2024 <br />
                24hr Hackathon
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
                className=" w-[100px] h-[100px] mt-[20px] mx-[20px]"
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
          <li>● The business idea must be unique and feasible.</li>
          <li>● The team without the proper format of the presentation will be disqualified.</li>
          <li>● There is no need for laptops for presentations.</li>
          <li>● The final decision of the judges will not be questionable.</li>
          <li>● Participants should maintain decorum during the event.</li>
        </ul>
          </div>
          <div className="m-8 ">
          <h3 className="text-3xl font-serif mb-4">Benefits</h3>
        <ul className="font-mono text-md ">
          <li>● To get the idea mentored by entrepreneurs and investors.</li>
          <li>● A chance to get the idea funded.</li>
          <li>● Developing entrepreneurial skills.</li>
          </ul>
          </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="m-8  font-semibold">
            <h3 className="text-2xl font-serif mb-4 ">ROUND 1: Questionnaire round</h3>
        <p className="text-[1rem] font-serif">Participants will be given a Google form through which they will have to fill up the
questionnaire round, which will consist of several subjective questions based on the
different aspects of the start-up.
</p>
            </div>
            <div className="m-8 font-semibold">
            <h3 className="text-2xl font-serif mb-4 ">ROUND 2: Presentation</h3>
        <p className="text-[1rem] font-serif">This is the final round. Participants will pitch their ideas that they have presented
before. There will be 5 minutes allotted for the presentation and 2–3 minutes for the
questionnaire round.

</p>
            </div>
          </div>
       
        </div>
        </div>

    </div>
    );
}

export default Event1;