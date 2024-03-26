import { FaInstagram } from "react-icons/fa6";
import { BiLogoDiscordAlt } from "react-icons/bi";
import { CiLinkedin } from "react-icons/ci";
import { IoLogoTwitter } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
// import { HashLink } from 'react-router-hash-link';
import {Link } from "react-router-dom";
import './style.scss';
import logo1 from "../../../assets/white logo br.png";
import logo2 from "../../../assets/updatedfinallogo.png";


const Footer = () => {
    const SOCIALS = {
        instagram: "#",
        discord: '#',
        linkedin: '#',
        twitter: "#",
        devpost: '#',
        email: "#",
        mail: "#"
      };
  return (
    <div className="footer new_footer_top overflow-x-hidden" >
      <svg className="footer-wave-svg overflow-x-hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 100" preserveAspectRatio="none">
        <path className="footer-wave-path" d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"></path>
      </svg>
      <div className='main-footer overflow-x-hidden'>
        <div className="Register_a">
          <button className="register-button">
<Link to="/register#hello" className='register-link'>
            <a  className='register-link' href=''>
              <span>Register Now</span>
            </a>
            </Link>
          </button>
        </div>
        <div className='social-links'>
          <span className="single" >
            <a rel="noreferrer " target="_blank" href={SOCIALS.instagram}  >
              <FaInstagram  className='redBlue1 md:text-4xl text-2xl' />
            </a>
          </span>
          <span className="single">
            <a rel="noreferrer" target="_blank" href="https://discord.gg/qNmEeAsuqQ">
              <BiLogoDiscordAlt  className='redBlue2 md:text-4xl text-2xl' />
            </a>
          </span>
          <span className="single">
            <a rel="noreferrer" target="_blank" href={SOCIALS.linkedin}>
              <CiLinkedin  className='redBlue3 md:text-4xl text-2xl' />
            </a>
          </span>
          <span className="single">
            <a rel="noreferrer" target="_blank" href={SOCIALS.twitter}>
              <IoLogoTwitter  className='redBlue4 md:text-4xl text-2xl' />
            </a>
          </span>
          <span className="single">
            <a rel="noreferrer"  href="tel:+917669816088">
              <FaPhone  className='redBlue5 md:text-4xl text-2xl' />
            </a>
          </span>
        </div>
      </div>
      {/* <div className="footer-logo">
        <div className='hacks-footer-container'>
          <HashLink className="footer-logo-link" to="#" smooth>
            <img src={logo2} className='hacks' width={""} alt="" />
          </HashLink>
        </div>
        <div className='inno-footer-container'>
        <a className="footer-logo-link " href="" >
          <img className='inno' src={logo1} width={""} alt="" />
        </a>
        </div>
      </div> */}
      <div className=" flex md:flex-row flex-col ">
        <div className=" items-center flex md:w-[120%] w-[100%] justify-center md:justify-normal">
          <img src={logo2} className="" alt="" />
        </div>
        <div className="md:w-[50%] w-[100%] flex items-center justify-center md:justify-normal">
          <img src={logo1} alt="" />
        </div>
      </div>
      <div className="footer-team font-serif overflow-x-hidden">
        <h4>With 💙 by Team E-Cell</h4>
        <p>©2024 Endeavour™</p>
        <p><a href="mailto:innogeeks@kiet.edu" style={{
          color: "#337ab7",
          fontSize: "1.1rem",
        }}>Contact us @E-Cell Kiet™</a></p>
      </div>
      <div className="footer_bg overflow-x-hidden">
      </div>
    </div>

  );
};

export default Footer;
