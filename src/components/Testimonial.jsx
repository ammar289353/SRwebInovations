import React from 'react'

// Slider
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";

// Testimonial
import T1 from "../images/testimonial 1.png"
import T2 from "../images/Cordelia.webp"
import T3 from "../images/Marlene Martins.png"
import T4 from "../images/testimonial 2.png"
import T5 from "../images/Testimonial 5.png"

const Testimonial = () => {

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
                    <div className="flex pt-2 xl:pt-">
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
    </>
  )
}

export default Testimonial