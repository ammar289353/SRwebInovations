import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Form from "../components/Form";
import DMService from "../images/DMMService.png";
import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
// hero images
import vector13 from "../images/Vector 13.png";
import circle from "../images/circle.png";
import Triangle from "../images/tri.png";
import add from "../images/add.png";
// Cards
import Server from "../images/Server.png"
import Ecommerce from "../images/T-Shirt.png"
import App from "../images/Mobile.png"
// Slider
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/autoplay"; 
import { FreeMode, Pagination, Autoplay } from "swiper/modules";


const DigitalMarketing = () => {
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
            Digital Marketting
          </p>
          
            <h1
              className="text-white justify-center text-center text-[6vw] px-24 md:px-80 font-titleFont md:text-[4vw] font-extrabold"
            >
               Boost Online  <span className="text-[#5454D4]">Presence</span> With Expert Digital Marketting.
            </h1>
            <div className="flex justify-between">
            <img className="px-3 md:px-48" src={Triangle} alt="" />
            <img className="pr-4 md:pr-44" src={add} alt="" />
            </div>
        </div>
      </section>
      <section className="w-[94vw] m-auto mb-10 mt-10">
        <div className="block sm:block md:flex lg:flex">
          <div
            className="w-[90vw] sm:w-[90vw] md:w-[50vw] lg:w-[50vw]"
            data-aos="flip-left"
          >
            <img src={DMService} alt="" />
          </div>
          <div
            className="w-[90vw] sm:w-[90vw] md:w-[50vw] lg:w-[50vw] ml-0 sm:ml-0 md:ml-10 lg:ml-10 mt-10 sm:mt-10 md:mt-8 text-center sm:text-center md:text-start lg:text-start"
            data-aos="flip-right"
          >
            <p className="font-semibold text-[#5454D4] text-[3.5vw] sm:text-[3vw] md:text-[1vw] lg:text-[1vw]">
              Digital Marketing
            </p>
            <h1 className="font-bold text-[5.5vw] sm:text-[5vw] md:text-[3vw] lg:text-[3vw]">
              Why Choose Our Digital <br />
              Marketing Services?
            </h1>
            <p className="mt-2 text-[4.5vw] sm:text-[4vw] md:text-[1.2vw] lg:text-[1.2vw] text-[#373737]">
              Gain a competitive edge with our digital marketing services. From
              SEO to social media, we help you reach your audience and drive
              website traffic. With years of experience, our experts deliver
              results to boost your online presence, brand awareness, and sales.
              Trust us for effective strategies and maximum ROI.
            </p>
            <Link to="/Contact">
            <div className="px-24 md:px-2 pt-3 md:pt-0">
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
       <h1 className="font-titleFont font-extrabold text-[5vw] md:text-[3vw] text-center ">Attract more customers,generate leads! Our <br /> digital marketing services drive growth.</h1>
      <div className="block sm:block md:flex lg:flex mb-14 px-4">
          <div
            className="ml-1  md:m-3  mt-6 md:mt-4  w-[90vw]  md:w-[30vw] h-auto md:h-[45vh] p-4 sm:p-7 md:p-6 pt-10  rounded-lg shadow-2xl shadow-blue-100 items-center text-center hover:bg-blue-900 text-gray-500 hover:text-white"
            data-aos="flip-left"
          >
            <img
              src={Server}
              alt=""
              className="bg-[#5454D4] rounded-full py-2 px-2  ml-32 w-[15vw] sm:w-[15vw] md:w-[5vw] lg:w-[5.5vw] md:ml-14 lg:ml-32"
            />
            <h1 className="font-bold text-[5vw] sm:text-[5vw] md:text-[2vw] lg:text-[1.5vw] mt-3">
            Server Management
            </h1>
            <p className="text-[4vw] sm:text-[4vw] md:text-[1.5vw] lg:text-[1vw] mt-2">
            Ensure seamless digital marketing operations with expert server management services.
            </p>
          </div>
          <div
            className="ml-1 sm:ml-1 md:m-3 lg:m-3 mt-6 sm:mt-6 md:mt-4 lg:mt-4 w-[90vw] sm:w-[90vw] md:w-[30vw] lg:w-[30vw] h-auto md:h-[45vh] p-4 sm:p-7 md:p-6 lg:p-6 pt-10 rounded-lg shadow-2xl shadow-blue-100 items-center text-center hover:bg-blue-900 text-gray-500 hover:text-white"
            data-aos="flip-left"
          >
            <img
              src={Ecommerce}
              alt=""
              className="bg-[#5454D4] rounded-full py-2 px-2  ml-32 w-[15vw] sm:w-[15vw] md:w-[5vw] lg:w-[5.5vw] md:ml-14 lg:ml-32"
            />
            <h1 className="font-bold text-[5vw] sm:text-[5vw] md:text-[2vw] lg:text-[1.5vw] mt-3">
            E-commerce
            </h1>
            <p className="text-[4vw] sm:text-[4vw] md:text-[1.5vw] lg:text-[1vw] mt-2">
            Elevate your digital marketing strategy with ecommerce integration. From optimizing product listings to enhancing user experience.
            </p>
          </div>
          <div
            className="ml-1 sm:ml-1 md:m-3 lg:m-3 mt-6 sm:mt-6 md:mt-4 lg:mt-4 w-[90vw] sm:w-[90vw] md:w-[30vw] lg:w-[30vw] h-auto md:h-[45vh] p-4 sm:p-7 md:p-6 lg:p-6 pt-10 rounded-lg shadow-2xl shadow-blue-100 items-center text-center hover:bg-blue-900 text-gray-500  hover:text-white"
            data-aos="flip-left"
          >
            <img
              src={App}
              alt=""
              className="bg-[#5454D4] rounded-full py-2 px-2 ml-32 w-[15vw] sm:w-[15vw] md:w-[5vw] lg:w-[5.5vw] md:ml-14 lg:ml-32"
            />
            <h1 className="font-bold text-[5vw] sm:text-[5vw] md:text-[2vw] lg:text-[1.5vw] mt-3">
            App Development
            </h1>
            <p className="text-[4vw] sm:text-[4vw] md:text-[1.5vw] lg:text-[1vw] mt-2">
            Transform your digital marketing efforts with captivating book design services. From eye-catching covers to engaging interior layouts.

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
      <section className="flex flex-col md:flex-row w-full px-6 md:px-12 pb-8">
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

export default DigitalMarketing;
