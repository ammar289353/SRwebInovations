import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import Navlogo from '../images/nav-logo.png'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
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
            <li className="md:ml-6 ml-2 text-xl md:text-[1.5vw] my-2 md:my-0">
            Services
            </li>
          </Link>
          <Link
            to="/MasterClasses"
            className="md:text-[#515151]  pt-2 text-white font-medium hover:text-[#009CDE]"
          >
            <li className="md:ml-6 ml-2 text-xl md:text-[1.5vw] my-2 md:my-0">
            Portfolio
            </li>
          </Link>
          <Link
            to="/MasterClasses"
            className="md:text-[#515151]  pt-2 text-white font-medium hover:text-[#009CDE]"
          >
            <li className="md:ml-6 ml-2 text-xl md:text-[1.5vw] my-2 md:my-0">
           Contact Us
            </li>
          </Link>
          <Link
            to="/MasterClasses"
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