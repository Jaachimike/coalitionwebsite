import React from "react";

const Section2 = () => {
  return (
    <div className=" ">
      {/* SECTION 2 WRITEUP */}
      <div className=" max-w-4xl mx-auto flex ">
        <h1 className=" font-bold text-[135.63pt]">02</h1>
        <div className="flex flex-col items-center ">
          <h2 className=" font-bold text-[32pt]">CLIMB</h2>
          <h1 className=" font-bold text-[135.63pt]">.</h1>
        </div>
        <p>
          Cras scelerisque id quam sed dignissim Pellentesque urna nunc, gravida
          quis hendrerit ac, tristique ut quam. Vivamus suscipit dignissim
          tortor nec congue.
        </p>
      </div>

      {/* TAB1 AND TAB 2 */}
      <div className="  bg-[#414f6b]">
        <div className="max-w-4xl mx-auto flex">
          <div className=" px-2 py-2 mr-3 bg-[#b0b4be]">
            <button>MOUNTAIN 1</button>
          </div>
          <div className=" px-2 py-2">
            <button>MOUNTAIN 2</button>
          </div>
        </div>
      </div>

      {/* MOUNTAIN 1 AND MOUNTAIN 2 BACKGROUND  */}
      <div>
        {/* MOUNTAIN 1 */}
        <div className=" h-screen bg-tab1bg bg-cover">
          <div className=" pt-24 pl-8 max-w-4xl mx-auto">
            <div className=" flex flex-col justify-center items-center bg-[#ffffff] w-[352px] h-[229px]">
              <h1 className=" ml-11 self-start">SCHEDULE</h1>

              {/* DATE AND LOCATION */}
              <div className=" flex">
                {/* DATE */}
                <div className=" mr-11 ">
                  <p>25 Nov 2016</p>
                  <p>28 Nov 2016</p>
                  <p>18 Dec 2016</p>
                  <p>7 Jan 2017</p>
                </div>
                {/* LOCATION */}
                <div>
                  <p>Vestibulum viverra</p>
                  <p>Vestibulum viverra</p>
                  <p>Vestibulum viverra</p>
                  <p>Vestibulum viverra</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MOUNTAIN 2 */}
        <div className=" h-screen bg-tab2bg bg-cover">
          <div className=" pt-24 pl-8 max-w-4xl mx-auto">
            <div className=" flex flex-col justify-center items-center bg-[#ffffff] w-[352px] h-[229px]">
              <h1 className=" ml-11 self-start">SCHEDULE</h1>

              {/* DATE AND LOCATION */}
              <div className=" flex">
                {/* DATE */}
                <div className=" mr-11 ">
                  <p>17 Nov 2016</p>
                  <p>13 Dec 2016</p>
                  <p>28 Dec 2016</p>
                  <p>9 Feb 2017</p>
                </div>
                {/* LOCATION */}
                <div>
                  <p>Vestibulum viverra</p>
                  <p>Vestibulum viverra</p>
                  <p>Vestibulum viverra</p>
                  <p>Vestibulum viverra</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
