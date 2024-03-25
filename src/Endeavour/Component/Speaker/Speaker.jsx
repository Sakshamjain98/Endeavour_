// import AspectRatio from '@mui/joy/AspectRatio';
// // import Link from '@mui/joy/Link';
// import Card from '@mui/joy/Card';
// import CardContent from '@mui/joy/CardContent';
// import Typography from '@mui/joy/Typography';
// import CardCover from '@mui/joy/CardCover';
// import CardContent from '@mui/joy/CardContent';
// import Typography from '@mui/joy/Typography';
// import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import linkedInIcon from "../../../assets/icons8-linkedin.svg";
import gamilIcon from "../../../assets/icons8-gmail.svg";
import "./styles.css"; // Import your custom CSS for styling
import AbhishekSingh from "../../../assets/people/abhishek_singh.jpeg";
import AditiOhri from "../../../assets/people/aditi.jpg";
import AnmolSharma from "../../../assets/people/anmol.jpeg";
import DivyaRajput from "../../../assets/people/divya.jpg";
import HimanshiSingh from "../../../assets/people/himanshi_singh.jpeg";
import PradeepGupta from "../../../assets/people/pradeep.jpg";
import RamveerTanwar from "../../../assets/people/ramveer_tanver.jpeg";
import SachinSaxena from "../../../assets/people/sachin.jpeg";
import SaloniGaur from "../../../assets/people/saloni.jpg";
import SandeepJain from "../../../assets/people/sandeep.jpg";
import SourabhGoyal from "../../../assets/people/saurabh.jpeg";
import ShabnamSingh from "../../../assets/people/shabnam.jpg";
import ShubhamGaur from "../../../assets/people/Shubham-Gaur.webp";
import SourabhJain from "../../../assets/people/sourabh.jpeg";
import SunilDutt from "../../../assets/people/sunil-dutt.jpg";
import Im from "../../../assets/White-paper-texture-for-Projects.jpg"
// import  InteractiveCard from "./SpeakerCard.jsx";
import { useEffect } from 'react';
// import { s } from 'vite/dist/node/types.d-jgA8ss1A';

function OurTeam() {
  const pastSpeakers = [
    // Your pastSpeakers data...
      // Your pastSpeakers data...
      {
        name: "Abhishek Singh",
        image: AbhishekSingh,
        position: "IAS Officer & Actor",
      },
      {
        image: SandeepJain,
        name: "Sandeep Jain",
        position: "Founder @ GeeksforGeeks",
      },
      {
        image: SourabhJain,
        name: "Sourabh Jain",
        position: "Founder Fun2Do Labs Ex.VP Paytm",
      },
      {
        image: SachinSaxena,
        name: "Sachin Saxena",
        position: "Marketing Head & Founding Team @ Innovaccer",
      },
      {
        image: RamveerTanwar,
        name: "Ranveer Tanwar",
        position: "Founter @ Say Earth",
      },
      {
        image: SourabhGoyal,
        name: "Mr. Sourabh Goyal",
        position: "Founder @ Goalchy Club",
      },
      {
        image: AnmolSharma,
        name: "Anmol Sharma",
        position: "Co-Founder @finlight & @financial_literate",
      },
      {
        image: PradeepGupta,
        name: "Pradeep Gupta",
        position: "Founder Cyber media",
      },
      {
        image: SunilDutt,
        name: "Sunil Dutt",
        position: "President Devices @ Jio",
      },
      {
        image: HimanshiSingh,
        name: "Himanshi Singh",
        position: "TedX Speaker & Youtuber",
      },
      {
        image: SaloniGaur,
        name: "Saloni Gaur",
        position: "YouTuber",
      },
      {
        image: ShubhamGaur,
        name: "Shubham Gaur",
        position: "YouTuber",
      },
      {
        image: DivyaRajput,
        name: "Divya Rajput",
        position: "Incubator Manager",
      },
      {
        image: ShabnamSingh,
        name: "Shabnam Singh",
        position: "ChairPerson @ Youwecan",
      },
      {
        image: AditiOhri,
        name: "Aditi Ohri",
        position: "Owner Emporio Marketing Pvt. Ltd.",
      },
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div id="speaker" className="container border-blue-400 border-t-2 bg-cover bg-center bg-no-repeat pb-4 w-full"
    style={{
      backgroundImage: `url(${Im})`
    }}> {/* Add a container class for styling */}
      <h1 className="text-center text-blue-500 text-5xl m-2 p-2 font-serif font-bold">Speakers</h1>
      <div className="flex flex-wrap justify-around">
        {pastSpeakers.map((speaker, index) => (
              <div
                key={index}
                className="team-member flex flex-col justify-center items-center m-4 p-4 shadow-md shadow-blue-400  "
              >
                <div className="relative">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="team-member-img w-52 h-60 rounded-tr-[25%] rounded-lg rounded-bl-[25%]"
                  />
                  <div className="teamHover absolute top-5 left-5 w-[70%] border-t-4 border-l-4 p-3 pt-8 pb-5 border-blue-500 rounded-md flex flex-row justify-evenly items-center">
                    <a href="">
                      <img src={linkedInIcon} alt="" className="w-9 h-9" />
                    </a>
                    <a href="">
                      <img src={gamilIcon} alt="" className="w-8 h-8" />
                    </a>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center w-40 mt-2 ">
                  <p className=" team-member-name font-bold text-lg ">
                    {speaker.name}
                  </p>
                  <p className="team-member-domain text-center text-lg">
                    {speaker.position}
                  </p>
                </div>
              </div>
            ))}
          </div>
      </div>
    
  );
}

export default OurTeam;
