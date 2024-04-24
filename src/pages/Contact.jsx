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
            <div className='flex pt-3 pb-7'>
                <div className='w-[50vw]'>
            <h1 className='text-[4vw] font-bold text-[#545353]'>
            Get in touch
            </h1>
                    <div className='flex font-bold text-[#545353] pt-5'>
                        <MdOutlineMail className='mt-4 text-[2vw]'/>
                        <h1 className='text-[3vw]'>Email:</h1>
                    </div>
                   <h1 className='text-[1.5vw] ml-7'>info@techigems.pk</h1>
                   <div className='flex font-bold text-[#545353] pt-5'>
                        <FaWhatsapp className='mt-4 text-[2vw]'/>
                        <h1 className='text-[3vw]'>WhatsApp:</h1>
                    </div>
                   <h1 className='text-[1.5vw] ml-7'>info@techigems.pk</h1>
                   <div className='flex font-bold text-[#545353] pt-5'>
                        <FiPhone className='mt-4 text-[2vw]'/>
                        <h1 className='text-[3vw]'>Contact:</h1>
                    </div>
                   <h1 className='text-[1.5vw] ml-7'>info@techigems.pk</h1>
                </div>
                <div className='w-[50vw]'>
                  <h1 className='text-[4vw] font-bold text-[#545353]'>Send a message</h1>
                  <form action="https://formspree.io/f/mwkdyaor" method='POST' className='rounded-lg bg-[#F0F6FB] pl-2'
                   style={{display: "flex",flexDirection: "column", marginTop: "20px", gap: "0.5rem"}}>
          <div className='grid grid-cols-2 bg-[#F0F6FB] rounded-lg'>
          <input 
          type="text" 
          name='username' 
          placeholder='username' 
          autoComplete='off' 
          required 
          className='w-[285px] h-[30px] cursor-pointer rounded-2 bg-[#F0F6FB] border border-[#F0F6FB] hover:border-blue-600'
          />

         <input 
          type="email" 
          name='Email' 
          placeholder='Email' 
          autoComplete='off'  
          required 
          className='w-[280px] h-[30px] cursor-pointer rounded-2 bg-[#F0F6FB] border border-[#F0F6FB] hover:border-blue-600'
          />
          <input 
          type="text" 
          name='Company' 
          placeholder='Company' 
          autoComplete='off'  
          required 
          className='w-[285px] h-[30px] cursor-pointer rounded-2 bg-[#F0F6FB] border border-[#F0F6FB] hover:border-blue-600'
          />
          <input 
          type="phone" 
          name='Phone' 
          placeholder='Phone' 
          autoComplete='off'  
          required 
          className='w-[280px] h-[30px] cursor-pointer rounded-2 bg-[#F0F6FB] border border-[#F0F6FB] hover:border-blue-600'
          />
          </div>
          <input type="text" name='subject' placeholder='Subject' required className='w-[580px] h-[30px] cursor-pointer rounded-2 bg-[#F0F6FB] border border-[#F0F6FB] hover:border-blue-600 placeholder-gray-400'/>
          <textarea 
          name="message" 
          cols="30" 
          rows="6" 
          autoComplete="off" 
          required
          className='bg-[#F0F6FB] w-[580px] text-gray-400 border border-[#F0F6FB] hover:border-blue-600'
          ></textarea>
          <input type="submit" value="send" 
           className='w-[590px] h-[40px] bg-blue-800 rounded-full text-white'/>
        </form>
           </div>
        </div>
        </section>
        <section className='w-[90vw] m-auto pb-10'>
            <div className='flex font-bold text-[#545353]'>
            <IoLocationOutline  className='mt-4 text-[2vw]'/>
            <h1 className='text-[3vw]'>Find Us</h1>
            </div>
            <h1 className='text-[1.5vw] ml-5'>209-C Faisal Town Lahore punjab pakistan</h1>
            <div className='w-[90vw]'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23078.288084510416!2d74.28194354170905!3d31.462312357965956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391903e4b7e6ff87%3A0xcc62842150b2ec7!2sBlock-C%2C%20faisal%20Town!5e1!3m2!1sen!2s!4v1698343462968!5m2!1sen!2s" 
           width="100%"
              height="270" 
              title='map'
              className='border rounded-lg'
              allowFullScreen="" 
              loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        </section>
    </>
  )
}

export default Contact
