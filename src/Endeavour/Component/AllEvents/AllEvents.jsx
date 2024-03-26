import  { useEffect, useState } from "react";
// import Image1 from "../assets/2.jpg";
import "./cards.css";
import a from "../../../assets/EVENTCARD BPLAN.jpg";
import b from "../../../assets/EVENTCARD  B-Quiz.jpg";
import c from "../../../assets/EVENTCARD Market Watch.jpg";
import d from "../../../assets/EVENTCARD  IPL Mania.jpg";
import e from "../../../assets/EVENTCARD  Movie-A-thon.jpg";
import f from "../../../assets/EVENTCARD Treasure Hunt.jpg";
import g from "../../../assets/EVENTCARD  Sprinthacks 2.0.jpg";
import h from "../../../assets/EVENTCARD E-Sports.jpg";
import i from "../../../assets/EVENTCARD  Corporate Dinner.jpg";
// import "./utility.css";
// import Image1 from "../../../assets/Event.jpg";
import {HashLink as Link} from 'react-router-hash-link';

const Cards = () => {
  const [isContentVisible, setContentVisible] = useState([]);

  const toggleContentVisibility = (index) => {
    setContentVisible((prevVisibility) => {
      const updatedVisibility = [...prevVisibility];
      updatedVisibility[index] = !updatedVisibility[index];
      return updatedVisibility;
    });
  };

  useEffect(() => {
    // Initialize visibility state for each card to false
    setContentVisible(Array(cards.length).fill(false));
  }, []);

  const cards = [
    {
      imag: a,
      name: "B-Plan",
      content:
        "Ideas abound when you have the conviction to bring about a change around you. The flagship event, B-PLAN, lets you promulgate your ground-breaking ideas.",
      hiddenContent: "Showcase your business skills and let the world see your entrepreneurial side. Gear up, buddies! Prepare an abstract and showcase it to be a winner."
    },
    {
      imag: b,
      name: "B-Quiz",
      content:
        "Are you well-versed in the business world? If your answer to this is a “YES”, then you have come to the right place, as this event brings you an opportunity to put on",
      hiddenContent: "your thinking caps for a mind-boggling quiz that will consist of technical and business-related questions. The event will be a treat for all the enthusiasts who have an appetite for knowledge and spectacular quizzing skills!"
    },
    {
      imag: c,
      name: "Market Watch",
      content:
        " Price is what you pay. Value is what you get.- Warren Buffett Do you have the skills to build a perfect portfolio? Then this event gives you a chance to practice and",
      hiddenContent: " master your skills. This event is based on investing in the stock market using virtual money"
    },
    {
      imag: d,
      name: "IPL Mania",
      content:
        "The event will be of two rounds. The first one will be the fantasy round in which the teams have to do online prediction in which they need to create a team on the fantasy app. ",
      hiddenContent: "The winning teams of round 1 will be going to the second round i.e. the auction round in which the team has to bid on the players of their choice."
    },
    {
      imag: e,
      name: "Movie-A-thon",
      content:
        "Welcome to Movie-A-thon, where creativity, humour, and feasibility collide! Teams will choose a popular movie, delve into its climax and plot, and pitch alternative",
      hiddenContent: "business ideas inspired by the characters or storyline. Awards await the best pitches in humour, feasibility, and overall creativity. Get ready to unleash your inner entrepreneur and reimagine the world of business through the lens of your favorite films!"
    },
    {
      imag: f,
      name: "Treasure Hunt",
      content:
      "“Not all treasure silver and gold, mate.” - Jack Sparrow Be a part of our campus treasure hunt, which capacitates you to solve the clues based on various places of",
      hiddenContent: "our campus. We will give participation certificates to all the participants and prizes to the winner."
    },
    {
      imag: g,
      name: "Sprinthacks 2.0",
      content:
        "Sprinthacks 2.0 is an 24-hour hackathon scheduled to take place in the month of May. This intense event will bring together passionate individuals from diverse ",
      hiddenContent: "backgrounds to innovate, collaborate, and create impactful solutions. Sprinthacks 2.0 provides a platform for participants to showcase their skills, learn from industry experts, and network with like-minded individuals. This hackathon encourages creativity, collaboration, and innovation to solve real-world challenges"
    },
    {
      imag: h,
      name: "E-Sports",
      content:
        "Get ready to experience the adrenaline-fueled battleground action like never before as E-Cell proudly presents BGMI Clash: College Esports Extravaganza! Join us for",
      hiddenContent: "an electrifying esports event that will bring together the finest gamers from across the campus to compete in the ultimate showdown of skill, strategy, and teamwork."
    },
    {
      imag: i,
      name: "Corporate Dinner",
      content:
        "We are delighted to inform you that the KIET E-Cell will be hosting a Corporate Dinner scheduled for the evening of the first day of ENDEAVOUR’24.",
      hiddenContent: "The Corporate Dinner promises to be a gathering of esteemed dignitaries of our college - Director In-Charge Dr. Anil Ahlawat sir, Joint Director Dr. Manoj Goel sir, Dean IEC Dr. KLA Khan sir, Dean SW Dr Satish Kumar sir, and the HODs of various departments from our college, as well as Technology Business Incubators (TBIs) from various other institutions. Additionally, representatives from Entrepreneurial and Development cells of different colleges will also be in attendance."
    },

  ];

  return (
    <div className="container">
      <h1 className="main-heading mt-16 md:ml-24 font-serif text-blue-700">All Events</h1>
        <div className="box-container ">
          {cards.map((card, index) => (
            <div className="box" key={index}>
              <img src={card.imag} alt="Event-1" />
              <h3 className="secondary-heading">{card.name}</h3>
              <span className="details p-2">
                {card.content}
                {isContentVisible[index] && (
                <span>{card.hiddenContent}</span>
              )}
                <span className="read-more" onClick={()=>toggleContentVisibility(index)}>
                  {isContentVisible[index] ? "...read less" : "...read more"}
                </span>
              </span>
              <Link to={`/event${index}#event-1`} smooth>
              <button className="custom-btn btn-1">Register</button>
              </Link>
            </div>
          ))}
        </div>
    </div>
  );
};

export default Cards;