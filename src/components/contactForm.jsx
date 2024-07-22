import React from 'react'
import Form from './Form'


const ContactForm = () => {
  return (
    <>
     <section className="flex flex-col md:flex-row w-full px-6 md:px-12 pb-8" data-aos="zoom-in-up">
        <div className="md:w-1/2">
          <p className="font-titleFont text-[#5454D4] px-7 ">Contact Us</p>
          <h1 className="font-titleFont text-[7vw] md:text-[5vw] 2xl:text-[3.5vw] font-extrabold px-6 ">Build Your Awesome Platform</h1>
          <p className="font-bodyFont 2xl:text-[1.3vw] pt-4 px-6 ">
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
  )
}

export default ContactForm