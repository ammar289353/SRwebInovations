import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import backgroundImage from "../images/Sr-Particle.jpg";
// Website Images
import Screenshot from "../images/1.jpeg";
import Screenshot2 from "../images/2.jpeg";
import Screenshot4 from "../images/Screenshot4.jpeg";
import Screenshot5 from "../images/CRM.jpeg";
import Screenshot6 from "../images/Cordelias.jpeg";
import Screenshot10 from "../images/REMS.jpeg";
import Screenshot9 from "../images/NexSkill.jpeg";
import Screenshot3 from "../images/3.jpeg";
import Screenshot7 from "../images/Santosh.jpeg";
import Screenshot8 from "../images/5.jpeg";
// Logo Images
import Cordelias from "../images/massagetherapy.jpg";
import DJ from "../images/DJCREFLO.jpg";
import addMoney from "../images/addmoney.jpg";
import astoria from "../images/astoria.jpg";
import bookit from "../images/bookit.jpg";
import cannabis from "../images/cannabis.jpg";
import gasBuddy from "../images/gasbuddy.jpg";
import hotelnBaku from "../images/hotelinbaku.jpg";
import kppr from "../images/kppr.jpg";
import my420 from "../images/my420.jpg";
import onePageCrm from "../images/onepagecrm.jpg";
import travelUp from "../images/travelup.jpg";
import txtogo from "../images/txtogo.jpg";
import Wow from "../images/wow.jpg";

// Packaging Images
import pkg1 from "../images/packaging-design-1.jpg";
import pkg2 from "../images/packaging-design-2.jpg";
import pkg3 from "../images/packaging-design-3.jpg";
import pkg4 from "../images/packaging-design-4.jpg";

