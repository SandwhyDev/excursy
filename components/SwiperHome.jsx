import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
const SwiperHome = () => {
  return (
    <div className="w-full h-[70%] mt-10  ">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000 }}
        className="w-full h-full"
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
      >
        <SwiperSlide>
          <div className="bg-red-500 h-full">hello</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-blue-500">hello</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-green-500">hello</div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperHome;
