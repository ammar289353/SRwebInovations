import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";
import { FaWhatsapp } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
// import backgroundImage from "../images/Sr-Particle.jpg";
// hero images
import vector13 from "../images/Vector 13.png";
import circle from "../images/circle.png";
import Triangle from "../images/tri.png";
import add from "../images/add.png";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  const emailData = [
    {
      id: 1,
      icon: <MdOutlineMail />,
      label: "Email",
      email: "info@techigems.pk",
    },
    {
      id: 2,
      icon: <FaWhatsapp />,
      label: "WhatsApp",
      email: "+92-343-900-6803",
    },
    { id: 3, icon: <FiPhone />, label: "Contact", email: "021-3729-3327" },
    {
      id: 4,
      icon: <IoLocationOutline />,
      label: "Find Us",
      email:
        "Mashriq Center, Gulshan-e-iqbal, Block 14, Shah Suleman Road, Karachi-Pakistan",
    },
  ];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [tel, setTel] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_y31dw1e";
    const templateId = "template_3viu0vg";
    const publicKey = "nNzYMhfwB-bCLec3Q";

    const templateParams = {
      form_name: name,
      from_email: email,
      to_name: "maryam fatima",
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response);
        setName("");
        setEmail("");
        setCompany("");
        setTel("");
        setSubject("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error sending email", error);
      });
  };

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
            Contact Us 
          </p>
          
            <h1
              className="text-white justify-center text-center text-[6vw] px-24 md:px-96 font-titleFont md:text-[4vw] font-extrabold"
            >
               Contact Us <br /> <span className="text-[#5454D4]">Today</span>.
            </h1>
            <div className="flex justify-between">
            <img className="px-3 md:px-48" src={Triangle} alt="" />
            <img className="pr-4 md:pr-44" src={add} alt="" />
            </div>
        </div>
      </section>
      {/* <h1 className='text-[5vw] font-bold text-[#545353] text-center'>Contact Us</h1> */}
      <section className="w-[90vw] m-auto mt-6">
        <div className="block sm:block md:flex lg:flex pt-6">
          <div className="shadow-2xl rounded-lg shadow-slate-300 pb-4 lg:m-5 lg:w-[30vw] lg:h-72 mb-5"
           data-aos="flip-left">
            <img
              className="pt-12 px-36 w-[380px]"
              src="https://techigems.pk/wp-content/uploads/2024/02/Frame.png"
              alt=""
            />
            <h1 className="text-center font-semibold text-[4vw] lg:text-[1.6vw] pt-3 text-gray-600 ">
              Customer Support
            </h1>
            <div className="text-center pt-6">
              <button className="shadow-md shadow-white-500 rounded-full border border-blue-800 text-blue-800 font-semibold px-8 py-2 hover:bg-blue-800 hover:text-white">
                Chat now
              </button>
            </div>
          </div>
          <div className="shadow-2xl rounded-lg shadow-slate-300 pb-4 lg:m-5 lg:w-[30vw] lg:h-72 mb-5" data-aos="flip-left">
            <img
              className="pt-12 px-36 w-[380px]"
              src="https://techigems.pk/wp-content/uploads/2024/02/Frame.png"
              alt=""
            />
            <h1 className="text-center font-semibold text-[4vw] lg:text-[1.6vw] pt-3 text-gray-600 ">
              Customer Support
            </h1>
            <div className="text-center pt-6">
              <button className="shadow-md shadow-white-500 rounded-full border border-blue-800 text-blue-800 font-semibold px-8 py-2 hover:bg-blue-800 hover:text-white">
                Chat now
              </button>
            </div>
          </div>
          <div className="shadow-2xl rounded-lg shadow-slate-300 pb-4 lg:m-5 lg:w-[30vw] lg:h-72 mb-5" data-aos="flip-left">
            <img
              className="pt-12 px-36 w-[380px]"
              src="https://techigems.pk/wp-content/uploads/2024/02/Frame.png"
              alt=""
            />
            <h1 className="text-center font-semibold text-[4vw] lg:text-[1.6vw] pt-3 text-gray-600 ">
              Customer Support
            </h1>
            <div className="text-center pt-6">
              <button className="shadow-md shadow-white-500 rounded-full border border-blue-800 text-blue-800 font-semibold px-8 py-2 hover:bg-blue-800 hover:text-white">
                Chat now
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="w-[93vw] m-auto mt-10 pb-10">
        <div className="block sm:block md:flex lg:flex">
          <div className="w-[90vw] sm:w-[90vw] md:w-[30vw] lg:w-[30vw] text-center sm:text-center h-auto sm:h-auto md:h-[38vw] lg:h-[38vw] mt-16">
            <p className="text-blue-800 font-semibold">CONTACT US</p>
            <h1 className="text-[3vw] font-bold">Get in touch</h1>
            <div className="pb-10 border-b">
              {emailData.map((item) => (
                <div key={item.id} className="flex mt-7">
                  <div className="text-blue-500 text-[4.5vw] sm:text-[4.5vw] md:text-[2vw] lg:text-[2vw]">
                    {item.icon}
                  </div>
                  <div className="text-start ml-8 lg:ml-14">
                    <h1 className=" text-[4vw] sm:text-[4vw] md:text-[1.3vw] lg:text-[1.3vw] font-semibold text-gray-600">
                      {item.label}
                    </h1>
                    <p className=" text-[3vw] sm:text-[3vw] md:text-[1vw] lg:text-[1vw] text-gray-600 pl-1">
                      {item.email}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* contact us */}
          <div className="shadow-2xl rounded-lg shadow-slate-300 pb-4 lg:m-5 lg:w-[70vw] lg:h-[45vw] mb-5" data-aos="zoom-in-up">
            <h1 className="text-[4vw] sm:text-[4vw] md:text-[2.7vw] lg:text-[2.7vw] text-gray-800 font-bold pt-7 pl-10">
              Send a message
            </h1>
            <p className="text-[2.6vw] sm:text-[2.6vw] md:text-[1.5vw] lg:text-[1.2vw] pl-10 text-gray-500 ">
              We've solidified our position as a premier provider of
              groundbreaking <br /> technology solutions.
            </p>
            <form action="" onSubmit={handleSubmit} className="grid pt-5">
              <div className="block sm:block md:flex lg:flex">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-gray-100 rounded-full w-[65vw] sm:w-[70vw] md:w-[25vw] lg:w-[25vw] mt-3 p-[1vw] ml-10"
                />
                <input
                  type="text"
                  name="company"
                  placeholder="Company"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="bg-gray-100 rounded-full w-[65vw] sm:w-[70vw] md:w-[25vw] lg:w-[25vw]  p-[1vw] ml-10 sm:ml-10 md:ml-10 lg:ml-10 mt-3 sm:mt-3"
                />
              </div>
              <div className="block sm:block md:flex lg:flex">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={tel}
                  onChange={(e) => setTel(e.target.value)}
                  className="bg-gray-100 rounded-full w-[65vw] sm:w-[70vw] md:w-[25vw] lg:w-[25vw]  mt-3 p-[1vw] ml-10"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-100 rounded-full w-[65vw] sm:w-[70vw] md:w-[25vw] lg:w-[25vw] mt-3  p-[1vw] ml-10 sm:ml-10 md:ml-10 lg:ml-10"
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="bg-gray-100 rounded-full  w-[65vw] sm:w-[70vw] md:w-[52vw] lg:w-[54vw] mt-3 p-[1vw] ml-10"
              />
              <textarea
                name="message"
                type="text"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="bg-gray-100 rounded-lg mt-3  w-[65vw] sm:w-[70vw] md:w-[52vw] lg:w-[54vw] p-[1vw] ml-10 pl-6"
              ></textarea>
              <button
                type="submit"
                className="flex bg-blue-700 w-[53vw] sm:w-[53vw] md:w-[50vw] lg:w-[50vw] text-center pl-[23vw] text-[3vw] sm:text-[3vw] md:text-[1.4vw] lg:text-[1.4vw] rounded-full ml-14 text-white p-3 mt-2"
              >
                <MdOutlineMail className="text-[3.5vw] sm:text-[3vw] md:text-[2vw] lg:text-[1.5vw]  sm:mt-1" />{" "}
                Send
              </button>
            </form>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23078.288084510416!2d74.28194354170905!3d31.462312357965956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391903e4b7e6ff87%3A0xcc62842150b2ec7!2sBlock-C%2C%20faisal%20Town!5e1!3m2!1sen!2s!4v1698343462968!5m2!1sen!2s"
          width="100%"
          height="270"
          title="map"
          style={{ border: 0, marginLeft: "10px", borderRadius: "0px" }}
          allowFullScreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </>
  );
};

export default Contact;
