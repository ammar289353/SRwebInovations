import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "../App.css";
import Hero from "../images/HeroLaptop.png";
import SR from "../videos/SR-Innovations.mp4"
import { FaCheck } from 'react-icons/fa';



//  Icons
import { MdArrowOutward } from "react-icons/md";
import { FaCode } from "react-icons/fa6";
import { PiPaintBrushLight } from "react-icons/pi";
import { TfiVideoClapper } from "react-icons/tfi";
import { RxSpeakerLoud } from "react-icons/rx";
import { IoMdSearch } from "react-icons/io";
import Business from "../images/Business Building.webp";
import Organization from "../images/Organization.webp";
import Rocket from "../images/Rocket.png";
// Logo Images
import logo1 from "../images/logo1.webp";
import logo21 from "../images/massagetherapy.jpg";
import logo5 from "../images/logo5.webp";
import logo8 from "../images/logo8.jpeg";
import logo11 from "../images/logo11.jpeg";
import logo12 from "../images/logo12.webp";
// Website Images
import Web1 from "../images/web1.webp";
import Web2 from "../images/web2.webp";
import Web3 from "../images/web3.png";
import Web4 from "../images/web4.webp";
import Web5 from "../images/web5.webp";
import Web6 from "../images/web6.webp";
// DMM Images
import DMM7 from "../images/DMMPortfolio-7.jpg"
import DMM8 from "../images/DMMPortfolio-8.jpg"
import DMM3 from "../images/DMMPortfolio-3.webp"
import DMM4 from "../images/DMMPortfolio-4.webp"
import DMM5 from "../images/DMMPortfolio-5.webp"
import DMM6 from "../images/DMMPortfolio-6.jpg"
// Video
import video1 from "../videos/VideoAnimation1.mp4"
// Let's do it
import Image1 from "../images/Image 1.png";
import Image2 from "../images/Image 2.png";
import Image3 from "../images/Image 3.png";

