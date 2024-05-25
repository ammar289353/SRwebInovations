import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "../App.css";
import About from "../images/about.png";
import Techno from "../images/techno.jpg";
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
import "./Testimonial.css";

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
      link: "/Graphic",
    },
    {
      imageUrl: WebsiteImage,
      title: "Webiste Development",
      description:
        "User experience (UX) and user interface (UI) design are critical components of any website or application. Our team of UI/UX designers will work with you to create a user-friendly.",
      link: "/Website",
    },
    {
      imageUrl: MobileAppImage,
      title: "Mobile App Development",
      description:
        "User experience (UX) and user interface (UI) design are critical components of any website or application. Our team of UI/UX designers will work with you to create a user-friendly.",
      link: "/MobileApp",
    },
    {
      imageUrl: VideoImage,
      title: "Video Animation",
      description:
        "User experience (UX) and user interface (UI) design are critical components of any website or application. Our team of UI/UX designers will work with you to create a user-friendly.",
      link: "/VideoAnimation",
    },
    {
      imageUrl: DMImage,
      title: "Digital Marketing",
      description:
        "User experience (UX) and user interface (UI) design are critical components of any website or application. Our team of UI/UX designers will work with you to create a user-friendly.",
      link: "/DigitalMarketing",
    },
    {
      imageUrl: SEOImage,
      title: "SEO",
      description:
        "User experience (UX) and user interface (UI) design are critical components of any website or application. Our team of UI/UX designers will work with you to create a user-friendly.",
      link: "/SEO",
    },
  ];
  // const testimonials = [
  //   {
  //     text: "chiGems Pakistan has been a game-changer for our digital marketing efforts. They have helped us increase our online visibility, drive more traffic to our website, and generate more leads. Their team is knowledgeable, creative, and always willing to go above and beyond to ensure our success. We highly recommend their digital marketing services to anyone looking to take their online presence to the next level.",
  //     imgSrc:
  //       "https://techigems.pk/wp-content/uploads/2024/02/img__0007_Layer-1.jpg",
  //     name: "Mark Johnson",
  //     title: "Business manager",
  //   },
  //   {
  //     text: "chiGems Pakistan has been a game-changer for our digital marketing efforts. They have helped us increase our online visibility, drive more traffic to our website, and generate more leads. Their team is knowledgeable, creative, and always willing to go above and beyond to ensure our success. We highly recommend their digital marketing services to anyone looking to take their online presence to the next level.",
  //     imgSrc:
  //       "https://techigems.pk/wp-content/uploads/2024/02/img__0007_Layer-1.jpg",
  //     name: "Mark Johnson",
  //     title: "Business manager",
  //   },
  //   {
  //     text: "chiGems Pakistan has been a game-changer for our digital marketing efforts. They have helped us increase our online visibility, drive more traffic to our website, and generate more leads. Their team is knowledgeable, creative, and always willing to go above and beyond to ensure our success. We highly recommend their digital marketing services to anyone looking to take their online presence to the next level.",
  //     imgSrc:
  //       "https://techigems.pk/wp-content/uploads/2024/02/img__0007_Layer-1.jpg",
  //     name: "Mark Johnson",
  //     title: "Business manager",
  //   },
  //   {
  //     text: "chiGems Pakistan has been a game-changer for our digital marketing efforts. They have helped us increase our online visibility, drive more traffic to our website, and generate more leads. Their team is knowledgeable, creative, and always willing to go above and beyond to ensure our success. We highly recommend their digital marketing services to anyone looking to take their online presence to the next level.",
  //     imgSrc:
  //       "https://techigems.pk/wp-content/uploads/2024/02/img__0007_Layer-1.jpg",
  //     name: "Mark Johnson",
  //     title: "Business manager",
  //   },
  //   {
  //     text: "chiGems Pakistan has been a game-changer for our digital marketing efforts. They have helped us increase our online visibility, drive more traffic to our website, and generate more leads. Their team is knowledgeable, creative, and always willing to go above and beyond to ensure our success. We highly recommend their digital marketing services to anyone looking to take their online presence to the next level.",
  //     imgSrc:
  //       "https://techigems.pk/wp-content/uploads/2024/02/img__0007_Layer-1.jpg",
  //     name: "Mark Johnson",
  //     title: "Business manager",
  //   },
  // ];

  return (
    <>
      {/* Hero  */}
      <section className="w-[100%] bg-slate-500 h-auto pb-24 lg:mt-16">
        
        <div>
          <h1 className="text-[5vw] md:text-[3.5vw] pt-24 md:pt-16 font-bold text-center">
            Shaping Tomorrow with <br />
            <span className="text-[#093D84]"> State-of-the-Art Technology</span>
            <br /> IT COMPANY
          </h1>
          <button className="bg-[#093D84] text-[3vw] lg:text-[1.5vw] text-white rounded-md px-5 py-1 ml-[33vw] md:ml-[42vw] mt-4 ">
            Let's Get Started
          </button>
        </div>
      </section>

      {/* OUR WORK PORTFOLIO */}
      <section
        className="bg-[#F0F6FB] w-full md:pb-5 md:h-auto lg:h-[60vw]"
        data-aos="zoom-in-up"
      >
        <div className="lg:flex md:flex sm:block w-[92vw] m-auto sm:ml-10">
          <div className="sm:w-full lg:w-[50vw] sm:pt-3 pt-7">
            <p className="font-semibold text-[3vw] md:text-[1vw] text-[#05185A] sm:pt-16 md:pt-14 lg:pt-16">
              OUR WORK PORTFOLIO
            </p>
            <h1 className="text-[6vw] sm:text-[4vw] md:text-[4vw] lg:text-4xl font-bold pt-3 text-[#05185A]">
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
            <div className=" flex sm:block lg:flex md:flex mt-8 w-[100%]">
              <div className=" mr-4 w-[50%]">
                <img src={TexasLogo} alt="" />
              </div>
              <div className="mt-4 sm:mt-4 md:mt-0 w-[50%]">
                <img src={ASkillAdmin} alt="" />
                <br />
                <img src={ASkillSite} alt="" />
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
      {/* About  */}
      <section className="md:flex" data-aos="zoom-in-up">
        <div className="md:w-[50%] px-4 md:px-16 py-12 md:py-32">
          <span className="text-[#093D84] font-medium "> About us</span>
          <h1 className="text-[6vw] md:text-[4vw] font-bold ">
            Transforming technology into a positive impact
          </h1>
          <button className="bg-[#093D84] text-[4vw] lg:text-[1.5vw] text-white rounded-lg px-5 py-2  mt-4 ">
            Let's Get Started
          </button>
        </div>
        <div
          className="h-auto pb-12 md:w-[50%]"
          style={{
            backgroundImage: `url(${About})`,
            backgroundSize: "cover",
          }}
        >
          <p className="text-white px-12 pt-32">
            Since its inception in 2016, Techigems Llc has been providing
            full-fledged and tech-powered solutions to clients globally. Our
            experts at Techigems Llc begin every project with thorough research
            and a well-planned strategy to deliver the desired outcomes.
            <br />
            <br />
            With over successful years in the Software and IT industry, our work
            leaves no room for mistakes and errors. We aim to help you create
            innovative products faster and at scale.
          </p>
        </div>
      </section>
      {/* Cards  */}
      <section className="bg-[#FFFFFF] w-full h-auto mt-6 md:h-auto lg:h-[86vw]">
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
                <button
                  onClick={() => {
                    window.location.href = service.link;
                  }}
                  className=" hover:text-white border-[2px] border-blue-800 hover:border-white rounded-full bg-[#ffff] hover:bg-[#093E86] text-black px-5 py-1 border-rounded-lg "
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Let's do it  */}
      <section className="bg-slate-300 h-auto pb-6 px-6 lg:px-24 md:flex">
        <div className="md:w-[50%] pt-16">
          <span className="text-[#093D84] font-medium">LET'S DO IT</span>
          <h1 className="text-[6vw] lg:text-[4vw] font-bold">
            Driving Your <span className="text-[#093D84]">Success</span> through
            Innovative Solutions
          </h1>
          <p>
            At Techigems Llc., we help businesses solve their unique challenges
            with efficiency and creativity. We have the technical expertise and
            creativity to build custom web and mobile apps for high growth. From
            ideation, design, and prototyping to internet-scale rollout, we
            offer comprehensive solutions to businesses of all sizes and
            industries.
          </p>
          <button className="bg-[#093D84] text-[4vw] lg:text-[1.5vw] text-white rounded-lg px-5 py-2  mt-4 ">
            Let's Get Started
          </button>
        </div>
        <div className="md:w-[50%] px-4 md:px-8 pt-12 md:pt-24">
          <img src={Techno} alt="" />
        </div>
      </section>
      {/* cards */}
      <section>
        <div className="text-center mt-4">
          <h1 className="font-semibold text-[2.4vw] md:text-[1.5vw] text-[#093D84]">
            NO.1 DIGITAL PLATFORM
          </h1>
          <h1 className="font-bold text-black text-[5vw] md:text-[3.5vw]">
            Best Digital & IT Company <br /> Who We Work With
          </h1>
        </div>
        <div className="md:flex mt-4 justify-between  px-12 md:px-24">
          <div className="bg-gray-800 rounded-sm text-white mt-16 md:w-[25vw] p-4 h-auto md:h-[24vw] ">
            <h1 className="font-bold text-[1.7vw] pt-3">
              {" "}
              Enterprise <br /> Organizations{" "}
            </h1>
            <p className="pt-3">
              We understand the complex technology needs of large-scale
              organizations and have the expertise to help them achieve their
              goals. Our team can help Enterprise Organizations modernize their
              existing technology infrastructure, streamline processes, and
              improve user experience.
            </p>
          </div>
          <div className="bg-gray-800 rounded-sm mt-6 text-white md:w-[25vw] p-4 h-auto md:h-[24vw]">
            <h1 className="font-bold text-[1.7vw] pt-3">
              Small & Medium <br />
              Enterprises
            </h1>
            <p className="pt-3">
              We understand that Small & Medium Enterprises (SMEs) face unique
              challenges when it comes to technology. We offer affordable and
              flexible technology solutions that can help SMEs stay competitive
              in the fast-paced business landscape.
            </p>
          </div>
          <div className="bg-gray-800 rounded-sm mt-16 text-white md:w-[25vw] p-4 h-auto md:h-[24vw]">
            <h1 className="font-bold text-[1.7vw] pt-3">Startups</h1>
            <p className="pt-3">
              As a startup, you need a technology partner who can help you build
              a solid foundation for your business. Our team can help startups
              navigate the complex world of technology and provide them with the
              support they need to succeed.
            </p>
          </div>
        </div>
        <button className="text-center mb-6 bg-[#093D84] font-semibold text-white py-2 mt-4 md:mt-0 rounded-md px-8 text-[2.5vw] md:text-[1.4vw] ml-[35vw] md:ml-[43vw]">
          Let's Start
        </button>
      </section>
      {/* TESTIMONIAL */}
      {/* <section
        className="bg-[#D9EAF7] w-full h-auto mt-8 pb-20"
        data-aos="zoom-in-up"
      >
        <div>
          <p className="text-[#093D84] text-[3vw] sm:text-[3vw] md:text-[1.5vw] pt-8 lg:text-[1.5vw] text-center font-semibold">
            TESTIMONIAL
          </p>
          <h1 className="text-black text-[4vw] text-center sm:text-[4vw] md:text-[3.5vw] lg:text-[3.5vw] font-bold">
            What They Say About Us
          </h1>
          <p className="text-[##7A5353] text-center text-[3vw] sm:text-[3vw] md:text-[1vw] lg:text-[1vw] pb-8 pt-2">
            We've cemented our position as a premier provider of cutting-edge
            technology solutions.
            <br /> Leveraging our state-of-the-art services, we can assist you
            in achieving your goals.
          </p>
          <div className="carousel-container">
            <div className="carousel-wrapper grid grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="carousel-item w-[85vw] h-auto sm:w-[40vw] sm:h-[35vw] md:w-[30vw] md:h-[25vw] lg:w-[25vw] lg:h-[25vw] bg-white rounded-lg ml-3 p-6"
                >
                  <p className="text-[#8d8b8b] text-[3vw] sm:text-[3vw] md:text-[1vw] lg:text-[1vw]">
                    chiGems Pakistan has been a game-changer for our digital
                    marketing <br />
                    efforts. They have helped us increase our online
                    visibility,drive more <br /> traffic to our website, and
                    generate more leads. Their team is
                    <br /> knowledgeable, creative, and always willing to go
                    above and beyond <br /> to ensure our success. We highly
                    recommend their digital marketing <br /> services to anyone
                    looking to take their online presence to the
                    <br /> next level.
                  </p>
                  <div className="flex">
                    <img
                      src={testimonial.imgSrc}
                      alt={testimonial.name}
                      className="rounded-full w-14 mt-2"
                    />
                    <div>
                      <h1 className="text-blue-900 text-[3vw] sm:text-[3vw] md:text-[1.4vw] lg:text-[1.4vw] font-bold ml-10 mt-3">
                        {testimonial.name}
                      </h1>
                      <p className="text-blue-700 text-[2vw] sm:text-[2vw] md:text-[1vw] lg:text-[1vw] font-semibold ml-10">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Home;
