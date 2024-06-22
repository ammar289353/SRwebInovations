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

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
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
            <h1 className="text-[6vw] lg:text-[3vw] font-extrabold font-titleFont">
              Driving Your <span className="text-[#093D84]">Success</span>{" "}
              through Innovative Solutions
            </h1>
          </div>
          <div className="pt-2 font-bodyFont">
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
      <div className="pt-8">
        <img src={WebService} alt="" />
      </div>
      </div>
       {/* Graphic Service */}
      <div className="flex flex-col-reverse md:flex-row pt-4 bg-[#2A2A2A] pb-8 ">
      <div className="pt-8 px-4">
        <img src={GraphicService} alt="" />
      </div>
      <div className="pt-8 px-12 md:w-[50%]">
          <div>
            <span className="text-white font-medium">Graphic Design</span>
            <h1 className="text-[6vw] text-white lg:text-[3vw] font-extrabold font-titleFont">
              Driving Your Success{" "}
              through Innovative Solutions
            </h1>
          </div>
          <div className="pt-2 font-bodyFont text-white">
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
      
      </div>
        {/* Video Service */}
      <div className="flex flex-col md:flex-row pb-8">
      <div className="pt-8 px-12 md:w-[50%]">
          <div>
            <span className="text-[#093D84] font-medium">Video Animation</span>
            <h1 className="text-[6vw] lg:text-[3vw] font-extrabold font-titleFont">
              Driving Your <span className="text-[#093D84]">Success</span>{" "}
              through Innovative Solutions
            </h1>
          </div>
          <div className="pt-2 font-bodyFont">
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
      <div className="pt-8 px-4">
        <img className="rounded-md" src={VideoService} alt="" />
      </div>
      </div>
       {/* DMM Service */}
      <div className="flex flex-col-reverse md:flex-row pt-4 bg-[#2A2A2A] pb-8 ">
      <div className="pt-8 px-4">
        <img src={DMMService} alt="" />
      </div>
      <div className="pt-8 px-12 md:w-[50%]">
          <div>
            <span className="text-white font-medium">Digital Marketting</span>
            <h1 className="text-[6vw] text-white lg:text-[3vw] font-extrabold font-titleFont">
              Driving Your Success{" "}
              through Innovative Solutions
            </h1>
          </div>
          <div className="pt-2 font-bodyFont text-white">
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
      
      </div>
      {/* SEO Service */}
      <div className="flex flex-col md:flex-row pb-8">
      <div className="pt-8 px-12 md:w-[50%]">
          <div>
            <span className="text-[#093D84] font-medium">SEO</span>
            <h1 className="text-[6vw] lg:text-[3vw] font-extrabold font-titleFont">
              Driving Your <span className="text-[#093D84]">Success</span>{" "}
              through Innovative Solutions
            </h1>
          </div>
          <div className="pt-2 font-bodyFont">
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
      <div className="pt-8 px-4">
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
