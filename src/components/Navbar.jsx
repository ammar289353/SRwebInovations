import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import Navlogo from "../images/nav-logo.png";
import "./Navbar.css"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false); // Add state for services dropdown

  const toggleServices = (action) => {
    if (action === 'open') {
      setServicesOpen(true);
    } else if (action === 'close') {
      setTimeout(() => {
        setServicesOpen(false);
      }, 100); 
    }
  };

  return (
    <div className="shadow-md w-full fixed z-50 top-0 left-0 ">
      <div className="md:flex items-center h-[15vw] sm:h-auto justify-between bg-white md:px-20 px-7">
        <div
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-[8vw] sm:text-4xl absolute cursor-pointer md:hidden pt-4 sm:pt-6"
        >
          <IoMenu name={menuOpen ? "close" : "menu"} />
        </div>
        <div className="flex">
          <Link to="/">
            <img
              className="h-[14vw] sm:h-[8w] md:h-[6vw] lg:h-[6vw] pl-[12vw] sm:pl-[10vw] md:pl-0 pt-3 sm:py-2"
              src={Navlogo}
              alt=""
            />
          </Link>
        </div>
        <ul
          className={`md:flex text-left items-start  md:pb-2 pb-8 absolute md:static md:bg-white bg-[#2B2B2B] h-screen md:h-auto top-0 md:z-auto z-[-1] left-0 w-full md:w-auto
                    md:pl-0 pl-9 transition-all duration-500 ease-in pt-12 sm:pt-20 md:pt-4 ${
                      menuOpen ? "top-6" : "top-[-1100px]"
                    }`}
        >
          <li onClick={()=>setMenuOpen(false)}>
            <Link
              to="/Home"
              className="nav md:text-[#515151] text-[4vw] lg:text-[1.5vw] pt-2  pr-6 text-white font-medium hover:text-[#65c4cd]"
            >
              Home
            </Link>
          </li>
          <li onClick={()=>setMenuOpen(false)}>
            <Link
              to="/About"
              className="nav md:text-[#515151] text-[4vw] lg:text-[1.5vw] pt-2 pr-6 text-white font-medium hover:text-[#65c4cd]"
            >
              About Us
            </Link>
          </li>
          <li onClick={()=>setMenuOpen(false)} onMouseEnter={() => toggleServices('open')}>
            <Link
              to="/Services"
              className="nav md:text-[#515151] pt-2 text-[4vw] lg:text-[1.5vw] pr-6 text-white font-medium hover:text-[#65c4cd]"
            >
              Services
            </Link>
            {servicesOpen && (
              <div className="absolute cursor-pointer w-[22vw] rounded-lg bg-white shadow-md p-2 pt-8 -z-10"
                onMouseLeave={() => toggleServices('close')}>
                <Link
                  key="1"
                  to="/Graphic"
                  className="block pl-3 py-2 text-[#05185A] text-[1.2vw] hover:text-white hover:bg-[#05185A]"
                >
                  Graphic Design
                </Link>
                {/* Add key prop to each Link */}
                <Link
                  key="2"
                  to="/Website"
                  className="block pl-3 py-2 text-[#05185A] text-[1.2vw] hover:text-white hover:bg-[#05185A]"
                >
                  Website Development
                </Link>
                <Link
                  key="3"
                  to="/Service3"
                  className="block pl-3 py-2 text-[#05185A] text-[1.2vw] hover:text-white hover:bg-[#05185A]"
                >
                  Domain & Hosting Solutions
                </Link>
                <Link
                  key="4"
                  to="/Service3"
                  className="block pl-3 py-2 text-[#05185A] text-[1.2vw] hover:text-white hover:bg-[#05185A]"
                >
                  Mobile App Development
                </Link>
            
                <Link
                  key="5"
                  to="/Service3"
                  className="block pl-3 py-2 text-[#05185A] text-[1.2vw] hover:text-white hover:bg-[#05185A]"
                >
                  Video Animation
                </Link>
                
                <Link
                  key="6"
                  to="/Service3"
                  className="block pl-3 py-2 text-[#05185A] text-[1.2vw] hover:text-white hover:bg-[#05185A]"
                >
                  Digital Marketing
                </Link>
                
                <Link
                  key="7"
                  to="/Service3"
                  className="block pl-3 py-2 text-[#05185A] text-[1.2vw] hover:text-white hover:bg-[#05185A]"
                >
                  Professional SEO Services
                </Link>

                <Link
                  key="8"
                  to="/Service3"
                  className="block pl-3 py-2 text-[#05185A] text-[1.2vw] hover:text-white hover:bg-[#05185A]"
                >
                  Managed IT Services
                </Link>

                <Link
                  key="9"
                  to="/Service3"
                  className="block pl-3 py-2 text-[#05185A] text-[1.2vw] hover:text-white hover:bg-[#05185A]"
                >
                  BPO Solutions
                </Link>
              </div>
            )}
          </li>
          <li onClick={()=>setMenuOpen(false)}>
            <Link
              to="/Portfolio"
              className="nav md:text-[#515151] text-[4vw] lg:text-[1.5vw] pt-2 pr-6 text-white font-medium hover:text-[#65c4cd]"
            >
              Portfolio
            </Link>
          </li>
          <li onClick={()=>setMenuOpen(false)}>
            <Link
              to="/Contact"
              className="nav md:text-[#515151] text-[4vw] lg:text-[1.5vw] pt-2 pr-6 text-white font-medium hover:text-[#65c4cd]"
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              to="/Contact"
              className="md:text-[#515151]  pt-2 pl-3 text-white font-medium hover:text-[#009CDE]"
            >
              <button className="md:ml-6 text-xl md:text-[1.5vw] my-2 md:my-0 px-24 lg:px-4 py-1  bg-[#093D84] text-white rounded-2xl ">
                Get Started
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
