import React from "react";
// import { Link } from "react-router-dom";
// import { Link } from "react-scroll";
import Logo from "../images/coalition logo.png";

const Header = ({ scrollToSection }) => {
  return (
    <header className=" font-Lato">
      <div className=" flex items-center justify-between max-w-4xl mx-auto pt-3 px-5 md:px-0 ">
        {/* LOGO */}
        <div>
          <img src={Logo} alt="" />
        </div>

        {/* NAV LINKS */}
        <nav className=" text-[#fefeff] underline underline-offset-4">
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

export default Header;

// flex items-center justify-between max-w-4xl mx-auto mt-3
