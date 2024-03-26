import "./styles.css";
import { HashLink as Link } from "react-router-hash-link";

import PropTypes from "prop-types";

const About = ({ Name, Desc }) => {
  const titleStyle = {
    background: "linear-gradient(to right, blue, #064d81)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };
  return (
    <div className="AboutMe mb-16 mt-16">
      <h2 className=" ha mb-16  ">
        <br />{" "}
        <h1 className="mb-8 ">
          <span
            style={titleStyle}
            className="innohacks-text text-[3rem] md:text-[4rem] pt-20 pb-4 mb-3 leading-10  font-serif"
          >
            {Name}
          </span>
        </h1>
        <h2>
          <span
            className="mt-10 leading-6 font-serif  text-wrap"
            style={{ fontSize: "1rem", color: "black" }}
          >
            {Desc}
          </span>
        </h2>
      </h2>
    </div>
  );
  // Component code here
};
About.propTypes = {
  Name: PropTypes.string.isRequired,
  Desc: PropTypes.string.isRequired,
};

// import PropTypes from 'prop-types';

const Myinfo = ({ name, desc }) => {
  return (
    <div className="Myinfo  text-xl  bg-white">
      <About Name={name} Desc={desc} />
      <div className="buttom-group flex justify-center items-center flex-col md:flex-row gap-4 ml-3 my-4">
        <div>
          <Link to="/register">
            <a href="https://forms.gle/LabTKRJEHvyZuXd78">
              {" "}
              <button className="register  w-48 h-12   shadow-blue-700 shadow-md text-white  md:ml-20">
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
Myinfo.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};
export default Myinfo;
