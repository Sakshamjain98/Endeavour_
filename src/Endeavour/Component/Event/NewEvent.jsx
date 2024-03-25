import {HashLink as Link} from 'react-router-hash-link';

// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Im from "../../../assets/Event.jpg";

import './NewSpeaker.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    < >
     <h1 className="text-center text-blue-600 text-7xl m-2 p-2 font-serif font-bold" id='event'>Events</h1>
      <Swiper
        spaceBetween={30}
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
            <img className="change-button" src={Im}  alt="" />
            </Link>
        </SwiperSlide>
        <SwiperSlide>
            <Link to="/Event1#event-1">
            <img className="change-button" src={Im}  alt="" />
            </Link>
        </SwiperSlide>
        <SwiperSlide>
            <Link to="/Event1#event-1">
            <img className="change-button" src={Im}  alt="" />
            </Link>
        </SwiperSlide>
        <SwiperSlide>
            <Link to="/Event1#event-1">
            <img className="change-button" src={Im}  alt="" />
            </Link>
        </SwiperSlide>
        <SwiperSlide>
            <Link to="/Event1#event-1">
            <img className="change-button" src={Im}  alt="" />
            </Link>
        </SwiperSlide>
        <SwiperSlide>
            <Link to="/Event1#event-1">
            <img className="change-button" src={Im}  alt="" />
            </Link>
        </SwiperSlide>
        <SwiperSlide>
            <Link to="/Event1#event-1">
            <img className="change-button" src={Im}  alt="" />
            </Link>
        </SwiperSlide>
       
      </Swiper>
    </>
  );
}

