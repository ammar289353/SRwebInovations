import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";
import "../App.css";
import Hero from "../images/sr-hero.jpg";
import heroblock from "../images/sr-block.png";
import herorocket from "../images/sr-rocket.png";
import herobulb from "../images/sr-bulb.png";
// Card Images
import GraphicImage from "../images/graphic.png";
import WebsiteImage from "../images/Website.png";
import MobileAppImage from "../images/Mobile App.jpg";
import VideoImage from "../images/video.png";
import DMImage from "../images/DM.png";
import SEOImage from "../images/Seo.png";
// Portfolio
import TexasLogo from "../images/txtogo.jpg";
import ASkillAdmin from "../images/1.jpeg";
import ASkillSite from "../images/2.jpeg";
import MoyenExpress from "../images/moyen-app.jpg";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  const cardsData = [
    {
      imageUrl: GraphicImage,
      title: "Graphic Design",
      description:
        "User experience (UX) and user interface (UI) design are critical components of any website or application. Our team of UI/UX designers will work with you to create a user-friendly.",
    },
    {
      imageUrl: WebsiteImage,
      title: "Webiste Development",
      description:
        "User experience (UX) and user interface (UI) design are critical components of any website or application. Our team of UI/UX designers will work with you to create a user-friendly.",
    },
    {
      imageUrl: MobileAppImage ,
      title: "Mobile App Development",
      description:
        "User experience (UX) and user interface (UI) design are critical components of any website or application. Our team of UI/UX designers will work with you to create a user-friendly.",
    },
    {
      imageUrl: VideoImage,
      title: "Video Animation",
      description:
        "User experience (UX) and user interface (UI) design are critical components of any website or application. Our team of UI/UX designers will work with you to create a user-friendly.",
    },
    {
      imageUrl: DMImage,
      title: "Digital Marketing",
      description:
        "User experience (UX) and user interface (UI) design are critical components of any website or application. Our team of UI/UX designers will work with you to create a user-friendly.",
    },
    {
      imageUrl: SEOImage,
      title: "SEO",
      description:
        "User experience (UX) and user interface (UI) design are critical components of any website or application. Our team of UI/UX designers will work with you to create a user-friendly.",
    },
  ];

  return (
    <>
      {/* Hero  */}
      <section className="block md:flex w-[100%] bg-slate-500 m-auto h-[46vw] mt-8 lg:mt-16">
        <div className="m-auto w-[80vw]">
          <h1 className="text-[4.5vw] mt-16 font-bold text-center">Shaping Tomorrow with State-of-the-Art Technology</h1>
          <h1 className="text-[#093D84] text-center font-bold text-[4vw]">IT COMPANY</h1>
          <button className="bg-[#093D84] text-[1.5vw] text-white p-3 border-2 rounded-[0.5vw] pr-4 pl-4 ml-[33vw]">Let's Get Started</button>
        </div>
      </section>
      {/* Block */}
      <section className="bg-white">
        <div className="w-[90vw] m-auto">
         <div className="flex pt-8">
          <h1 className="text-[4vw] font-bold ">Our Portfolio</h1>
          <span className="pt-8 border-b-2 border-gray-700 ml-32">
            <a href="" className="text-[1.3vw] font-semibold p-2 text-gray-800">Website</a>
            <a href="" className="text-[1.3vw] font-semibold p-2 text-gray-800">Logo</a>
            <a href="" className="text-[1.3vw] font-semibold p-2 text-gray-800">Branding</a>
            <a href="" className="text-[1.3vw] font-semibold p-2 text-gray-800">Animation</a>
            <a href="" className="text-[1.3vw] font-semibold p-2 text-gray-800">NET Design</a>
            <a href="" className="text-[1.3vw] font-semibold p-2 text-gray-800">Illustration</a>
            <a href="" className="text-[1.3vw] font-semibold p-2 text-gray-800">Social Media</a>
          </span>
         </div>
        </div>
      </section>
      {/* Moto */}
      {/* <section
        className="bg-[#0B488D] "
        data-aos="zoom-in-up"
        // style={{
        //   backgroundImage: `url(${Hero})`,
        //   backgroundSize: "cover",
        //   opacity: 0.6,
        // }}
      >
        <div className="md:flex pb-12 text-white">
          <div className="md:w-[50%] pt-12 md:pt-32 px-8">
            <p>WE ARE</p>
            <h1 className="text-[3vw] font-extrabold">
              Equipping our Varied Client Base to Harness Cutting-Edge
              Technology and Unlock Fresh Business Prospects.
            </h1>
          </div>
          <div className="md:w-[50%] pt-12 md:pt-20 px-12">
            <p className="text-[3vw] md:text-[1.7vw] lg:text-[1.3vw] ">
              At SR Innovations, we recognize the ever-evolving nature of
              technology and the paramount importance of staying ahead. That's
              why we're passionately committed to empowering our diverse
              clientele with the tools to harness the latest advancements and
              seize new business horizons. Whether it's crafting responsive
              websites, mobile apps, delving into cloud computing, artificial
              intelligence, or any other pioneering technology, we're dedicated
              to ensuring our clients lead the charge in their respective
              industries.
              <br />
              <br />
              We're driven by a deep passion for guiding our clients towards
              harnessing technology for transformative business outcomes. Our
              seasoned team collaborates closely with each client, delving into
              their distinctive requirements to craft tailor-made solutions that
              align with their objectives. Through our cutting-edge offerings,
              clients can optimize their operations, enhance efficiency, and tap
              into fresh revenue channels, all while maintaining a competitive
              edge. If you're poised to elevate your business to unprecedented
              heights of success, we're poised to support you at every stage of
              your journey.
            </p>
          </div>
        </div>
        <hr />
        <div className="flex justify-between px-4 md:px-24 py-12 text-white">
          <div>
            <h1 className="text-[6vw] md:text-[3vw] font-bold ">14K+</h1>
            <p>Project Done</p>
          </div>
          <div>
            <h1 className="text-[6vw] md:text-[3vw]  font-bold ">12K+</h1>
            <p>Happy customer</p>
          </div>
          <div>
            <h1 className="text-[6vw] md:text-[3vw]  font-bold ">4.7</h1>
            <p>Review customer</p>
          </div>
          <div>
            <h1 className="text-[6vw] md:text-[3vw]  font-bold ">15+</h1>
            <p>Years Experience</p>
          </div>
        </div>
      </section> */}
      {/* OUR WORK PORTFOLIO */}
      <section className="bg-[#F0F6FB] w-full md:pb-5 md:h-auto lg:h-[60vw]" data-aos="zoom-in-up">
        <div className="lg:flex md:flex sm:block w-[92vw] m-auto sm:ml-10">
          <div className="sm:w-full lg:w-[50vw] sm:pt-3 pt-7">
            <p className="font-semibold md:text-[1vw] text-[#05185A] sm:pt-16 md:pt-14 lg:pt-16">
              OUR WORK PORTFOLIO
            </p>
            <h1 className="text-[5vw] sm:text-[4vw] md:text-[4vw] lg:text-4xl font-bold pt-3 text-[#05185A]">
              Discover Our Portfolio Highlighting Our Expertise and Creativity
            </h1>
            <p className="md:text-[1.3vw] lg:text-[1vw] pt-4">
              Explore our portfolio for a showcase of our expertise and
              innovative solutions, demonstrating our commitment to excellence
              in every project.lvinar dapibus leo.
            </p>
           <Link to="/Portfolio">
           <button className="bg-blue-700 border rounded-full p-2 text-white pl-7 pr-7 mt-10">
              Explore More
            </button>
            </Link>
            <div className="sm:block lg:flex md:flex mt-8 w-[100%]">
              <div className=" mr-4 w-[50%]">
                <img
                  src={TexasLogo}
                  alt=""
                />
              </div>
              <div className="mt-4 sm:mt-4 md:mt-0 w-[50%]">
                <img
                  src={ASkillAdmin}
                  alt=""
                />
                <br />
                <img
                  src={ASkillSite}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="mt-3 sm:mt-5 pb-5 md:mt-10 lg:mt-16 lg:ml-7 md:ml-5">
            <img
              src={MoyenExpress}
              alt=""
              className="md:h-[70vw] lg:h-[50vw] sm:h-[70vw] sm:w-[70vw] md:w-[70vw] lg:w-[50vw]"
            />
          </div>
        </div>
      </section>
      {/* Cards  */}
      <section className="bg-[#FFFFFF] w-full h-auto md:h-auto lg:h-[86vw]">
        <div className="w-[93vw] m-auto pt-[5vw]" data-aos="fade-down">
          <p className="text-black text-center font-semibold">WHAT WE OFFER</p>
          <h1 className="text-center text-[3vw] font-bold">
            Bridging Technology and <br /> Business.
          </h1>
        </div>
        <div
          className="item-center px-4 sm:m-auto sm:ml-20 md:ml-0 ml-3 lg:ml-0 md:px-10 py-2 pt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-5 lg:gap-8"
          data-aos="zoom-in-up"
        >
          {cardsData.map((service, index) => (
            <div
              key={index}
              className="shadow-2xl text-black hover:text-white bg-[#fff] hover:bg-[#093E86] shadow-slate-400 pb-4 sm:w-[70vw] md:w-[43vw] lg:w-[30vw] md:h-auto lg:h-[30vw] mb-4"
            >
              <img
                className="pt-12 px-36 w-[390px] ml-0 sm:ml-10 sm:w-[385px] md:ml-1 md:w-[370px] lg:w-[380px]"
                src={service.imageUrl}
                alt=""
              />
              <div>
                <h1 className=" text-center font-bold text-[4vw] md:text-[3vw] lg:text-[2vw] pt-3 ">
                  {service.title}
                </h1>
                <p className="text-[3vw] pt-3 sm:text-[2vw] md:text-[2vw] lg:text-[1vw] px-12 ">
                  {service.description}
                </p>
              </div>
              <div className="text-center pt-6">
                <button className=" hover:text-white border-[2px] border-blue-800 hover:border-white rounded-full bg-[#ffff] hover:bg-[#093E86] text-black px-5 py-1 border-rounded-lg ">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* TESTIMONIAL */}
      <section className="bg-[#D9EAF7] w-full h-auto" data-aos="zoom-in-up">
        <div className="w-[90vw] sm:w-[90vw] md:w-[90vw] lg:w-[90vw] m-auto pb-20">
          <div className="block sm:block md:flex lg:flex pt-10 sm:pt-10 md:pt-20 lg:pt-20">
            <div className="w-[80vw] sm:w-[70vw] md:w-[35vw] lg:w-[30vw] m-auto">
              <p className="text-black text-[3vw] sm:text-[3vw] md:text-[1vw] lg:text-[1vw] font-semibold">
                TESTIMONIAL
              </p>
              <h1 className="text-black text-[4vw] sm:text-[4vw] md:text-[3vw] lg:text-[3vw] font-bold">
                What They Say About Us
              </h1>
              <p className="text-[##7A5353]  text-[3vw] sm:text-[3vw] md:text-[1vw] lg:text-[1vw]]">
                We've cemented our position as a premier provider of
                cutting-edge technology solutions. Leveraging our
                state-of-the-art services, we can assist you in achieving your
                goals.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-[60vw] m-auto">
              <div className=" w-[55vw] h-auto sm:w-[40vw] sm:h-[35vw] md:w-[30vw] md:h-[25vw] lg:w-[30vw] lg:h-[25vw] mr-3 bg-white rounded-lg p-6 mt-6 sm:mt-6 md:mt-0 lg:mt-0">
                <p className="text-[#8d8b8b] text-[3vw] sm:text-[3vw] md:text-[1vw] lg:text-[1vw]">
                  chiGems Pakistan has been a game-changer for our digital
                  marketing efforts. They have helped us increase our online
                  visibility, drive more traffic to our website, and generate
                  more leads. Their team is knowledgeable, creative, and always
                  willing to go above and beyond to ensure our success. We
                  highly recommend their digital marketing services to anyone
                  looking to take their online presence to the next level.
                </p>
                <div className="flex">
                  <img
                    src="https://techigems.pk/wp-content/uploads/2024/02/img__0007_Layer-1.jpg"
                    alt=""
                    className="rounded-full w-14 mt-2"
                  />
                  <div>
                    <h1 className="text-blue-900 text-[3vw] sm:text-[3vw] md:text-[1.4vw] lg:text-[1.4vw] font-bold ml-10 mt-3">
                      Mark Johnson
                    </h1>
                    <p className="text-blue-700 text-[2vw] sm:text-[2vw] md:text-[1vw] lg:text-[1vw] font-semibold ml-10">
                      Business manager
                    </p>
                  </div>
                </div>
              </div>
              <div className=" w-[55vw] h-auto sm:w-[40vw] sm:h-[35vw] md:w-[30vw] md:h-[25vw] lg:w-[30vw] lg:h-[25vw] bg-white rounded-lg p-6 mt-4 sm:mt-4 md:mt-0 lg:mt-0 md:ml-4 lg:ml-5">
                <p className="text-[#8d8b8b] text-[3vw] sm:text-[3vw] md:text-[1vw] lg:text-[1vw]">
                  chiGems Pakistan has been a game-changer for our digital
                  marketing efforts. They have helped us increase our online
                  visibility, drive more traffic to our website, and generate
                  more leads. Their team is knowledgeable, creative, and always
                  willing to go above and beyond to ensure our success. We
                  highly recommend their digital marketing services to anyone
                  looking to take their online presence to the next level.
                </p>
                <div className="flex">
                  <img
                    src="https://techigems.pk/wp-content/uploads/2024/02/img__0007_Layer-1.jpg"
                    alt=""
                    className="rounded-full w-14 mt-2"
                  />
                  <div>
                    <h1 className="text-blue-900 text-[3vw] sm:text-[3vw] md:text-[1.4vw] lg:text-[1.4vw] font-bold ml-10 mt-3">
                      Mark Johnson
                    </h1>
                    <p className="text-blue-700 text-[2vw] sm:text-[2vw] md:text-[1vw] lg:text-[1vw] font-semibold ml-10">
                      Business manager
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
