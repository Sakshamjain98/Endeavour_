import {useEffect, useRef, useState} from 'react';
// import {BrowserRouter as Router} from 'react-router-dom';
import {HashLink as Link} from 'react-router-hash-link';
import styled from 'styled-components';
import logo from "../../../assets/updatedfinallogo.png"
import logoClose from './close-button.svg';
import hamLogo from './burger-menu.svg';
import './styles.scss';
// import {MdxContent} from '../Mdx';

// const NAVIGATION_OFFSET = 66;

const Wrapper = styled.div`
  display: block;
  width: 40%;

  @media (max-width: 1000px) {
    margin: 0;
    display: ${props => (props.toggle ? 'none' : 'static')};
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: ${props => (props.toggle ? '-1000px' : '0px')};
    transition: top 1s;
    .nav-content {
      height: 35%;
      background-color: rgba(50, 13, 136);
    }
  }
`;


export default function NAVBAR() {
  const [toggle, setToggle] = useState(true);
  // const [isOffset, setIsOffset] = useState(false);

  const navigation = useRef();

  // const listenScrollEvent = () => {
  //   if (window.scrollY >= NAVIGATION_OFFSET) {
  //     setIsOffset(true);
  //   } else {
  //     setIsOffset(false);
  //   }
  // };
  const [selectedOption, setSelectedOption] = useState('');
  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    if (selectedValue === 'register') {
      window.location.href = "http://localhost:5173/register";
    } else if (selectedValue === 'login') {
      window.location.href = "http://localhost:5173/login";
    }
};
  useEffect(() => {
    // window.addEventListener('scroll', listenScrollEvent);
    // return () => window.removeEventListener('scroll', listenScrollEvent);
  }, []);


  return (

      <nav className={`nav_bar  nav_bar-offset-crossed`} >
      
     
      <div className='logo-div w-40 '>
       <Link to="/" smooth>
        <img src={logo} className="nav-logo" style={{
        }} ></img>
       </Link>
      </div>

        <Wrapper  toggle={toggle}>
          
          <div className="nav-content" ref={navigation}>
            <ul className='gap-0'>
              <li>
                {/* <Link to="/" smooth>
                  <span className="links">Home</span>{' '}
                </Link> */}
             <select
      name="joinUs"
      className='bg-[#000000bf] text-white border-none tracking-wide'
      id="joinUsSelect"
      value={selectedOption}
      onChange={handleSelectChange}
    >
      <option value="" disabled hidden selected>Join Us</option>
      <option value="register">Register</option>
      <option value="login">Login</option>
    </select>
              </li>
              
              
              <li>
                <Link to="/#about" smooth>
                  <span className="links">Themes </span>{' '}
                </Link>
              </li>
              <li>
                <Link to="/#sponser" smooth>
                  <span className="links">Sponsors</span>{' '}
                </Link>
              </li>
              <li>
                <Link to="/allevent" smooth>
                  <span className="links">Events</span>{' '}
                </Link>
              </li>
              <li>
                <Link to="/#speaker" smooth>
                  <span className="links">Speakers </span>{' '}
                </Link>
              </li>
              <li className=''>
                <Link to={`/#faq`} smooth>
                  <span className="links">FAQ</span>{' '}
                </Link>
              </li>
              <img
                className="s-close  bg-white h-8 rounded-lg"
                onClick={() => setToggle(true)}
                src={logoClose}
              />
            </ul>
          </div>
          <div className="ease" />
        </Wrapper>
        
        <img
          className="s-open bg-white h-8 rounded-lg"
          onClick={() => setToggle(false)}
          src={hamLogo}
          
        />
      </nav>

  
  );
}


