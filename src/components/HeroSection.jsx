import React from "react";
import Header from "./Header";
import HeroImage from "../images/LOSANGELES MOUNTAINS copy.png";

const HeroSection = () => {
  return (
    <div>
      <section className=" h-screen bg-section1bg bg-cover z-40 ">
        <Header />
        <div className="max-w-4xl mx-auto ">
          <div className="ml-[5.625rem] mt-[6.25rem] z-20 ">
            <img src={HeroImage} alt="" srcset="" className=" " />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
