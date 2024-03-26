import PastWinner from "../PastWinner/NewStyle.jsx";
function About() {
  return (
    <div
      id="about"
      className="flex flex-col md:flex-row p-4 mb-4 justify-center items-start overflow-hidden "
    >
      <div className="w-full md:w-[50%]  ">
        <PastWinner />
      </div>
      <div className="w-full md:w-[50%] mt-24 md:ml-8 overflow-hidden">
        <h2 className="font-bold text-3xl md:text-5xl mb-8 font-serif text-center md:text-left">
          About The Event
        </h2>
        <p className="font-sans text-sm md:text-base text-wrap">
          The Institute Innovation Council is back with IIT Dharwad’s
          entrepreneurial fest “E-Summit 2023” after the success of its
          predecessor. This time, you will get to hear from established
          individuals regarding their take on varying aspects of
          entrepreneurship and success along with students being given a chance
          to enhance their creative bug and hone their skills in the Lorem
        </p>
        <h2 className="font-bold text-3xl md:text-5xl mb-8 mt-8 font-serif text-center md:text-left">
          When & Where
        </h2>
        <p className="font-sans text-sm md:text-base ">
          At KIET Group Of Institution, Ghaziabad <br />4 May-5May
        </p>
      </div>
    </div>
  );
}

export default About;
