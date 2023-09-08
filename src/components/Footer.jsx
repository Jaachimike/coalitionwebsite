import React from "react";
import footerLogo from "../images/footer_logo.png";

const Footer = () => {
  return (
    <div>
      <div className=" bg-[#414f6b]">
        <div className="max-w-4xl mx-auto pl-5 py-4 flex items-center justify-between">
          {/* FOOTER LOGO */}
          <div className=" flex ">
            <img src={footerLogo} alt="" className=" mr-3" />
            <div className=" flex flex-col">
              <h2 className=" text-[#63769d]  ">LOSANGELES</h2>
              <h2 className=" text-[#63769d] ">MOUNTAINS</h2>
            </div>
          </div>

          {/* COPYRIGHT */}
          <div>
            <p className=" text-[#63769d]">
              COPYRIGHT 2016. ALL RIGHTS RESERVED
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
