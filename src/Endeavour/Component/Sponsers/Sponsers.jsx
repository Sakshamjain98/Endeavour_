// import React from "react";
import { AspectRatio, Card, CardContent, CardOverflow, Typography } from '@mui/joy';
import google from "../../../assets/brandLogos/google.png";
import instagram from "../../../assets/brandLogos/instagram.png";
import netflix from "../../../assets/brandLogos/netflix.png";
import amazon from "../../../assets/brandLogos/amazon.png";
import figma from "../../../assets/brandLogos/figma.png";
import ford from "../../../assets/brandLogos/ford.png";
import mercedes from "../../../assets/brandLogos/mercedes.png";
import cococola from "../../../assets/brandLogos/cococola.png";
import jio from "../../../assets/brandLogos/jio.png";
import axis from "../../../assets/brandLogos/axis.png";
// import Im from "../../../assets/White-paper-texture-for-Projects.jpg";
import "./Associations.css";

function Partners() {
  const Sponsors = [
    {
      name: "Google",
      image: google,
      position: "Partner",
    },
    {
      image: instagram,
      name: "Instagram",
      position: "Partner",
    },
    {
      image: netflix,
      name: "Netflix",
      position: "Partner",
    },
    {
      image: amazon,
      name: "Amazon",
      position: "Partner",
    },
    {
      image: figma,
      name: "Figma",
      position: "Partner",
    },
    {
      image: ford,
      name: "Ford",
      position: "Partner",
    },
    {
      image: mercedes,
      name: "Mercedes",
      position: "Partner",
    },
    {
      image: cococola,
      name: "Coca Cola",
      position: "Partner",
    },
    {
      image: jio,
      name: "Jio",
      position: "Partner",
    },
    {
      image: axis,
      name: "Axis",
      position: "Partner",
    },
  ];

  return (
    <section className="section mb-0 pt-2 " id='sponser'>
      <div className="flex justify-center items-center flex-col mt-0 mb-0 pb-0 w-full">
        <h1 className="text-5xl font-bold mb-4 animate__animated animate__fadeInUp pb-8"
      
        >
          Our <span className="font-bold text-5xl text-center text-blue-600 font-serif"
            style={{
              // color: "#5db2cf"
            }}
          >Sponsors</span>
        </h1>
        <div className="flex flex-wrap justify-around">
          {Sponsors.map((sponsor, index) => (
            <div key={index} className=" hello m-4 rounded-sm shadow-lg shadow-blue-300  transition-shadow hover:translate-x-1 duration-300 hover:shadow-blue-400 animate__animated animate__fadeInUp ">
              <Card orientation="horizontal" className="p-4" variant="outlined" sx={{ width: 260 }}>
                <CardOverflow>
                  <AspectRatio ratio="1" sx={{ width: 90 }}>
                    <img src={sponsor.image} loading="lazy" alt={sponsor.name} />
                  </AspectRatio>
                </CardOverflow>
                <CardContent>
                  <Typography fontWeight="md" textColor="success.plainColor">
                    {sponsor.name}
                  </Typography>
                  <Typography level="body-sm">{sponsor.position}</Typography>
                </CardContent>
                <CardOverflow
                  variant="soft"
                  color="primary"
                  sx={{
                    px: 0.2,
                    writingMode: 'vertical-rl',
                    justifyContent: 'center',
                    fontSize: 'xs',
                    fontWeight: 'xl',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    borderLeft: '1px solid',
                    borderColor: 'divider',
                  }}
                >
                  {sponsor.position}
                </CardOverflow>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Partners;
