import React from "react";
// import "tailwindcss/tailwind.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from "react-responsive-carousel";
import CarouselImg1 from "../../images/carousel_img1.png";
import CarouselImg2 from "../../images/carousel_img2.png";

const CarouselComponent = () => {
  return (
    <div className=" py-6">
      <Carousel
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        transitionTime={500}
        swipeable={true}
        emulateTouch={true}
        dynamicHeight={false}
      >
        <div className="carousel-slide">
          <img src={CarouselImg1} alt="" />
        </div>
        <div className="carousel-slide">
          <img src={CarouselImg2} alt="" />
        </div>
        <div className="carousel-slide">
          <img src={CarouselImg1} alt="" />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
