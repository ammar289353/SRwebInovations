import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Form from "../components/Form";
import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
// hero images
import vector13 from "../images/Vector 13.png";
import circle from "../images/circle.png";
import Triangle from "../images/tri.png";
import add from "../images/add.png";
import GraphicService from "../images/GraphicService.png";
// Cards
import Logo from "../images/Create Icon.png"
import Design from "../images/Design.png"
import SocialMedia from "../images/Online Ads.png"
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


const Graphic = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

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
    {/* Hero */}
     <section className=" bg-[#2A2A2A] h-auto" data-aos="zoom-in-up">
        
        <div
          className="w-full text-center"
        >
          <div className="flex justify-between">
          <img className="pt-24 px-4 md:px-48" src={vector13} alt="" />
          <img className=" pt-24 pr-4 md:pr-48" src={circle} alt="" />
          </div>
          <p className="text-[#5454D4] text-center font-bodyFont  text-[1.5vw] sm:text-[1vw] md:text-[1vw] lg:text-[1vw] ">
            GRAPHIC DESIGN
          </p>
          
            <h1
              className="text-white justify-center text-center text-[6vw] px-24 md:px-96 font-titleFont md:text-[4vw] font-extrabold"
            >
              Creating Stunning, Unique <span className="text-[#5454D4]">Visual</span> Identities.
            </h1>
            <div className="flex justify-between">
            <img className="px-3 md:px-48" src={Triangle} alt="" />
            <img className="pr-4 md:pr-44" src={add} alt="" />
            </div>
        </div>
      </section>
    {/* Service */}
      <section className="w-[94vw] m-auto md:mb-10 mt-10">
        <div className="block sm:block md:flex lg:flex">
          <div
            className="w-[90vw] sm:w-[90vw] md:w-[50vw] lg:w-[50vw]"
            data-aos="flip-left"
          >
            <img src={GraphicService} alt="" />
          </div>
          <div
            className="w-[90vw] sm:w-[90vw] md:w-[50vw] lg:w-[50vw] ml-0 sm:ml-0 md:ml-10 lg:ml-10 mt-10 md:mt-8 text-center sm:text-center md:text-start lg:text-start"
            data-aos="flip-right"
          >
            <p className="font-semibold text-[#5454D4] text-[3.5vw] sm:text-[3vw] md:text-[1vw] lg:text-[1vw]">
              GRAPHIC DESIGN
            </p>
            <h1 className="font-extrabold text-[5.5vw] sm:text-[5vw] md:text-[4vw]">
              Get A Custom Design <br /> For Your Brand
            </h1>
            <p className="mt-2 text-[4.5vw] text-left sm:text-[4vw] md:text-[1.2vw] lg:text-[1.2vw] text-[#373737]">
              A dynamic collage of vibrant and visually appealing graphic
              design elements showcasing various aspects of our services,
              including logo design, branding, social media design, and UI/UX
              design.
            </p>
            <Link to="/Contact">
            <div className="px-20 md:px-2 pt-3 md:pt-0">
              <button className="flex bg-[#5454D4] text-[3.5vw] lg:text-[1.5vw] text-white rounded-2xl px-6 py-1 mt-4 hover:bg-[#39547a]  ">
                Get Started{" "}
                <MdArrowOutward className="text-[6vw] md:text-[2vw] md:pt-2" />
              </button>
            </div>
          </Link>
          </div>
        </div>
      </section>
       {/* Cards  */}
       <section className="pt-12">
        <h1 className="font-titleFont font-extrabold text-[5vw] px-6 md:px-24  md:text-[3vw] text-center ">Create A Strong Brand Identity With Our  Professional Graphic Design Services!</h1>
      <div className="block sm:block md:flex lg:flex mb-14 px-4">
          <div
            className="ml-1  md:m-3  mt-6 md:mt-4  w-[90vw]  md:w-[30vw] h-auto md:h-[45vh] p-4 sm:p-7 md:p-6 pt-10  rounded-lg shadow-2xl shadow-blue-100 items-center text-center hover:bg-blue-900 text-gray-500 hover:text-white"
            data-aos="flip-left"
          >
            <img
              src={Logo}
              alt=""
              className="bg-[#5454D4] rounded-full py-2 px-2  ml-32 w-[15vw] sm:w-[15vw] md:w-[5vw] lg:w-[5.5vw] md:ml-14 lg:ml-32"
            />
            <h1 className="font-bold text-[5vw] sm:text-[5vw] md:text-[2vw] lg:text-[1.5vw] mt-3">
            Logo Design
            </h1>
            <p className="text-[4vw] sm:text-[4vw] md:text-[1.5vw] lg:text-[1vw] mt-2">
            A sleek and modern logo design featuring bold typography and distinctive graphical elements, symbolizing the essence of your brand.
            </p>
          </div>
          <div
            className="ml-1 sm:ml-1 md:m-3 lg:m-3 mt-6 sm:mt-6 md:mt-4 lg:mt-4 w-[90vw] sm:w-[90vw] md:w-[30vw] lg:w-[30vw] h-auto md:h-[45vh] p-4 sm:p-7 md:p-6 lg:p-6 pt-10 rounded-lg shadow-2xl shadow-blue-100 items-center text-center hover:bg-blue-900 text-gray-500 hover:text-white"
            data-aos="flip-left"
          >
            <img
              src={Design}
              alt=""
              className="bg-[#5454D4] rounded-full py-2 px-2  ml-32 w-[15vw] sm:w-[15vw] md:w-[5vw] lg:w-[5.5vw] md:ml-14 lg:ml-32"
            />
            <h1 className="font-bold text-[5vw] sm:text-[5vw] md:text-[2vw] lg:text-[1.5vw] mt-3">
            Branding Design
            </h1>
            <p className="text-[4vw] sm:text-[4vw] md:text-[1.5vw] lg:text-[1vw] mt-2">
            A comprehensive branding design package tailored to establish a cohesive and impactful brand identity for your business.
            </p>
          </div>
          <div
            className="ml-1 sm:ml-1 md:m-3 lg:m-3 mt-6 sm:mt-6 md:mt-4 lg:mt-4 w-[90vw] sm:w-[90vw] md:w-[30vw] lg:w-[30vw] h-auto md:h-[45vh] p-4 sm:p-7 md:p-6 lg:p-6 pt-10 rounded-lg shadow-2xl shadow-blue-100 items-center text-center hover:bg-blue-900 text-gray-500  hover:text-white"
            data-aos="flip-left"
          >
            <img
              src={SocialMedia}
              alt=""
              className="bg-[#5454D4] rounded-full py-2 px-2 ml-32 w-[15vw] sm:w-[15vw] md:w-[5vw] lg:w-[5.5vw] md:ml-14 lg:ml-32"
            />
            <h1 className="font-bold text-[5vw] sm:text-[5vw] md:text-[2vw] lg:text-[1.5vw] mt-3">
            Social Media Design
            </h1>
            <p className="text-[4vw] sm:text-[4vw] md:text-[1.5vw] lg:text-[1vw] mt-2">
            Eye-catching and dynamic social media design solutions crafted to amplify your brand's online presence and engage your audience effectively. 

            </p>
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

export default Graphic;
