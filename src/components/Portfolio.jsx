import React, { useState } from "react";

// Website Images
import Web1 from "../images/Website/web1.webp";
import Web2 from "../images/Website/web2.webp";
import Web3 from "../images/Website/web3.png";
import Web4 from "../images/Website/web4.webp";
import Web5 from "../images/Website/web5.webp";
import Web6 from "../images/Website/web6.webp";
// video
import video1 from "../videos/VideoAnimation1.mp4";
// Logo Images
// import logo21 from "../images/Logo/logo21.jpeg";
// import logo22 from "../images/Logo/logo22.jpeg";
// import logo23 from "../images/Logo/logo23.jpeg";
// import logo24 from "../images/Logo/logo24.png";
// import logo25 from "../images/Logo/logo25.png";
// import logo26 from "../images/Logo/logo26.jpeg";
// import logo27 from "../images/Logo/logo27.png";
// import logo28 from "../images/Logo/logo28.png";
// import logo29 from "../images/Logo/logo29.jpeg";
// import logo30 from "../images/Logo/logo30.jpeg";
// import logo31 from "../images/Logo/logo31.jpeg";
// import logo32 from "../images/Logo/logo32.png";
// import logo33 from "../images/Logo/logo33.jpeg";
import logo34 from "../images/Logo/logo34.png";
import logo35 from "../images/Logo/logo35.png";
import logo36 from "../images/Logo/logo36.png";
import logo37 from "../images/Logo/logo37.png";
import logo38 from "../images/Logo/logo38.png";
import logo1 from "../images/Logo/logo1.webp";
import massagetherapy from "../images/massagetherapy.jpg";
import logo5 from "../images/Logo/logo5.webp";
import logo8 from "../images/Logo/logo8.jpeg";
import logo11 from "../images/Logo/logo11.jpeg";
import logo12 from "../images/Logo/logo12.webp";
import logo13 from "../images/Logo/logo13.webp";
import logo16 from "../images/Logo/logo16.webp";
import logo19 from "../images/Logo/logo19.webp";
import logo20 from "../images/Logo/logo20.webp";

// DMM Images
import DMM1 from "../images/DMM/N_DM_1.jpeg";
import DMM2 from "../images/DMM/N_DM_2.jpeg";
import DMM3 from "../images/DMM/N_DM_3.jpeg";
import DMM4 from "../images/DMM/N_DM_4.jpeg";
import DMM5 from "../images/DMM/DMMPortfolio-5.webp";
import DMM6 from "../images/DMM/DMMPortfolio-6.jpg";
import DMM7 from "../images/DMM/DMMPortfolio-7.jpg";
import DMM8 from "../images/DMM/DMMPortfolio-8.jpg";

// UI/UX Images
// import Design1 from "../images/ui-1.jpg"
// import Design2 from "../images/ui-2.jpg"
// import Design3 from "../images/ui-3.jpg"
// import Design4 from "../images/ui-4.jpg"
// import Design5 from "../images/ui-5.png"
// import Design6 from "../images/ui-6.jpg"
// import Design7 from "../images/ui-7.jpg"
// import Design8 from "../images/ui-8.jpg"
// import Design9 from "../images/ui-9.jpg"
// import Design10 from "../images/ui-10.jpg"
// import Design11 from "../images/ui-11.png"

