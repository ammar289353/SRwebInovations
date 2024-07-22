import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

// hero images
import vector13 from "../images/Vector 13.webp";
import circle from "../images/circle.webp";
import Triangle from "../images/tri.webp";
import add from "../images/add.webp";
// Service Images
import ServiceCard from "../components/Card";
import Testimonial from "../components/Testimonial";
import ContactForm from "../components/contactForm";

const Services = () => {
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
            Services
          </p>
          
            <h1
              className="text-white justify-center text-center text-[6vw] px-24 md:px-96 font-titleFont md:text-[4vw] font-extrabold"
            >
               Bridging  <span className="text-[#5454D4]">Technology</span> and Business.
            </h1>
            <div className="flex justify-between">
            <img className="px-3 md:px-48" src={Triangle} alt="" />
            <img className="pr-4 md:pr-44" src={add} alt="" />
            </div>
        </div>
      </section>

      <section>
        <ServiceCard/>
      </section>

      
      {/* TESTIMONIAL */}
      <Testimonial/>
      {/* Contact  */}

      <ContactForm/>
      
    </>
  );
};

export default Services;
