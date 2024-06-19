import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AppService from "../images/MobileApp-Service.png";
import GamingApps from "../images/Gaming.png";
import EcommerceApps from "../images/Ecommerce-Apps.png";
import BlogApps from "../images//Blog.png";
import UtilityApps from "../images/Utility.png";
// hero images
import vector13 from "../images/Vector 13.png";
import circle from "../images/circle.png";
import Triangle from "../images/tri.png";
import add from "../images/add.png";

const MobileApp = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

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
      <section className="w-[94vw] m-auto mb-10 mt-10">
        <div className="block sm:block md:flex lg:flex">
          <div
            className="w-[90vw] sm:w-[90vw] md:w-[50vw] lg:w-[50vw]"
            data-aos="flip-left"
          >
            <img src={AppService} alt="" />
          </div>
          <div
            className="w-[90vw] sm:w-[90vw] md:w-[50vw] lg:w-[50vw] ml-0 sm:ml-0 md:ml-10 lg:ml-10 mt-10 sm:mt-10 md:mt-28 lg:mt-30 text-center sm:text-center md:text-start lg:text-start"
            data-aos="flip-right"
          >
            <p className="font-semibold text-[3.5vw] sm:text-[3vw] md:text-[1vw] lg:text-[1vw]">
              MOBILE APP DEVELOPMENT
            </p>
            <h1 className="font-bold text-[5.5vw] sm:text-[5vw] md:text-[3vw] lg:text-[3vw]">
              IOS & Android <br /> App Development
            </h1>
            <p className="mt-2 text-[4.5vw] sm:text-[4vw] md:text-[1.2vw] lg:text-[1.2vw] text-gray-400">
              We specialize in comprehensive mobile application development for
              iOS and Android platforms. Whether it's gaming, social media,
              e-commerce, or utility apps, we deliver top-notch results. Using
              cutting-edge tools and technologies, we ensure your app is not
              just functional but visually appealing, user-friendly, and
              future-proof. Our mission is to empower businesses to connect with
              their audience and achieve their goals through innovative mobile
              solutions. With years of industry experience, we consistently
              exceed client expectations with high-quality apps.
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
              MOBILE APP DEVELOPMENT
            </p>
            <h1 className="font-bold text-[4.5vw] sm:text-[4vw] md:text-[2.5vw] lg:text-[2.5vw] mt-2 text-gray-800">
              Ready to take your business to new heights with top-tier mobile
              app development? Contact us now for the best services in town.
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
              src={GamingApps}
              alt=""
              className="sm:ml-60 ml-40 w-[15vw] sm:w-[15vw] md:w-[5vw] lg:w-[5.5vw] md:ml-0 lg:ml-24"
            />
            <h1 className="font-bold text-[5vw] sm:text-[5vw] md:text-[2vw] lg:text-[1.5vw] mt-3">
              Gaming Apps
            </h1>
            <p className="text-[4vw] sm:text-[4vw] md:text-[1.5vw] lg:text-[1vw] mt-2">
              Need an exciting gaming app to engage your audience? We've got you
              covered! Our team specializes in crafting immersive gaming
              experiences that captivate users and keep them coming back for
              more. Let's turn your gaming idea into a reality!
            </p>
          </div>
        </div>
        <div className="block sm:block md:flex lg:flex mb-14">
          <div
            className="ml-1 sm:ml-1 md:m-3 lg:m-3 mt-6 sm:mt-6 md:mt-4 lg:mt-4 w-[90vw] sm:w-[90vw] md:w-[30vw] lg:w-[30vw] h-auto sm:h-auto md:h-auto lg:h-auto p-4 sm:p-7 md:p-6 lg:p-6 pt-10 rounded-lg shadow-2xl shadow-slate-400 items-center text-center hover:bg-blue-900 text-gray-500 hover:text-white"
            data-aos="flip-left"
          >
            <img
              src={EcommerceApps}
              alt=""
              className="sm:ml-60 ml-44 w-[15vw] sm:w-[15vw] md:w-[5vw] lg:w-[5.5vw] md:ml-14 lg:ml-32"
            />
            <h1 className="font-bold text-[5vw] sm:text-[5vw] md:text-[2vw] lg:text-[1.5vw] mt-3">
              Ecommerce Apps
            </h1>
            <p className="text-[4vw] sm:text-[4vw] md:text-[1.5vw] lg:text-[1vw] mt-2">
              Ready to boost your online sales? Our ecommerce app development
              services are designed to enhance your customers' shopping
              experience and drive conversions. Reach out today to transform
              your business with a custom ecommerce app
            </p>
          </div>
          <div
            className="ml-1 sm:ml-1 md:m-3 lg:m-3 mt-6 sm:mt-6 md:mt-4 lg:mt-4 w-[90vw] sm:w-[90vw] md:w-[30vw] lg:w-[30vw] h-auto sm:h-auto md:h-auto lg:h-auto p-4 sm:p-7 md:p-6 lg:p-6 pt-10 rounded-lg shadow-2xl shadow-slate-400 items-center text-center hover:bg-blue-900 text-gray-500 hover:text-white"
            data-aos="flip-left"
          >
            <img
              src={BlogApps}
              alt=""
              className="sm:ml-60 ml-44 w-[15vw] sm:w-[15vw] md:w-[5vw] lg:w-[5.5vw] md:ml-14 lg:ml-32"
            />
            <h1 className="font-bold text-[5vw] sm:text-[5vw] md:text-[2vw] lg:text-[1.5vw] mt-3">
              Blog Apps
            </h1>
            <p className="text-[4vw] sm:text-[4vw] md:text-[1.5vw] lg:text-[1vw] mt-2">
              Want to share your ideas with the world? Our blog app development
              services make it easy to connect with your audience on the go.
              Reach out now to bring your blogging dreams to life!
            </p>
          </div>
          <div
            className="ml-1 sm:ml-1 md:m-3 lg:m-3 mt-6 sm:mt-6 md:mt-4 lg:mt-4 w-[90vw] sm:w-[90vw] md:w-[30vw] lg:w-[30vw] h-auto sm:h-auto md:h-auto lg:h-auto p-4 sm:p-7 md:p-6 lg:p-6 pt-10 rounded-lg shadow-2xl shadow-slate-400 items-center text-center hover:bg-blue-900 text-gray-500  hover:text-white"
            data-aos="flip-left"
          >
            <img
              src={UtilityApps}
              alt=""
              className="sm:ml-60 ml-44 w-[15vw] sm:w-[15vw] md:w-[5vw] lg:w-[5.5vw] md:ml-14 lg:ml-32"
            />
            <h1 className="font-bold text-[5vw] sm:text-[5vw] md:text-[2vw] lg:text-[1.5vw] mt-3">
              Utility Apps
            </h1>
            <p className="text-[4vw] sm:text-[4vw] md:text-[1.5vw] lg:text-[1vw] mt-2">
              Simplify life with our utility app solutions! From productivity
              tools to handy gadgets, we design apps that make everyday tasks a
              breeze. Contact us today to streamline your users' experiences
              with a custom utility app.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default MobileApp;
