import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Form from "../components/Form";
// hero images
import vector13 from "../images/Vector 13.png";
import circle from "../images/circle.png";
import Triangle from "../images/tri.png";
import add from "../images/add.png";
// Slider
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/autoplay"; 
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
// Website Images
import Screenshot from "../images/1.jpeg";
import Screenshot2 from "../images/2.jpeg";
import Screenshot4 from "../images/Screenshot4.jpeg";
import Screenshot5 from "../images/CRM.jpeg";
import Screenshot6 from "../images/Cordelias.jpeg";
import Screenshot10 from "../images/REMS.jpeg";
import Screenshot9 from "../images/NexSkill.jpeg";
import Screenshot3 from "../images/3.jpeg";
import Screenshot7 from "../images/Santosh.jpeg";
import Screenshot8 from "../images/5.jpeg";
// Logo Images
import logo1 from "../images/logo1.jpeg";
import logo2 from "../images/logo2.jpeg";
import logo3 from "../images/logo3.jpeg";
import logo4 from "../images/logo4.jpeg";
import logo5 from "../images/logo5.jpeg";
import logo6 from "../images/logo6.jpeg";
import logo7 from "../images/logo7.jpeg";
import logo8 from "../images/logo8.jpeg";
import logo9 from "../images/logo9.jpeg";
import logo10 from "../images/logo10.jpeg";
import logo11 from "../images/logo11.jpeg";
import logo12 from "../images/logo12.jpeg";
import logo13 from "../images/logo13.jpeg";
import logo14 from "../images/logo14.jpeg";
import logo15 from "../images/logo15.jpeg";
import logo16 from "../images/logo16.jpeg";
import logo17 from "../images/logo17.jpeg";
import logo18 from "../images/logo18.jpeg";
import logo19 from "../images/logo19.jpeg";
import logo20 from "../images/logo20.jpeg";

