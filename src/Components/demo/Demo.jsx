import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import PaginationCard from "../pagination/Pagination";

import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

export default function Skills() {
  const data = [
    {
      id: 1,
      name: "ReactJS",
      status: "Completed",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
      icon: "assets/twitter.png",
    },
    {
      id: 2,
      name: "NextJS",
      status: "Running...",
      img: "https://miro.medium.com/v2/resize:fit:1400/1*BQZAbczBfLYtPp-6HmN0ZQ.jpeg",
      icon: "assets/youtube.png",

      featured: true,
    },
    {
      id: 3,
      name: "Javascript",
      status: "Completed",
      img: "https://static-00.iconduck.com/assets.00/javascript-js-icon-2048x2048-nyxvtvk0.png",
      icon: "assets/linkedin.png",
    },
    {
      id: 4,
      name: "MaterialUI",
      status: "Completed",
      img: "https://static-00.iconduck.com/assets.00/material-ui-icon-2048x1626-on580ia9.png",
      icon: "assets/linkedin.png",
    },
    {
      id: 5,
      name: "Styled Components",
      status: "Completed",
      img: "https://www.daggala.com/static/228867c3668e439101821568a8a03b54/ec333/sc.png",
      icon: "assets/linkedin.png",
    },
    {
      id: 6,
      name: "Framer Motion",
      status: "Completed",
      img: "https://www.ejable.com/wp-content/uploads/2022/04/Framer-Motion.webp",
      icon: "assets/linkedin.png",
    },
    {
      id: 7,
      name: "TailwindCSS",
      status: "Completed",
      img: "https://static-00.iconduck.com/assets.00/tailwind-css-icon-1024x615-fdeis5r1.png",
      icon: "assets/linkedin.png",
    },
    {
      id: 8,
      name: "Atomic CSS",
      status: "Completed",
      img: "https://sebastienlorber.com/static/80100b6831efdf60fa68f366b41413a6/6050d/hero.png",
      icon: "assets/linkedin.png",
    },
    {
      id: 9,
      name: "Design Patterns",
      status: "Running",
      img: "https://miro.medium.com/v2/resize:fit:1400/1*foVnq6ka4jPqrOzWWhq1kA.png",
      icon: "assets/linkedin.png",
    },
  ];
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <div className={item.featured ? "card featured" : "card"}>
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
      </Swiper>
    </>
  );
}
