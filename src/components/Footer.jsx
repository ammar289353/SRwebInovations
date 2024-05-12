import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import FooterLogo from "../images/footer-logo.png";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  return (
    <section className="bg-[#0B4790] " data-aos="zoom-in-left">
      <hr />
      <div className="pt-5 text-white pb-12">
        <div className="text-center">
          <img
            className="h-24 lg:h-30 pl-32 lg:px-[46vw] "
            src={FooterLogo}
            alt=""
          />
          <p className=" text-[3vw]  md:px-12 lg:text-[1vw] pt-3 ">
            We're a cohesive team of tech enthusiasts committed to streamlining
            business operations through the transformative potential of
            technology.
          </p>
        </div>
      </div>
      <div className=" block md:flex gap-10 lg:gap-20 text-white px-4  justify-center pb-8">
        <div className="text-center pb-8">
          <h1 className="text-[4vw] lg:text-[2vw] font-bold pb-5 ">Company</h1>
          <ul>
            <li className="text-left hover:text-slate-300">About Us</li>
            <hr />
            <li className="text-left hover:text-slate-300">Services</li>
            <hr />
            <li className="text-left hover:text-slate-300">Portfolio</li>
            <hr />
          </ul>
        </div>
        <div className="text-center pb-8">
          <h1 className="text-[4vw] lg:text-[2vw] font-bold pb-2 ">Services</h1>
          <ul>
            <li className="text-left hover:text-slate-300">Web Development</li>
            <hr />
            <li className="text-left hover:text-slate-300">Graphic Design</li>
            <hr />
            <li className="text-left hover:text-slate-300">
              Digital Marketting
            </li>
            <hr />
            <li className="text-left hover:text-slate-300">
              Mobile App Development
            </li>
            <hr />
            <li className="text-left hover:text-slate-300">
              Video Animation
            </li>
            <hr />
            <li className="text-left hover:text-slate-300">
              SEO
            </li>
            <hr />
          </ul>
        </div>
        <div>
          <h1 className="text-[4vw] text-center lg:text-[2vw] font-bold ">Lets Connect</h1>
          <div className="gap-2 pt-6 ">
            <p>Address: <span>Mashriq Center, Gulshan-e-iqbal,<br /> Block 14,  Shah Suleman Road, Karachi Pakistan</span> </p>
            <hr />
            <p>Email: <span className="hover:text-slate-300">info@techigems.pk</span> </p>
            <hr />
            <p>Phone: <span className="hover:text-slate-300">+44 7903 147313</span> </p>
            <hr />
            
          </div>
        </div>
      </div>

      <hr />
      <div className="py-3 px-3 text-white">
        <p>© 2024, SR Innovations All Rights Reserved</p>
      </div>
    </section>
  );
};

export default Footer;
