import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import DMService from "../images/DMMService.png";
import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
// hero images
import vector13 from "../images/Vector 13.webp";
import circle from "../images/circle.webp";
import Triangle from "../images/tri.webp";
import add from "../images/add.webp";
// Cards
import Server from "../images/Server.png"
import Ecommerce from "../images/T-Shirt.webp"
import App from "../images/Mobile.webp"

import Testimonial from "../components/Testimonial";
import ContactForm from "../components/contactForm";


const DigitalMarketing = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <>
      <section className=" bg-[#2A2A2A] h-auto" data-aos="zoom-in-up">
        
        <div
          className="w-full text-center"
        >
          <div className="flex justify-between">
          <img className="pt-24 px-4 md:px-48" src={vector13} alt="" />
          <img className=" pt-24 pr-4 md:pr-48" src={circle} alt="" />
          </div>
          <p className="text-[#5454D4] text-center font-bodyFont  text-[1.5vw] sm:text-[1vw] md:text-[1vw] lg:text-[1vw] ">
            Digital Marketting
          </p>
          
            <h1
              className="text-white justify-center text-center text-[6vw] px-24 md:px-80 font-titleFont md:text-[4vw] font-extrabold"
            >
               Boost Online  <span className="text-[#5454D4]">Presence</span> With Expert Digital Marketting.
            </h1>
            <div className="flex justify-between">
            <img className="px-3 md:px-48" src={Triangle} alt="" />
            <img className="pr-4 md:pr-44" src={add} alt="" />
            </div>
        </div>
      </section>
      <section className="w-[94vw] m-auto md:mb-10 mt-10">
        <div className="block sm:block md:flex lg:flex">
          <div
            className="w-[90vw] sm:w-[90vw] md:w-[50vw] lg:w-[50vw]"
            data-aos="flip-left"
          >
            <img src={DMService} alt="" />
          </div>
          <div
            className="w-[90vw] sm:w-[90vw] md:w-[50vw] lg:w-[50vw] ml-0 sm:ml-0 md:ml-10 lg:ml-10 mt-10 sm:mt-10 md:mt-8 text-center sm:text-center md:text-start lg:text-start"
            data-aos="flip-right"
          >
            <p className="font-semibold text-[#5454D4] text-[3.5vw] sm:text-[3vw] md:text-[1vw] lg:text-[1vw]">
              Digital Marketing
            </p>
            <h1 className="font-bold text-[5.5vw] sm:text-[5vw] md:text-[3vw] lg:text-[3vw]">
              Why Choose Our Digital <br />
              Marketing Services?
            </h1>
            <p className="mt-2 text-[4.5vw] sm:text-[4vw] text-left md:text-[1.2vw] lg:text-[1.2vw] text-[#373737]">
              Gain a competitive edge with our digital marketing services. From
              SEO to social media, we help you reach your audience and drive
              website traffic. With years of experience, our experts deliver
              results to boost your online presence, brand awareness, and sales.
              Trust us for effective strategies and maximum ROI.
            </p>
            <Link to="/Contact">
            <div className="px-20 md:px-2 pt-3 md:pt-0">
              <button className="flex bg-[#5454D4] text-[3.5vw] lg:text-[1.5vw] text-white rounded-2xl px-6 py-1 mt-4 hover:bg-[#39547a]  ">
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
       <h1 className="font-titleFont font-extrabold px-6 md:px-24 text-[5vw] md:text-[3vw] text-center ">Attract more customers,generate leads! Our  digital marketing services drive growth.</h1>
      <div className="block sm:block md:flex lg:flex mb-14 px-4">
          <div
            className="ml-1  md:m-3  mt-6 md:mt-4  w-[90vw]  md:w-[30vw] h-auto md:h-[45vh] p-4 sm:p-7 md:p-6 pt-10  rounded-lg shadow-2xl shadow-blue-100 items-center text-center hover:bg-blue-900 text-gray-500 hover:text-white"
            data-aos="flip-left"
          >
            <img
              src={Server}
              alt=""
              className="bg-[#5454D4] rounded-full py-2 px-2  ml-32 w-[15vw] sm:w-[15vw] md:w-[5vw] lg:w-[5.5vw] md:ml-14 lg:ml-32"
            />
            <h1 className="font-bold text-[5vw] sm:text-[5vw] md:text-[2vw] lg:text-[1.5vw] mt-3">
            Server Management
            </h1>
            <p className="text-[4vw] sm:text-[4vw] md:text-[1.5vw] lg:text-[1vw] mt-2">
            Ensure seamless digital marketing operations with expert server management services.
            </p>
          </div>
          <div
            className="ml-1 sm:ml-1 md:m-3 lg:m-3 mt-6 sm:mt-6 md:mt-4 lg:mt-4 w-[90vw] sm:w-[90vw] md:w-[30vw] lg:w-[30vw] h-auto md:h-[45vh] p-4 sm:p-7 md:p-6 lg:p-6 pt-10 rounded-lg shadow-2xl shadow-blue-100 items-center text-center hover:bg-blue-900 text-gray-500 hover:text-white"
            data-aos="flip-left"
          >
            <img
              src={Ecommerce}
              alt=""
              className="bg-[#5454D4] rounded-full py-2 px-2  ml-32 w-[15vw] sm:w-[15vw] md:w-[5vw] lg:w-[5.5vw] md:ml-14 lg:ml-32"
            />
            <h1 className="font-bold text-[5vw] sm:text-[5vw] md:text-[2vw] lg:text-[1.5vw] mt-3">
            E-commerce
            </h1>
            <p className="text-[4vw] sm:text-[4vw] md:text-[1.5vw] lg:text-[1vw] mt-2">
            Elevate your digital marketing strategy with ecommerce integration. From optimizing product listings to enhancing user experience.
            </p>
          </div>
          <div
            className="ml-1 sm:ml-1 md:m-3 lg:m-3 mt-6 sm:mt-6 md:mt-4 lg:mt-4 w-[90vw] sm:w-[90vw] md:w-[30vw] lg:w-[30vw] h-auto md:h-[45vh] p-4 sm:p-7 md:p-6 lg:p-6 pt-10 rounded-lg shadow-2xl shadow-blue-100 items-center text-center hover:bg-blue-900 text-gray-500  hover:text-white"
            data-aos="flip-left"
          >
            <img
              src={App}
              alt=""
              className="bg-[#5454D4] rounded-full py-2 px-2 ml-32 w-[15vw] sm:w-[15vw] md:w-[5vw] lg:w-[5.5vw] md:ml-14 lg:ml-32"
            />
            <h1 className="font-bold text-[5vw] sm:text-[5vw] md:text-[2vw] lg:text-[1.5vw] mt-3">
            App Development
            </h1>
            <p className="text-[4vw] sm:text-[4vw] md:text-[1.5vw] lg:text-[1vw] mt-2">
            Transform your digital marketing efforts with captivating book design services. From eye-catching covers to engaging interior layouts.

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

export default DigitalMarketing;
