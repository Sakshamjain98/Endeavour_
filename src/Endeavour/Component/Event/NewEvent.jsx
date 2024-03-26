import {HashLink as Link} from 'react-router-hash-link';

// import React, { useRef, useState } from 'react';
// Import Swiper React components
import a from "../../../assets/EVENTCARD BPLAN.jpg";
import b from "../../../assets/EVENTCARD  B-Quiz.jpg";
import c from "../../../assets/EVENTCARD Market Watch.jpg";
import d from "../../../assets/EVENTCARD  IPL Mania.jpg";
import e from "../../../assets/EVENTCARD  Movie-A-thon.jpg";
import f from "../../../assets/EVENTCARD Treasure Hunt.jpg";
import g from "../../../assets/EVENTCARD  Sprinthacks 2.0.jpg";
import h from "../../../assets/EVENTCARD E-Sports.jpg";
import i from "../../../assets/EVENTCARD  Corporate Dinner.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import Im from "../../../assets/Event.jpg";

import './NewSpeaker.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    < >
     <h1 className="text-center text-blue-600 text-7xl m-2 p-2 font-serif font-bold" id='event'>Events</h1>
     <div className='event-slider-container'>

      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <Link to="/Event1#event-1">
            <img className="change-button "  src={a}  alt="" />
            </Link>
        </SwiperSlide>
        <SwiperSlide>
            <Link to="/Event1#event-1">
            <img className="change-button" src={b}  alt="" />
            </Link>
        </SwiperSlide>
        <SwiperSlide>
            <Link to="/Event1#event-1">
            <img className="change-button" src={c}  alt="" />
            </Link>
        </SwiperSlide>
        <SwiperSlide>
            <Link to="/Event1#event-1">
            <img className="change-button" src={d}  alt="" />
            </Link>
        </SwiperSlide>
        <SwiperSlide>
            <Link to="/Event1#event-1">
            <img className="change-button" src={e}  alt="" />
            </Link>
        </SwiperSlide>
        <SwiperSlide>
            <Link to="/Event1#event-1">
            <img className="change-button" src={f}  alt="" />
            </Link>
        </SwiperSlide>
        <SwiperSlide>
            <Link to="/Event1#event-1">
            <img className="change-button" src={g}  alt="" />
            </Link>
        </SwiperSlide>
        <SwiperSlide>
            <Link to="/Event1#event-1">
            <img className="change-button" src={h}  alt="" />
            </Link>
        </SwiperSlide>
        <SwiperSlide>
            <Link to="/Event1#event-1">
            <img className="change-button" src={i}  alt="" />
            </Link>
        </SwiperSlide>
       
      </Swiper>
          </div>
    </>
  );
}

