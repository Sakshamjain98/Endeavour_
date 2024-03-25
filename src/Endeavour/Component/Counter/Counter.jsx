import  { useRef, useEffect, useState } from 'react';
import reach from "../../../assets/reach.webp";
import student from "../../../assets/student.webp";
import startup from "../../../assets/startup.webp";
import funding from "../../../assets/funding.webp";
import Im from "../../../assets/White-paper-texture-for-Projects.jpg";
import CountUp from "react-countup";

export default function Counter() {
  const counterRefs = [useRef(), useRef(), useRef(), useRef()];
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Trigger when 50% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      });
    }, options);

    counterRefs.forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      observer.disconnect();
    };
  });

  return (
    <div
      className="w-full flex justify-center p-4 md:p-8 items-center bg-cover overflow-hidden bg-center bg-no-repeat border-t-2 border-blue-400"
      style={{
        backgroundImage: `url(${Im})`,
      }}
    >
      <div className="flex flex-col md:flex-row w-full justify-around items-center">
        <div className="flex flex-col justify-center items-center m-2" ref={counterRefs[0]}>
          <img src={reach} className="w-24 md:w-48" alt="" />
          <h1 className="font-bold text-lg md:text-3xl font-serif">
            {isInView && <CountUp start={0} end={1000000} duration={3} />}
          </h1>
          <h2 className="font-bold text-base md:text-2xl font-serif text-blue-500">
            Social Reach
          </h2>
        </div>
        <div className="flex flex-col justify-center items-center" ref={counterRefs[1]}>
          <img src={student} alt="" className="w-24 md:w-48" />
          <h1 className="font-bold text-lg md:text-3xl font-serif">
            {isInView && <CountUp start={0} end={100000} duration={5} />}
          </h1>
          <h2 className="font-bold text-base md:text-2xl font-serif text-blue-500">
            Students
          </h2>
        </div>
        <div className="flex flex-col justify-center items-center" ref={counterRefs[2]}>
          <img src={startup} alt="" className="w-24 md:w-48" />
          <h1 className="font-bold text-lg md:text-3xl font-serif">
            {isInView && <CountUp start={0} end={50} duration={8} />}
          </h1>
          <h2 className="font-bold text-base md:text-2xl font-serif text-blue-500">
            Start Up
          </h2>
        </div>
        <div className="flex flex-col justify-center items-center" ref={counterRefs[3]}>
          <img src={funding} alt="" className="w-24 md:w-48" />
          <h1 className="font-bold text-lg md:text-3xl font-serif">
            {isInView && <CountUp start={0} end={10} duration={9} />}
          </h1>
          <h2 className="font-bold text-base md:text-2xl font-serif text-blue-500">
            Competitions
          </h2>
        </div>
      </div>
    </div>
  );
}
