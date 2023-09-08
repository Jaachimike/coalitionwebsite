import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";

import CarouselImg1 from "../images/carousel_img1.png";
import CarouselImg2 from "../images/carousel_img2.png";

const Section1 = () => {
  return (
    <div>
      <div className=" h-screen bg-section2bg bg-cover">
        {/* CONTAINER */}
        <div className=" flex flex-col h-full  ">
          {/* WRITEUP */}
          <div className="flex-grow max-w-4xl mx-auto">
            {/* HEADING */}
            <div className=" flex">
              <h1 className=" text-[135.63pt]">01</h1>

              <div>
                <h2 className=" text-[32pt]">HISTORY</h2>
                <div className=" text-[135.63pt]">.</div>
              </div>
            </div>

            {/* BODY */}
            <div className=" flex items-center justify-center">
              <p className=" text-start  text-[16pt]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                in ante viverra, rutrum erat rutrum, consectetur mi. Proin at
                maximus est. Nullam purus ex, iaculis sed erat sed, blandit
                tincidunt quam. Cras scelerisque id quam sed dignissim
                Pellentesque urna nunc, gravida quis hendrerit ac, tristique ut
                quam. Vivamus suscipit dignissim tortor nec congue.
              </p>
            </div>
          </div>

          {/* CAROUSEL */}
          <div className=" bg-[#414f6b] bg-opacity-75 ">
            {/* CAROUSEL CONTAINER */}
            <div className=" max-w-4xl mx-auto p-6">
              {/* CAROUSEL */}
              <div>
                <Swiper
                  slidesPerView={3}
                  spaceBetween={-150}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <img src={CarouselImg1} alt="" srcset="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={CarouselImg2} alt="" srcset="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={CarouselImg1} alt="" srcset="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={CarouselImg2} alt="" srcset="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={CarouselImg1} alt="" srcset="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={CarouselImg2} alt="" srcset="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={CarouselImg1} alt="" srcset="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={CarouselImg2} alt="" srcset="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={CarouselImg1} alt="" srcset="" />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