import ContactForm from "../components/contactForm";
import Testimonial from "../components/Testimonial";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  const [category, setCategory] = useState("DMM");

  const handleCategoryChange = (category) => {
    setCategory(category);
  };
  const cardsData = [
    {
      icon: (
        <PiPaintBrushLight className="text-[#ddbf45] hover:text-white hover:bg-[#b0a57a] bg-[#5b5025] rounded-full py-2" />
      ),
      title: "Graphic Design",
      description:"We create compelling graphic designs that capture your brand's essence and engage your audience, from logos to digital graphics. Let us help you make a lasting impression with high-quality, impactful visuals.",
      link: "/Graphic",
    },
    {
      icon: (
        <FaCode className="text-[#5454D4] hover:text-white hover:bg-[#5858bc] bg-[#b2b2d9] rounded-full py-2" />
      ),
      title: "Webiste Development",
      description:
        "We craft stunning, responsive websites that deliver exceptional user experiences, driving engagement and conversions. Let us transform your ideas into captivating digital masterpieces that achieve your business goals.",
      link: "/Website",
    },
    {
      icon: (
        <TfiVideoClapper className="text-[#ddbf45] hover:text-white hover:bg-[#b0a57a] bg-[#5b5025] rounded-full py-2" />
      ),
      title: "Video Animation",
      description:
        "We create captivating video animations that bring your stories to life and engage your audience. From explainer videos to animated logos, our high-quality animations are tailored to your needs, enhancing your marketing strategy.",
      link: "/VideoAnimation",
    },
    {
      icon: (
        <RxSpeakerLoud className="text-[#5454D4] hover:text-white hover:bg-[#5858bc] bg-[#b2b2d9] rounded-full py-2" />
      ),
      title: "Digital Marketing",
      description:
        "We propel business growth through comprehensive digital marketing services. From SEO and PPC to social media and email campaigns, we tailor strategies to boost online visibility, engage audiences, and drive conversions, ensuring measurable results that align with your goals.",
      link: "/DigitalMarketing",
    },
    {
      icon: (
        <IoMdSearch className="text-[#F04037] hover:text-white hover:bg-[#F04037] bg-[#a57472] rounded-full py-2" />
      ),
      title: "SEO",
      description:
        "we elevate your online presence through expert SEO services. Specializing in optimizing websites for higher rankings, organic traffic, and visibility, we employ advanced strategies including keyword research, on-page/off-page optimization, and technical SEO.",
      link: "/SEO",
    },
  ];

  return (
    <>
      {/* Hero  */}

      <section className="flex flex-col-reverse md:flex-row w-[100%] bg-white h-auto md:mt-28  pb-6 md:pb-24 overflow-hidden">
        <div className="md:w-[50%]" data-aos="fade-right">
          <h1 className="text-[5vw] px-6 md:px-32 font-titleFont text-left text-black font-extrabold md:text-[3vw] 
          pt-16 2xl:pt-48 ">
            Build Your Awesome Platform
          </h1>
          <p className="px-6 md:pl-32 pt-3 md:pt-5 2xl:text-[1.3vw] font-bodyFont">
          At SR Innovations, we specialize in helping businesses overcome their unique challenges with efficiency and creativity. Our technical expertise and innovative approach enable us to deliver custom website design, web development, SEO, logo design, and digital marketing solutions tailored for high growth.
          </p>
          <Link to="/Services">
            <div className="px-6 md:px-32 pt-3 md:pt-4">
              <button className="flex bg-[#5454D4] text-[4vw] md:text-[1.5vw] text-white rounded-2xl px-6 py-2 md:py-1 mt-4 hover:bg-white hover:text-[#5454D4] border border-[#5454D4]  ">
                Our services{" "}
                <MdArrowOutward className="text-[6vw] md:text-[2vw] md:pt-2" />
              </button>
            </div>
          </Link>
        </div>
        <div className="md:w-[50%] mt-20 md:mt-0 2xl:mt-12 " data-aos="fade-left">
          <img src={Hero} alt="" />
        </div>
      </section>

      {/* About Us */}

      <section className="block md:flex px-6 pb-12 w-[100%]">
               <div className="w-[100%] md:w-[50%]" >
                   <video controls autoPlay muted controlsList="nodownload">
                      <source src={SR} type="video/mp4" />
                   </video>
               </div>
               <div className="w-[100%] md:w-[50%] px-2 pt-6 md:pt-0 md:px-6 ">
                    <p className="text-[#5454D4] font-bold ">ABOUT US</p>
                    <h1 className="font-bold text-[6vw] md:text-[3vw] font-titleFont ">Empowering Projects <span className="text-[#5454D4]">Thrive</span>.</h1>
                    <p className="font-bodyFont pt-3 text-[4vw] md:text-[1.5vw] " >Since 2020, SR Innovations has delivered innovative solutions, becoming a trusted leader in  equipping  businesses with pioneering technology solutions.</p>
                    <p className="flex pt-4 md:pt-2 gap-2 md:gap-4 font-bodyFont text-[4vw] md:text-[1.5vw]" >
                      <FaCheck className="bg-[#5454D4] rounded-full text-white px-2" size={24} />
                       A focus on tackling bussiness challenges
                    </p>
                    <p className="flex pt-4 md:pt-2 gap-2 md:gap-4 font-bodyFont text-[4vw] md:text-[1.5vw] " >
                      <FaCheck className="bg-[#5454D4] rounded-full text-white px-2" size={24} />
                       At the forefront of development
                    </p>
                    <p className="flex pt-4 md:pt-2 gap-2 md:gap-4 font-bodyFont text-[4vw] md:text-[1.5vw]" >
                      <FaCheck className="bg-[#5454D4] rounded-full text-white px-2" size={24} />
                       Powered by innovation
                    </p>

                    <Link to="/About">
                          <div className="pt-3 md:pt-2">
                            <button className="flex bg-[#5454D4] text-[4vw] lg:text-[1.5vw] text-white rounded-2xl px-6 py-2 md:py-1 mt-2 hover:bg-white hover:text-[#5454D4] border border-[#5454D4] ">
                                 Learn More{" "}
                              <MdArrowOutward className="text-[6vw] md:text-[2vw] md:pt-2" />
                            </button>
                          </div>
                    </Link>
               </div>
      </section>

      {/* OUR WORK PORTFOLIO */}
      <section className="pb-8 overflow-hidden" data-aos="zoom-in-up">
        <div className="md:flex">
          <h1 className="text-[6vw] md:text-[3vw] pl-3 font-titleFont font-extrabold">
            Our Awesome Work Portfolio
          </h1>
          <div className="block sm:block md:flex lg:flex m-auto pb-4 pt-4 font-bold font-titleFont"> 
            <button
              onClick={() => handleCategoryChange("DMM")}
              className=" rounded-full px-3 sm:pl-3 sm:pr-3 md:pl-6 md:pr-6 lg:px-2 hover:text-[#5454D4]"
            >
              Digital Markertting
            </button>
            <button
              onClick={() => handleCategoryChange("website")}
              className=" rounded-full px-4 mb-1  sm:pl-3 sm:pr-3 md:pl-6 md:pr-6 lg:px-2  hover:text-[#5c5cc0]"
            >
              WEB Development
            </button>
            {/* <button
              onClick={() => handleCategoryChange("packaging")}
              className=" rounded-full px-3 sm:pl-3 sm:pr-3 md:pl-6 md:pr-6 lg:px-0 hover:text-[#5454D4]"
            >
              UI/UX
            </button> */}
            <button
              onClick={() => handleCategoryChange("logo")}
              className="rounded-full px-4 mb-1 md:pl-6 md:pr-6 lg:px-2  hover:text-[#5454D4]"
            >
              LOGO DESIGN
            </button>
            <button
              onClick={() => handleCategoryChange("video")}
              className=" rounded-full px-4 mb-1 sm:pl-1 sm:pr-1 md:pl-6 md:pr-6 lg:px-2  hover:text-[#5454D4]"
            >
              Video Animation
            </button>
          </div>
        </div>
        <div className="block sm:block md:grid lg:grid grid-cols-3 pl-6 justify-between mt-5">
          
        {category === "logo" && (
            <>
              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={logo1}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
              </div>

              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={logo21}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
              </div>

             
            
              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={logo5}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
              </div>
              
              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={logo8}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
              </div>
  
              
              
              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={logo11}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
              </div>
              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={logo12}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
              </div>
            </>
          )}

          {category === "website" && (
            <>
            <div className="relative border rounded-lg w-[90vw] h-auto  md:w-[29vw] mb-10">
                <img
                  src={Web1}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
              </div>
            <div className="relative border rounded-lg w-[90vw] h-auto  md:w-[29vw] mb-10">
                <img
                  src={Web2}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
              </div>
            <div className="relative border rounded-lg w-[90vw] h-auto  md:w-[29vw] mb-10">
                <img
                  src={Web3}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
              </div>
            <div className="relative border rounded-lg w-[90vw] h-auto  md:w-[29vw] mb-10">
                <img
                  src={Web4}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
              </div>
            <div className="relative border rounded-lg w-[90vw] h-auto  md:w-[29vw] mb-10">
                <img
                  src={Web5}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
              </div>
            <div className="relative border rounded-lg w-[90vw] h-auto  md:w-[29vw] mb-10">
                <img
                  src={Web6}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
              </div>

              
            </>
          )}
          {category === "video" && (
            <>
            <div className="relative border rounded-lg w-[90vw] h-[50vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[15vw] lg:w-[29vw] lg:h-[15vw] mb-10">
                <video controls controlsList="nodownload">
                  <source  src={video1} type="video/mp4" />
                </video>
              </div>  
            </>
          )}

          {category === "DMM" && (
            <>
            <div className="relative border rounded-lg w-[90vw] h-auto  md:w-[29vw] mb-10">
                <img
                  src={DMM7}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
              </div>
            <div className="relative border rounded-lg w-[90vw] h-auto  md:w-[29vw] mb-10">
                <img
                  src={DMM8}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
              </div>
            <div className="relative border rounded-lg w-[90vw] h-auto  md:w-[29vw] mb-10">
                <img
                  src={DMM3}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
              </div>
            <div className="relative border rounded-lg w-[90vw] h-auto  md:w-[29vw] mb-10">
                <img
                  src={DMM4}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
              </div>
            <div className="relative border rounded-lg w-[90vw] h-auto  md:w-[29vw] mb-10">
                <img
                  src={DMM5}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
              </div>
            <div className="relative border rounded-lg w-[90vw] h-auto  md:w-[29vw] mb-10">
                <img
                  src={DMM6}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
              </div>

              
            </>
          )}
          
        </div>
            
        <Link to="/Portfolio">
          <div className="pl-24  md:px-[40vw]">
            <button className="flex bg-[#5454D4] text-[4vw] lg:text-[1.5vw] text-white rounded-2xl px-6 py-2 md:py-1 mt-4 hover:bg-white hover:text-[#5454D4] border border-[#5454D4] ">
              View All Portfolio{" "}
              <MdArrowOutward className="text-[6vw] md:text-[2vw] md:pt-2" />
            </button>
          </div>
        </Link>
      </section>

      {/* Services */}

      <section className="pb-20 bg-[#2A2A2A] overflow-x-hidden">
        <div className="w-[93vw] m-auto pt-[5vw]" data-aos="fade-down">
          <h1 className="text-center text-white text-[6vw] md:text-[3vw] font-bold font-titleFont">
            Bridging <span className="text-[#5454D4]">Technology</span> <br />{" "}
            and Business.
          </h1>
        </div>
        <div
          className="item-center px-4 sm:m-auto sm:ml-20 md:ml-0 ml-3 lg:ml-0 md:px-10 py-2 pt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-5 lg:gap-8"
          data-aos="zoom-in-up"
        >
          {cardsData.map((service, index) => (
            <div
              key={index}
              onClick={() => {
                window.location.href = service.link;
              }}
              className="text-white pb-2 sm:w-[70vw] md:w-[43vw] lg:w-[30vw] md:h-auto lg:h-auto"
            >
              <div className="pt-12 text-white flex justify-center">
                <div className="text-[12vw] md:text-[4vw] lg:text-[3vw]">
                  {service.icon}
                </div>
              </div>
              <div>
                <h1 className=" text-center font-bold text-[4vw] md:text-[3vw] lg:text-[2vw] pt-3 ">
                  {service.title}
                </h1>
                <p className="text-[3vw] pt-3 sm:text-[2vw] md:text-[2vw] lg:text-[1vw] px-12 ">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Let's do it  */}
      <section className="h-auto pb-6 px-6 lg:px-24 overflow-x-hidden" data-aos="zoom-in-up">
        <div className="pt-8 flex flex-col md:flex-row">
          <div className="md:w-[50%]">
            <span className="text-[#093D84] font-medium">LET'S DO IT</span>
            <h1 className="text-[6vw] lg:text-[4vw] font-bold font-titleFont">
              Driving Your <span className="text-[#093D84]">Success</span>{" "}
              through Innovative Solutions
            </h1>
          </div>
          <div className="md:w-[50%] pt-12 2xl:text-[1.3vw] font-bodyFont">
            <p>
              At SR Innovations, we help businesses tackle their unique
              challenges with efficiency and creativity. Our technical expertise
              and innovative approach enable us to build custom web and mobile
              apps designed for high growth. From ideation, design, and
              prototyping to internet-scale rollout, we offer comprehensive
              solutions to businesses of all sizes and industries.
            </p>
            <div className="pt-4 md:pt-0">
              <Link to="/Graphic">
                <button className="mx-1 px-3 py-1 my-1 rounded-md bg-[#FDEBF6] text-[#FF6CC6] ">
                  Graphic Design
                </button>
              </Link>
              <Link to="/Website">
                <button className="mx-1 px-3  py-1  my-1 rounded-md bg-[#FDEBEB] text-[#FFA462] ">
                  Website Development
                </button>
              </Link>
              <Link to="/VideoAnimation">
                <button className="mx-1 px-3 py-1 my-1 rounded-md bg-[#EBEFFD] text-[#5162FD] ">
                  Video Animation
                </button>
              </Link>
              <br />
              <Link to="/DigitalMarketing">
                <button className="mx-1 px-3  py-1  my-1 rounded-md bg-[#EBFDED] text-[#12FF71] ">
                  Digital Marketing
                </button>
              </Link>
            
              <Link to="/SEO">
                <button className="mx-1 px-3  py-1  my-1 rounded-md bg-[#FDEBEB] text-[#FF6262] ">
                  SEO
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden md:flex gap-8 pt-12 md:pt-24">
          <img className="w-72 2xl:w-[32rem]" src={Image1} alt="" />
          <img className="w-72 pt-4 md:pt-0 md:w-[35vw] 2xl:w-[40vw] " src={Image2} alt="" />
          <img className="w-72  2xl:w-[32rem] pt-4 md:pt-0" src={Image3} alt="" />
        </div>
      </section>
      {/* cards */}
      <section className="bg-[#2A2A2A] pb-8 overflow-x-hidden" data-aos="zoom-in-up">
        <div className="text-center mt-4 pt-6">
          <h1 className="font-extrabold font-titleFont text-white text-[6vw] md:text-[3.5vw]">
            Best Digital & <span className="text-[#5454D4]">IT Company</span>{" "}
            <br /> Who We Work With
          </h1>
        </div>
        <div className="flex items-center md:px-20 md:gap-20 2xl:px-20 2xl:gap-48 pt-8">
          <div>
            <img
              className="mx-4 md:mx-28 2xl:mx-48 px-1 text-[#ddbf45] bg-[#5b5025] rounded-full py-1 2xl:p-4"
              src={Business}
              alt=""
            />
            <p className="font-bodyFont text-[3vw] md:text-[2vw] px-2 text-white ">
              Enterprise Organization
            </p>
          </div>
          <div>
            <img
              className="mx-4 md:mx-36 2xl:mx-64 text-[#5454D4] bg-[#19193d] rounded-full py-1 px-1 2xl:p-4"
              src={Organization}
              alt=""
            />
            <p className="font-bodyFont text-[3vw] md:text-[2vw] text-white justify-center">
              Small & Medium Enterprises
            </p>
          </div>
          <div>
            <img
              className="mx-2 md:mx-8 2xl:mx-12 px-1 text-[#F04037]  bg-[#a57472] rounded-full py-1 2xl:p-4"
              src={Rocket}
              alt=""
            />
            <p className="font-bodyFont text-[3.5vw] md:text-[2vw] text-white pr-5 md:pr-0  ">Startups</p>
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

export default Home;
