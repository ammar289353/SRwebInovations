import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// hero images
import vector13 from "../images/Vector 13.webp";
import circle from "../images/circle.webp";
import Triangle from "../images/tri.webp";
import add from "../images/add.webp";

// PortfolioImages
import PortfolioImages from "../components/Portfolio";
import Testimonial from "../components/Testimonial";
import ContactForm from "../components/contactForm";

const Portfolio = () => {
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
            Portfolio
          </p>
          
            <h1
              className="text-white justify-center text-center text-[6vw] px-24 md:px-96 font-titleFont md:text-[4vw] font-extrabold"
            >
               Establish Your <span className="text-[#5454D4]">Brand</span> as an Industry Leader
            </h1>
            <div className="flex justify-between">
            <img className="px-3 md:px-48" src={Triangle} alt="" />
            <img className="pr-4 md:pr-44" src={add} alt="" />
            </div>
        </div>
      </section>
      {/* CUSTOM BUSINESS SOLUTIONS */}
      <section className="pb-8 pt-6 " data-aos="zoom-in-up">
         <PortfolioImages/>
      </section>

       {/* TESTIMONIAL */}
      <Testimonial/>
      {/* Contact  */}

      <ContactForm/>
    </>
  );
};

export default Portfolio;
