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
// import CarouselComponent from "./Carousel/CarouselComponent";

const Section1 = () => {
  return (
    <div>
      <div className=" h-screen bg-section2bg bg-cover">
        {/* CONTAINER */}
        <div className=" flex flex-col h-full  ">
          {/* WRITEUP */}
          <div className="flex-grow max-w-4xl mx-auto mt-12 ">
            {/* HEADING */}
            <div className=" flex  items-end ">
              <div className=" font-Oswald text-[135.63pt] leading-half tracking-[-0.7rem] text-[#414f6b] text-opacity-75  ">
                01
              </div>

              <div className="ml-2 ">
                <p className=" font-Oswald text-[32pt] text-[#414f6b]">
                  HISTORY
                </p>
                <div className=" bg-[#414f6b] bg-opacity-75 w-6 h-6 ">.</div>
              </div>
            </div>

            {/* BODY */}
            <div className=" px-10 ">
              <p className=" text-[13px] ">
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
                  slidesPerView={4}
                  spaceBetween={8}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  breakpoints={
                    // when window width is >= 320px
                    {
                      320: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                      },
                      // when window width is >= 480px
                      480: {
                        slidesPerView: 3,
                        spaceBetween: 8,
                      },
                      // when window width is >= 640px
                      640: {
                        slidesPerView: 4,
                        spaceBetween: 8,
                      },
                    }
                  }
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
