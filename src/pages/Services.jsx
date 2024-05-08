import React, { useState } from 'react';
import backgroundImage from '../images/Sr-Particle.jpg';

const Services = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const cardsData = [
        {
          imageUrl: 'https://techigems.pk/wp-content/uploads/2024/02/uiux.png',
          title: 'UI/UX Design',
          description:
            'User experience (UX) and user interface (UI) design are critical components of any website or application. Our team of UI/UX designers will work with you to create a user-friendly.',
        },
        {
            imageUrl: 'https://techigems.pk/wp-content/uploads/2024/02/uiux.png',
            title: 'UI/UX Design',
            description:
              'User experience (UX) and user interface (UI) design are critical components of any website or application. Our team of UI/UX designers will work with you to create a user-friendly.',
          },
          {
            imageUrl: 'https://techigems.pk/wp-content/uploads/2024/02/uiux.png',
            title: 'UI/UX Design',
            description:
              'User experience (UX) and user interface (UI) design are critical components of any website or application. Our team of UI/UX designers will work with you to create a user-friendly.',
          },
          {
            imageUrl: 'https://techigems.pk/wp-content/uploads/2024/02/uiux.png',
            title: 'UI/UX Design',
            description:
              'User experience (UX) and user interface (UI) design are critical components of any website or application. Our team of UI/UX designers will work with you to create a user-friendly.',
          },
          {
            imageUrl: 'https://techigems.pk/wp-content/uploads/2024/02/uiux.png',
            title: 'UI/UX Design',
            description:
              'User experience (UX) and user interface (UI) design are critical components of any website or application. Our team of UI/UX designers will work with you to create a user-friendly.',
          },
          {
            imageUrl: 'https://techigems.pk/wp-content/uploads/2024/02/uiux.png',
            title: 'UI/UX Design',
            description:
              'User experience (UX) and user interface (UI) design are critical components of any website or application. Our team of UI/UX designers will work with you to create a user-friendly.',
          },
      ];

    return (
        <>
            <section>
                <div
                    className='h-[45vw] sm:h-[45vw] md:h-[45vw] lg:h-[32vw] w-full text-center relative overflow-hidden'
                    style={{
                        backgroundImage: `url(${backgroundImage})`,
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
                            Services
                        </h1>
                    </div>
                </div>
            </section>
            {/* Cards section */}
            <section className='bg-[#FFFFFF] w-full h-auto md:h-auto lg:h-[86vw]'>
      <div className='w-[93vw] m-auto pt-[5vw]'>
        <p className='text-black text-center font-semibold'>WHAT WE OFFER</p>
        <h1 className='text-center text-[3vw] font-bold'>Where Technology Meets <br /> Business.</h1>
      </div>
      <div className="item-center px-4 sm:m-auto sm:ml-20 md:ml-0 ml-3 lg:ml-0 md:px-10 py-2 pt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-5 lg:gap-8">
        {cardsData.map((service, index) => (
          <div key={index} className="shadow-2xl text-black hover:text-white bg-[#fff] hover:bg-[#093E86] shadow-slate-400 pb-4 sm:w-[70vw] md:w-[43vw] lg:w-[30vw] md:h-auto lg:h-[30vw] mb-4">
            <img className="pt-12 px-36 w-[390px] ml-0 sm:ml-10 sm:w-[385px] md:ml-1 md:w-[370px] lg:w-[380px]" src={service.imageUrl} alt="" />
            <div>
              <h1 className=" text-center font-bold text-[4vw] md:text-[3vw] lg:text-[2vw] pt-3 ">
                {service.title}
              </h1>
              <p className="text-[3vw] pt-3 sm:text-[2vw] md:text-[2vw] lg:text-[1vw] px-12 ">
                {service.description}
              </p>
            </div>
            <div className="text-center pt-6">
              <button className=" hover:text-white border-[2px] border-blue-800 hover:border-white rounded-full bg-[#ffff] hover:bg-[#093E86] text-black px-5 py-1 border-rounded-lg ">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
        </section>
    {/* OUR WORK PORTFOLIO */}
    <section className='bg-[#F0F6FB] w-full md:pb-5 md:h-auto lg:h-[60vw]'>
      <div className='lg:flex md:flex sm:block w-[92vw] m-auto sm:ml-10'> 
        <div className='sm:w-full lg:w-[50vw] sm:pt-3 pt-7'>
          <p className='font-semibold md:text-[1vw] text-[#05185A] sm:pt-16 md:pt-14 lg:pt-16'>OUR WORK PORTFOLIO</p>
          <h1 className='text-[5vw] sm:text-[4vw] md:text-[4vw] lg:text-4xl font-bold pt-3 text-[#05185A]'>Explore Our Portfolio That Showcases Our Expertise And Creativity</h1>
          <p className='md:text-[1.3vw] lg:text-[1vw] pt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          <button className='bg-blue-700 border rounded-full p-2 text-white pl-7 pr-7 mt-10'>Explore More</button>
          <div className='sm:block lg:flex md:flex mt-8'>
          <div className=' mr-4'>
          <img src="https://techigems.pk/wp-content/uploads/2024/02/Rectangle-63.png" alt="" />
          </div>
          <div className='mt-4 sm:mt-4 md:mt-0'>
            <img src="https://techigems.pk/wp-content/uploads/2024/02/Rectangle-64.png" alt="" />
          </div>
          </div>
        </div>
        <div className='mt-3 sm:mt-5 pb-5 md:mt-10 lg:mt-16 lg:ml-7 md:ml-5'>
          <img src="https://techigems.pk/wp-content/uploads/2024/02/services.png" alt="" className='md:h-[70vw] lg:h-[50vw] sm:h-[70vw] sm:w-[70vw] md:w-[70vw] lg:w-[50vw]'/>
        </div>
      </div>
    </section>
    {/* OUR EXPERIENCE */}
     <section>
      <div className='w-[93vw] m-auto'>
        <p className='font-semibold text-center text-[4vw] sm:text-[4vw] md:text-[1vw] lg:text-[1vw] mt-10'>OUR EXPERIENCE</p>
        <h1 className='font-bold text-center text-[3.5vw] sm:text-[3vw] md:text-[3vw] lg:text-[3vw]'>We Have Been Working In <br /> The Industry Since 2016</h1>
        <p className='text-center text-[3vw] sm:text-[3vw] md:text-[1.2vw] lg:text-[1vw] mt-3'>We have established ourselves as a leading provider of innovative technology solutions. <br />With our state-of-the-art services, we can help you take your business to the next level and beyond.</p>
        <div className='block sm:block md:flex lg:flex mt-10 mb-10 w-[80vw] sm:w-[80vw] md:w-[86vw] lg:w-[90vw] m-auto'>
          <div className='rounded-xl border border-gray w-[80vw] h-[25vw] sm:w-[80vw] sm:h-[20vw] lg:w-[22vw] lg:h-[13vw] mr-4 mt-3 sm:mt-4'>
            <h1 className='text-center text-black font-bold text-[4.5vw] sm:text-[4vw] md:text-[4vw] lg:text-[3.5vw] mt-3'>14k</h1>
            <p className='text-center text-[3.5vw] sm:text-[3vw] md:text-[2vw] lg:text-[1.5vw] text-[#7A5353]'>Projects <br /> Done</p>
          </div>
          <div className='rounded-xl border bg-blue-700 mr-4 w-[80vw] h-[25vw] sm:w-[80vw] sm:h-[20vw] lg:w-[22vw] lg:h-[13vw] mt-3 sm:mt-4'>
            <h1 className='text-center text-white font-bold text-[4.5vw] sm:text-[4vw] md:text-[4vw] lg:text-[3.5vw] mt-3'>12k+</h1>
            <p className='text-center text-white text-[3.5vw] sm:text-[3vw] md:text-[2vw] lg:text-[1.5vw]'>Happy <br />Customers</p>
          </div>
          <div className='rounded-xl border border-gray mr-4 w-[80vw] h-[25vw] sm:w-[80vw] sm:h-[20vw] lg:w-[22vw] lg:h-[13vw] mt-3 sm:mt-4'>
            <h1 className='text-center text-black font-bold text-[4.5vw] sm:text-[4vw] md:text-[4vw] lg:text-[3.5vw] mt-3'>4.7</h1>
            <p className='text-center text-[3.5vw] sm:text-[3vw] md:text-[2vw] lg:text-[1.5vw] text-[#7A5353]'>Customer <br /> Review</p>
          </div>
          <div className='rounded-xl border bg-blue-700 w-[80vw] h-[25vw] sm:w-[80vw] sm:h-[20vw] lg:w-[22vw] lg:h-[13vw] mt-3 sm:mt-4'>
            <h1 className='text-center text-white font-bold text-[4.5vw] sm:text-[4vw] md:text-[4vw] lg:text-[3.5vw] mt-3'>15+</h1>
            <p className='text-center text-[3.5vw] sm:text-[3vw] md:text-[2vw] lg:text-[1.5vw] text-white'>Years <br />Experience</p>
          </div>
        </div>
      </div>
     </section>
     {/* TESTIMONIAL */}
     <section className='bg-[#D9EAF7] w-full h-auto'>
      <div className='w-[90vw] sm:w-[90vw] md:w-[90vw] lg:w-[90vw] m-auto pb-20'>
         <div className='block sm:block md:flex lg:flex pt-10 sm:pt-10 md:pt-20 lg:pt-20'>
          <div className='w-[80vw] sm:w-[70vw] md:w-[35vw] lg:w-[30vw] m-auto'>
            <p className='text-black text-[3vw] sm:text-[3vw] md:text-[1vw] lg:text-[1vw] font-semibold'>TESTIMONIAL</p>
            <h1 className='text-black text-[4vw] sm:text-[4vw] md:text-[3vw] lg:text-[3vw] font-bold'>What They Say About Us</h1>
            <p className='text-[##7A5353]  text-[3vw] sm:text-[3vw] md:text-[1vw] lg:text-[1vw]]'>We have established ourselves as a leading provider of innovative technology solutions. With our state-of-the-art services, we can help you take.</p>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-[60vw] m-auto'>
            <div className=' w-[55vw] h-auto sm:w-[40vw] sm:h-[35vw] md:w-[30vw] md:h-[25vw] lg:w-[30vw] lg:h-[25vw] mr-3 bg-white rounded-lg p-6 mt-6 sm:mt-6 md:mt-0 lg:mt-0'>
            <p className='text-[#8d8b8b] text-[3vw] sm:text-[3vw] md:text-[1vw] lg:text-[1vw]'>chiGems Pakistan has been a game-changer for our digital marketing efforts. They have helped us increase our online visibility, drive more traffic to our website, and generate more leads. Their team is knowledgeable, creative, and always willing to go above and beyond to ensure our success. We highly recommend their digital marketing services to anyone looking to take their online presence to the next level.</p>
            <div className='flex'>
              <img src="https://techigems.pk/wp-content/uploads/2024/02/img__0007_Layer-1.jpg" alt="" className='rounded-full w-14 mt-2'/>
              <div>
              <h1 className='text-blue-900 text-[3vw] sm:text-[3vw] md:text-[1.4vw] lg:text-[1.4vw] font-bold ml-10 mt-3'>Mark Johnson</h1>
              <p className='text-blue-700 text-[2vw] sm:text-[2vw] md:text-[1vw] lg:text-[1vw] font-semibold ml-10'>Business manager</p>
              </div>
            </div>
           </div>
           <div className=' w-[55vw] h-auto sm:w-[40vw] sm:h-[35vw] md:w-[30vw] md:h-[25vw] lg:w-[30vw] lg:h-[25vw] bg-white rounded-lg p-6 mt-4 sm:mt-4 md:mt-0 lg:mt-0 md:ml-4 lg:ml-5'>
            <p className='text-[#8d8b8b] text-[3vw] sm:text-[3vw] md:text-[1vw] lg:text-[1vw]'>chiGems Pakistan has been a game-changer for our digital marketing efforts. They have helped us increase our online visibility, drive more traffic to our website, and generate more leads. Their team is knowledgeable, creative, and always willing to go above and beyond to ensure our success. We highly recommend their digital marketing services to anyone looking to take their online presence to the next level.</p>
            <div className='flex'>
              <img src="https://techigems.pk/wp-content/uploads/2024/02/img__0007_Layer-1.jpg" alt="" className='rounded-full w-14 mt-2'/>
              <div>
              <h1 className='text-blue-900 text-[3vw] sm:text-[3vw] md:text-[1.4vw] lg:text-[1.4vw] font-bold ml-10 mt-3'>Mark Johnson</h1>
              <p className='text-blue-700 text-[2vw] sm:text-[2vw] md:text-[1vw] lg:text-[1vw] font-semibold ml-10'>Business manager</p>
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

export default Services;
