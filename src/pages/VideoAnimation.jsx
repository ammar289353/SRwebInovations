import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import backgroundImage from "../images/Sr-Particle.jpg";
import VideoService from "../images/Video-Service.png";
import TwoD from "../images/2D.png";
import ThreeD from "../images/3D.png";
import Motiion from "../images/Motion.png";
import Explainer from "../images/Explainer.png";

const VideoAnimation = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <>
      <section data-aos="zoom-in-up">
        <div
          className="h-[75vw] sm:h-[45vw] md:h-[45vw] lg:h-[40vw] w-full text-center relative overflow-hidden"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
          }}
        >
          <p className="text-white text-center pt-[30vw]  md:pt-[15vw] text-[2.5vw] sm:text-[1vw] md:text-[1vw] lg:text-[1vw] ">
            SR Innovations
          </p>
          <div className="top-[36vw] md:top-[16vw] mr-0  md:text-center transform transition-transform">
            <h1 className="text-white text-center text-[4vw] font-bold">
             Video Animation
            </h1>
          </div>
          <p className="text-white text-[2vw] px-3 md:px-24 md:text-[1.1vw] text-center mt-8">
            WE OFFER A WIDE RANGE OF SERVICES TO HELP YOU CREATE A UNIQUE AND
            PROFESSIONAL VISUAL IDENTITY FOR YOUR BUSINESS. OUR TEAM OF
            EXPERIENCED DESIGNERS IS DEDICATED TO CREATING STUNNING DESIGNS THAT
            WILL MAKE YOUR BRAND STAND OUT FROM THE REST.
          </p>
        </div>
      </section>
      <section className="w-[94vw] m-auto mb-10 mt-10">
        <div className="block sm:block md:flex lg:flex">
          <div
            className="w-[90vw] sm:w-[90vw] md:w-[50vw] lg:w-[50vw]"
            data-aos="flip-left"
          >
            <img src={VideoService} alt="" />
          </div>
          <div
            className="w-[90vw] sm:w-[90vw] md:w-[50vw] lg:w-[50vw] ml-0 sm:ml-0 md:ml-10 lg:ml-10 mt-10 sm:mt-10 md:mt-28 lg:mt-30 text-center sm:text-center md:text-start lg:text-start"
            data-aos="flip-right"
          >
            <p className="font-semibold text-[3.5vw] sm:text-[3vw] md:text-[1vw] lg:text-[1vw]">
              Video Animation
            </p>
            <h1 className="font-bold text-[5.5vw] sm:text-[5vw] md:text-[3vw] lg:text-[3vw]">
              Deliver your message effectively and engage more customers with
              our expert services.
            </h1>
            <p className="mt-2 text-[4.5vw] sm:text-[4vw] md:text-[1.2vw] lg:text-[1.2vw] text-gray-400">
              Unlock the power of video marketing with our animation services.
              We create visually captivating content that engages your audience
              and effectively conveys your message. From promotional videos to
              explainer animations, we offer a range of services to meet your
              marketing goals. Let our skilled team elevate your online presence
              with compelling video content
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
              Video Animation
            </p>
            <h1 className="font-bold text-[4.5vw] sm:text-[4vw] md:text-[2.5vw] lg:text-[2.5vw] mt-2 text-gray-800">
            Keep your audience engaged and informed with our top-notch video animation services!
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
              src={TwoD}
              alt=""
              className="sm:ml-60 ml-40 w-[15vw] sm:w-[15vw] md:w-[5vw] lg:w-[5.5vw] md:ml-0 lg:ml-24"
            />
            <h1 className="font-bold text-[5vw] sm:text-[5vw] md:text-[2vw] lg:text-[1.5vw] mt-3">
              2D Animation
            </h1>
            <p className="text-[4vw] sm:text-[4vw] md:text-[1.5vw] lg:text-[1vw] mt-2">
              Simplify life with our utility app solutions! From productivity
              tools to handy gadgets, we design apps that make everyday tasks a
              breeze. Contact us today to streamline your users' experiences
              with a custom utility app.
            </p>
          </div>
        </div>
        <div className="block sm:block md:flex lg:flex mb-14">
          <div
            className="ml-1 sm:ml-1 md:m-3 lg:m-3 mt-6 sm:mt-6 md:mt-4 lg:mt-4 w-[90vw] sm:w-[90vw] md:w-[30vw] lg:w-[30vw] h-auto sm:h-auto md:h-auto lg:h-auto p-4 sm:p-7 md:p-6 lg:p-6 pt-10 rounded-lg shadow-2xl shadow-slate-400 items-center text-center hover:bg-blue-900 text-gray-500 hover:text-white"
            data-aos="flip-left"
          >
            <img
              src={ThreeD}
              alt=""
              className="sm:ml-60 ml-44 w-[15vw] sm:w-[15vw] md:w-[5vw] lg:w-[5.5vw] md:ml-14 lg:ml-32"
            />
            <h1 className="font-bold text-[5vw] sm:text-[5vw] md:text-[2vw] lg:text-[1.5vw] mt-3">
              3D Animation
            </h1>
            <p className="text-[4vw] sm:text-[4vw] md:text-[1.5vw] lg:text-[1vw] mt-2">
              Elevate your storytelling with stunning 3D video animations! Our
              experienced team crafts immersive visuals that captivate and
              impress. Reach out today to turn your vision into a breathtaking
              3D animation.
            </p>
          </div>
          <div
            className="ml-1 sm:ml-1 md:m-3 lg:m-3 mt-6 sm:mt-6 md:mt-4 lg:mt-4 w-[90vw] sm:w-[90vw] md:w-[30vw] lg:w-[30vw] h-auto sm:h-auto md:h-auto lg:h-auto p-4 sm:p-7 md:p-6 lg:p-6 pt-10 rounded-lg shadow-2xl shadow-slate-400 items-center text-center hover:bg-blue-900 text-gray-500 hover:text-white"
            data-aos="flip-left"
          >
            <img
              src={Motiion}
              alt=""
              className="sm:ml-60 ml-44 w-[15vw] sm:w-[15vw] md:w-[5vw] lg:w-[5.5vw] md:ml-14 lg:ml-32"
            />
            <h1 className="font-bold text-[5vw] sm:text-[5vw] md:text-[2vw] lg:text-[1.5vw] mt-3">
              Motiion Graphics
            </h1>
            <p className="text-[4vw] sm:text-[4vw] md:text-[1.5vw] lg:text-[1vw] mt-2">
              Ready to make your brand stand out? Our motion graphics services
              add flair and dynamism to your content, ensuring it grabs
              attention and leaves a lasting impression. Connect with us today
              to bring your ideas to life with captivating motion graphics.
            </p>
          </div>
          <div
            className="ml-1 sm:ml-1 md:m-3 lg:m-3 mt-6 sm:mt-6 md:mt-4 lg:mt-4 w-[90vw] sm:w-[90vw] md:w-[30vw] lg:w-[30vw] h-auto sm:h-auto md:h-auto lg:h-auto p-4 sm:p-7 md:p-6 lg:p-6 pt-10 rounded-lg shadow-2xl shadow-slate-400 items-center text-center hover:bg-blue-900 text-gray-500  hover:text-white"
            data-aos="flip-left"
          >
            <img
              src={Explainer}
              alt=""
              className="sm:ml-60 ml-44 w-[15vw] sm:w-[15vw] md:w-[5vw] lg:w-[5.5vw] md:ml-14 lg:ml-32"
            />
            <h1 className="font-bold text-[5vw] sm:text-[5vw] md:text-[2vw] lg:text-[1.5vw] mt-3">
              Explainer Videos
            </h1>
            <p className="text-[4vw] sm:text-[4vw] md:text-[1.5vw] lg:text-[1vw] mt-2">
              Unlock the power of storytelling with our explainer videos! Our
              expert team creates engaging visuals that simplify complex ideas
              and captivate audiences. Reach out today to transform your message
              into a compelling explainer video.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default VideoAnimation;
