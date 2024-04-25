import React, { useState } from 'react';
import { FaWhatsapp } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";

const Contact = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const emailData = [
        { id: 1,  icon: <MdOutlineMail/>, label: 'Email', email: 'info@techigems.pk' },
        { id: 2,  icon: <FaWhatsapp/>, label: 'WhatsApp', email: '+92-343-900-6803' },
        { id: 3,  icon: <FiPhone/>, label: 'Contact', email: '021-3729-3327' },
        { id: 4,  icon: <IoLocationOutline/>, label: 'Find Us', email: 'Mashriq Center, Gulshan-e-iqbal, Block 14, Shah Suleman Road, Karachi-Pakistan' },
        // Add more email entries as needed
    ];

  return (
    <>
      <section>
                <div
                    className='h-[45vw] sm:h-[45vw] md:h-[45vw] lg:h-[32vw] w-full text-center relative overflow-hidden'
                    style={{
                        backgroundImage: `url('https://img.alicdn.com/imgextra/i4/6000000000490/O1CN01D5fXgg1FUSjXOMz2D_!!6000000000490-0-tbvideo.jpg')`,
                        backgroundSize: 'cover'
                    }}
                    onMouseEnter={handleHover}
                    onMouseLeave={handleMouseLeave}
                >
                    <p className='text-white text-center pt-[20vw] sm:pt-[20vw] md:pt-44 lg:pt-44 text-[1.5vw] sm:text-[1vw] md:text-[1vw] lg:text-[1vw] '>TECHIGEMS PAKISTAN</p>
                    <div
                        className={`absolute top-1/2 mr-[9vw] sm:mr-[8vw] md:mr-[8vw] lg:mr-28 transform transition-transform ${
                            isHovered ? '-translate-y-2' : ''
                        } ${isHovered ? 'left-[38%]' : 'right-[30%]'}`}
                    >
                        <h1
                            className={`text-white text-center text-[6vw] font-bold ${isHovered ? 'hovered' : ''}`}
                            onMouseEnter={handleHover}
                            onMouseLeave={handleMouseLeave}
                        >
                            Contact
                        </h1>
                    </div>
                </div>
            </section>
                {/* <h1 className='text-[5vw] font-bold text-[#545353] text-center'>Contact Us</h1> */}
            <section className='w-[90vw] m-auto'>
                <div className='flex pt-6'>
                <div className="shadow-2xl rounded-lg shadow-slate-300 pb-4 lg:m-5 lg:w-[30vw] lg:h-72 mb-5">
                    <img className="pt-12 px-36 w-[380px]" src="https://techigems.pk/wp-content/uploads/2024/02/Frame.png" alt="" />
                    <h1 className="text-center font-semibold text-[4vw] lg:text-[1.6vw] pt-3 text-gray-600 ">
                    Customer Support
                    </h1>
                    <div className="text-center pt-6">
                    <button className="shadow-md shadow-white-500 rounded-full border border-blue-800 text-blue-800 font-semibold px-8 py-2 ">
                       Chat now
                    </button>
                    </div>
                </div>
                <div className="shadow-2xl rounded-lg shadow-slate-300 pb-4 lg:m-5 lg:w-[30vw] lg:h-72 mb-5">
                    <img className="pt-12 px-36 w-[380px]" src="https://techigems.pk/wp-content/uploads/2024/02/Frame.png" alt="" />
                    <h1 className="text-center font-semibold text-[4vw] lg:text-[1.6vw] pt-3 text-gray-600 ">
                    Customer Support
                    </h1>
                    <div className="text-center pt-6">
                    <button className="shadow-md shadow-white-500 rounded-full border border-blue-800 text-blue-800 font-semibold px-8 py-2 ">
                       Chat now
                    </button>
                    </div>
                </div>
                <div className="shadow-2xl rounded-lg shadow-slate-300 pb-4 lg:m-5 lg:w-[30vw] lg:h-72 mb-5">
                    <img className="pt-12 px-36 w-[380px]" src="https://techigems.pk/wp-content/uploads/2024/02/Frame.png" alt="" />
                    <h1 className="text-center font-semibold text-[4vw] lg:text-[1.6vw] pt-3 text-gray-600 ">
                    Customer Support
                    </h1>
                    <div className="text-center pt-6">
                    <button className="shadow-md shadow-white-500 rounded-full border border-blue-800 text-blue-800 font-semibold px-8 py-2 ">
                       Chat now
                    </button>
                    </div>
                </div>
                </div>
            </section>
        <section className='w-[93vw] m-auto'>
            <div className='flex'>
            <div className='w-[30vw] h-[38vw] mt-16'>
             <p className='text-blue-800 font-semibold'>CONTACT US</p>
             <h1 className='text-[3vw] font-bold'>Get in touch</h1>
             <div className='pb-10 border-b'>
                        {emailData.map((item) => (
                            <div key={item.id} className='flex items-center mt-7'>
                                <div className='text-blue-500 text-[2vw]'>
                                    {item.icon}
                                </div>
                                <div className='ml-4'>
                                    <h1 className='text-[1.3vw] font-semibold text-gray-600'>{item.label}</h1>
                                    <p className='text-[1vw] text-gray-600'>{item.email}</p>
                                </div>
                            </div>
                        ))}
                    </div>
            </div>
            <div className="shadow-2xl rounded-lg shadow-slate-300 pb-4 lg:m-5 lg:w-[70vw] lg:h-[45vw] mb-5">
              <h1 className='text-[2.7vw] text-gray-800 font-bold pt-7 pl-10'>Send a message</h1>
              <p className='text-[1.2vw] pl-10 text-gray-500 '>We have established ourselves as a leading provider of innovative <br /> technology solutions.</p>
              <form action="" className='grid grid-cols-2 pt-5'>
                <input type="text" name='name' placeholder='Name' className='bg-gray-100 rounded-full w-[25vw] p-[1vw] ml-10 '/>
                <input type="text" name='company' placeholder='Company' className='bg-gray-100 rounded-full w-[25vw] p-[1vw]'/>
                <input type="phone" name='compant' placeholder='Phone'  className='bg-gray-100 rounded-full w-[25vw]  mt-3 p-[1vw] ml-10 '/>
                <input type="email" name='email' placeholder='Email' className='bg-gray-100 rounded-full w-[25vw] mt-3  p-[1vw]'/>
              </form>
              <input type="text" name='subject' placeholder='Subject' className='bg-gray-100 rounded-full w-[52vw] mt-3  p-[1vw] ml-10'/>
              <textarea name="message" type='text' placeholder='Message' className='bg-gray-100 rounded-lg mt-3  w-[52vw] p-[1vw] ml-10 pl-6'></textarea>
            <button className='bg-blue-700 w-[50vw] rounded-full ml-14 text-white p-3 mt-2'>
                Send
            </button>
            </div>
            </div>
        </section>
    </>
  )
}

export default Contact
