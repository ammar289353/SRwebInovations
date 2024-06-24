import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Form from "../components/Form";

import AOS from "aos";
import "aos/dist/aos.css";
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
// hero images
import vector13 from "../images/Vector 13.png";
import circle from "../images/circle.png";
import Triangle from "../images/tri.png";
import add from "../images/add.png";
// Service Images
import WebService from "../images/WebsiteFeatureImage.png";
import GraphicService from "../images/GraphicFeatureImage.png";
import VideoService from "../images/VideoAnimationFeatureImage.png";
import DMMService from "../images/DMMFeatureImage.png";
import SEOService from "../images/SEOFeatureImage.png";
import { MdArrowOutward } from "react-icons/md";

const Services = () => {
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
     <section className=" bg-[#2A2A2A] h-auto" data-aos="zoom-in-up">
        
        <div
          className="w-full text-center"
        >
          <div className="flex justify-between">
          <img className="pt-24 px-4 md:px-48" src={vector13} alt="" />
          <img className=" pt-24 pr-4 md:pr-48" src={circle} alt="" />
          </div>
          <p className="text-[#5454D4] text-center font-bodyFont  text-[1.5vw] sm:text-[1vw] md:text-[1vw] lg:text-[1vw] ">
            Services
          </p>
          
            <h1
              className="text-white justify-center text-center text-[6vw] px-24 md:px-96 font-titleFont md:text-[4vw] font-extrabold"
            >
               Bridging  <span className="text-[#5454D4]">Technology</span> and Business.
            </h1>
            <div className="flex justify-between">
            <img className="px-3 md:px-48" src={Triangle} alt="" />
            <img className="pr-4 md:pr-44" src={add} alt="" />
            </div>
        </div>
      </section>
      
      <section>
        {/* Website Service */}
      <div className="flex flex-col md:flex-row pb-8">
      <div className="pt-8 px-12 md:w-[50%]">
          <div>
            <span className="text-[#093D84] font-medium">Website Development</span>
            <h1 className="text-[6vw] lg:text-[2.5vw] font-extrabold font-titleFont">
            Empowering Your Brand with <span className="text-[#093D84]">Cutting-Edge</span>{" "}
            Web Solutions
            </h1>
          </div>
          <div className="pt-2 font-bodyFont">
            <p>
            At SR Innovations, we specialize in crafting custom websites that not only look stunning but also deliver exceptional user experiences. Our expert team combines cutting-edge design with robust development to create responsive, SEO-friendly websites that drive engagement and conversions. Whether you need a dynamic e-commerce platform or a sleek corporate site, we ensure your online presence stands out and meets your business goals. Let us help you transform your ideas into a digital masterpiece that captivates and converts your audience.
            </p>
            <Link to="/Website">
            <div className="pt-3 md:pt-2">
              <button className="flex bg-[#5454D4] text-[3.5vw] lg:text-[1.5vw] text-white rounded-2xl px-8 py-1 mt-4 hover:bg-[#39547a]  ">
                Visit{" "}
                <MdArrowOutward className="text-[6vw] md:text-[2vw] md:pt-2" />
              </button>
            </div>
          </Link>
          </div>
      </div>
      <div className="pt-16">
        <img src={WebService} alt="" />
      </div>
      </div>
       {/* Graphic Service */}
      <div className="flex flex-col-reverse md:flex-row pt-4 bg-[#2A2A2A] pb-8 ">
      <div className="pt-20 px-4">
        <img src={GraphicService} alt="" />
      </div>
      <div className="pt-6 px-12 md:w-[50%]">
          <div>
            <span className="text-white font-medium">Graphic Design</span>
            <h1 className="text-[6vw] text-white lg:text-[2.5vw] font-extrabold font-titleFont">
            Innovative Design and Development for the Modern Business
            </h1>
          </div>
          <div className="pt-2 font-bodyFont text-white">
            <p>
            At SR Innovations, we bring your brand to life with our exceptional graphic design services. Our creative team excels in crafting visually compelling designs that capture your brand’s essence and communicate your message effectively. From logos and branding to marketing materials and digital graphics, we ensure each design is unique, impactful, and aligned with your business goals. Whether you need eye-catching visuals for your website, social media, or print, we deliver high-quality designs that engage and inspire your audience. Let us help you make a lasting impression with stunning graphics that elevate your brand.
            </p>
            <Link to="/Graphic">
            <div className="pt-3 md:pt-2">
              <button className="flex bg-[#5454D4] text-[3.5vw] lg:text-[1.5vw] text-white rounded-2xl px-8 py-1 mt-4 hover:bg-[#39547a]  ">
                Visit{" "}
                <MdArrowOutward className="text-[6vw] md:text-[2vw] md:pt-2" />
              </button>
            </div>
          </Link>
          </div>
      </div>
      
      </div>
        {/* Video Service */}
      <div className="flex flex-col md:flex-row pb-8">
      <div className="pt-8 px-12 md:w-[50%]">
          <div>
            <span className="text-[#093D84] font-medium">Video Animation</span>
            <h1 className="text-[6vw] lg:text-[2.5vw] font-extrabold font-titleFont">
            Transforming Ideas into  <span className="text-[#093D84]">Stunning Visuals</span>{" "}
            and Engaging Animations
            </h1>
          </div>
          <div className="pt-2 font-bodyFont">
            <p>
            At SR Innovations, we create captivating video animations that bring your stories to life. Our talented animators specialize in producing high-quality animations that effectively communicate your message and engage your audience. From explainer videos and promotional content to animated logos and educational animations, we tailor each project to meet your specific needs and objectives. Whether you aim to enhance your marketing strategy, educate your customers, or simply entertain, our animations are designed to leave a lasting impact. Let us help you transform your ideas into dynamic, visually stunning animations that captivate and inspire.
            </p>
            <Link to="/VideoAnimation">
            <div className="pt-3 md:pt-2">
              <button className="flex bg-[#5454D4] text-[3.5vw] lg:text-[1.5vw] text-white rounded-2xl px-8 py-1 mt-4 hover:bg-[#39547a]  ">
                Visit{" "}
                <MdArrowOutward className="text-[6vw] md:text-[2vw] md:pt-2" />
              </button>
            </div>
          </Link>
          </div>
      </div>
      <div className="pt-20 px-4">
        <img className="rounded-md" src={VideoService} alt="" />
      </div>
      </div>
       {/* DMM Service */}
      <div className="flex flex-col-reverse md:flex-row pt-4 bg-[#2A2A2A] pb-8 ">
      <div className="pt-24 px-4">
        <img src={DMMService} alt="" />
      </div>
      <div className="pt-8 px-12 md:w-[50%]">
          <div>
            <span className="text-white font-medium">Digital Marketting</span>
            <h1 className="text-[6vw] text-white lg:text-[2.5vw] font-extrabold font-titleFont">
            Driving Growth with Strategic Digital Marketing and SEO
            </h1>
          </div>
          <div className="pt-2 font-bodyFont text-white">
            <p>
            At SR Innovations, we drive your business growth with our comprehensive digital marketing services. Our expert team leverages the latest strategies and tools to increase your online visibility, engage your target audience, and boost conversions. From search engine optimization (SEO) and pay-per-click (PPC) advertising to social media marketing and email campaigns, we create customized marketing plans tailored to your unique business goals. Whether you aim to build brand awareness, generate leads, or enhance customer loyalty, we deliver measurable results that propel your business forward. Let us help you harness the power of digital marketing to achieve your objectives and stay ahead of the competition.
            </p>
            <Link to="/DigitalMarketing">
            <div className="pt-3 md:pt-2">
              <button className="flex bg-[#5454D4] text-[3.5vw] lg:text-[1.5vw] text-white rounded-2xl px-8 py-1 mt-4 hover:bg-[#39547a]  ">
                Visit{" "}
                <MdArrowOutward className="text-[6vw] md:text-[2vw] md:pt-2" />
              </button>
            </div>
          </Link>
          </div>
      </div>
      
      </div>
      {/* SEO Service */}
      <div className="flex flex-col md:flex-row pb-8">
      <div className="pt-8 px-12 md:w-[50%]">
          <div>
            <span className="text-[#093D84] font-medium">SEO</span>
            <h1 className="text-[6vw] lg:text-[3vw] font-extrabold font-titleFont">
            Elevate Your Online Presence with Expert <span className="text-[#093D84]">SEO Strategies</span>{" "}
            </h1>
          </div>
          <div className="pt-2 font-bodyFont">
            <p>
            At SR Innovations, we enhance your online presence with our expert SEO services. Our dedicated team specializes in optimizing your website to achieve higher search engine rankings, driving organic traffic, and increasing visibility. We conduct thorough keyword research, on-page and off-page optimization, and technical SEO to ensure your site meets the latest search engine algorithms. Whether you're looking to improve local search results, expand your reach, or boost conversions, our tailored SEO strategies are designed to align with your business goals. Let us help you stay ahead in the digital landscape with effective SEO that delivers long-term success.
            </p>
            <Link to="/SEO">
            <div className="pt-3 md:pt-2">
              <button className="flex bg-[#5454D4] text-[3.5vw] lg:text-[1.5vw] text-white rounded-2xl px-8 py-1 mt-4 hover:bg-[#39547a]  ">
                Visit{" "}
                <MdArrowOutward className="text-[6vw] md:text-[2vw] md:pt-2" />
              </button>
            </div>
          </Link>
          </div>
      </div>
      <div className="pt-24 px-4">
        <img className="rounded-md"  src={SEOService} alt="" />
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

export default Services;