const PortfolioImages = () => {
  const [category, setCategory] = useState("DMM");

  const handleCategoryChange = (category) => {
    setCategory(category);
  };

  return (
    <>
      <div className="md:flex">
        <h1 className="text-[6vw] md:text-[3vw] pl-3 font-titleFont font-extrabold">
          Our Awesome Work Portfolio
        </h1>
        <div className="block sm:block md:flex lg:flex m-auto pb-4 pt-4 font-bold font-titleFont">
          <button
            onClick={() => handleCategoryChange("DMM")}
            className=" rounded-full px-3 sm:pl-3 sm:pr-3 md:pl-6 md:pr-6 lg:px-2 hover:text-[#5454D4] active:text-[#5454D4] "
          >
            Digital Markertting
          </button>
          <button
            onClick={() => handleCategoryChange("website")}
            className=" rounded-full px-4 mb-1  sm:pl-3 sm:pr-3 md:pl-6 md:pr-6 lg:px-2  hover:text-[#5c5cc0] active:text-[#5454D4]"
          >
            WEB Development
          </button>
          {/* <button
              onClick={() => handleCategoryChange("ui/ux")}
              className=" rounded-full px-3 sm:pl-3 sm:pr-3 md:pl-6 md:pr-6 lg:px-0 hover:text-[#5454D4] active:text-[#5454D4]"
            >
              UI/UX
            </button> */}
          <button
            onClick={() => handleCategoryChange("logo")}
            className="rounded-full px-4 mb-1 md:pl-6 md:pr-6 lg:px-2  hover:text-[#5454D4] active:text-[#5454D4]"
          >
            LOGO DESIGN
          </button>

          <button
            onClick={() => handleCategoryChange("video")}
            className=" rounded-full px-4 mb-1 sm:pl-1 sm:pr-1 md:pl-6 md:pr-6 lg:px-2  hover:text-[#5454D4] active:text-[#5454D4]"
          >
            Video Animation
          </button>
        </div>
      </div>

      <div className="block sm:block md:grid lg:grid grid-cols-3 justify-between pt-6 px-6 mt-5">
        {category === "logo" && (
          <>
            {/* <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={logo21}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
              </div>
              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={logo22}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
              </div>
              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={logo23}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
              </div>
              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={logo24}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
              </div>
              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={logo25}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
              </div>
              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={logo26}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
              </div>
              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={logo27}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
              </div>
              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={logo28}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
              </div>
              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={logo29}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
              </div>
              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={logo30}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
              </div>
              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={logo31}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
              </div> */}
            {/* <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={logo32}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
              </div>
              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={logo33}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
              </div> */}
            <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
              <img
                src={logo34}
                alt=""
                className="border rounded-lg w-full h-full"
              />
            </div>
            <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
              <img
                src={logo35}
                alt=""
                className="border rounded-lg w-full h-full"
              />
            </div>
            <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
              <img
                src={logo36}
                alt=""
                className="border rounded-lg w-full h-full"
              />
            </div>
            <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
              <img
                src={logo37}
                alt=""
                className="border rounded-lg w-full h-full"
              />
            </div>
            <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
              <img
                src={logo38}
                alt=""
                className="border rounded-lg w-full h-full"
              />
            </div>

            <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
              <img
                src={logo1}
                alt=""
                className="border rounded-lg w-full h-full"
              />
            </div>

            <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
              <img
                src={massagetherapy}
                alt=""
                className="border rounded-lg w-full h-full"
              />
            </div>

            <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
              <img
                src={logo5}
                alt=""
                className="border rounded-lg w-full h-full"
              />
            </div>

            <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
              <img
                src={logo8}
                alt=""
                className="border rounded-lg w-full h-full"
              />
            </div>

            <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
              <img
                src={logo11}
                alt=""
                className="border rounded-lg w-full h-full"
              />
            </div>
            <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
              <img
                src={logo12}
                alt=""
                className="border rounded-lg w-full h-full"
              />
            </div>
            <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
              <img
                src={logo13}
                alt=""
                className="border rounded-lg w-full h-full"
              />
            </div>

            <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
              <img
                src={logo16}
                alt=""
                className="border rounded-lg w-full h-full"
              />
            </div>

            <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
              <img
                src={logo19}
                alt=""
                className="border rounded-lg w-full h-full"
              />
            </div>
            <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
              <img
                src={logo20}
                alt=""
                className="border rounded-lg w-full h-full"
              />
            </div>
          </>
        )}

        {category === "website" && (
          <>
            <div className="relative border rounded-lg w-[90vw] h-auto  md:w-[29vw] mb-10">
              <img
                src={Web1}
                alt=""
                className="border rounded-lg w-full h-full"
              />
            </div>
            <div className="relative border rounded-lg w-[90vw] h-auto  md:w-[29vw] mb-10">
              <img
                src={Web2}
                alt=""
                className="border rounded-lg w-full h-full"
              />
            </div>
            <div className="relative border rounded-lg w-[90vw] h-auto  md:w-[29vw] mb-10">
              <img
                src={Web3}
                alt=""
                className="border rounded-lg w-full h-full"
              />
            </div>
            <div className="relative border rounded-lg w-[90vw] h-auto  md:w-[29vw] mb-10">
              <img
                src={Web4}
                alt=""
                className="border rounded-lg w-full h-full"
              />
            </div>
            <div className="relative border rounded-lg w-[90vw] h-auto  md:w-[29vw] mb-10">
              <img
                src={Web5}
                alt=""
                className="border rounded-lg w-full h-full"
              />
            </div>
            <div className="relative border rounded-lg w-[90vw] h-auto  md:w-[29vw] mb-10">
              <img
                src={Web6}
                alt=""
                className="border rounded-lg w-full h-full"
              />
            </div>
          </>
        )}
        {category === "video" && (
          <>
            <div className="relative border rounded-lg w-[90vw] h-[50vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[15vw] lg:w-[29vw] lg:h-[15vw] mb-10">
              <video controls autoPlay muted controlsList="nodownload">
                <source src={video1} type="video/mp4" />
              </video>
            </div>
          </>
        )}
        {category === "DMM" && (
          <>
            <div className="relative border rounded-lg w-[90vw] h-auto  md:w-[29vw] mb-10">
              <img
                src={DMM7}
                alt=""
                className="border rounded-lg w-full h-full"
              />
            </div>
            <div className="relative border rounded-lg w-[90vw] h-auto  md:w-[29vw] mb-10">
              <img
                src={DMM8}
                alt=""
                className="border rounded-lg w-full h-full"
              />
            </div>
            <div className="relative border rounded-lg w-[90vw] h-auto  md:w-[29vw] mb-10">
              <img
                src={DMM1}
                alt=""
                className="border rounded-lg w-full h-full"
              />
            </div>
            <div className="relative border rounded-lg w-[90vw] h-auto  md:w-[29vw] mb-10">
              <img
                src={DMM2}
                alt=""
                className="border rounded-lg w-full h-full"
              />
            </div>
            <div className="relative border rounded-lg w-[90vw] h-auto  md:w-[29vw] mb-10">
              <img
                src={DMM3}
                alt=""
                className="border rounded-lg w-full h-full"
              />
            </div>
            <div className="relative border rounded-lg w-[90vw] h-auto  md:w-[29vw] mb-10">
              <img
                src={DMM4}
                alt=""
                className="border rounded-lg w-full h-full"
              />
            </div>
            <div className="relative border rounded-lg w-[90vw] h-auto  md:w-[29vw] mb-10">
              <img
                src={DMM5}
                alt=""
                className="border rounded-lg w-full h-full"
              />
            </div>
            <div className="relative border rounded-lg w-[90vw] h-auto  md:w-[29vw] mb-10">
              <img
                src={DMM6}
                alt=""
                className="border rounded-lg w-full h-full"
              />
            </div>
          </>
        )}
        {/* {category === "ui/ux" && (
            <>
            <div className="relative border rounded-lg w-[90vw] h-auto  md:w-[29vw] mb-10">
                <img
                  src={Design1}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
              </div>
            <div className="relative border rounded-lg w-[90vw] h-auto  md:w-[29vw] mb-10">
                <img
                  src={DMM8}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
              </div>
            <div className="relative border rounded-lg w-[90vw] h-auto  md:w-[29vw] mb-10">
                <img
                  src={DMM1}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
              </div>
            <div className="relative border rounded-lg w-[90vw] h-auto  md:w-[29vw] mb-10">
                <img
                  src={DMM2}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
              </div>
            <div className="relative border rounded-lg w-[90vw] h-auto  md:w-[29vw] mb-10">
                <img
                  src={DMM3}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
              </div>
            <div className="relative border rounded-lg w-[90vw] h-auto  md:w-[29vw] mb-10">
                <img
                  src={DMM4}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
              </div>
            <div className="relative border rounded-lg w-[90vw] h-auto  md:w-[29vw] mb-10">
                <img
                  src={DMM5}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
              </div>
            <div className="relative border rounded-lg w-[90vw] h-auto  md:w-[29vw] mb-10">
                <img
                  src={DMM6}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
              </div>

              
            </>
          )} */}
      </div>
    </>
  );
};

export default PortfolioImages;
