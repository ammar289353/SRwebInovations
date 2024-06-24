import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoMenu } from "react-icons/io5";
import Navlogo from "../images/512.png";
import "./Navbar.css";
import { FaInstagram, FaSearch } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleServices = () => {
    setServicesOpen(!servicesOpen);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  return (
    <div className="shadow-md w-full fixed z-50 top-0 left-0 font-titleFont ">
      <div className="md:flex items-center h-[15vw] sm:h-auto bg-white md:px-20 px-7">
        <div
          onClick={toggleMenu}
          className="text-[8vw] sm:text-4xl absolute cursor-pointer md:hidden pt-4 sm:pt-6"
        >
          <IoMenu name={menuOpen ? "close" : "menu"} />
        </div>
        <div className="flex">
          <Link to="/">
            <img
              className="h-[14vw] sm:h-[8w] md:h-[6vw] pl-[12vw] sm:pl-[10vw] md:pl-0 pt-3 sm:py-2"
              src={Navlogo}
              alt=""
            />
          </Link>
        </div>
        <ul
          className={`md:flex text-left items-start md:pb-2 pb-8 absolute md:static bg-white h-screen md:h-auto top-0 md:z-auto z-[-1] left-0 w-full md:w-auto
                    md:pl-0 pl-9 transition-all duration-500 ease-in pt-12 sm:pt-20 md:pt-5 ${
                      menuOpen ? "top-6" : "top-[-1100px]"
                    }`}
        >
          <li onClick={() => setMenuOpen(false)}>
            <Link
              to="/Home"
              className="nav text-[#515151] text-[4vw] lg:text-[1.5vw] pt-2  pr-6 ml-0  lg:ml-80  font-medium hover:text-[#5454D4]"
            >
              Home
            </Link>
          </li>
          <li className="relative flex">
            <Link
              onClick={() => setMenuOpen(false)}
              to="/Services"
              className="nav flex text-[#515151] text-[4vw] lg:text-[1.5vw] pr-1 font-medium hover:text-[#5454D4] cursor-pointer"
            >
              Services
            </Link>
            <span>
              <RiArrowDropDownLine
                onClick={toggleServices}
                className="ml-48 md:ml-0 text-[6.5vw] lg:text-[2.5vw] mr-4"
              />
            </span>
            {servicesOpen && (
              <div
                className="absolute cursor-pointer w-[72vw] lg:w-[22vw] rounded-lg bg-white shadow-md p-2 pt-2 lg:pt-8 mt-7"
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  key="1"
                  to="/Graphic"
                  className="block pl-3 py-2 text-[#05185A] text-[3.2vw] lg:text-[1.2vw] hover:text-white hover:bg-[#05185A]"
                  onClick={() => setMenuOpen(false)}
                >
                  Graphic Design
                </Link>

                <Link
                  key="2"
                  to="/Website"
                  className="block pl-3 py-2 text-[#05185A] text-[3.2vw] lg:text-[1.2vw] hover:text-white hover:bg-[#05185A]"
                  onClick={() => setMenuOpen(false)}
                >
                  Website Development
                </Link>

                {/* <Link
                  key="3"
                  to="/MobileApp"
                  className="block pl-3 py-2 text-[#05185A] text-[3.2vw] lg:text-[1.2vw] hover:text-white hover:bg-[#05185A]"
                  onClick={() => setMenuOpen(false)}
                >
                  Mobile App Development
                </Link> */}

                <Link
                  key="5"
                  to="/VideoAnimation"
                  className="block pl-3 py-2 text-[#05185A] text-[3.2vw] lg:text-[1.2vw] hover:text-white hover:bg-[#05185A]"
                  onClick={() => setMenuOpen(false)}
                >
                  Video Animation
                </Link>

                <Link
                  key="6"
                  to="/DigitalMarketing"
                  className="block pl-3 py-2 text-[#05185A] text-[3.2vw] lg:text-[1.2vw] hover:text-white hover:bg-[#05185A]"
                  onClick={() => setMenuOpen(false)}
                >
                  Digital Marketing
                </Link>

                <Link
                  key="7"
                  to="/SEO"
                  className="block pl-3 py-2 text-[#05185A] text-[3.2vw] lg:text-[1.2vw] hover:text-white hover:bg-[#05185A]"
                  onClick={() => setMenuOpen(false)}
                >
                  Professional SEO Services
                </Link>
              </div>
            )}
          </li>
          <li
            className={`md:mt-0 ${servicesOpen ? "mt-56" : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            <Link
              to="/Portfolio"
              className="nav text-[#515151] text-[4vw] lg:text-[1.5vw] pt-2 pr-6 font-medium hover:text-[#5454D4]"
            >
              Portfolio
            </Link>
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <Link
              to="/About"
              className="nav text-[#515151] text-[4vw] lg:text-[1.5vw] pt-2 pr-6 font-medium hover:text-[#5454D4]"
            >
              About Us
            </Link>
          </li>

          <li onClick={() => setMenuOpen(false)}>
          <a href="https://www.instagram.com/thesrinnovations?igsh=bHo4bDZrY3NvZWY3&utm_source=qr">
          <FaInstagram  className="md:text-[#515151] hidden md:block pt-1 pl-3 text-[2.5vw] md:ml-28"/>
          </a>
          </li>

          {/* <li  >
            <div className="relative group">
            <input
                  type="text"
                  placeholder="Search..."
                  className="py-1 px-2 shadow-md font-[14px] w-0 transition-all duration-300 group-hover:z-[70] group-hover:w-[220px] border border-[#5454D4] rounded-md outline-none"
                />
            <FaSearch onClick={toggleSearch} className={`hidden md:block absolute right-3 top-[40%] translate-y-[-40%] font-[18px] md:text-[#515151] cursor-pointer  pl-3 text-[2.5vw] ${searchOpen ? "hidden" : ""}`}/>
              
              </div>
          </li> */}
         
         
          <li onClick={() => setMenuOpen(false)}>
            <Link
              to="/Contact"
              className="md:text-[#515151]  pt-2 pl-3  font-medium"
            >
              <button className=" text-xl md:text-[1.5vw] my-2 md:my-0 px-24 lg:px-4 py-1  text-[#5454D4] hover:text-white hover:bg-[#5454D4] border border-[#5454D4] rounded-md ">
                Contact Us
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
