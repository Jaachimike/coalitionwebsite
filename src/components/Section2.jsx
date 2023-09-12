import React, { useState } from "react";

const Section2 = () => {
  const [selectedMountain, setSelectedMountain] = useState("MOUNTAIN 1");

  const handleMountainClick = (mountain) => {
    setSelectedMountain(mountain);
  };

  return (
    <div>
      {/* SECTION 2 WRITEUP */}
      <div className=" max-w-4xl mx-auto md:flex md:items-center">
        <div className="  flex items-end mb-0 md:mb-9  mt-3 font-Oswald ">
          <h1 className=" font-bold text-[#b0b4be] text-[135.63pt] leading-half  tracking-[-0.5rem]">
            02
          </h1>
          <div className=" ml-2">
            <h2 className=" font-bold text-[32pt] text-[#414f6b]">CLIMB</h2>
            <div className=" bg-[#b0b4be] w-6 h-6 text-[#b0b4be] ">.</div>
          </div>
        </div>
        <div className=" mb-6 md:mb-0 w-fit overflow-hidden">
          <p className=" ml-5 my-2 text-[15px]  ">
            Cras scelerisque id quam sed dignissim Pellentesque urna nunc,
            gravida quis hendrerit ac, tristique ut quam. Vivamus suscipit
            dignissim tortor nec congue.
          </p>
        </div>
      </div>

      {/* TAB1 AND TAB 2 */}
      <div className="  bg-[#414f6b]">
        <div className="max-w-4xl mx-auto flex font-Oswald">
          <div
            className={`px-2 py-2 mr-3  ${
              selectedMountain === "MOUNTAIN 1"
                ? "bg-[#b0b4be] text-[#414f6b]"
                : "text-[#b0b4be]"
            }`}
          >
            <button onClick={() => handleMountainClick("MOUNTAIN 1")}>
              MOUNTAIN 1
            </button>
          </div>
          <div
            className={` px-2 py-2 ${
              selectedMountain === "MOUNTAIN 2"
                ? "bg-[#b0b4be] text-[#414f6b]"
                : "text-[#b0b4be]"
            } `}
          >
            <button onClick={() => handleMountainClick("MOUNTAIN 2")}>
              MOUNTAIN 2
            </button>
          </div>
        </div>
      </div>

      {/* MOUNTAIN 1 AND MOUNTAIN 2 BACKGROUND  */}
      <div>
        {/* MOUNTAIN 1 */}
        {selectedMountain === "MOUNTAIN 1" && (
          <div className=" h-screen bg-tab1bg bg-cover">
            <div className=" pt-24 pl-3 md:pl-8 max-w-4xl mx-auto">
              <div className=" flex  justify-center items-start bg-[#ffffff]  w-[352px] h-[229px]">
                <div className=" flex flex-col items-start mt-3 ">
                  <h1 className="   text-[#414f6b] text-3xl font-Oswald mb-1">
                    SCHEDULE
                  </h1>
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
          </div>
        )}

        {/* MOUNTAIN 2 */}
        {selectedMountain === "MOUNTAIN 2" && (
          <div className=" h-screen bg-tab2bg bg-cover ">
            <div className=" pt-24 pl-3 md:pl-8 max-w-4xl mx-auto">
              <div className=" flex justify-center items-start bg-[#ffffff] w-[352px] h-[229px]">
                <div className=" flex flex-col items-start mt-3 ">
                  <h1 className="   text-[#414f6b] text-3xl font-Oswald mb-1">
                    SCHEDULE
                  </h1>
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
        )}
      </div>
    </div>
  );
};

export default Section2;
