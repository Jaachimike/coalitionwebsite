import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/coalition logo.png";

const Header = () => {
  return (
    <header className=" font-Lato">
      <div className=" flex items-center justify-between max-w-4xl mx-auto pt-3 px-5 ">
        {/* LOGO */}
        <div>
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>

        {/* NAV LINKS */}
        <nav className=" text-[#fefeff] underline underline-offset-4">
          <Link className="  mr-3">01. HISTORY</Link>
          <Link> 02. TEAM </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

// flex items-center justify-between max-w-4xl mx-auto mt-3