const Portfolio = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const [category, setCategory] = useState("all");

  const handleCategoryChange = (category) => {
    setCategory(category);
  };

  return (
    <>
      <section data-aos="zoom-in-up">
        <div
          className="h-[45vw] sm:h-[45vw] md:h-[45vw] lg:h-[32vw] w-full text-center relative overflow-hidden"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
          }}
          onMouseEnter={handleHover}
          onMouseLeave={handleMouseLeave}
        >
          <p className="text-white text-center pt-[20vw] sm:pt-[20vw] md:pt-44 lg:pt-44 text-[1.5vw] sm:text-[1vw] md:text-[1vw] lg:text-[1vw] ">
            SR Innovations
          </p>
          <div
            className={`absolute top-1/2 mr-[9vw] sm:mr-[8vw] md:mr-[8vw] lg:mr-28 transform transition-transform ${
              isHovered ? "-translate-y-2" : ""
            } ${isHovered ? "left-[38%]" : "right-[30%]"}`}
          >
            <h1
              className={`text-white text-center text-[6vw] font-bold ${
                isHovered ? "hovered" : ""
              }`}
              onMouseEnter={handleHover}
              onMouseLeave={handleMouseLeave}
            >
              Portfolio
            </h1>
          </div>
        </div>
      </section>
      {/* CUSTOM BUSINESS SOLUTIONS */}
      <section className="w-[90vw] m-auto">
        <div className="text-center pt-16" data-aos="fade-down">
          <p className="font-bold">Tailored Business Solutions</p>
          <h1 className="text-[3.5vw] font-medium ">
            Establish Your Brand as an Industry Leader
          </h1>
        </div>
        <div className="w-[40vw] sm:w-[40vw] md:w-[60vw] lg:w-[60vw] justify-between block sm:block md:flex lg:flex m-auto pb-4">
          <button
            onClick={() => handleCategoryChange("all")}
            className="border border-black rounded-full px-16 mb-1 sm:pl-4 sm:pr-4 md:pl-6 md:pr-6 lg:pl-6 lg:pr-6 hover:bg-blue-800 hover:text-white"
          >
            All
          </button>
          <button
            onClick={() => handleCategoryChange("logo")}
            className="border border-black rounded-full px-6 mb-1  sm:pl-3 sm:pr-3 md:pl-6 md:pr-6 lg:pl-6 lg:pr-6 hover:bg-blue-800 hover:text-white"
          >
            LOGO DESIGN
          </button>
          <button
            onClick={() => handleCategoryChange("website")}
            className="border border-black rounded-full px-9 mb-1 sm:pl-1 sm:pr-1 md:pl-6 md:pr-6 lg:pl-6 lg:pr-6 hover:bg-blue-800 hover:text-white"
          >
            WEBSITES
          </button>
          <button
            onClick={() => handleCategoryChange("packaging")}
            className="border border-black rounded-full px-3 sm:pl-3 sm:pr-3 md:pl-6 md:pr-6 lg:pl-6 lg:pr-6 hover:bg-blue-800 hover:text-white"
          >
            Packaging Design
          </button>
        </div>
        <div className="block sm:block md:grid lg:grid grid-cols-3 justify-between mt-5">
          {category === "all" && (
            <>
            
              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={Cordelias}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                  <span className="text-white text-lg font-bold">
                  Cordelias Clinic
                  </span>
                </div>
              </div>
              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={DJ}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                  <span className="text-white text-lg font-bold">
                  DJ Creflo
                  </span>
                </div>
              </div>
              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={travelUp}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                  <span className="text-white text-lg font-bold">
                  travelUp
                  </span>
                </div>
              </div>
              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={txtogo}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                  <span className="text-white text-lg font-bold">
                  txtogo
                  </span>
                </div>
              </div>
              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={Wow}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                  <span className="text-white text-lg font-bold">
                  Wow
                  </span>
                </div>
              </div>
              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={addMoney}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                  <span className="text-white text-lg font-bold">
                  Adale
                  </span>
                </div>
              </div>

              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={astoria}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                  <span className="text-white text-lg font-bold">
                  Astoria
                  </span>
                </div>
              </div>
              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={bookit}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                  <span className="text-white text-lg font-bold">
                  Book it
                  </span>
                </div>
              </div>
              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={cannabis}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                  <span className="text-white text-lg font-bold">
                    Cannabis
                  </span>
                </div>
              </div>
              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={gasBuddy}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                  <span className="text-white text-lg font-bold">
                    Gas Buddy
                  </span>
                </div>
              </div>
              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={hotelnBaku}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                  <span className="text-white text-lg font-bold">
                  Hotel in Baku
                  </span>
                </div>
              </div>
              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={kppr}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                  <span className="text-white text-lg font-bold">
                    Kppr
                  </span>
                </div>
              </div>

              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={Screenshot}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                  <span className="text-white text-lg font-bold">
                    Dashboard
                  </span>
                </div>
              </div>

              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={Screenshot2}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                  <span className="text-white text-lg font-bold">ASkill</span>
                </div>
              </div>

              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={Screenshot3}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                  <span className="text-white text-lg font-bold">
                    GET "Green Envirnment Technology"
                  </span>
                </div>
              </div>

              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={Screenshot4}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                  <span className="text-white text-lg font-bold">
                    GRAYSCALE
                  </span>
                </div>
              </div>

              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={Screenshot5}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                  <span className="text-white text-lg font-bold">
                    DELICIOUS
                  </span>
                </div>
              </div>

             <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={pkg1}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                  <span className="text-white text-lg font-bold">
                    
                  </span>
                </div>
              </div>
              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={pkg2}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                  <span className="text-white text-lg font-bold">
                    
                  </span>
                </div>
              </div>
              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={pkg3}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                  <span className="text-white text-lg font-bold">
                    
                  </span>
                </div>
              </div>
              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={pkg4}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                  <span className="text-white text-lg font-bold">
                    
                  </span>
                </div>
              </div>
             
            </>
          )}

          {category === "logo" && (
            <>
              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={Cordelias}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                  <span className="text-white text-lg font-bold">
                  Cordelias Clinic
                  </span>
                </div>
              </div>

              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={addMoney}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                  <span className="text-white text-lg font-bold">
                  Adale
                  </span>
                </div>
              </div>

              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={astoria}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                  <span className="text-white text-lg font-bold">
                  Astoria
                  </span>
                </div>
              </div>
              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={bookit}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                  <span className="text-white text-lg font-bold">
                  Book it
                  </span>
                </div>
              </div>
              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={cannabis}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                  <span className="text-white text-lg font-bold">
                    Cannabis
                  </span>
                </div>
              </div>
              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={gasBuddy}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                  <span className="text-white text-lg font-bold">
                    Gas Buddy
                  </span>
                </div>
              </div>
              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={hotelnBaku}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                  <span className="text-white text-lg font-bold">
                  Hotel in Baku
                  </span>
                </div>
              </div>
              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={kppr}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                  <span className="text-white text-lg font-bold">
                    Kppr
                  </span>
                </div>
              </div>
  
              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={my420}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                  <span className="text-white text-lg font-bold">
                  my420
                  </span>
                </div>
              </div>
              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={onePageCrm}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                  <span className="text-white text-lg font-bold">
                  One Page Crm
                  </span>
                </div>
              </div>
              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={travelUp}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                  <span className="text-white text-lg font-bold">
                  travelUp
                  </span>
                </div>
              </div>
              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={txtogo}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                  <span className="text-white text-lg font-bold">
                  txtogo
                  </span>
                </div>
              </div>
              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={Wow}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                  <span className="text-white text-lg font-bold">
                  Wow
                  </span>
                </div>
              </div>
            </>
          )}

          {category === "website" && (
            <>
            <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={Screenshot5}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                  <span className="text-white text-lg font-bold">
                    CRM (Customer Relation Management)
                  </span>
                </div>
              </div>

              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={Screenshot6}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                  <span className="text-white text-lg font-bold">
                    Cordelias Clinic
                  </span>
                </div>
              </div>

              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={Screenshot4}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                  <span className="text-white text-lg font-bold">
                    MaxCool (A Real State Website)
                  </span>
                </div>
              </div>

              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={Screenshot8}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                  <span className="text-white text-lg font-bold">
                    DELICIOUS (A Fast Food Shop)
                  </span>
                </div>
              </div>

              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={Screenshot10}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                  <span className="text-white text-lg font-bold">
                    REMS (Real State Management System)
                  </span>
                </div>
              </div>

              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={Screenshot9}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                  <span className="text-white text-lg font-bold">
                    NexSkill LMS
                  </span>
                </div>
              </div>
              
              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={Screenshot}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                  <span className="text-white text-lg font-bold">
                    A-Skill Admin Dashboard
                  </span>
                </div>
              </div>

              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={Screenshot2}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                  <span className="text-white text-lg font-bold">A-Skill (An E-Learning Platform)</span>
                </div>
              </div>

             
              

              

             

              

              

              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={Screenshot3}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                  <span className="text-white text-lg font-bold">
                    GET "Green Envirnment Technology"
                  </span>
                </div>
              </div>


              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={Screenshot7}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                  <span className="text-white text-lg font-bold">
                   Santosh Architecture
                  </span>
                </div>
              </div>

              
            </>
          )}

          {category === "packaging" && (
            <>
              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={pkg1}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                  <span className="text-white text-lg font-bold">
                    
                  </span>
                </div>
              </div>
              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={pkg2}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                  <span className="text-white text-lg font-bold">
                    
                  </span>
                </div>
              </div>
              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={pkg3}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                  <span className="text-white text-lg font-bold">
                    
                  </span>
                </div>
              </div>
              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={pkg4}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                  <span className="text-white text-lg font-bold">
                    
                  </span>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Portfolio;
