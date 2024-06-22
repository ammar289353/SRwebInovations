import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "../App.css";
import Hero from "../images/HeroLaptop.png";


// Slider
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
//  Icons
import { MdArrowOutward } from "react-icons/md";
import { FaCode } from "react-icons/fa6";
import { PiPaintBrushLight } from "react-icons/pi";
import { TfiVideoClapper } from "react-icons/tfi";
import { RxSpeakerLoud } from "react-icons/rx";
import { IoMdSearch } from "react-icons/io";
import Business from "../images/Business Building.png";
import Organization from "../images/Organization.png";
import Rocket from "../images/Rocket.png";
// Logo Images
import logo1 from "../images/logo1.jpeg";
import logo2 from "../images/logo2.jpeg";
import logo3 from "../images/logo3.jpeg";
import logo5 from "../images/logo5.jpeg";
import logo6 from "../images/logo6.jpeg";
import logo17 from "../images/logo17.jpeg";
// Website Images
import Web1 from "../images/web1.png";
import Web2 from "../images/web2.png";
import Web3 from "../images/web3.png";
import Web4 from "../images/web4.png";
import Web5 from "../images/web5.png";
import Web6 from "../images/web6.png";
// DMM Images
import DMM1 from "../images/DMMPortfolio-1.jpg"
import DMM2 from "../images/DMMPortfolio-2.jpg"
import DMM3 from "../images/DMMPortfolio-3.jpg"
import DMM4 from "../images/DMMPortfolio-4.jpg"
import DMM5 from "../images/DMMPortfolio-5.jpg"
import DMM6 from "../images/DMMPortfolio-6.jpg"

