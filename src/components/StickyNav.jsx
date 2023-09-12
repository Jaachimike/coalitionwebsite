import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/coalition logo.png";
import Writeup from "../images/LOSANGELES MOUNTAINS logo.png";

const StickyNav = ({ scrollToSection }) => {
  return (
    <header className=" bg-white py-2">
      <div className=" flex items-center justify-between max-w-4xl mx-auto pt-3 px-5 md:px-0 ">
        {/* LOGO */}
        <div className=" flex">
          <Link to="/" className="mr-2">
            <img src={Logo} alt="" />
          </Link>
          <Link to="/">
            <img src={Writeup} alt="" />
          </Link>
        </div>

        {/* NAV LINKS */}
        <nav className=" text-[12pt] font-Lato text-[#414f6b] underline underline-offset-4">
          <ul className=" flex ">
            <li>
              <button
                className=" underline underline-offset-4 mr-3 md:mr-11 lg:mr-11"
                onClick={() => scrollToSection("section1")}
              >
                01. HISTORY
              </button>
            </li>
            <li>
              <button
                className="underline underline-offset-4"
                onClick={() => scrollToSection("section2")}
              >
                02. TEAM
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default StickyNav;
