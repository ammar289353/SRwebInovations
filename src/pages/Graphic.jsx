import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
// hero images
import vector13 from "../images/Vector 13.webp";
import circle from "../images/circle.webp";
import Triangle from "../images/tri.webp";
import add from "../images/add.webp";
import GraphicService from "../images/GraphicService.png";
// Cards
import Logo from "../images/create-icon.webp"
import Design from "../images/Design.png"
import SocialMedia from "../images/Online Ads.png"

import Testimonial from "../components/Testimonial";
import ContactForm from "../components/contactForm";


const Graphic = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  
  return (
    <>
    {/* Hero */}
     <section className=" bg-[#2A2A2A] h-auto" data-aos="zoom-in-up">
        
        <div
          className="w-full text-center"
        >
          <div className="flex justify-between">
          <img className="pt-24 px-4 md:px-48" src={vector13} alt="" />
          <img className=" pt-24 pr-4 md:pr-48" src={circle} alt="" />
          </div>
          <p className="text-[#5454D4] text-center font-bodyFont  text-[1.5vw] sm:text-[1vw] md:text-[1vw] lg:text-[1vw] ">
            GRAPHIC DESIGN
          </p>
          
            <h1
              className="text-white justify-center text-center text-[6vw] px-24 md:px-96 font-titleFont md:text-[4vw] font-extrabold"
            >
              Creating Stunning, Unique <span className="text-[#5454D4]">Visual</span> Identities.
            </h1>
            <div className="flex justify-between">
            <img className="px-3 md:px-48" src={Triangle} alt="" />
            <img className="pr-4 md:pr-44" src={add} alt="" />
            </div>
        </div>
      </section>
    {/* Service */}
      <section className="w-[94vw] m-auto md:mb-10 mt-10">
        <div className="block sm:block md:flex lg:flex">
          <div
            className="w-[90vw] sm:w-[90vw] md:w-[50vw] lg:w-[50vw]"
            data-aos="flip-left"
          >
            <img src={GraphicService} alt="" />
          </div>
          <div
            className="w-[90vw] sm:w-[90vw] md:w-[50vw] lg:w-[50vw] ml-0 sm:ml-0 md:ml-10 lg:ml-10 mt-10 md:mt-8 text-center sm:text-center md:text-start lg:text-start"
            data-aos="flip-right"
          >
            <p className="font-semibold text-[#5454D4] text-[3.5vw] sm:text-[3vw] md:text-[1vw] lg:text-[1vw]">
              GRAPHIC DESIGN
            </p>
            <h1 className="font-extrabold text-[5.5vw] sm:text-[5vw] md:text-[4vw]">
              Get A Custom Design <br /> For Your Brand
            </h1>
            <p className="mt-2 text-[4.5vw] text-left sm:text-[4vw] md:text-[1.2vw] lg:text-[1.2vw] text-[#373737]">
              A dynamic collage of vibrant and visually appealing graphic
              design elements showcasing various aspects of our services,
              including logo design, branding, social media design, and UI/UX
              design.
            </p>
            <Link to="/Contact">
            <div className="px-20 md:px-2 pt-3 md:pt-0">
              <button className="flex bg-[#5454D4] text-[3.5vw] lg:text-[1.5vw] text-white rounded-2xl px-6 py-1 mt-4 hover:bg-white hover:text-[#5454D4] border border-[#5454D4]">
                Get Started{" "}
                <MdArrowOutward className="text-[6vw] md:text-[2vw] md:pt-2" />
              </button>
            </div>
          </Link>
          </div>
        </div>
      </section>
       {/* Cards  */}
       <section className="pt-12">
        <h1 className="font-titleFont font-extrabold text-[5vw] px-6 md:px-24  md:text-[3vw] text-center ">Create A Strong Brand Identity With Our  Professional Graphic Design Services!</h1>
      <div className="block sm:block md:flex lg:flex mb-14 px-4">
          <div
            className="ml-1  md:m-3  mt-6 md:mt-4  w-[90vw]  md:w-[30vw] h-auto md:h-[45vh] p-4 sm:p-7 md:p-6 pt-10  rounded-lg shadow-2xl shadow-blue-100 items-center text-center hover:bg-blue-900 text-gray-500 hover:text-white"
            data-aos="flip-left"
          >
            <img
              src={Logo}
              alt=""
              className="bg-[#5454D4] rounded-full py-2 px-2  ml-32 w-[15vw] sm:w-[15vw] md:w-[5vw] lg:w-[5.5vw] md:ml-14 lg:ml-32"
            />
            <h1 className="font-bold text-[5vw] sm:text-[5vw] md:text-[2vw] lg:text-[1.5vw] mt-3">
            Logo Design
            </h1>
            <p className="text-[4vw] sm:text-[4vw] md:text-[1.5vw] lg:text-[1vw] mt-2">
            A sleek and modern logo design featuring bold typography and distinctive graphical elements, symbolizing the essence of your brand.
            </p>
          </div>
          <div
            className="ml-1 sm:ml-1 md:m-3 lg:m-3 mt-6 sm:mt-6 md:mt-4 lg:mt-4 w-[90vw] sm:w-[90vw] md:w-[30vw] lg:w-[30vw] h-auto md:h-[45vh] p-4 sm:p-7 md:p-6 lg:p-6 pt-10 rounded-lg shadow-2xl shadow-blue-100 items-center text-center hover:bg-blue-900 text-gray-500 hover:text-white"
            data-aos="flip-left"
          >
            <img
              src={Design}
              alt=""
              className="bg-[#5454D4] rounded-full py-2 px-2  ml-32 w-[15vw] sm:w-[15vw] md:w-[5vw] lg:w-[5.5vw] md:ml-14 lg:ml-32"
            />
            <h1 className="font-bold text-[5vw] sm:text-[5vw] md:text-[2vw] lg:text-[1.5vw] mt-3">
            Branding Design
            </h1>
            <p className="text-[4vw] sm:text-[4vw] md:text-[1.5vw] lg:text-[1vw] mt-2">
            A comprehensive branding design package tailored to establish a cohesive and impactful brand identity for your business.
            </p>
          </div>
          <div
            className="ml-1 sm:ml-1 md:m-3 lg:m-3 mt-6 sm:mt-6 md:mt-4 lg:mt-4 w-[90vw] sm:w-[90vw] md:w-[30vw] lg:w-[30vw] h-auto md:h-[45vh] p-4 sm:p-7 md:p-6 lg:p-6 pt-10 rounded-lg shadow-2xl shadow-blue-100 items-center text-center hover:bg-blue-900 text-gray-500  hover:text-white"
            data-aos="flip-left"
          >
            <img
              src={SocialMedia}
              alt=""
              className="bg-[#5454D4] rounded-full py-2 px-2 ml-32 w-[15vw] sm:w-[15vw] md:w-[5vw] lg:w-[5.5vw] md:ml-14 lg:ml-32"
            />
            <h1 className="font-bold text-[5vw] sm:text-[5vw] md:text-[2vw] lg:text-[1.5vw] mt-3">
            Social Media Design
            </h1>
            <p className="text-[4vw] sm:text-[4vw] md:text-[1.5vw] lg:text-[1vw] mt-2">
            Eye-catching and dynamic social media design solutions crafted to amplify your brand's online presence and engage your audience effectively. 

            </p>
          </div>
        </div>
      </section>
       {/* TESTIMONIAL */}
       <Testimonial/>
      {/* Contact  */}
      <ContactForm/>
    </>
  );
};

export default Graphic;
