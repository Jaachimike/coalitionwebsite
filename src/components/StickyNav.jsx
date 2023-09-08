import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/coalition logo.png";
import Writeup from "../images/LOSANGELES MOUNTAINS logo.png";

const StickyNav = () => {
  return (
    <header className=" bg-white py-2">
      <div className=" flex items-center justify-between max-w-4xl mx-auto pt-3 ">
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
        <nav>
          <Link className="mr-10"> 01. HISTORY</Link>
          <Link> 02. TEAM </Link>
        </nav>
      </div>
    </header>
  );
};

export default StickyNav;
