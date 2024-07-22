import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// hero images
import vector13 from "../images/Vector 13.webp";
import circle from "../images/circle.webp";
import Triangle from "../images/tri.webp";
import add from "../images/add.webp";
// We Are 
import Image40 from "../images/image 40.png";
import Image42 from "../images/image 42.png";
// Cards
import Quilt from "../images/View Quilt.webp"
import DevSkill from "../images/Development Skill.webp"
import Vision from "../images/Vision.webp"

import Testimonial from "../components/Testimonial";
import ContactForm from "../components/contactForm";

const About = () => {
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
            ABOUT US
          </p>
          
            <h1
              className="text-white justify-center text-center text-[6vw] px-24 md:px-96 font-titleFont md:text-[4vw] font-extrabold"
            >
              We Deploy Precise  <span className="text-[#5454D4]">Technology </span> Solutions
            </h1>
            <div className="flex justify-between">
            <img className="px-3 md:px-48" src={Triangle} alt="" />
            <img className="pr-4 md:pr-44" src={add} alt="" />
            </div>
        </div>
      </section>
      {/* Our value */}
      <section className=" pb-12 sm:pb-12 md:pb-0 lg:pb-0 ">
        <div className="w-[94vw] h-auto sm:h-auto md:h-auto lg:h-auto m-auto">
          <div className="block sm:block md:flex lg:flex">
            <div
              className="w-[80vw] sm:w-[85vw] md:w-[40vw] lg:w-[40vw] pt-14 m-auto sm:m-auto"
              data-aos="zoom-in"
            >
              <p className="font-semibold text-[4.5vw] sm:text-[4.5vw] md:text-[2vw] lg:text-[1vw]">
                Our value
              </p>
              <h1 className="text-[5vw] sm:text-[5vw] md:text-[3vw] lg:text-[3vw] font-bold pt-2 text-[#05185A]">
                The Intersection of Technology, Creativity, and Innovation
              </h1>
              <p className="text-gray-500 pt-2">
                We're a team of tech-savvy professionals committed to
                simplifying business operations through the dynamic force of
                technology. Our mission is to equip you with cutting-edge
                technological advancements through our innovative solutions
                tailored to your unique requirements. With our expertise and
                customer-centric approach, we aim to actualize your ideas and
                propel you towards accomplishing your business objectives.
              </p>
            </div>
            <div className="w-[80vw] sm:w-[85vw] md:w-[30vw] lg:w-[30vw] pt-10">
              <div
                className="w-[93vw] h-auto sm:w-[40vw] sm:h-auto md:w-[26vw] md:h-auto lg:w-[26vw] lg:h-auto bg-white rounded-lg p-5 sm:p-5 md:p-8 lg:p-8 hover:bg-[#093E86] text-gray-600 hover:text-white shadow-2xl shadow-blue-100"
                data-aos="flip-left"
              >
                <img
                  src="https://techigems.pk/wp-content/uploads/2024/02/aboutx11.png"
                  alt=""
                />
                <h1 className="pt-4 font-bold text-[5vw] sm:text-[5vw] md:text-[2vw] lg:text-[2vw]">
                  Mission
                </h1>
                <p className="pt-4 text-[3vw] sm:text-[2.5vw] md:text-[1.2vw] lg:text-[1.2vw]">
                  Our mission is to equip businesses with pioneering technology
                  solutions.
                </p>
              </div>
              <div
                className="w-[93vw] mt-3 sm:mt-4 md:mt-4 lg:mt-4 h-auto sm:w-[40vw] sm:h-auto md:w-[26vw] md:h-auto lg:w-[26vw] lg:h-auto bg-white rounded-lg p-5 sm:p-5 md:p-8 lg:p-8  hover:bg-[#093E86] text-gray-600 hover:text-white shadow-2xl shadow-blue-100"
                data-aos="flip-left"
              >
                <img
                  src="https://techigems.pk/wp-content/uploads/2024/02/aboutx3.png"
                  alt=""
                />
                <h1 className="pt-4 font-bold text-[5vw] sm:text-[5vw] md:text-[2vw] lg:text-[2vw]">
                  Vision
                </h1>
                <p className="pt-4 text-[3vw] sm:text-[2.5vw] md:text-[1.2vw] lg:text-[1.2vw]">
                  Our vision is to foster a world where technology empowers each
                  individual.
                </p>
              </div>
            </div>
            <div className="w-[30vw] pt-6 sm:pt-6 md:pb-10 md:pt-20 lg:pt-20">
              <div
                className="w-[93vw] h-auto sm:w-[40vw] sm:h-auto md:w-[26vw] md:h-auto lg:w-[26vw] lg:h-auto bg-white rounded-lg p-5 sm:p-5 md:p-8 lg:p-8 hover:bg-[#093E86] text-gray-600 hover:text-white
                shadow-2xl shadow-blue-100"
                data-aos="flip-right"
              >
                <img
                  src="https://techigems.pk/wp-content/uploads/2024/02/aboutx2.png"
                  alt=""
                />
                <h1 className="pt-4 font-bold text-[5vw] sm:text-[5vw] md:text-[2vw] lg:text-[2vw]">
                  Value
                </h1>
                <p className="pt-4 text-[3vw] sm:text-[2.5vw] md:text-[1.2vw] lg:text-[1.2vw]">
                  Integrity, innovation, and excellence are core values that
                  guide all our endeavors.
                </p>
              </div>
              <div
                className="w-[93vw] h-auto sm:w-[40vw] sm:h-auto md:w-[26vw] md:h-auto lg:w-[26vw] lg:h-auto bg-white rounded-lg p-5 sm:p-5 md:p-8 lg:p-8 hover:bg-[#093E86] text-gray-600 hover:text-white mt-3 sm:mt-4 md:mt-4 lg:mt-4 shadow-2xl shadow-blue-100"
                data-aos="flip-right"
              >
                <img
                  src="https://techigems.pk/wp-content/uploads/2024/02/aboutx4.png"
                  alt=""
                />
                <h1 className="pt-4 font-bold text-[5vw] sm:text-[5vw] md:text-[2vw] lg:text-[2vw] ">
                  Purpose
                </h1>
                <p className="pt-4 text-[3vw] sm:text-[2.5vw] md:text-[1.2vw] lg:text-[1.2vw]">
                  Our purpose is to bridge the divide between technology and
                  humanity, fostering simpler and more efficient operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* WE ARE  */}
      <section data-aos="zoom-in-up">
      <div className="flex flex-col-reverse md:flex-row pt-4 bg-[#2A2A2A] pb-8 ">
      <div className="pt-8 px-4">
        <img className="rounded-lg" src={Image40} alt="" />
      </div>
      <div className="pt-8 px-12 md:w-[50%]">
          <div>
            <span className="text-white font-medium">We Are</span>
            <h1 className="text-[6vw] text-white lg:text-[3vw] font-extrabold font-titleFont">
             Equipping Our Varied{" "}
              Client Base to Harness Cutting
            </h1>
          </div>
          <div className="pt-2 font-bodyFont text-white">
            <p>
            At SR Innovations, we recognize the ever-evolving nature of technology and the paramount importance of staying ahead. That's why we're passionately committed to empowering our diverse clientele with the tools to harness the latest advancements and seize new business horizons.
            </p>
            
          </div>
      </div>
      
      </div>
      </section>
      {/* Numbers */}
      <section>
      <div className="mt-5 sm:mt-5 md:mt-9 lg:mt-10 font-titleFont">
            <div className="px-4 w-full md:w-[80vw] m-auto flex justify-between pb-5 sm:pb-5 pt-7 sm:pt-7 md:pt-7 lg:pt-7">
              <div className="text-[#5454D4]">
                <h1 className="text-[8vw] sm:text-[3.4vw] md:text-[4vw]  font-extrabold">
                  2K+
                </h1>
                <p className="text-[2vw] sm:text-[1.8vw] md:text-[1vw] font-bold font-bodyFont text-black">
                  Project Done
                </p>
              </div>
              <div className="text-[#5454D4]">
                <h1 className="text-[8vw] sm:text-[3.4vw] md:text-[4vw]  font-extrabold">
                  1.5K+
                </h1>
                <p className="text-[2vw] sm:text-[1.8vw] md:text-[1vw] font-bold font-bodyFont text-black">
                  Happy customer
                </p>
              </div>
              <div className="text-[#5454D4]">
                <h1 className="text-[8vw] sm:text-[3.4vw] md:text-[4vw] font-extrabold">
                  4.7
                </h1>
                <p className="text-[2vw] sm:text-[1.8vw] md:text-[1vw] font-bold font-bodyFont text-black">
                  Review customer
                </p>
              </div>
              <div className="text-[#5454D4]">
                <h1 className="text-[8vw] sm:text-[3.4vw] md:text-[4vw]  font-extrabold">
                  4+
                </h1>
                <p className="text-[2vw] sm:text-[1.8vw] md:text-[1vw] font-bold font-bodyFont text-black">
                  Years Experience
                </p>
              </div>
            </div>
          </div>
      </section>
      {/* OUR PEOPLE-FIRST APPROACH  */}
      <section data-aos="zoom-in-up">
      <div className="flex flex-col-reverse md:flex-row pt-4 bg-[#2A2A2A] pb-8 ">
      <div className="pt-8 px-4">
        <img className="rounded-lg" src={Image42} alt="" />
      </div>
      <div className="pt-8 px-12 md:w-[50%]">
          <div>
            <span className="text-white font-medium">Our People First Approach</span>
            <h1 className="text-[6vw] text-white md:text-[3vw] font-extrabold font-titleFont">
             We prioritize the well-being{" "}
              and Success of our employees 
            </h1>
          </div>
          <div className="pt-2 font-bodyFont text-white">
            <p>
            At SR Innovations, we hold the belief that our people are our most valuable asset. This is why we prioritize our employees, placing their well-being and success at the forefront of our endeavors
            we recognize the ever-evolving nature of technology and the paramount importance of staying ahead. 
            </p>
            
          </div>
      </div>
      
      </div>
      </section>
      {/* Cards  */}
      <section className="pt-12">
      <div className="block sm:block md:flex lg:flex mb-14 px-4">
          <div
            className="ml-1  md:m-3  mt-6 md:mt-4  w-[90vw]  md:w-[30vw] h-auto md:h-[40vh] p-4 sm:p-7 md:p-6 pt-10  rounded-lg shadow-2xl shadow-blue-100 items-center text-center hover:bg-blue-900 text-gray-500 hover:text-white"
            data-aos="flip-left"
          >
            <img
              src={Quilt}
              alt=""
              className="bg-[#5454D4] rounded-full py-2 px-2  ml-32 w-[15vw] sm:w-[15vw] md:w-[5vw] lg:w-[5.5vw] md:ml-14 lg:ml-32"
            />
            <h1 className="font-bold text-[5vw] sm:text-[5vw] md:text-[2vw] lg:text-[1.5vw] mt-3">
            3345+ Projects Delivered
            </h1>
            <p className="text-[4vw] sm:text-[4vw] md:text-[1.5vw] lg:text-[1vw] mt-2">
            From marketing to development, and IT services, we empower our diverse clientele with top-notch solutions.
            </p>
          </div>
          <div
            className="ml-1 sm:ml-1 md:m-3 lg:m-3 mt-6 sm:mt-6 md:mt-4 lg:mt-4 w-[90vw] sm:w-[90vw] md:w-[30vw] lg:w-[30vw] h-auto md:h-[40vh] p-4 sm:p-7 md:p-6 lg:p-6 pt-10 rounded-lg shadow-2xl shadow-blue-100 items-center text-center hover:bg-blue-900 text-gray-500 hover:text-white"
            data-aos="flip-left"
          >
            <img
              src={DevSkill}
              alt=""
              className="bg-[#5454D4] rounded-full py-2 px-2  ml-32 w-[15vw] sm:w-[15vw] md:w-[5vw] lg:w-[5.5vw] md:ml-14 lg:ml-32"
            />
            <h1 className="font-bold text-[5vw] sm:text-[5vw] md:text-[2vw] lg:text-[1.5vw] mt-3">
            Decades of Expertise
            </h1>
            <p className="text-[4vw] sm:text-[4vw] md:text-[1.5vw] lg:text-[1vw] mt-2">
            With years of industry experience, we've been delivering tailored solutions to businesses of all sizes..
            </p>
          </div>
          <div
            className="ml-1 sm:ml-1 md:m-3 lg:m-3 mt-6 sm:mt-6 md:mt-4 lg:mt-4 w-[90vw] sm:w-[90vw] md:w-[30vw] lg:w-[30vw] h-auto md:h-[40vh] p-4 sm:p-7 md:p-6 lg:p-6 pt-10 rounded-lg shadow-2xl shadow-blue-100 items-center text-center hover:bg-blue-900 text-gray-500  hover:text-white"
            data-aos="flip-left"
          >
            <img
              src={Vision}
              alt=""
              className="bg-[#5454D4] rounded-full py-2 px-2 ml-32 w-[15vw] sm:w-[15vw] md:w-[5vw] lg:w-[5.5vw] md:ml-14 lg:ml-32"
            />
            <h1 className="font-bold text-[5vw] sm:text-[5vw] md:text-[2vw] lg:text-[1.5vw] mt-3">
            Visionary Innovators
            </h1>
            <p className="text-[4vw] sm:text-[4vw] md:text-[1.5vw] lg:text-[1vw] mt-2">
            Comprising experienced professionals, our team is committed to achieving success for our clients..

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

export default About;
