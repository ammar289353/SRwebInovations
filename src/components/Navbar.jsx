import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import Navlogo from '../images/nav-logo.png'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false); // Add state for services dropdown

    const toggleServices = () => {
        setServicesOpen(!servicesOpen);
    };
  return (
    <div className="shadow-md w-full fixed  z-50 top-0 left-0">
        <div className="md:flex items-center h-[15vw] sm:h-auto justify-between bg-white md:px-20 px-7">
        <div
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-[8vw] sm:text-4xl absolute cursor-pointer md:hidden pt-4 sm:pt-6 "
        >
          <IoMenu name={menuOpen ? "close" : "menu"} />
        </div>
        <div className="flex">
          <Link to="/">
            <img
              className="h-[12vw] sm:h-[8w] md:h-[6vw] lg:h-[4vw] pl-[10vw] sm:pl-[10vw] md:pl-0 pt-3 sm:py-2 "
              src={Navlogo}
              alt=""
            />
          </Link>
        </div>
        <ul
          className={`md:flex text-left items-start md:pb-6 pb-8 absolute md:static md:bg-white bg-[#2B2B2B] h-screen md:h-auto top-0 md:z-auto z-[-1] left-0 w-full md:w-auto
                    md:pl-0 pl-9 transition-all duration-500 ease-in pt-12 sm:pt-20 md:pt-4 ${
                        menuOpen ? "top-6" : "top-[-1100px]"
                    }`}
        >
          <Link
            to="/Home"
            className="md:text-[#515151] pt-2 text-white font-medium hover:text-[#009CDE]"
          >
            <li className="md:ml-6 ml-2 text-xl md:text-[1.5vw]  my-2 md:my-0">
              Home
            </li>
          </Link>
          <Link
            to="/About"
            className="md:text-[#515151]  pt-2 text-white font-medium hover:text-[#009CDE]"
          >
            <li className="md:ml-6 ml-2 text-xl md:text-[1.5vw] my-2 md:my-0">
            About Us
            </li>
          </Link>
          <Link
            to="/Services"
            className="md:text-[#515151]  pt-2 text-white font-medium hover:text-[#009CDE]"
          >
          <li
                        onMouseEnter={toggleServices}
                        onMouseLeave={toggleServices}
                        className="md:ml-6 ml-2 text-xl md:text-[1.5vw] my-2 md:my-0 relative"
                    >
                      Services
                        {servicesOpen && (
                            <div
                            className="absolut cursor-pointer w-[22vw] rounded-lg bg-white shadow-md p-2 mt-5">
                                <Link to="/Graphic" className="block pl-3 py-2 text-[#05185A] text-[1.2vw] hover:text-white hover:bg-[#05185A]">Graphic Design</Link>
                                <Link to="/Service2" className="block pl-3 py-2 text-[#05185A] text-[1.2vw] hover:text-white hover:bg-[#05185A]">Website Development</Link>
                                <Link to="/Service3" className="block pl-3 py-2 text-[#05185A] text-[1.2vw] hover:text-white hover:bg-[#05185A]">Domain & Hosting Solutions</Link>
                                <Link to="/Service3" className="block pl-3 py-2 text-[#05185A] text-[1.2vw] hover:text-white hover:bg-[#05185A]">Mobile App Development</Link>
                                <Link to="/Service3" className="block pl-3 py-2 text-[#05185A] text-[1.2vw] hover:text-white hover:bg-[#05185A]">Video Animation</Link>
                                <Link to="/Service3" className="block pl-3 py-2 text-[#05185A] text-[1.2vw] hover:text-white hover:bg-[#05185A]">Digital Marketing</Link>
                                <Link to="/Service3" className="block pl-3 py-2 text-[#05185A] text-[1.2vw] hover:text-white hover:bg-[#05185A]">Professional SEO Services</Link>
                                <Link to="/Service3" className="block pl-3 py-2 text-[#05185A] text-[1.2vw] hover:text-white hover:bg-[#05185A]">Managed IT Services</Link>
                                <Link to="/Service3" className="block pl-3 py-2 text-[#05185A] text-[1.2vw] hover:text-white hover:bg-[#05185A]">BPO Solutions</Link>
                            </div>
                        )}
                    </li>
            </Link >
  
          <Link
            to="/Portfolio"
            className="md:text-[#515151]  pt-2 text-white font-medium hover:text-[#009CDE]"
          >
            <li className="md:ml-6 ml-2 text-xl md:text-[1.5vw] my-2 md:my-0">
            Portfolio
            </li>
          </Link>
          <Link
            to="/Contact"
            className="md:text-[#515151]  pt-2 text-white font-medium hover:text-[#009CDE]"
          >
            <li className="md:ml-6 ml-2 text-xl md:text-[1.5vw] my-2 md:my-0">
           Contact Us
            </li>
          </Link>
          <Link
            to="/Contact"
            className="md:text-[#515151]  pt-2 text-white font-medium hover:text-[#009CDE]"
          >
            <button className='md:ml-6 ml-2 text-xl md:text-[1.5vw] my-2 md:my-0 px-4 py-1  bg-[#093D84] text-white rounded-2xl '>
                Get Started
            </button>
          </Link>
          
        </ul>
        </div>
    </div>

  )
}

export default Navbar