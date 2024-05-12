import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import backgroundImage from "../images/Sr-Particle.jpg";

const About = () => {
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
      <section data-aos="zoom-in-left">
        <div
          className="h-auto pb-5 w-full text-center relative overflow-hidden"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
          }}
          onMouseEnter={handleHover}
          onMouseLeave={handleMouseLeave}
        >
          <p className="text-white text-center pt-[23vw] sm:pt-[20vw] md:pt-44 lg:pt-52 text-[2vw] sm:text-[1vw] md:text-[1vw] lg:text-[1vw] ">
            SR Innovations
          </p>
          <div
            className={`absolute top-1/2 mr-[7vw] sm:mr-[8vw] md:mr-[8vw] lg:mr-14 transform transition-transform ${
              isHovered ? "-translate-y-2" : ""
            } ${isHovered ? "left-[38%]" : "right-[30%]"}`}
          >
            <h1
              className={`text-white text-center text-[7vw] font-bold ${
                isHovered ? "hovered" : ""
              }`}
              onMouseEnter={handleHover}
              onMouseLeave={handleMouseLeave}
            >
              About Us
            </h1>
          </div>
          <div>
            <p className="text-center text-white pt-12 lg:pt-48">
              We deploy precise technology solutions to unlock your business's
              growth potential.
            </p>
          </div>
        </div>
      </section>
      {/* Our value */}
      <section className="bg-[#F0F6FB] pb-12 sm:pb-12 md:pb-0 lg:pb-0 ">
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
                className="w-[93vw] h-auto sm:w-[40vw] sm:h-auto md:w-[26vw] md:h-auto lg:w-[26vw] lg:h-auto bg-white rounded-lg p-5 sm:p-5 md:p-8 lg:p-8 hover:bg-[#093E86] text-gray-600 hover:text-white"
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
                className="w-[93vw] mt-3 sm:mt-4 md:mt-4 lg:mt-4 h-auto sm:w-[40vw] sm:h-auto md:w-[26vw] md:h-auto lg:w-[26vw] lg:h-auto bg-white rounded-lg p-5 sm:p-5 md:p-8 lg:p-8  hover:bg-[#093E86] text-gray-600 hover:text-white"
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
                className="w-[93vw] h-auto sm:w-[40vw] sm:h-auto md:w-[26vw] md:h-auto lg:w-[26vw] lg:h-auto bg-white rounded-lg p-5 sm:p-5 md:p-8 lg:p-8 hover:bg-[#093E86] text-gray-600 hover:text-white"
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
                className="w-[93vw] h-auto sm:w-[40vw] sm:h-auto md:w-[26vw] md:h-auto lg:w-[26vw] lg:h-auto bg-white rounded-lg p-5 sm:p-5 md:p-8 lg:p-8 hover:bg-[#093E86] text-gray-600 hover:text-white mt-3 sm:mt-4 md:mt-4 lg:mt-4"
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
      <section className="bg-[#093E86]" data-aos="zoom-in-left">
        <div className="w-[95vw] h-auto sm:w-[95vw] sm:h-auto md:w-[95vw] md:h-[56vw] lg:w-[95vw] lg:h-[55vw] m-auto">
          <div className="block sm:block md:flex lg:flex">
            <div className="w-[90vw] sm:w-[90vw] md:w-[50vw] lg:w-[50vw] p-7 pt-10 sm:pt-16 md:pt-32 lg:pt-36">
              <p className="text-white font-semibold text-[4vw] sm:text-[4vw] md:text-[3vw] lg:text-[3vw]">
                WE ARE{" "}
              </p>
              <h1 className="text-white text-[3.5vw] sm:text-[3.5vw] md:text-[3vw] lg:text-[2.5vw] font-bold">
                Equipping our Varied Client Base to Harness Cutting-Edge
                Technology and Unlock Fresh Business Prospects.
              </h1>
            </div>
            <div className="w-[90vw] sm:w-[90vw] md:w-[50vw] lg:w-[50vw] p-8 pt-5 sm:pt-5 md:pt-24 lg:pt-24 text-gray-300 text-[3vw] sm:text-[3vw] md:text-[1.2vw] lg:text-[1.2vw]">
              <p>
                At SR Innovations, we recognize the ever-evolving nature of
                technology and the paramount importance of staying ahead. That's
                why we're passionately committed to empowering our diverse
                clientele with the tools to harness the latest advancements and
                seize new business horizons. Whether it's crafting responsive
                websites, mobile apps, delving into cloud computing, artificial
                intelligence, or any other pioneering technology, we're
                dedicated to ensuring our clients lead the charge in their
                respective industries.
                <br />
                <br />
                We're driven by a deep passion for guiding our clients towards
                harnessing technology for transformative business outcomes. Our
                seasoned team collaborates closely with each client, delving
                into their distinctive requirements to craft tailor-made
                solutions that align with their objectives. Through our
                cutting-edge offerings, clients can optimize their operations,
                enhance efficiency, and tap into fresh revenue channels, all
                while maintaining a competitive edge. If you're poised to
                elevate your business to unprecedented heights of success, we're
                poised to support you at every stage of your journey.
              </p>
            </div>
          </div>
          <div className="border-t-[0.1vw] border-gray-300 mt-5 sm:mt-5 md:mt-9 lg:mt-10">
            <div className="w-[80vw] m-auto flex justify-between pb-5 sm:pb-5 pt-7 sm:pt-7 md:pt-7 lg:pt-7">
              <div className="text-white">
                <h1 className="text-[4vw] sm:text-[3.4vw] md:text-[2.4vw] lg:text-[2.4vw] font-bold">
                  14K+
                </h1>
                <p className="text-[2.3vw] sm:text-[1.8vw] md:text-[1vw] lg:text-[1vw]">
                  Project Done
                </p>
              </div>
              <div className="text-white">
                <h1 className="text-[4vw] sm:text-[3.4vw] md:text-[2.4vw] lg:text-[2.4vw] font-bold">
                  12K+
                </h1>
                <p className="text-[2.3vw] sm:text-[1.8vw] md:text-[1vw] lg:text-[1vw]">
                  Happy customer
                </p>
              </div>
              <div className="text-white">
                <h1 className="text-[4vw] sm:text-[3.4vw] md:text-[2.4vw] lg:text-[2.4vw] font-bold">
                  4.7
                </h1>
                <p className="text-[2.3vw] sm:text-[1.8vw] md:text-[1vw] lg:text-[1vw]">
                  Review customer
                </p>
              </div>
              <div className="text-white">
                <h1 className="text-[4vw] sm:text-[3.4vw] md:text-[2.4vw] lg:text-[2.4vw] font-bold">
                  15+
                </h1>
                <p className="text-[2.3vw] sm:text-[1.8vw] md:text-[1vw] lg:text-[1vw]">
                  Years Experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* OUR PEOPLE-FIRST APPROACH  */}
      <section className="bg-white">
        <div className="block sm:block md:flex lg:flex w-[90vw] h-auto sm:w-[90vw] sm:h-auto md:[90vw] md:h-[40vw] lg:w-[90vw] lg:h-[40vw] m-auto pt-16">
          <div className="w-[90vw] sm:w-[80vw] md:w-[50vw] lg:w-[50vw]" data-aos="flip-right">
            <img
              src="https://techigems.pk/wp-content/uploads/2024/02/Mask-group-1.png"
              alt=""
            />
          </div>
          <div className="w-[90vw] h-auto sm:w-[90vw] sm:h-auto md:w-[50vw] md:h-auto lg:w-[50vw] lg:h-auto p-10 pt-10 sm:pt-10 md:pt-24 lg:pt-24"  data-aos="flip-left">
            <p className="font-semibold text-[#05185A]">
              OUR PEOPLE-FIRST APPROACH{" "}
            </p>
            <h1 className="text-[3vw] sm:text-[3vw] md:text-[2.6vw] lg:text-[2.6vw] text-[#05185A] font-bold mt-3">
              We prioritize the well-being and success of our employees.
            </h1>
            <p className="text-gray-600 pt-3">
              At SR Innovations, we hold the belief that our people are our most
              valuable asset. This is why we prioritize our employees, placing
              their well-being and success at the forefront of our endeavors. We
              are dedicated to fostering a culture of care and support, where
              every team member feels valued, respected, and empowered. Whether
              through investment in employee development initiatives or offering
              pathways for career advancement, we are steadfast in providing our
              employees with the resources they need to realize their fullest
              potential.
            </p>
          </div>
        </div>
        <div className="h-auto sm:h-auto md:h-[19vw] lg:h-[19vw] pb-5 sm:pb-5 w-[90vw] bg-white m-auto" data-aos="zoom-in-left">
          <div className="bg-[#093E86] block sm:block md:flex lg:flex sm:w-[50vw] sm:h-auto md:w-[90vw] md:h-[13vw] lg:w-[90vw] lg:h-[13vw] rounded-lg mt-5 sm:mt-4 md:mt-28 lg:mt-28 text-center sm:text-center justify-between">
            <div className="text-white p-2 sm:p-2 md:p-10 lg:p-10">
              <h1 className="font-bold text-[3.5vw] sm:text-[3.5vw] md:text-[1.4vw] lg:text-[1.4vw]">
                3345+ Projects Delivered
              </h1>
              <p className="text-[3vw] sm:text-[3vw] md:text-[0.8vw] lg:text-[0.8vw] pt-1 sm:pt-1 md:pt-3 lg:pt-3">
                From marketing to development, and IT services, we empower our
                diverse clientele with top-notch solutions.
              </p>
            </div>
            <div className="text-white p-2 sm:p-2 md:p-10 lg:p-10">
              <h1 className="font-bold text-[3.5vw] sm:text-[3.5vw] md:text-[1.4vw] lg:text-[1.4vw]">
                Decades of Expertise
              </h1>
              <p className="text-[3vw] sm:text-[3vw] md:text-[0.8vw] lg:text-[0.8vw] pt-1 sm:pt-1 md:pt-3 lg:pt-3">
                With years of industry experience, we've been delivering
                tailored solutions to businesses of all sizes..{" "}
              </p>
            </div>
            <div className="text-white p-2 sm:p-2 md:p-10 lg:p-10">
              <h1 className="font-bold text-[3.5vw] sm:text-[3.5vw] md:text-[1.4vw] lg:text-[1.4vw]">
                Visionary Innovators
              </h1>
              <p className="text-[3vw] sm:text-[3vw] md:text-[0.8vw] lg:text-[0.8vw] pt-1 sm:pt-1 md:pt-3 lg:pt-3">
                Comprising experienced professionals, our team is committed to
                achieving success for our clients..
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
