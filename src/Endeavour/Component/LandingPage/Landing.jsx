// import { ReactTyped } from "react-typed";
import "./styles.css";
import {HashLink as Link} from 'react-router-hash-link';


const About = () => {
  const titleStyle = {
    background: "linear-gradient(to right, blue, #064d81)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",

  };
  return (
    <div className="AboutMe mb-16 mt-16" >
      <h2 className=" ha mb-16  ">
       
        <br />{" "}
        <h1 className="mb-8 ">

        <span style={titleStyle} className="innohacks-text text-[5rem] pt-20 pb-4 mb-3  font-serif">B-Plan
</span>
        </h1>
        <h2>

        <span className="mt-10 leading-6 font-serif  text-wrap" style={{ fontSize: "1.2rem",
    color:"black" }}>Ideas abound when you have the conviction to bring about a change around you.
    The flagship event, B-PLAN, lets you promulgate your ground-breaking ideas.
    Showcase your business skills and let the world see your entrepreneurial side. Gear
    up, buddies! Prepare an abstract and showcase it to be a winner.</span>
    </h2>
      </h2>
      {/* <h6 className="mt-10" style={{ fontSize: "1.9rem",
    color:"white" }}>Hack n`` Innovate</h6>
      <MytypedComponent /> */}  
    </div>
  );
};

const Myinfo = () => {
  return (
    <div className="Myinfo  text-xl  bg-white"
    
    >
      <About />
      <div className="buttom-group flex justify-center items-center gap-4 ml-3 my-4">
       <div>

<Link to="/register">

        <a href="https://forms.gle/LabTKRJEHvyZuXd78">
          {" "}
          <button className="register  w-48 h-12   shadow-blue-700 shadow-md text-white  md:ml-20">
      {/* <i className=""></i> */}
      Register 
      <div className="overlay"> 
        <div className="overlay-text">Now</div>
      </div>
    </button>
        
        </a>
</Link>
       </div>
<div>

<Link to="/payment">

        <a href="">
          {" "}
          <button className="register  w-48 h-12 shadow-blue-700 shadow-md text-white  md:ml-20">
       <i className=""></i> 
       Pay 
      <div className="overlay">
        <div className="overlay-text">Now</div>
      </div>
    </button>
        
        </a>
</Link> 
</div>
      </div>
      </div>
    
  );
};

export default  Myinfo ;
