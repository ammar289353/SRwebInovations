import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import backgroundImage from "../images/Sr-Particle.jpg";
import GraphicService from "../images/graphic-service.png";
import logodesign from "../images/logodesign.png";
import uiux from "../images/uiux.png";
import branding from "../images/branding.png";
import Group from "../images/Group.png";

const Graphic = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <section data-aos="zoom-in-up">
        <div
          className="h-[75vw] sm:h-[45vw] md:h-[45vw] lg:h-[40vw] w-full text-center relative overflow-hidden"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
          }}
          onMouseEnter={handleHover}
          onMouseLeave={handleMouseLeave}
        >
          <p className="text-white text-center pt-[30vw] sm:pt-[20vw] md:pt-44 lg:pt-44 text-[2.5vw] sm:text-[1vw] md:text-[1vw] lg:text-[1vw] ">
            SR Innovations
          </p>
          <div
            className={`absolute top-[36vw] md:top-[16vw] mr-0 sm:mr-[8vw] md:mr-[8vw] lg:mr-4 transform transition-transform ${
              isHovered ? "-translate-y-2" : ""
            } ${isHovered ? "left-[38%]" : "right-[30%]"}`}
          >
            <h1
              className={`text-white text-center text-[6vw] font-bold ${
                isHovered ? "hovered" : ""
              }`}
              onMouseEnter={handleHover}
              onMouseLeave={handleMouseLeave}
            >
              Graphic Design
            </h1>
          </div>
          <p className="text-white text-[2vw] px-3 md:px-24 md:text-[1.1vw] text-center mt-[15vw] md:mt-40">
            WE OFFER A WIDE RANGE OF SERVICES TO HELP YOU CREATE A UNIQUE AND
            PROFESSIONAL VISUAL IDENTITY FOR YOUR BUSINESS. OUR TEAM OF
            EXPERIENCED DESIGNERS IS DEDICATED TO CREATING STUNNING DESIGNS THAT
            WILL MAKE YOUR BRAND STAND OUT  FROM THE REST.
          </p>
        </div>
      </section>
      <section className="w-[94vw] m-auto mb-10 mt-10">
        <div className="block sm:block md:flex lg:flex">
          <div
            className="w-[90vw] sm:w-[90vw] md:w-[50vw] lg:w-[50vw]"
            data-aos="flip-left"
          >
            <img src={GraphicService} alt="" />
          </div>
          <div
            className="w-[90vw] sm:w-[90vw] md:w-[50vw] lg:w-[50vw] ml-0 sm:ml-0 md:ml-10 lg:ml-10 mt-10 sm:mt-10 md:mt-28 lg:mt-30 text-center sm:text-center md:text-start lg:text-start"
            data-aos="flip-right"
          >
            <p className="font-semibold text-[3.5vw] sm:text-[3vw] md:text-[1vw] lg:text-[1vw]">
              GRAPHIC DESIGN
            </p>
            <h1 className="font-bold text-[5.5vw] sm:text-[5vw] md:text-[3vw] lg:text-[3vw]">
              Get A Custom Design <br /> For Your Brand
            </h1>
            <p className="mt-2 text-[4.5vw] sm:text-[4vw] md:text-[1.2vw] lg:text-[1.2vw] text-gray-400">
              "A dynamic collage of vibrant and visually appealing graphic
              design elements showcasing various aspects of our services,
              including logo design, branding, social media design, and UI/UX
              design. Our team's expertise in crafting compelling visuals is
              highlighted, emphasizing our ability to create a strong and
              effective visual identity for businesses. Trust us to captivate
              your target audience with stunning designs tailored to elevate
              your brand."
            </p>
            <button className="bg-blue-800 text-white text-[4vw] sm:text-[4vw] md:text-[1.5vw] lg:text-[1.5vw] rounded-full p-2 pl-14 sm:pl-14 md:pl-10 lg:pl-10 pr-14 sm:pr-14 md:pr-10 lg:pr-10 mt-4 mb-4">
              Get Started
            </button>
          </div>
        </div>
      </section>
      <section className="w-[90vw] m-auto">
        <div className="block sm:block md:flex lg:flex mb-14">
          <div
            className="mt-10 w-[90vw] sm:w-[90vw] text-center sm:text-center md:text-start lg:text-start"
            data-aos="fade-down"
          >
            <p className="font-semibold text-[4.5vw] sm:text-[4.5vw] md:text-[1vw] lg:text-[1vw]">
              GRAPHIC DESIGN
            </p>
            <h1 className="font-bold text-[4.5vw] sm:text-[4vw] md:text-[2.5vw] lg:text-[2.5vw] mt-2 text-gray-800">
              Create A Strong Brand Identity With Our <br /> Professional
              Graphic Design Services!
            </h1>
            <button className="bg-blue-800 text-white text-[4vw] sm:text-[4vw] md:text-[1.5vw] lg:text-[1.5vw] rounded-full p-2 pl-14 sm:pl-14 md:pl-10 lg:pl-10 pr-14 sm:pr-14 md:pr-10 lg:pr-10 mt-4 mb-4">
              Get Started
            </button>
          </div>
          <div
            className="ml-1 sm:ml-1 md:m-3 lg:m-3 mt-6 sm:mt-6 md:mt-4 lg:mt-4 w-[90vw] sm:w-[90vw] md:w-[35vw] lg:w-[40vw] h-auto sm:h-auto md:h-auto lg:h-auto p-4 sm:p-7 md:p-6 lg:p-6 pt-10 rounded-lg shadow-2xl shadow-slate-400 items-center text-center hover:bg-blue-900 text-gray-500 hover:text-white"
            data-aos="flip-left"
          >
            <img
              src={logodesign}
              alt=""
              className="sm:ml-60 ml-40 w-[15vw] sm:w-[15vw] md:w-[5vw] lg:w-[5.5vw] md:ml-0 lg:ml-24"
            />
            <h1 className="font-bold text-[5vw] sm:text-[5vw] md:text-[2vw] lg:text-[1.5vw] mt-3">
              Logo Design
            </h1>
            <p className="text-[4vw] sm:text-[4vw] md:text-[1.5vw] lg:text-[1vw] mt-2">
              A sleek and modern logo design featuring bold typography and
              distinctive graphical elements, symbolizing the essence of your
              brand. Our team of dedicated logo designers collaborates closely
              with you to understand your business, target audience, and vision,
              ensuring the creation of a custom logo that resonates with your
              brand identity. Elevate your brand with a unique and captivating
              logo designed specifically for you. Contact us today to get
              started.
            </p>
          </div>
        </div>
        <div className="block sm:block md:flex lg:flex mb-14">
          <div
            className="ml-1 sm:ml-1 md:m-3 lg:m-3 mt-6 sm:mt-6 md:mt-4 lg:mt-4 w-[90vw] sm:w-[90vw] md:w-[30vw] lg:w-[30vw] h-auto sm:h-auto md:h-auto lg:h-auto p-4 sm:p-7 md:p-6 lg:p-6 pt-10 rounded-lg shadow-2xl shadow-slate-400 items-center text-center hover:bg-blue-900 text-gray-500 hover:text-white"
            data-aos="flip-left"
          >
            <img
              src={uiux}
              alt=""
              className="sm:ml-60 ml-44 w-[15vw] sm:w-[15vw] md:w-[5vw] lg:w-[5.5vw] md:ml-14 lg:ml-32"
            />
            <h1 className="font-bold text-[5vw] sm:text-[5vw] md:text-[2vw] lg:text-[1.5vw] mt-3">
              UI/UX
            </h1>
            <p className="text-[4vw] sm:text-[4vw] md:text-[1.5vw] lg:text-[1vw] mt-2">
              A minimalist and intuitive user interface (UI) design that
              prioritizes user experience (UX) to deliver seamless interactions
              and enhanced usability. Our UI/UX designers meticulously craft
              every detail to ensure optimal functionality and aesthetic appeal,
              catering to the needs and preferences of your target audience. Let
              our expert team transform your digital platform into an engaging
              and user-friendly experience that leaves a lasting impression.
              Elevate your brand with exceptional UI/UX design today
            </p>
          </div>
          <div
            className="ml-1 sm:ml-1 md:m-3 lg:m-3 mt-6 sm:mt-6 md:mt-4 lg:mt-4 w-[90vw] sm:w-[90vw] md:w-[30vw] lg:w-[30vw] h-auto sm:h-auto md:h-auto lg:h-auto p-4 sm:p-7 md:p-6 lg:p-6 pt-10 rounded-lg shadow-2xl shadow-slate-400 items-center text-center hover:bg-blue-900 text-gray-500 hover:text-white"
            data-aos="flip-left"
          >
            <img
              src={branding}
              alt=""
              className="sm:ml-60 ml-44 w-[15vw] sm:w-[15vw] md:w-[5vw] lg:w-[5.5vw] md:ml-14 lg:ml-32"
            />
            <h1 className="font-bold text-[5vw] sm:text-[5vw] md:text-[2vw] lg:text-[1.5vw] mt-3">
              Branding Design
            </h1>
            <p className="text-[4vw] sm:text-[4vw] md:text-[1.5vw] lg:text-[1vw] mt-2">
              A comprehensive branding design package tailored to establish a
              cohesive and impactful brand identity for your business. Our team
              of branding specialists delves deep into your brand ethos, values,
              and target market to craft a unique and memorable brand identity
              that resonates with your audience. From logo design to color
              palette selection and brand messaging, we ensure consistency
              across all touchpoints to leave a lasting impression. Let us
              elevate your brand presence with our strategic and creative
              branding solutions.
            </p>
          </div>
          <div
            className="ml-1 sm:ml-1 md:m-3 lg:m-3 mt-6 sm:mt-6 md:mt-4 lg:mt-4 w-[90vw] sm:w-[90vw] md:w-[30vw] lg:w-[30vw] h-auto sm:h-auto md:h-auto lg:h-auto p-4 sm:p-7 md:p-6 lg:p-6 pt-10 rounded-lg shadow-2xl shadow-slate-400 items-center text-center hover:bg-blue-900 text-gray-500  hover:text-white"
            data-aos="flip-left"
          >
            <img
              src={Group}
              alt=""
              className="sm:ml-60 ml-44 w-[15vw] sm:w-[15vw] md:w-[5vw] lg:w-[5.5vw] md:ml-14 lg:ml-32"
            />
            <h1 className="font-bold text-[5vw] sm:text-[5vw] md:text-[2vw] lg:text-[1.5vw] mt-3">
              Social Media Design
            </h1>
            <p className="text-[4vw] sm:text-[4vw] md:text-[1.5vw] lg:text-[1vw] mt-2">
              Eye-catching and dynamic social media design solutions crafted to
              amplify your brand's online presence and engage your audience
              effectively. Our team of creative designers specializes in
              creating captivating visuals tailored for various social media
              platforms. From compelling graphics to engaging animations, we
              ensure that your social media content stands out amidst the
              digital noise. Let us help you make a memorable impression and
              drive meaningful interactions with your audience through
              innovative social media design.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Graphic;
