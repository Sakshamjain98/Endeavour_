import { Swiper, SwiperSlide } from "swiper/react";
import one from "../../../assets/Abc.jpg";
import two from "../../../assets/Abc.jpg";
import three from "../../../assets/Abc.jpg";
import four from "../../../assets/Abc.jpg";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import "./styles.css";

import { EffectCube, Autoplay, Pagination, Navigation } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        effect={"cube"}
        grabCursor={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Autoplay, Pagination, Navigation]}
        className="mySwiper md:w-72 md:h-72 w-60 h-60 md:mt-32 mt-10"
      >
        <SwiperSlide>
          <img src={one} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={two} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={three} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={four} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
