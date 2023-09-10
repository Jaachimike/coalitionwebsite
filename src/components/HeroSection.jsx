import React from "react";
import Header from "./Header";
import HeroImage from "../images/LOSANGELES MOUNTAINS copy.png";

const HeroSection = () => {
  return (
    <div>
      <section className=" h-screen bg-section1bg bg-cover z-40 ">
        <Header />
        <div className="max-w-4xl mx-auto ">
          <div className=" mt-28  mx-8 flex items-center justify-center ">
            <img src={HeroImage} alt="" srcset="" className=" " />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
