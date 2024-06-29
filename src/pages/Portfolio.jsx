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
// Testimonial
import T1 from "../images/testimonial 1.png"
import T2 from "../images/Cordelia.jpeg"
import T3 from "../images/Marlene Martins.png"
import T4 from "../images/testimonial 2.png"
import T5 from "../images/Testimonial 5.png"
// Website Images
import Web1 from "../images/web1.png";
import Web2 from "../images/web2.png";
import Web3 from "../images/web3.png";
import Web4 from "../images/web4.png";
import Web5 from "../images/web5.png";
import Web6 from "../images/web6.png";
// video
import video1 from "../videos/VideoAnimation1.mp4"
// Logo Images
import logo1 from "../images/logo1.jpeg";
import logo21 from "../images/massagetherapy.jpg";
import logo5 from "../images/logo5.jpeg";
import logo8 from "../images/logo8.jpeg";
import logo11 from "../images/logo11.jpeg";
import logo12 from "../images/logo12.jpeg";
import logo13 from "../images/logo13.jpeg";
import logo16 from "../images/logo16.jpeg";
import logo19 from "../images/logo19.jpeg";
import logo20 from "../images/logo20.jpeg";

// DMM Images
import DMM1 from "../images/DMMPortfolio-1.jpg"
import DMM2 from "../images/DMMPortfolio-2.jpg"
import DMM3 from "../images/DMMPortfolio-3.jpg"
import DMM4 from "../images/DMMPortfolio-4.jpg"
import DMM5 from "../images/DMMPortfolio-5.jpg"
import DMM6 from "../images/DMMPortfolio-6.jpg"

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
      <section className="pb-8 pt-6 " data-aos="zoom-in-up">
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
              onClick={() => handleCategoryChange("video")}
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
            {/* <button
              onClick={() => handleCategoryChange("packaging")}
              className=" rounded-full px-3 sm:pl-3 sm:pr-3 md:pl-6 md:pr-6 lg:px-0 hover:text-[#5454D4]"
            >
              SEO
            </button> */}
          </div>
        </div>
       
        <div className="block sm:block md:grid lg:grid grid-cols-3 justify-between pt-6 px-6 mt-5">

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
              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={logo13}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
              </div>
              
              
              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={logo16}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
              </div>
             
              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={logo19}
                  alt=""
                  className="border rounded-lg w-full h-full"
                />
              </div>
              <div className="relative border rounded-lg w-[90vw] h-[52vw] sm:w-[90vw] sm:h-[52vw] md:w-[29vw] md:h-[22vw] lg:w-[29vw] lg:h-[22vw] mb-10">
                <img
                  src={logo20}
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
      </section>

       {/* TESTIMONIAL */}
       <section
        className="w-full h-auto pb-20"
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

      <section className="flex flex-col md:flex-row w-full px-6 md:px-12 pb-8" data-aos="zoom-in-up">
        <div className="md:w-1/2">
          <p className="font-titleFont text-[#5454D4] px-7">Contact Us</p>
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
