import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Form from "../components/Form";
// hero images
import vector13 from "../images/Vector 13.png";
import circle from "../images/circle.png";
import Triangle from "../images/tri.png";
import add from "../images/add.png";
// We Are 
import Image40 from "../images/image 40.png";
import Image42 from "../images/image 42.png";
// Cards
import Quilt from "../images/View Quilt.png"
import DevSkill from "../images/Development Skill.png"
import Vision from "../images/Vision.png"
// Slider
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/autoplay"; 
import { FreeMode, Pagination, Autoplay } from "swiper/modules";

const About = () => {
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
            ABOUT US
          </p>
          
            <h1
              className="text-white justify-center text-center text-[6vw] px-24 md:px-96 font-titleFont md:text-[4vw] font-extrabold"
            >
              We Deploy Precise  <span className="text-[#5454D4]">Technology </span> Solutions
            </h1>
            <div className="flex justify-between">
            <img className="px-3 md:px-48" src={Triangle} alt="" />
            <img className="pr-4 md:pr-44" src={add} alt="" />
            </div>
        </div>
      </section>
      {/* Our value */}
      <section className=" pb-12 sm:pb-12 md:pb-0 lg:pb-0 ">
        <div className="w-[94vw] h-auto sm:h-auto md:h-auto lg:h-auto m-auto">
          <div className="block sm:block md:flex lg:flex">
            <div
              className="w-[80vw] sm:w-[85vw] md:w-[40vw] lg:w-[40vw] pt-14 m-auto sm:m-auto"
              data-aos="zoom-in"
            >
              <p className="font-semibold text-[4.5vw] sm:text-[4.5vw] md:text-[2vw] lg:text-[1vw]">
                Our value
              </p>
              <h1 className="text-[5vw] sm:text-[5vw] md:text-[3vw] lg:text-[3vw] font-bold pt-2 text-[#05185A]">
                The Intersection of Technology, Creativity, and Innovation
              </h1>
              <p className="text-gray-500 pt-2">
                We're a team of tech-savvy professionals committed to
                simplifying business operations through the dynamic force of
                technology. Our mission is to equip you with cutting-edge
                technological advancements through our innovative solutions
                tailored to your unique requirements. With our expertise and
                customer-centric approach, we aim to actualize your ideas and
                propel you towards accomplishing your business objectives.
              </p>
            </div>
            <div className="w-[80vw] sm:w-[85vw] md:w-[30vw] lg:w-[30vw] pt-10">
              <div
                className="w-[93vw] h-auto sm:w-[40vw] sm:h-auto md:w-[26vw] md:h-auto lg:w-[26vw] lg:h-auto bg-white rounded-lg p-5 sm:p-5 md:p-8 lg:p-8 hover:bg-[#093E86] text-gray-600 hover:text-white shadow-2xl shadow-blue-100"
                data-aos="flip-left"
              >
                <img
                  src="https://techigems.pk/wp-content/uploads/2024/02/aboutx11.png"
                  alt=""
                />
                <h1 className="pt-4 font-bold text-[5vw] sm:text-[5vw] md:text-[2vw] lg:text-[2vw]">
                  Mission
                </h1>
                <p className="pt-4 text-[3vw] sm:text-[2.5vw] md:text-[1.2vw] lg:text-[1.2vw]">
                  Our mission is to equip businesses with pioneering technology
                  solutions.
                </p>
              </div>
              <div
                className="w-[93vw] mt-3 sm:mt-4 md:mt-4 lg:mt-4 h-auto sm:w-[40vw] sm:h-auto md:w-[26vw] md:h-auto lg:w-[26vw] lg:h-auto bg-white rounded-lg p-5 sm:p-5 md:p-8 lg:p-8  hover:bg-[#093E86] text-gray-600 hover:text-white shadow-2xl shadow-blue-100"
                data-aos="flip-left"
              >
                <img
                  src="https://techigems.pk/wp-content/uploads/2024/02/aboutx3.png"
                  alt=""
                />
                <h1 className="pt-4 font-bold text-[5vw] sm:text-[5vw] md:text-[2vw] lg:text-[2vw]">
                  Vision
                </h1>
                <p className="pt-4 text-[3vw] sm:text-[2.5vw] md:text-[1.2vw] lg:text-[1.2vw]">
                  Our vision is to foster a world where technology empowers each
                  individual.
                </p>
              </div>
            </div>
            <div className="w-[30vw] pt-6 sm:pt-6 md:pb-10 md:pt-20 lg:pt-20">
              <div
                className="w-[93vw] h-auto sm:w-[40vw] sm:h-auto md:w-[26vw] md:h-auto lg:w-[26vw] lg:h-auto bg-white rounded-lg p-5 sm:p-5 md:p-8 lg:p-8 hover:bg-[#093E86] text-gray-600 hover:text-white
                shadow-2xl shadow-blue-100"
                data-aos="flip-right"
              >
                <img
                  src="https://techigems.pk/wp-content/uploads/2024/02/aboutx2.png"
                  alt=""
                />
                <h1 className="pt-4 font-bold text-[5vw] sm:text-[5vw] md:text-[2vw] lg:text-[2vw]">
                  Value
                </h1>
                <p className="pt-4 text-[3vw] sm:text-[2.5vw] md:text-[1.2vw] lg:text-[1.2vw]">
                  Integrity, innovation, and excellence are core values that
                  guide all our endeavors.
                </p>
              </div>
              <div
                className="w-[93vw] h-auto sm:w-[40vw] sm:h-auto md:w-[26vw] md:h-auto lg:w-[26vw] lg:h-auto bg-white rounded-lg p-5 sm:p-5 md:p-8 lg:p-8 hover:bg-[#093E86] text-gray-600 hover:text-white mt-3 sm:mt-4 md:mt-4 lg:mt-4 shadow-2xl shadow-blue-100"
                data-aos="flip-right"
              >
                <img
                  src="https://techigems.pk/wp-content/uploads/2024/02/aboutx4.png"
                  alt=""
                />
                <h1 className="pt-4 font-bold text-[5vw] sm:text-[5vw] md:text-[2vw] lg:text-[2vw] ">
                  Purpose
                </h1>
                <p className="pt-4 text-[3vw] sm:text-[2.5vw] md:text-[1.2vw] lg:text-[1.2vw]">
                  Our purpose is to bridge the divide between technology and
                  humanity, fostering simpler and more efficient operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* WE ARE  */}
      <section data-aos="zoom-in-up">
      <div className="flex flex-col-reverse md:flex-row pt-4 bg-[#2A2A2A] pb-8 ">
      <div className="pt-8 px-4">
        <img className="rounded-lg" src={Image40} alt="" />
      </div>
      <div className="pt-8 px-12 md:w-[50%]">
          <div>
            <span className="text-white font-medium">We Are</span>
            <h1 className="text-[6vw] text-white lg:text-[3vw] font-extrabold font-titleFont">
             Equipping Our Varied{" "}
              Client Base to Harness Cutting
            </h1>
          </div>
          <div className="pt-2 font-bodyFont text-white">
            <p>
            At SR Innovations, we recognize the ever-evolving nature of technology and the paramount importance of staying ahead. That's why we're passionately committed to empowering our diverse clientele with the tools to harness the latest advancements and seize new business horizons.
            </p>
            
          </div>
      </div>
      
      </div>
      </section>
      {/* Numbers */}
      <section>
      <div className="mt-5 sm:mt-5 md:mt-9 lg:mt-10 font-titleFont">
            <div className="px-4 w-full md:w-[80vw] m-auto flex justify-between pb-5 sm:pb-5 pt-7 sm:pt-7 md:pt-7 lg:pt-7">
              <div className="text-[#5454D4]">
                <h1 className="text-[8vw] sm:text-[3.4vw] md:text-[4vw]  font-extrabold">
                  14K+
                </h1>
                <p className="text-[2vw] sm:text-[1.8vw] md:text-[1vw] font-bold font-bodyFont text-black">
                  Project Done
                </p>
              </div>
              <div className="text-[#5454D4]">
                <h1 className="text-[8vw] sm:text-[3.4vw] md:text-[4vw]  font-extrabold">
                  12K+
                </h1>
                <p className="text-[2vw] sm:text-[1.8vw] md:text-[1vw] font-bold font-bodyFont text-black">
                  Happy customer
                </p>
              </div>
              <div className="text-[#5454D4]">
                <h1 className="text-[8vw] sm:text-[3.4vw] md:text-[4vw] font-extrabold">
                  4.7
                </h1>
                <p className="text-[2vw] sm:text-[1.8vw] md:text-[1vw] font-bold font-bodyFont text-black">
                  Review customer
                </p>
              </div>
              <div className="text-[#5454D4]">
                <h1 className="text-[8vw] sm:text-[3.4vw] md:text-[4vw]  font-extrabold">
                  15+
                </h1>
                <p className="text-[2vw] sm:text-[1.8vw] md:text-[1vw] font-bold font-bodyFont text-black">
                  Years Experience
                </p>
              </div>
            </div>
          </div>
      </section>
      {/* OUR PEOPLE-FIRST APPROACH  */}
      <section data-aos="zoom-in-up">
      <div className="flex flex-col-reverse md:flex-row pt-4 bg-[#2A2A2A] pb-8 ">
      <div className="pt-8 px-4">
        <img className="rounded-lg" src={Image42} alt="" />
      </div>
      <div className="pt-8 px-12 md:w-[50%]">
          <div>
            <span className="text-white font-medium">Our People First Approach</span>
            <h1 className="text-[6vw] text-white md:text-[3vw] font-extrabold font-titleFont">
             We prioritize the well-being{" "}
              and Success of our employees 
            </h1>
          </div>
          <div className="pt-2 font-bodyFont text-white">
            <p>
            At SR Innovations, we hold the belief that our people are our most valuable asset. This is why we prioritize our employees, placing their well-being and success at the forefront of our endeavors
            we recognize the ever-evolving nature of technology and the paramount importance of staying ahead. 
            </p>
            
          </div>
      </div>
      
      </div>
      </section>
      {/* Cards  */}
      <section className="pt-12">
      <div className="block sm:block md:flex lg:flex mb-14 px-4">
          <div
            className="ml-1  md:m-3  mt-6 md:mt-4  w-[90vw]  md:w-[30vw] h-auto md:h-[40vh] p-4 sm:p-7 md:p-6 pt-10  rounded-lg shadow-2xl shadow-blue-100 items-center text-center hover:bg-blue-900 text-gray-500 hover:text-white"
            data-aos="flip-left"
          >
            <img
              src={Quilt}
              alt=""
              className="bg-[#5454D4] rounded-full py-2 px-2  ml-32 w-[15vw] sm:w-[15vw] md:w-[5vw] lg:w-[5.5vw] md:ml-14 lg:ml-32"
            />
            <h1 className="font-bold text-[5vw] sm:text-[5vw] md:text-[2vw] lg:text-[1.5vw] mt-3">
            3345+ Projects Delivered
            </h1>
            <p className="text-[4vw] sm:text-[4vw] md:text-[1.5vw] lg:text-[1vw] mt-2">
            From marketing to development, and IT services, we empower our diverse clientele with top-notch solutions.
            </p>
          </div>
          <div
            className="ml-1 sm:ml-1 md:m-3 lg:m-3 mt-6 sm:mt-6 md:mt-4 lg:mt-4 w-[90vw] sm:w-[90vw] md:w-[30vw] lg:w-[30vw] h-auto md:h-[40vh] p-4 sm:p-7 md:p-6 lg:p-6 pt-10 rounded-lg shadow-2xl shadow-blue-100 items-center text-center hover:bg-blue-900 text-gray-500 hover:text-white"
            data-aos="flip-left"
          >
            <img
              src={DevSkill}
              alt=""
              className="bg-[#5454D4] rounded-full py-2 px-2  ml-32 w-[15vw] sm:w-[15vw] md:w-[5vw] lg:w-[5.5vw] md:ml-14 lg:ml-32"
            />
            <h1 className="font-bold text-[5vw] sm:text-[5vw] md:text-[2vw] lg:text-[1.5vw] mt-3">
            Decades of Expertise
            </h1>
            <p className="text-[4vw] sm:text-[4vw] md:text-[1.5vw] lg:text-[1vw] mt-2">
            With years of industry experience, we've been delivering tailored solutions to businesses of all sizes..
            </p>
          </div>
          <div
            className="ml-1 sm:ml-1 md:m-3 lg:m-3 mt-6 sm:mt-6 md:mt-4 lg:mt-4 w-[90vw] sm:w-[90vw] md:w-[30vw] lg:w-[30vw] h-auto md:h-[40vh] p-4 sm:p-7 md:p-6 lg:p-6 pt-10 rounded-lg shadow-2xl shadow-blue-100 items-center text-center hover:bg-blue-900 text-gray-500  hover:text-white"
            data-aos="flip-left"
          >
            <img
              src={Vision}
              alt=""
              className="bg-[#5454D4] rounded-full py-2 px-2 ml-32 w-[15vw] sm:w-[15vw] md:w-[5vw] lg:w-[5.5vw] md:ml-14 lg:ml-32"
            />
            <h1 className="font-bold text-[5vw] sm:text-[5vw] md:text-[2vw] lg:text-[1.5vw] mt-3">
            Visionary Innovators
            </h1>
            <p className="text-[4vw] sm:text-[4vw] md:text-[1.5vw] lg:text-[1vw] mt-2">
            Comprising experienced professionals, our team is committed to achieving success for our clients..

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

export default About;
