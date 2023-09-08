import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/coalition logo.png";

const Header = () => {
  return (
    <header>
      <div className=" flex items-center justify-between max-w-4xl mx-auto pt-3 ">
        {/* LOGO */}
        <div>
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>

        {/* NAV LINKS */}
        <nav>
          <Link className="mr-2"> 01. HISTORY</Link>
          <Link> 02. TEAM </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

// flex items-center justify-between max-w-4xl mx-auto mt-3
