import React from "react";
import { skillsData } from "../../data.js";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../demo/styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

export default function Skills() {
  return (
    <div className="testimonials">
      <h1>Skills</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        loop={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {skillsData.map((item) => (
          <SwiperSlide key={item.id}>
            <div>
              <div className="top">
                <img className="user" src={item.img} alt="" />
              </div>
              <div className="bottom">
                <h3>{item.name}</h3>
                <h4>{item.status}</h4>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-pagination"></div>
      </Swiper>
    </div>
  );
}
