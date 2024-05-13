import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import FooterLogo from "../images/footer-logo.png";
import { Link } from "react-router-dom";

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
            <li className="text-left hover:text-slate-300"><Link  to="/About">About Us</Link></li>
            <hr />
            <li className="text-left hover:text-slate-300"><Link  to="/Services">Services</Link></li>
            <hr />
            <li className="text-left hover:text-slate-300"><Link  to="/Portfolio">Portfolio</Link></li>
            <hr />
          </ul>
        </div>
        <div className="text-center pb-8">
          <h1 className="text-[4vw] lg:text-[2vw] font-bold pb-2 ">Services</h1>
          <ul>
            <li className="text-left hover:text-slate-300">
              <Link to="/Website">
              Web Development
              </Link>
              </li>
            <hr />
            <li className="text-left hover:text-slate-300">
             <Link to="/Graphic">
             Graphic Design
             </Link>
              </li>
            <hr />
            <li className="text-left hover:text-slate-300">
              <Link to="/DigitalMarketing">
                Digital Marketting
              </Link>
            </li>
            <hr />
            <li className="text-left hover:text-slate-300">
             <Link  to="/MobileApp">
             Mobile App Development
             </Link>
            </li>
            <hr />
            <li className="text-left hover:text-slate-300">
              <Link to="/VideoAnimation">
              Video Animation
              </Link>
              </li>
            <hr />
            <li className="text-left hover:text-slate-300">
              <Link  to="/SEO">
                SEO
              </Link>
            </li>
            <hr />
          </ul>
        </div>
        <div>
          <h1 className="text-[4vw] text-center lg:text-[2vw] font-bold ">
            Lets Connect
          </h1>
          <div className="gap-2 pt-6 ">
            <p>
              Address:{" "}
              <span className="hover:text-slate-300">
                <a href="https://www.google.com/maps/search/?api=1&query=150+St+Michael’s+Hill,+Bristol+BS2+8DA,+United+Kingdom">
                  150 St Michael’s Hill, Bristol <br /> BS2 8DA, United Kingdom
                </a>
              </span>{" "}
            </p>
            <hr />
            <p>
              Email:{" "}
              <span className="hover:text-slate-300">
                <a href="mailto:sr.webinnovations@outlook.com">
                  sr.webinnovations@outlook.com
                </a>
              </span>{" "}
            </p>
            <hr />
            <p>
              Phone:{" "}
              <span className="hover:text-slate-300">+44 7903 147313</span>{" "}
            </p>
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
