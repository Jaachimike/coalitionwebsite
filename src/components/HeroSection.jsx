import React from "react";
import Header from "./Header";
import HeroImage from "../images/LOSANGELES MOUNTAINS copy.png";

const HeroSection = ({ scrollToSection }) => {
  return (
    <div>
      <section className=" h-screen bg-section1bg bg-cover z-40 ">
        <Header scrollToSection={scrollToSection} />
        <div className="max-w-4xl mx-auto ">
          <div className=" mt-28 mx-8  flex justify-center lg:justify-start  lg:ml-24 lg:mt-72 ">
            <img
              src={HeroImage}
              alt="losangeles mountain"
              srcset=""
              className=" "
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