// Let's do it
import Image1 from "../images/Image 1.png";
import Image2 from "../images/Image 2.png";
import Image3 from "../images/Image 3.png";
import Form from "../components/Form";
// Testimonial
import T1 from "../images/testimonial 1.png"
import T2 from "../images/Cordelia.jpeg"
import T3 from "../images/Marlene Martins.png"
import T4 from "../images/testimonial 2.png"
import T5 from "../images/Testimonial 5.png"

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
      description:
        "User experience (UX) and user interface (UI) design are critical components of any website or application. Our team of UI/UX designers will work with you to create a user-friendly.",
      link: "/Graphic",
    },
    {
      icon: (
        <FaCode className="text-[#5454D4] hover:text-white hover:bg-[#5858bc] bg-[#b2b2d9] rounded-full py-2" />
      ),
      title: "Webiste Development",
      description:
        "User experience (UX) and user interface (UI) design are critical components of any website or application. Our team of UI/UX designers will work with you to create a user-friendly.",
      link: "/Website",
    },
    {
      icon: (
        <TfiVideoClapper className="text-[#ddbf45] hover:text-white hover:bg-[#b0a57a] bg-[#5b5025] rounded-full py-2" />
      ),
      title: "Video Animation",
      description:
        "User experience (UX) and user interface (UI) design are critical components of any website or application. Our team of UI/UX designers will work with you to create a user-friendly.",
      link: "/VideoAnimation",
    },
    {
      icon: (
        <RxSpeakerLoud className="text-[#5454D4] hover:text-white hover:bg-[#5858bc] bg-[#b2b2d9] rounded-full py-2" />
      ),
      title: "Digital Marketing",
      description:
        "User experience (UX) and user interface (UI) design are critical components of any website or application. Our team of UI/UX designers will work with you to create a user-friendly.",
      link: "/DigitalMarketing",
    },
    {
      icon: (
        <IoMdSearch className="text-[#F04037] hover:text-white hover:bg-[#F04037] bg-[#a57472] rounded-full py-2" />
      ),
      title: "SEO",
      description:
        "User experience (UX) and user interface (UI) design are critical components of any website or application. Our team of UI/UX designers will work with you to create a user-friendly.",
      link: "/SEO",
    },
  ];
  const testimonials = [
    {
      text: "Working with SR Innovations has significantly boosted our digital marketing performance. Their team implemented strategies that increased our online visibility and drove more traffic to our website. We're now seeing a steady increase in leads. Their dedication and creativity are truly commendable. I highly recommend their services for anyone serious about enhancing their online presence.",
      imgSrc:`${T1}`,
      name: "John D.",
      title: "Digital Marketing",
    },
    {
      text: "I’ve been using this company for a few months now and I’m very impressed with their services. The team is knowledgeable, dedicated, and loyal. They provide personalized solutions that meet my specific needs, making sure my content reaches the right audience effectively. Their attention to detail and commitment to excellence are outstanding. I highly recommend this company to anyone looking to boost their social media presence",
      imgSrc:`${T2}`,
      name: "Cordelia",
      title: "Digital Marketting ",
    },
    {
      text: "Our experience with SR Innovations for website development has been outstanding. They delivered a sleek, responsive, and highly functional website that exceeded our expectations. Their attention to detail and ability to understand our vision made the entire process smooth and efficient. I highly recommend their web development services for any business looking to enhance its online presence.",
      imgSrc:`${T3}`,
      name: "Marlene Martins",
      title: "Website Development",
    },
    {
      text: "We partnered with SR Innovations for our website development needs, and the results have been fantastic. Their expertise helped us create a user-friendly and visually appealing site that attracts more visitors. Their proactive approach and creative solutions have been instrumental in generating new leads for our business. I highly recommend their website development services to any company looking to grow online.",
      imgSrc:`${T4}`,
      name: "Michael R.",
      title: "Website Development",
    },
    {
      text: "SR Innovations completely revamped our digital marketing strategy, and the impact has been incredible. Their team's innovative approach and in-depth knowledge have led to a significant increase in our online visibility and website traffic. We've seen a noticeable uptick in leads and conversions. I can't recommend their digital marketing services enough!",
      imgSrc:`${T5}`,
      name: "Sarah ",
      title: "Digital Marketing",
    }
  ];

  return (
    <>
      {/* Hero  */}

      <section className="flex flex-col-reverse md:flex-row w-[100%] bg-white h-auto md:mt-28 pb-12 md:pb-24 overflow-hidden">
        <div className="md:w-[50%]" data-aos="fade-right">
          <h1 className="text-[5vw] px-6 md:px-32 font-titleFont text-left text-black font-extrabold md:text-[3vw]
          pt-16 ">
            Build Your Awesome Platform
          </h1>
          <p className="px-6 md:pl-32 pt-3 md:pt-5 font-bodyFont">
            At SR Innovations,we help bussinesses tackle their unique challenges
            with efficency and creativity.Our technical expertise and innovative
            approach enables us to build custom web and mobile apps designed for
            high growth
          </p>
          <Link to="/Services">
            <div className="px-24 md:px-32 pt-3 md:pt-4">
              <button className="flex bg-[#5454D4] text-[3.5vw] lg:text-[1.5vw] text-white rounded-2xl px-6 py-1 mt-4 hover:bg-[#39547a]  ">
                Our services{" "}
                <MdArrowOutward className="text-[6vw] md:text-[2vw] md:pt-2" />
              </button>
            </div>
          </Link>
        </div>
        <div className="md:w-[50%] mt-20 md:mt-0" data-aos="fade-left">
          <img src={Hero} alt="" />
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
              onClick={() => handleCategoryChange("logo")}
              className="rounded-full px-4 mb-1 md:pl-6 md:pr-6 lg:px-2  hover:text-[#5454D4]"
            >
              LOGO DESIGN
            </button>
            <button
              onClick={() => handleCategoryChange("website")}
              className=" rounded-full px-4 mb-1  sm:pl-3 sm:pr-3 md:pl-6 md:pr-6 lg:px-2  hover:text-[#5c5cc0]"
            >
              WEB Development
            </button>
            <button
              onClick={() => handleCategoryChange()}
              className=" rounded-full px-4 mb-1 sm:pl-1 sm:pr-1 md:pl-6 md:pr-6 lg:px-2  hover:text-[#5454D4]"
            >
              Video Animation
            </button>
            <button
              onClick={() => handleCategoryChange("DMM")}
              className=" rounded-full px-3 sm:pl-3 sm:pr-3 md:pl-6 md:pr-6 lg:px-2 hover:text-[#5454D4]"
            >
              Digital Markertting
            </button>
            <button
              onClick={() => handleCategoryChange("packaging")}
              className=" rounded-full px-3 sm:pl-3 sm:pr-3 md:pl-6 md:pr-6 lg:px-0 hover:text-[#5454D4]"
            >
              SEO
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
                  src={logo2}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
              </div>
              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={logo3}
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
                  src={logo6}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
              </div>
              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={logo17}
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
          {category === "DMM" && (
            <>
            <div className="relative border rounded-lg w-[90vw] h-auto  md:w-[29vw] mb-10">
                <img
                  src={DMM1}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
              </div>
            <div className="relative border rounded-lg w-[90vw] h-auto  md:w-[29vw] mb-10">
                <img
                  src={DMM2}
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
          <div className="px-24 md:px-[40vw]">
            <button className="flex bg-[#5454D4] text-[3.5vw] lg:text-[1.5vw] text-white rounded-2xl px-6 py-1 mt-4 hover:bg-[#39547a]  ">
              View All Portfolio{" "}
              <MdArrowOutward className="text-[5vw] md:text-[2vw] md:pt-2" />
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
          <div className="md:w-[50%] pt-12 font-bodyFont">
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
          <img className="w-72" src={Image1} alt="" />
          <img className="w-72 pt-4 md:pt-0 md:w-[35vw]" src={Image2} alt="" />
          <img className="w-72 pt-4 md:pt-0" src={Image3} alt="" />
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
        <div className="flex justify-evenly pt-8">
          <div>
            <img
              className="mx-4 md:mx-20 px-1 text-[#ddbf45] bg-[#5b5025] rounded-full py-1"
              src={Business}
              alt=""
            />
            <p className="font-bodyFont text-[3vw] md:text-[2vw] px-2 text-white ">
              Enterprise Organization
            </p>
          </div>
          <div>
            <img
              className="mx-4 md:mx-20 text-[#5454D4] bg-[#19193d] rounded-full py-1 px-1"
              src={Organization}
              alt=""
            />
            <p className="font-bodyFont text-[3vw] md:text-[2vw] text-white justify-center">
              Small & Medium Enterprises
            </p>
          </div>
          <div>
            <img
              className="mx-2 md:mx-6 px-1 text-[#F04037]  bg-[#a57472] rounded-full py-1"
              src={Rocket}
              alt=""
            />
            <p className="font-bodyFont text-[3.5vw] md:text-[2vw] text-white pr-5 md:pr-0  ">Startups</p>
          </div>
        </div>
      </section>
      {/* TESTIMONIAL */}
      <section
        className="w-full h-auto pb-20 overflow-x-hidden"
        data-aos="zoom-in-up"
      >
        <p className="text-[#093D84] font-titleFont text-[3vw] sm:text-[3vw] md:text-[1.5vw] pt-8 lg:text-[1.5vw] text-center font-semibold">
          TESTIMONIALS
        </p>
        <h1 className="text-black font-titleFont text-[5vw] text-center  md:text-[3.5vw] font-extrabold">
          Don't just take our word for it:
        </h1>
        <p className="text-slate-500 font-bodyFont text-center text-[3vw] sm:text-[3vw] md:text-[1vw] lg:text-[1vw] pb-8 pt-2">
          Hear from our satisfied clients
        </p>
        <div className="w-[90%] md:w-[100%] overflow-hidden ">
          <Swiper
            breakpoints={{
              340: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              700: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
            }}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[FreeMode, Pagination, Autoplay]}
            className="w-[140vw] h-[44vh] md:h-auto md:max-w-[90%]"
          >
            {/* Slider */}
            <div>
              <div>
                {testimonials.map((testimonial, index) => (
                  <SwiperSlide
                    key={index}
                    className="bg-white rounded-lg ml-5 md:ml-0 p-6"
                  >
                    <p className="text-[#8d8b8b] text-[3vw] sm:text-[3vw] md:text-[1vw] lg:text-[1vw] h-[30vh]">
                    {testimonial.text}
                    </p>
                    <div className="flex pt-2">
                      <img
                        src={testimonial.imgSrc}
                        alt={testimonial.name}
                        className="rounded-full w-14 mt-2"
                      />
                      <div>
                        <h1 className="text-blue-900 text-[3vw] sm:text-[3vw] md:text-[1.4vw] lg:text-[1.4vw] font-bold ml-3 lg:ml-10 mt-3">
                          {testimonial.name}
                        </h1>
                        <p className="text-blue-700 text-[2vw] sm:text-[2vw] md:text-[1vw] lg:text-[1vw] font-semibold ml-3 lg:ml-10">
                          {testimonial.title}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </div>
            </div>
          </Swiper>
        </div>
        {/* <hr className="border-[0.2vw] border-slate-400 mx-24 md:mx-60" /> */}
      </section>
      {/* Contact  */}

      <section className="flex flex-col md:flex-row w-full px-6 md:px-12 pb-8" data-aos="zoom-in-up">
        <div className="md:w-1/2">
          <p className="font-titleFont text-[#5454D4] px-7 ">Contact Us</p>
          <h1 className="font-titleFont text-[7vw] md:text-[5vw] font-extrabold px-6 ">Build Your Awesome Platform</h1>
          <p className="font-bodyFont pt-4 px-6 ">
            At SR Innovations, we help businesses tackle their unique challenges
            with efficiency and creativity. Our technical expertise and
            innovative approach enable us to build custom web and mobile apps
            designed for high growth.
          </p>
        </div>
        <div className="md:w-1/2 pt-4">
        <Form/>
        </div>
      </section>
      
    </>
  );
};

export default Home;
