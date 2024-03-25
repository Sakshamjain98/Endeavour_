// import  { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import Im from "../../../assets/Speaker.jpg" 

import './NewSpeaker.css';

// import required modules
import { EffectCards } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
      id='speaker'
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide><img src={Im}  alt="" /></SwiperSlide>
        <SwiperSlide><img src={Im}  alt="" /></SwiperSlide>
        <SwiperSlide><img src={Im}  alt="" /></SwiperSlide>
        <SwiperSlide><img src={Im}  alt="" /></SwiperSlide>
        <SwiperSlide><img src={Im}  alt="" /></SwiperSlide>
        <SwiperSlide><img src={Im}  alt="" /></SwiperSlide>
        <SwiperSlide><img src={Im}  alt="" /></SwiperSlide>
        <SwiperSlide><img src={Im}  alt="" /></SwiperSlide>
        <SwiperSlide><img src={Im}  alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}
