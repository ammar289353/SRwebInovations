import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "../App.css";
// Slider
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import About from "../images/about.png";
import Techno from "../images/techno.jpg";

// Card Images
import GraphicImage from "../images/graphic.png";
import WebsiteImage from "../images/Website.png";
// import MobileAppImage from "../images/Mobile App.jpg";
import VideoImage from "../images/video.png";
import DMImage from "../images/DM.png";
import SEOImage from "../images/Seo.png";
// Portfolio
import TexasLogo from "../images/DJCREFLO.jpg";
import ASkillAdmin from "../images/1.jpeg";
import ASkillSite from "../images/2.jpeg";
import MoyenExpress from "../images/massagetherapy.jpg";
import Hero from "../images/Hero.png";

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
    // {
    //   imageUrl: MobileAppImage,
    //   title: "Mobile App Development",
    //   description:
    //     "User experience (UX) and user interface (UI) design are critical components of any website or application. Our team of UI/UX designers will work with you to create a user-friendly.",
    //   link: "/MobileApp",
    // },
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
  const testimonials = [
    {
      text: "Working with SR Innovations has significantly boosted our digital marketing performance. Their team implemented strategies that increased our online visibility and drove more traffic to our website. We're now seeing a steady increase in leads. Their dedication and creativity are truly commendable. I highly recommend their services for anyone serious about enhancing their online presence.",
      imgSrc:
        "https://techigems.pk/wp-content/uploads/2024/02/img__0007_Layer-1.jpg",
      name: "John D.",
      title: "Digital Marketing",
    },
    {
      text:"SR Innovations has transformed our search engine rankings with their expert SEO services. The team is not only knowledgeable but also incredibly innovative. They helped us climb to the top of search results, resulting in higher website traffic and better lead generation. Their commitment to our success is evident in everything they do. If you're looking to improve your SEO, SR Innovations is the way to go.",
      imgSrc:
        "https://techigems.pk/wp-content/uploads/2024/02/img__0007_Layer-1.jpg",
      name: "Emily S.",
      title: "SEO",
    },
    {
      text:"Our experience with SR Innovations for website development has been outstanding. They delivered a sleek, responsive, and highly functional website that exceeded our expectations. Their attention to detail and ability to understand our vision made the entire process smooth and efficient. I highly recommend their web development services for any business looking to enhance its online presence.",
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
      {/* Hero  */}

      <section
        className="w-[100%] bg-slate-500 h-auto pb-48 lg:mt-16"
        style={{
          backgroundImage: `url(${Hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <div>
          <h1 className="text-[5vw] text-[#e5e7ea] md:text-[3.5vw] pt-48 md:pt-48  font-bold text-center">
            Shaping Tomorrow with <br />
            <span className="text-[#e5e7ea]"> State-of-the-Art Technology</span>
            <br /> IT COMPANY
          </h1>
          <Link to="/Contact">
            <button className="bg-[#7a9dcf] text-[3vw] lg:text-[1.5vw] text-white rounded-md px-5 py-1 ml-[33vw] md:ml-[42vw] mt-4 hover:bg-[#39547a]  ">
              Let's Get Started
            </button>
          </Link>
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
          <Link to="/Contact">
            <button className="bg-[#093D84] text-[4vw] lg:text-[1.5vw] text-white rounded-lg px-5 py-2  mt-4 ">
              Let's Get Started
            </button>
          </Link>
        </div>
        <div
          className="h-auto pb-12 md:w-[50%]"
          style={{
            backgroundImage: `url(${About})`,
            backgroundSize: "cover",
          }}
        >
          <p className="text-white px-12 pt-32">
            Founded in 2024, SR Innovations delivers comprehensive and
            innovative tech solutions to clients worldwide. At SR Innovations,
            our projects commence with detailed research and strategic planning
            to ensure optimal results.
            <br />
            <br />
            With years of proven success in the Software and IT industry, we
            pride ourselves on precision and excellence. Our mission is to help
            you develop cutting-edge products efficiently and on a large scale.
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
            At SR Innovations, we help businesses tackle their unique challenges
            with efficiency and creativity. Our technical expertise and
            innovative approach enable us to build custom web and mobile apps
            designed for high growth. From ideation, design, and prototyping to
            internet-scale rollout, we offer comprehensive solutions to
            businesses of all sizes and industries.
          </p>
          <Link to="/Contact">
            <button className="bg-[#093D84] text-[4vw] lg:text-[1.5vw] text-white rounded-lg px-5 py-2  mt-4 ">
              Let's Get Started
            </button>
          </Link>
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
        <Link to="/Contact">
          <button className="text-center mb-6 bg-[#093D84] font-semibold text-white py-2 mt-4 md:mt-0 rounded-md px-8 text-[2.5vw] md:text-[1.4vw] ml-[35vw] md:ml-[43vw]">
            Let's Start
          </button>
        </Link>
      </section>
      {/* TESTIMONIAL */}
      <section
        className="bg-[#D9EAF7] w-full h-auto mt-8 pb-20"
        data-aos="zoom-in-up"
      >
        <p className="text-[#093D84] text-[3vw] sm:text-[3vw] md:text-[1.5vw] pt-8 lg:text-[1.5vw] text-center font-semibold">
          TESTIMONIAL
        </p>
        <h1 className="text-black text-[4vw] text-center sm:text-[4vw] md:text-[3.5vw] lg:text-[3.5vw] font-bold">
          What They Say About Us
        </h1>
        <p className="text-[##7A5353] text-center text-[3vw] sm:text-[3vw] md:text-[1vw] lg:text-[1vw] pb-8 pt-2">
          We've cemented our position as a premier provider of cutting-edge
          technology solutions.
          <br /> Leveraging our state-of-the-art services, we can assist you in
          achieving your goals.
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
              <div className="">
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
      </section>
    </>
  );
};

export default Home;
