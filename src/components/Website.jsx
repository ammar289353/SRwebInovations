import React, { useState } from 'react'
import backgroundImage from '../images/Sr-Particle.jpg';
import graphic from '../images/graphic.png'
import logodesign from '../images/logodesign.png'
import uiux from '../images/uiux.png'
import branding from '../images/branding.png'
import Group from '../images/Group.png'

const Website = () => {
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
                    className='h-[45vw] sm:h-[45vw] md:h-[45vw] lg:h-[40vw] w-full text-center relative overflow-hidden'
                    style={{
                        backgroundImage: `url(${backgroundImage})`,
                        backgroundSize: 'cover'
                    }}
                    onMouseEnter={handleHover}
                    onMouseLeave={handleMouseLeave}
                >
                    <p className='text-white text-center pt-[20vw] sm:pt-[20vw] md:pt-44 lg:pt-44 text-[1.5vw] sm:text-[1vw] md:text-[1vw] lg:text-[1vw] '>TECHIGEMS PAKISTAN</p>
                    <div
                        className={`absolute top-[16vw] mr-[9vw] sm:mr-[8vw] md:mr-0 lg:mr-0 md:ml-3 lg:ml-3 text-center transform transition-transform ${
                            isHovered ? '-translate-y-2' : ''
                        } ${isHovered ? 'left-[38%]' : 'right-[30%]'}`}
                    >
                        <h1
                            className={`text-white text-center text-[4vw] font-bold ${isHovered ? 'hovered' : ''}`}
                            onMouseEnter={handleHover}
                            onMouseLeave={handleMouseLeave}
                        >
                          Website Development
                        </h1>
                    </div>
                    <p className='text-white text-[1.1vw] text-center mt-40'>WE OFFER A WIDE RANGE OF SERVICES TO HELP YOU CREATE A UNIQUE AND PROFESSIONAL VISUAL IDENTITY FOR YOUR BUSINESS. <br /> OUR TEAM OF EXPERIENCED DESIGNERS IS DEDICATED TO CREATING STUNNING DESIGNS THAT WILL MAKE YOUR BRAND STAND OUT <br /> FROM THE REST.</p>
                </div>
            </section>
            <section className='w-[94vw] m-auto mb-10 mt-10'>
               <div className='block sm:block md:flex lg:flex'>
                <div className='w-[90vw] sm:w-[90vw] md:w-[50vw] lg:w-[50vw]'>
                 <img src={graphic} alt="" />
                </div>
                <div className='w-[90vw] sm:w-[90vw] md:w-[50vw] lg:w-[50vw] ml-0 sm:ml-0 md:ml-10 lg:ml-10 mt-10 sm:mt-10 md:mt-28 lg:mt-30 text-center sm:text-center md:text-start lg:text-start'>
                 <p className='font-semibold text-[3.5vw] sm:text-[3vw] md:text-[1vw] lg:text-[1vw]'>GRAPHIC DESIGN</p>
                 <h1 className='font-bold text-[5.5vw] sm:text-[5vw] md:text-[3vw] lg:text-[3vw]'>Get A Custom Design <br /> For Your Brand</h1>
                 <p className='mt-2 text-[4.5vw] sm:text-[4vw] md:text-[1.2vw] lg:text-[1.2vw] text-gray-400'>Our graphic design services are designed to help businesses create a strong and effective visual identity. Our team of creative designers specializes in everything from logo design to branding, social media design, and UI/UX design. We create visually stunning designs and grab the attention of the target audience. Let us create a stunning design for your brand.</p>
                 <button className='bg-blue-800 text-white text-[4vw] sm:text-[4vw] md:text-[1.5vw] lg:text-[1.5vw] rounded-full p-2 pl-14 sm:pl-14 md:pl-10 lg:pl-10 pr-14 sm:pr-14 md:pr-10 lg:pr-10 mt-4 mb-4'>Get Started</button>
                </div>
               </div>
            </section>
            <section className='w-[90vw] m-auto'>
              <div className='block sm:block md:flex lg:flex mb-14'>
                <div className='mt-10 w-[90vw] sm:w-[90vw] text-center sm:text-center md:text-start lg:text-start'>
                  <p className='font-semibold text-[4.5vw] sm:text-[4.5vw] md:text-[1vw] lg:text-[1vw]'>GRAPHIC DESIGN</p>
                  <h1 className='font-bold text-[4.5vw] sm:text-[4vw] md:text-[2.5vw] lg:text-[2.5vw] mt-2 text-gray-800'>Create A Strong Brand Identity With Our <br /> Professional Graphic Design Services!</h1>
                  <button className='bg-blue-800 text-white text-[4vw] sm:text-[4vw] md:text-[1.5vw] lg:text-[1.5vw] rounded-full p-2 pl-14 sm:pl-14 md:pl-10 lg:pl-10 pr-14 sm:pr-14 md:pr-10 lg:pr-10 mt-4 mb-4'>Get Started</button>
                </div>
                <div className='ml-1 sm:ml-1 md:m-3 lg:m-3 mt-6 sm:mt-6 md:mt-4 lg:mt-4 w-[90vw] sm:w-[90vw] md:w-[35vw] lg:w-[40vw] h-auto sm:h-auto md:h-auto lg:h-auto p-4 sm:p-7 md:p-6 lg:p-6 pt-10 rounded-lg shadow-2xl shadow-slate-400 items-center text-center hover:bg-blue-900 text-gray-500 text-gray-700 hover:text-white'>
                   <img src={logodesign} alt="" className='sm:ml-60 ml-40 w-[15vw] sm:w-[15vw] md:w-[5vw] lg:w-[5.5vw] md:ml-0 lg:ml-24'/>
                  <h1 className='font-bold text-[5vw] sm:text-[5vw] md:text-[2vw] lg:text-[1.5vw] mt-3'>Logo Design</h1>
                  <p className='text-[4vw] sm:text-[4vw] md:text-[1.5vw] lg:text-[1vw] mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quaerat repellendus iusto delectus provident possimus recusandae earum, minus quos ducimus tenetur ratione. Quae deleniti libero magni pariatur vitae cupiditate aspernatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. jksjdksjdkSDSFjf</p>
                </div>
              </div>
              <div className='block sm:block md:flex lg:flex mb-14'>
              <div className='ml-1 sm:ml-1 md:m-3 lg:m-3 mt-6 sm:mt-6 md:mt-4 lg:mt-4 w-[90vw] sm:w-[90vw] md:w-[30vw] lg:w-[30vw] h-auto sm:h-auto md:h-auto lg:h-auto p-4 sm:p-7 md:p-6 lg:p-6 pt-10 rounded-lg shadow-2xl shadow-slate-400 items-center text-center hover:bg-blue-900 text-gray-500 text-gray-700 hover:text-white'>
                   <img src={uiux} alt="" className='sm:ml-60 ml-44 w-[15vw] sm:w-[15vw] md:w-[5vw] lg:w-[5.5vw] md:ml-14 lg:ml-32'/>
                  <h1 className='font-bold text-[5vw] sm:text-[5vw] md:text-[2vw] lg:text-[1.5vw] mt-3'>UI/UX</h1>
                  <p className='text-[4vw] sm:text-[4vw] md:text-[1.5vw] lg:text-[1vw] mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quaerat repellendus iusto delectus provident possimus recusandae earum, minus quos ducimus tenetur ratione. Quae deleniti libero magni pariatur vitae cupiditate aspernatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. jksjdksjdkSDSFjf</p>
                </div>
                <div className='ml-1 sm:ml-1 md:m-3 lg:m-3 mt-6 sm:mt-6 md:mt-4 lg:mt-4 w-[90vw] sm:w-[90vw] md:w-[30vw] lg:w-[30vw] h-auto sm:h-auto md:h-auto lg:h-auto p-4 sm:p-7 md:p-6 lg:p-6 pt-10 rounded-lg shadow-2xl shadow-slate-400 items-center text-center hover:bg-blue-900 text-gray-500 text-gray-700 hover:text-white'>
                   <img src={branding} alt="" className='sm:ml-60 ml-44 w-[15vw] sm:w-[15vw] md:w-[5vw] lg:w-[5.5vw] md:ml-14 lg:ml-32'/>
                  <h1 className='font-bold text-[5vw] sm:text-[5vw] md:text-[2vw] lg:text-[1.5vw] mt-3'>Branding Design</h1>
                  <p className='text-[4vw] sm:text-[4vw] md:text-[1.5vw] lg:text-[1vw] mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quaerat repellendus iusto delectus provident possimus recusandae earum, minus quos ducimus tenetur ratione. Quae deleniti libero magni pariatur vitae cupiditate aspernatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. jksjdksjdkSDSFjf</p>
                </div>
                <div className='ml-1 sm:ml-1 md:m-3 lg:m-3 mt-6 sm:mt-6 md:mt-4 lg:mt-4 w-[90vw] sm:w-[90vw] md:w-[30vw] lg:w-[30vw] h-auto sm:h-auto md:h-auto lg:h-auto p-4 sm:p-7 md:p-6 lg:p-6 pt-10 rounded-lg shadow-2xl shadow-slate-400 items-center text-center hover:bg-blue-900 text-gray-500 text-gray-700 hover:text-white'>
                   <img src={Group} alt="" className='sm:ml-60 ml-44 w-[15vw] sm:w-[15vw] md:w-[5vw] lg:w-[5.5vw] md:ml-14 lg:ml-32'/>
                  <h1 className='font-bold text-[5vw] sm:text-[5vw] md:text-[2vw] lg:text-[1.5vw] mt-3'>Social Media Design</h1>
                  <p className='text-[4vw] sm:text-[4vw] md:text-[1.5vw] lg:text-[1vw] mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quaerat repellendus iusto delectus provident possimus recusandae earum, minus quos ducimus tenetur ratione. Quae deleniti libero magni pariatur vitae cupiditate aspernatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. jksjdksjdkSDSFjf</p>
                </div>
              </div>
            </section>
    </>
  )
}

export default Website
