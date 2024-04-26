import React from "react";
import '../App.css'
import Hero from "../images/sr-hero.jpg";
import heroblock from "../images/sr-block.png";
import herorocket from "../images/sr-rocket.png";
import herobulb from "../images/sr-bulb.png";
import UiUx from "../images/ui.png";

const Home = () => {
  return (
    <>
      {/* Hero  */}
      <section className="block md:flex w-[100%] mt-8 lg:mt-16">
        <div className="text-black bg-[#C8E1F4] md:w-[50%] pt-3 pb-2">
          <h1 className="text-[4vw] font-extrabold px-12 pt-12 lg:pt-32">
            TRANSFORMING
            <span className="text-[#0B428B]"> THE FUTURE </span>
            WITH CUTTING-EDGE TECH
          </h1>
          <p className="px-12 text-[2vw] lg:text-[1vw] ">
            Our solutions transform businesses by streamlining operations,
            increasing efficiency, and driving growth. We tailor our solutions
            to meet the unique needs of each business we work with, empowering
            them to thrive in an ever-changing landscape.
          </p>
          <div className="px-12 pt-3">
            <button className="px-7 py-2 text-[3vw] lg:text-[1.5vw]  bg-[#093D84] text-white rounded-lg ">
              Get Started
            </button>
          </div>
        </div>
        <div className="md:w-[50%]  lg:pt-3">
          <img
            className="h-80 md:h-[80vh] lg:h-[90vh] w-full"
            src={Hero}
            alt=""
          />
        </div>
      </section>
      {/* Block */}
      <section>
        <div
          className="mx-16 bg-[#093D84] h-auto pb-12 lg:h-48 my-5 rounded-lg lg:flex justify-between 
        px-6 lg:px-12 pt-12"
        >
          <div className="flex gap-6">
            <img src={heroblock} className="lg:h-24" alt="" />
            <div className="text-white pt-5">
              <h1 className="font-bold text-[3vw] lg:text-[1.2vw]">
                Innovation
              </h1>
              <p className="text-[2vw] lg:text-[1vw] text-slate-300">
                Embracing new ideas to create unique solutions.
              </p>
            </div>
          </div>
          <div className="flex gap-6 pt-12 lg:pt-2">
            <img src={herorocket} className="lg:h-20" alt="" />
            <div className="text-white pt-5 lg:pt-3">
              <h1 className="font-bold text-[3vw] lg:text-[1.2vw]">
                Customization
              </h1>
              <p className="text-[2vw] lg:text-[1vw] text-slate-300">
                Tailoring products or services| to meet individual needs.
              </p>
            </div>
          </div>
          <div className="flex gap-6 pt-12 lg:pt-2">
            <img src={herobulb} className="lg:h-20" alt="" />
            <div className="text-white pt-5 lg:pt-3">
              <h1 className="font-bold text-[3vw] lg:text-[1.2vw]">
                Efficiency
              </h1>
              <p className="text-[2vw] lg:text-[1vw] text-slate-300">
                Maximizing output while minimizing resource usage.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Moto */}
      <section className="bg-[#0B488D]  text-white">
        <div className="md:flex pb-12">
          <div className="md:w-[50%] pt-12 md:pt-32 px-8">
            <p>WE ARE</p>
            <h1 className="text-[3vw] font-extrabold">
              Empowering Our Diverse Clientele To Leverage Latest Technology And
              Unlock New Business Opportunities
            </h1>
          </div>
          <div className="md:w-[50%] pt-12 md:pt-20 px-12">
            <p className="text-[3vw] md:text-[1.7vw] lg:text-[1.3vw] ">
              At TechiGems Pakistan, we understand that technology is constantly
              evolving and that staying ahead of the game is key to success.
              That’s why we are dedicated to empowering our diverse clientele to
              leverage the latest technology and unlock new business
              opportunities. Whether it’s through developing responsive
              websites, mobile apps, cloud computing, artificial intelligence,
              or any other cutting-edge technology, we are committed to helping
              our clients stay at the forefront of their industries.
              <br />
              <br />
              We arepassionate about assisting our clients in leveraging technology to
              transform their businesses. Our team of experts works closely with
              each client to understand their unique needs and create customized
              solutions that meet their specific goals. With our
              state-of-the-art solutions, our clients can streamline their
              operations, improve efficiency, and unlock new revenue streams,
              all while staying ahead of the competition. If you’re ready to
              take your business to the new level of success, we’re here to help
              you every step of the way.
            </p>
          </div>
        </div>
        <hr />
        <div className="flex justify-between px-4 md:px-24 py-12">
            <div>
                <h1 className="text-[6vw] md:text-[3vw] font-bold ">14K+</h1>
                <p >Project Done</p>
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
      </section>
      {/* Cards  */}
      <section className="pt-12">
        <p className="text-center">WHAT WE OFFER</p>
        <h1 className="text-center text-[4vw] lg:text-[2vw] font-extrabold ">
          Where Technology Meets Business.
        </h1>
        <div className="px-12 py-2 pt-6 grid lg:grid-cols-3 gap-8">
          {/* car1 */}
          <div className="shadow-2xl shadow-slate-400 pb-4 lg:h-96 mb-5">
            <img className="pt-12 px-36 w-[380px]" src={UiUx} alt="" />
            <div>
              <h1 className="text-center font-bold text-[4vw] lg:text-[2vw] pt-3 ">
                UI/UX Design
              </h1>
              <p className="text-[2vw] pt-3 lg:text-[1vw] px-12 ">
                User experience (UX) and user interface (UI) design are critical
                components of any website or application. Our team of UI/UX
                designers will work with you to create a user-friendly
              </p>
            </div>
            <div className="text-center pt-6">
              <button className="shadow-md shadow-white-500  bg-[#6f8d9a] text-white px-5 py-1 border- rounded-lg ">
                Learn More
              </button>
            </div>
          </div>
          {/* card2 */}
          <div className="shadow-2xl shadow-slate-400 pb-4 lg:h-96 mb-5">
            <img className="pt-12 px-36 w-[380px]" src={UiUx} alt="" />
            <div>
              <h1 className="text-center font-bold text-[4vw] lg:text-[2vw] pt-3 ">
                UI/UX Design
              </h1>
              <p className="text-[2vw] pt-3 lg:text-[1vw] px-12 ">
                User experience (UX) and user interface (UI) design are critical
                components of any website or application. Our team of UI/UX
                designers will work with you to create a user-friendly
              </p>
            </div>
            <div className="text-center pt-6">
              <button className="shadow-md shadow-white-500  bg-[#6f8d9a] text-white px-5 py-1 border- rounded-lg ">
                Learn More
              </button>
            </div>
          </div>
          {/* card3 */}
          <div className="shadow-2xl shadow-slate-400 pb-4 lg:h-96 mb-5">
            <img className="pt-12 px-36 w-[380px]" src={UiUx} alt="" />
            <div>
              <h1 className="text-center font-bold text-[4vw] lg:text-[2vw] pt-3 ">
                UI/UX Design
              </h1>
              <p className="text-[2vw] pt-3 lg:text-[1vw] px-12 ">
                User experience (UX) and user interface (UI) design are critical
                components of any website or application. Our team of UI/UX
                designers will work with you to create a user-friendly
              </p>
            </div>
            <div className="text-center pt-6">
              <button className="shadow-md shadow-white-500  bg-[#6f8d9a] text-white px-5 py-1 border- rounded-lg ">
                Learn More
              </button>
            </div>
          </div>
          {/* card4 */}
          <div className="shadow-2xl shadow-slate-400 pb-4 lg:h-96 mb-5">
            <img className="pt-12 px-36 w-[380px]" src={UiUx} alt="" />
            <div>
              <h1 className="text-center font-bold text-[4vw] lg:text-[2vw] pt-3 ">
                UI/UX Design
              </h1>
              <p className="text-[2vw] pt-3 lg:text-[1vw] px-12 ">
                User experience (UX) and user interface (UI) design are critical
                components of any website or application. Our team of UI/UX
                designers will work with you to create a user-friendly
              </p>
            </div>
            <div className="text-center pt-6">
              <button className="shadow-md shadow-white-500  bg-[#6f8d9a] text-white px-5 py-1 border- rounded-lg ">
                Learn More
              </button>
            </div>
          </div>
          {/* card5 */}
          <div className="shadow-2xl shadow-slate-400 pb-4 lg:h-96 mb-5">
            <img className="pt-12 px-36 w-[380px]" src={UiUx} alt="" />
            <div>
              <h1 className="text-center font-bold text-[4vw] lg:text-[2vw] pt-3 ">
                UI/UX Design
              </h1>
              <p className="text-[2vw] pt-3 lg:text-[1vw] px-12 ">
                User experience (UX) and user interface (UI) design are critical
                components of any website or application. Our team of UI/UX
                designers will work with you to create a user-friendly
              </p>
            </div>
            <div className="text-center pt-6">
              <button className="shadow-md shadow-white-500  bg-[#6f8d9a] text-white px-5 py-1 border- rounded-lg ">
                Learn More
              </button>
            </div>
          </div>
          {/* card6 */}
          <div className="shadow-2xl shadow-slate-400 pb-4 lg:h-96 mb-5">
            <img className="pt-12 px-36 w-[380px]" src={UiUx} alt="" />
            <div>
              <h1 className="text-center font-bold text-[4vw] lg:text-[2vw] pt-3 ">
                UI/UX Design
              </h1>
              <p className="text-[2vw] pt-3 lg:text-[1vw] px-12 ">
                User experience (UX) and user interface (UI) design are critical
                components of any website or application. Our team of UI/UX
                designers will work with you to create a user-friendly
              </p>
            </div>
            <div className="text-center pt-6">
              <button className="shadow-md shadow-white-500  bg-[#6f8d9a] text-white px-5 py-1 border- rounded-lg ">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
       {/* TESTIMONIAL */}
     <section className='bg-[#D9EAF7] w-full h-auto'>
      <div className='w-[90vw] sm:w-[90vw] md:w-[90vw] lg:w-[90vw] m-auto pb-20'>
         <div className='block sm:block md:flex lg:flex pt-10 sm:pt-10 md:pt-20 lg:pt-20'>
          <div className='w-[80vw] sm:w-[70vw] md:w-[35vw] lg:w-[30vw] m-auto'>
            <p className='text-black text-[2vw] sm:text-[2vw] md:text-[1vw] lg:text-[1vw] font-semibold'>TESTIMONIAL</p>
            <h1 className='text-black text-[4vw] sm:text-[4vw] md:text-[3vw] lg:text-[3vw] font-bold'>What They Say About Us</h1>
            <p className='text-[##7A5353]  text-[1.5vw] sm:text-[1.5vw] md:text-[1vw] lg:text-[1vw]]'>We have established ourselves as a leading provider of innovative technology solutions. With our state-of-the-art services, we can help you take.</p>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-[60vw] m-auto'>
            <div className=' w-[55vw] h-auto sm:w-[40vw] sm:h-[35vw] md:w-[30vw] md:h-[25vw] lg:w-[30vw] lg:h-[25vw] mr-3 bg-white rounded-lg p-6 mt-6 sm:mt-6 md:mt-0 lg:mt-0'>
            <p className='text-[#8d8b8b] text-[1.5vw] sm:text-[1.5vw] md:text-[1vw] lg:text-[1vw]'>chiGems Pakistan has been a game-changer for our digital marketing efforts. They have helped us increase our online visibility, drive more traffic to our website, and generate more leads. Their team is knowledgeable, creative, and always willing to go above and beyond to ensure our success. We highly recommend their digital marketing services to anyone looking to take their online presence to the next level.</p>
            <div className='flex'>
              <img src="https://techigems.pk/wp-content/uploads/2024/02/img__0007_Layer-1.jpg" alt="" className='rounded-full w-14 mt-2'/>
              <div>
              <h1 className='text-blue-900 text-[1.4vw] font-bold ml-10 mt-3'>Mark Johnson</h1>
              <p className='text-blue-700 text-[1vw] font-semibold ml-10'>Business manager</p>
              </div>
            </div>
           </div>
           <div className=' w-[55vw] h-auto sm:w-[40vw] sm:h-[35vw] md:w-[30vw] md:h-[25vw] lg:w-[30vw] lg:h-[25vw] bg-white rounded-lg p-6 mt-4 sm:mt-4 md:mt-0 lg:mt-0 md:ml-4 lg:ml-5'>
            <p className='text-[#8d8b8b] text-[1.5vw] sm:text-[1.5vw] md:text-[1vw] lg:text-[1vw]'>chiGems Pakistan has been a game-changer for our digital marketing efforts. They have helped us increase our online visibility, drive more traffic to our website, and generate more leads. Their team is knowledgeable, creative, and always willing to go above and beyond to ensure our success. We highly recommend their digital marketing services to anyone looking to take their online presence to the next level.</p>
            <div className='flex'>
              <img src="https://techigems.pk/wp-content/uploads/2024/02/img__0007_Layer-1.jpg" alt="" className='rounded-full w-14 mt-2'/>
              <div>
              <h1 className='text-blue-900 text-[1.4vw] font-bold ml-10 mt-3'>Mark Johnson</h1>
              <p className='text-blue-700 text-[1vw] font-semibold ml-10'>Business manager</p>
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