const Portfolio = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  const [category, setCategory] = useState("logo");

  const handleCategoryChange = (category) => {
    setCategory(category);
  };
  const testimonials = [
    {
      text: "Working with SR Innovations has significantly boosted our digital marketing performance. Their team implemented strategies that increased our online visibility and drove more traffic to our website. We're now seeing a steady increase in leads. Their dedication and creativity are truly commendable. I highly recommend their services for anyone serious about enhancing their online presence.",
      imgSrc:
        "https://techigems.pk/wp-content/uploads/2024/02/img__0007_Layer-1.jpg",
      name: "John D.",
      title: "Digital Marketing",
    },
    {
      text: "SR Innovations has transformed our search engine rankings with their expert SEO services. The team is not only knowledgeable but also incredibly innovative. They helped us climb to the top of search results, resulting in higher website traffic and better lead generation. Their commitment to our success is evident in everything they do. If you're looking to improve your SEO, SR Innovations is the way to go.",
      imgSrc:
        "https://techigems.pk/wp-content/uploads/2024/02/img__0007_Layer-1.jpg",
      name: "Emily S.",
      title: "SEO",
    },
    {
      text: "Our experience with SR Innovations for website development has been outstanding. They delivered a sleek, responsive, and highly functional website that exceeded our expectations. Their attention to detail and ability to understand our vision made the entire process smooth and efficient. I highly recommend their web development services for any business looking to enhance its online presence.",
      imgSrc:
        "https://techigems.pk/wp-content/uploads/2024/02/img__0007_Layer-1.jpg",
      name: "Jessica L.",
      title: "Website Development",
    },
    {
      text: "We partnered with SR Innovations for our website development needs, and the results have been fantastic. Their expertise helped us create a user-friendly and visually appealing site that attracts more visitors. Their proactive approach and creative solutions have been instrumental in generating new leads for our business. I highly recommend their website development services to any company looking to grow online.",
      imgSrc:
        "https://techigems.pk/wp-content/uploads/2024/02/img__0007_Layer-1.jpg",
      name: "Michael R.",
      title: "Website Development",
    },
    {
      text: "SR Innovations completely revamped our digital marketing strategy, and the impact has been incredible. Their team's innovative approach and in-depth knowledge have led to a significant increase in our online visibility and website traffic. We've seen a noticeable uptick in leads and conversions. I can't recommend their digital marketing services enough!",
      imgSrc:
        "https://techigems.pk/wp-content/uploads/2024/02/img__0007_Layer-1.jpg",
      name: "Sarah K.",
      title: "Digital Marketing",
    },
    {
      text: "SR Innovations has played a crucial role in enhancing our brand through video animation. They crafted engaging and professional animations that captured our audience's attention and improved our online presence. The team is professional, creative, and always ready to go the extra mile to ensure our success. We couldn't be happier with their services and recommend them highly.",
      imgSrc:
        "https://techigems.pk/wp-content/uploads/2024/02/img__0007_Layer-1.jpg",
      name: "Lisa T.",
      title: "Video Animation",
    },
    {
      text: "Since partnering with SR Innovations, our graphic design needs have been met with outstanding results. Their team's expertise in creating stunning visuals has been a game-changer for us. We've seen a substantial increase in engagement and overall brand recognition. The team is creative, diligent, and genuinely invested in our success. For anyone looking to elevate their brand with top-notch graphic design, SR Innovations is the perfect choice.",
      imgSrc:
        "https://techigems.pk/wp-content/uploads/2024/02/img__0007_Layer-1.jpg",
      name: "David M.",
      title: "Graphic Design",
    },
  ];

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
            Portfolio
          </p>
          
            <h1
              className="text-white justify-center text-center text-[6vw] px-24 md:px-96 font-titleFont md:text-[4vw] font-extrabold"
            >
               Establish Your <span className="text-[#5454D4]">Brand</span> as an Industry Leader
            </h1>
            <div className="flex justify-between">
            <img className="px-3 md:px-48" src={Triangle} alt="" />
            <img className="pr-4 md:pr-44" src={add} alt="" />
            </div>
        </div>
      </section>
      {/* CUSTOM BUSINESS SOLUTIONS */}
      <section className="w-[90vw] m-auto">
      <div className="md:flex">
          <h1 className="text-[6vw] md:text-[3vw] pl-3 font-titleFont font-extrabold">
            Our Awesome Work Portfolio
          </h1>
          <div className="block sm:block md:flex lg:flex m-auto pb-4 pt-4 font-titleFont">
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
              onClick={() => handleCategoryChange()}
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
       
        <div className="block sm:block md:grid lg:grid grid-cols-3 justify-between mt-5">
          {/* {category === "all" && (
            <>
            
              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={Cordelias}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                  <span className="text-white text-lg font-bold">
                  Cordelias Clinic
                  </span>
                </div>
              </div>
              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={DJ}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                  <span className="text-white text-lg font-bold">
                  DJ Creflo
                  </span>
                </div>
              </div>
              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={travelUp}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                  <span className="text-white text-lg font-bold">
                  travelUp
                  </span>
                </div>
              </div>
              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={txtogo}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                  <span className="text-white text-lg font-bold">
                  txtogo
                  </span>
                </div>
              </div>
              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={Wow}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                  <span className="text-white text-lg font-bold">
                  Wow
                  </span>
                </div>
              </div>
              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={addMoney}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                  <span className="text-white text-lg font-bold">
                  Adale
                  </span>
                </div>
              </div>

              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={astoria}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                  <span className="text-white text-lg font-bold">
                  Astoria
                  </span>
                </div>
              </div>
              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={bookit}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                  <span className="text-white text-lg font-bold">
                  Book it
                  </span>
                </div>
              </div>
              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={cannabis}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                  <span className="text-white text-lg font-bold">
                    Cannabis
                  </span>
                </div>
              </div>
              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={gasBuddy}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                  <span className="text-white text-lg font-bold">
                    Gas Buddy
                  </span>
                </div>
              </div>
              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={hotelnBaku}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                  <span className="text-white text-lg font-bold">
                  Hotel in Baku
                  </span>
                </div>
              </div>
              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={kppr}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                  <span className="text-white text-lg font-bold">
                    Kppr
                  </span>
                </div>
              </div>

              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={Screenshot}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                  <span className="text-white text-lg font-bold">
                    Dashboard
                  </span>
                </div>
              </div>

              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={Screenshot2}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                  <span className="text-white text-lg font-bold">ASkill</span>
                </div>
              </div>

              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={Screenshot3}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                  <span className="text-white text-lg font-bold">
                    GET "Green Envirnment Technology"
                  </span>
                </div>
              </div>

              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={Screenshot4}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                  <span className="text-white text-lg font-bold">
                    GRAYSCALE
                  </span>
                </div>
              </div>

              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={Screenshot5}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                  <span className="text-white text-lg font-bold">
                    DELICIOUS
                  </span>
                </div>
              </div>

             <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={pkg1}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                  <span className="text-white text-lg font-bold">
                    
                  </span>
                </div>
              </div>
              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={pkg2}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                  <span className="text-white text-lg font-bold">
                    
                  </span>
                </div>
              </div>
              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={pkg3}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                  <span className="text-white text-lg font-bold">
                    
                  </span>
                </div>
              </div>
              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={pkg4}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                  <span className="text-white text-lg font-bold">
                    
                  </span>
                </div>
              </div>
             
            </>
          )} */}

          {category === "logo" && (
            <>
              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={logo1}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                  <span className="text-white text-lg font-bold">
                  Cordelias Clinic
                  </span>
                </div>
              </div>

              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={logo2}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                  <span className="text-white text-lg font-bold">
                  Adale
                  </span>
                </div>
              </div>

              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={logo3}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                  <span className="text-white text-lg font-bold">
                  Astoria
                  </span>
                </div>
              </div>
              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={logo4}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                  <span className="text-white text-lg font-bold">
                  Book it
                  </span>
                </div>
              </div>
              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={logo5}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                  <span className="text-white text-lg font-bold">
                    Cannabis
                  </span>
                </div>
              </div>
              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={logo6}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                  <span className="text-white text-lg font-bold">
                    Gas Buddy
                  </span>
                </div>
              </div>
              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={logo7}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                  <span className="text-white text-lg font-bold">
                  Hotel in Baku
                  </span>
                </div>
              </div>
              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={logo8}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                  <span className="text-white text-lg font-bold">
                    Kppr
                  </span>
                </div>
              </div>
  
              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={logo9}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                  <span className="text-white text-lg font-bold">
                  my420
                  </span>
                </div>
              </div>
              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={logo10}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                  <span className="text-white text-lg font-bold">
                  One Page Crm
                  </span>
                </div>
              </div>
              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={logo11}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                  <span className="text-white text-lg font-bold">
                  travelUp
                  </span>
                </div>
              </div>
              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={logo12}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                  <span className="text-white text-lg font-bold">
                  txtogo
                  </span>
                </div>
              </div>
              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={logo13}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                  <span className="text-white text-lg font-bold">
                  Wow
                  </span>
                </div>
              </div>
              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={logo14}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                  <span className="text-white text-lg font-bold">
                  Wow
                  </span>
                </div>
              </div>
              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={logo15}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                  <span className="text-white text-lg font-bold">
                  Wow
                  </span>
                </div>
              </div>
              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={logo16}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                  <span className="text-white text-lg font-bold">
                  Wow
                  </span>
                </div>
              </div>
              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={logo17}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                  <span className="text-white text-lg font-bold">
                  Wow
                  </span>
                </div>
              </div>
              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={logo18}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                  <span className="text-white text-lg font-bold">
                  Wow
                  </span>
                </div>
              </div>
              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={logo19}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                  <span className="text-white text-lg font-bold">
                  Wow
                  </span>
                </div>
              </div>
              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={logo20}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                  <span className="text-white text-lg font-bold">
                  Wow
                  </span>
                </div>
              </div>
            </>
          )}

          {category === "website" && (
            <>
            <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={Screenshot5}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                  <span className="text-white text-lg font-bold">
                    CRM (Customer Relation Management)
                  </span>
                </div>
              </div>

              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={Screenshot6}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                  <span className="text-white text-lg font-bold">
                    Cordelias Clinic
                  </span>
                </div>
              </div>

              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={Screenshot4}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                  <span className="text-white text-lg font-bold">
                    MaxCool (A Real State Website)
                  </span>
                </div>
              </div>

              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={Screenshot8}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                  <span className="text-white text-lg font-bold">
                    DELICIOUS (A Fast Food Shop)
                  </span>
                </div>
              </div>

              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={Screenshot10}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                  <span className="text-white text-lg font-bold">
                    REMS (Real State Management System)
                  </span>
                </div>
              </div>

              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={Screenshot9}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                  <span className="text-white text-lg font-bold">
                    NexSkill LMS
                  </span>
                </div>
              </div>
              
              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={Screenshot}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                  <span className="text-white text-lg font-bold">
                    A-Skill Admin Dashboard
                  </span>
                </div>
              </div>

              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={Screenshot2}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                  <span className="text-white text-lg font-bold">A-Skill (An E-Learning Platform)</span>
                </div>
              </div>

             
              

              

             

              

              

              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={Screenshot3}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                  <span className="text-white text-lg font-bold">
                    GET "Green Envirnment Technology"
                  </span>
                </div>
              </div>


              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={Screenshot7}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                  <span className="text-white text-lg font-bold">
                   Santosh Architecture
                  </span>
                </div>
              </div>

              
            </>
          )}

          {/* {category === "packaging" && (
            <>
              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={pkg1}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                  <span className="text-white text-lg font-bold">
                    
                  </span>
                </div>
              </div>
              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={pkg2}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                  <span className="text-white text-lg font-bold">
                    
                  </span>
                </div>
              </div>
              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={pkg3}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                  <span className="text-white text-lg font-bold">
                    
                  </span>
                </div>
              </div>
              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={pkg4}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                  <span className="text-white text-lg font-bold">
                    
                  </span>
                </div>
              </div>
            </>
          )} */}
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
                    <p className="text-[#8d8b8b] text-[3vw] sm:text-[3vw] md:text-[1vw] lg:text-[1vw]">
                      "Working with SR Innovations has significantly boosted our
                      digital marketing performance. Their team implemented
                      strategies that increased our online visibility and drove
                      more traffic to our website. We're now seeing a steady
                      increase in leads. Their dedication and creativity are
                      truly commendable. I highly recommend their services for
                      anyone serious about enhancing their online presence."
                    </p>
                    <div className="flex">
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

      <section className="flex flex-col md:flex-row w-full px-6 md:px-12 pb-8">
        <div className="md:w-1/2">
          <p className="font-titleFont text-[#5454D4]">Contact Us</p>
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

export default Portfolio;
