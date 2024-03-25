import  { useEffect, useState } from "react";
// import Image1 from "../assets/2.jpg";
import "./cards.css";
// import "./utility.css";
import Image1 from "../../../assets/Event.jpg";

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
      imag: Image1,
      name: "B-Plan",
      content:
        "Ideas abound when you have the conviction to bring about a change around you. The flagship event, B-PLAN, lets you promulgate your ground-breaking ideas.",
      hiddenContent: "Showcase your business skills and let the world see your entrepreneurial side. Gear up, buddies! Prepare an abstract and showcase it to be a winner."
    },
    {
      imag: Image1,
      name: "B-Quiz",
      content:
        "Are you well-versed in the business world? If your answer to this is a “YES”, then you have come to the right place, as this event brings you an opportunity to put on",
      hiddenContent: "your thinking caps for a mind-boggling quiz that will consist of technical and business-related questions. The event will be a treat for all the enthusiasts who have an appetite for knowledge and spectacular quizzing skills!"
    },
    {
      imag: Image1,
      name: "Market Watch",
      content:
        " Price is what you pay. Value is what you get.- Warren Buffett Do you have the skills to build a perfect portfolio? Then this event gives you a chance to practice and",
      hiddenContent: " master your skills. This event is based on investing in the stock market using virtual money"
    },
    {
      imag: Image1,
      name: "IPL Mania",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. At expedita corporis quo facere vero incidunt, aliquam rerum sit officiis fugit!",
      hiddenContent: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi assumenda labore earum temporibus distinctio quos, suscipit repudiandae expedita id perferendis."
    },
    {
      imag: Image1,
      name: "Movie-A-thon",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. At expedita corporis quo facere vero incidunt, aliquam rerum sit officiis fugit!",
      hiddenContent: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi assumenda labore earum temporibus distinctio quos, suscipit repudiandae expedita id perferendis."
    },
    {
      imag: Image1,
      name: "Treasure Hunt",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. At expedita corporis quo facere vero incidunt, aliquam rerum sit officiis fugit!",
      hiddenContent: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi assumenda labore earum temporibus distinctio quos, suscipit repudiandae expedita id perferendis."
    },
    {
      imag: Image1,
      name: "Sprinthacks 2.0",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. At expedita corporis quo facere vero incidunt, aliquam rerum sit officiis fugit!",
      hiddenContent: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi assumenda labore earum temporibus distinctio quos, suscipit repudiandae expedita id perferendis."
    },
    {
      imag: Image1,
      name: "E-Sports",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. At expedita corporis quo facere vero incidunt, aliquam rerum sit officiis fugit!",
      hiddenContent: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi assumenda labore earum temporibus distinctio quos, suscipit repudiandae expedita id perferendis."
    },
    {
      imag: Image1,
      name: "Corporate Dinner",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. At expedita corporis quo facere vero incidunt, aliquam rerum sit officiis fugit!",
      hiddenContent: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi assumenda labore earum temporibus distinctio quos, suscipit repudiandae expedita id perferendis."
    },

  ];

  return (
    <div className="container">
      <h1 className="main-heading mt-16 font-serif text-blue-700">All Events</h1>
        <div className="box-container">
          {cards.map((card, index) => (
            <div className="box " key={index}>
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

              <button className="custom-btn btn-1">Register</button>
            </div>
          ))}
        </div>
    </div>
  );
};

export default Cards;