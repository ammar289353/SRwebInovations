import React from "react";
import "aos/dist/aos.css";
// import FooterLogo from "../images/footer-logo.png";
import Navlogo from "../images/SR innovation logo-07.png";
import { CgMail } from "react-icons/cg";
import { FaInstagram, FaPhone } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Footer = () => {
 
  return (
    <section className="bg-[#2A2A2A] overflow-x-hidden">
      <hr />
     
      <div className="flex flex-col md:flex-row w-[100%] gap-10 lg:gap-6 text-white px-4 md:px-24  justify-center pb-8">
      <div className="pt-5 text-white md:w-[35%] 2xl:w-[40%] md:pb-12">
        <div>
          <img
            className="h-24 md:h-32 px-28 md:px-20 "
            src={Navlogo}
            alt=""
          />
          <p className="text-[3vw] font-bodyFont lg:text-[1vw] pt-3 2xl:w-[80%] ">
            We're a cohesive team of tech enthusiasts committed to streamlining
            business operations through the transformative potential of
            technology.
          </p>
         
        </div>
        <div>
          <a href="https://www.instagram.com/thesr_innovations?igsh=azMzamx0b3MybmN6&utm_source=qr">
          <FaInstagram  className="md:text-[#ffff]  pt-3 ml-36 md:ml-0 mt-5 md:mt-0 text-[10vw] md:text-[2.5vw] "/>
          </a>
          </div>
      </div>
      <div className="text-center md:w-[20%] 2xl:w-[20%] md:pb-8 md:pt-12 2xl:px-12 ">
          <h1 className="text-[6vw] lg:text-[2vw] font-bold pb-2 font-titleFont text-left ">Services</h1>
          <ul>
            <li className="text-left 2xl:text-[1vw] font-bodyFont py-1 hover:text-slate-300">
              <Link to="/Website">
              Web Development
              </Link>
              </li>
            
            <li className="text-left  2xl:text-[1vw]  font-bodyFont py-1 hover:text-slate-300">
             <Link to="/Graphic">
             Graphic Design
             </Link>
              </li>
            
            <li className="text-left  2xl:text-[1vw]  font-bodyFont  py-1 hover:text-slate-300">
              <Link to="/DigitalMarketing">
                Digital Marketting
              </Link>
            </li>
            
            {/* <li className="text-left hover:text-slate-300">
             <Link  to="/MobileApp">
             Mobile App Development
             </Link>
            </li> */}
           
            <li className="text-left  2xl:text-[1vw]  font-bodyFont  py-1 hover:text-slate-300">
              <Link to="/VideoAnimation">
              Video Animation
              </Link>
              </li>
            
            <li className="text-left  2xl:text-[1vw]  font-bodyFont  py-1 hover:text-slate-300">
              <Link  to="/SEO">
                SEO
              </Link>
            </li>
            
          </ul>
        </div>
        <div className="text-center  md:w-[20%] 2xl:w-[20%] md:pb-8 md:pt-12">
          <h1 className="text-[6vw] lg:text-[2vw] text-left font-bold pb-5 font-titleFont ">Resources</h1>
          <ul className="font-bodyFont">
            <li className="text-left  2xl:text-[1vw]  py-1 hover:text-slate-300"><Link  to="/About">About Us</Link></li>
            
            <li className="text-left  2xl:text-[1vw]  py-1 hover:text-slate-300"><Link  to="/Services">Services</Link></li>
            
            <li className="text-left  2xl:text-[1vw]  py-1 hover:text-slate-300"><Link  to="/Portfolio">Portfolio</Link></li>
            
          </ul>
        </div>
      
        
        <div>
          <h1 className="text-[6vw] md:w-[25%] 2xl:w-[20%] lg:text-[2vw] font-titleFont font-bold md:pt-12 ">
            Contact
          </h1>
          <div className="gap-2 pt-6 font-bodyFont">
            
            
            <p className="flex py-2 gap-4">
             <CgMail className="text-[#5454D4] text-[6vw] md:text-[2vw]"/> {" "}
              <span className="hover:text-slate-300  2xl:text-[1vw] ">
                <a href="mailto:sr.webinnovations@outlook.com">
                  sr.webinnovations@outlook.com
                </a>
              </span>{" "}
            </p>
            
            
            <p className="flex py-2 gap-5">
            <FaPhone className="text-[#5454D4] text-[5vw] md:text-[1.5vw]" />{" "}
              <span className="hover:text-slate-300  2xl:text-[1vw] ">+44 7908 147313</span>{" "}
            </p>
            
            <p className="flex py-2 px-10 2xl:px-12">
              <span className="hover:text-slate-300  2xl:text-[1vw] ">+44 7951 793541</span>{" "}
            </p>
            <p className="flex py-2 gap-5">
            <IoLocationOutline className="text-[#5454D4] text-[6vw] md:text-[2vw]" />{" "}
              <span className="hover:text-slate-300 2xl:text-[1vw]">
                <a href="https://www.google.com/maps/search/?api=1&query=150+St+Michael’s+Hill,+Bristol+BS2+8DA,+United+Kingdom">
                  150 St Michael’s Hill, Bristol <br /> BS2 8DA, United Kingdom
                </a>
              </span>{" "}
            </p>

          </div>
        </div>
      </div>

      <hr />
      <div className="py-3 pl-12 text-white font-bodyFont text-[3vw] md:text-[1vw] ">
        <p>Copyright© 2020, SR Innovations All Rights Reserved</p>
      </div>
    </section>
  );
};

export default Footer;
