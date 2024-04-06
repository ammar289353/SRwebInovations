import React, { useState } from 'react';

const Services = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const servicesData = [
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
                    className='h-[32vw] w-full text-center relative overflow-hidden'
                    style={{
                        backgroundImage: `url('https://img.alicdn.com/imgextra/i4/6000000000490/O1CN01D5fXgg1FUSjXOMz2D_!!6000000000490-0-tbvideo.jpg')`,
                        backgroundSize: 'cover'
                    }}
                    onMouseEnter={handleHover}
                    onMouseLeave={handleMouseLeave}
                >
                    <p className='text-white text-center pt-44'>TECHIGEMS PAKISTAN</p>
                    <div
                        className={`absolute top-1/2 mr-28 transform transition-transform ${
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
            <section className='bg-[#FFFFFF] w-full h-[86vw]'>
      <div className='w-[93vw] m-auto pt-[8vw]'>
        <p className='text-black text-center font-semibold'>WHAT WE OFFER</p>
        <h1 className='text-center text-[3vw] font-bold'>Where Technology Meets <br /> Business.</h1>
      </div>
      <div className="px-12 py-2 pt-6 grid lg:grid-cols-3 gap-8">
        {servicesData.map((service, index) => (
          <div key={index} className="shadow-2xl text-black hover:text-white bg-[#fff] hover:bg-[#093E86] shadow-slate-400 pb-4 lg:h-96 mb-5">
            <img className="pt-12 px-36 w-[380px]" src={service.imageUrl} alt="" />
            <div>
              <h1 className=" text-center font-bold text-[4vw] lg:text-[2vw] pt-3 ">
                {service.title}
              </h1>
              <p className="text-[2vw] pt-3 lg:text-[1vw] px-12 ">
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
    <section className='bg-[#F0F6FB] w-full h-[60vw]'>
      <div className='flex w-[92vw] m-auto'> 
        <div className='w-[50vw] mt-16'>
          <p className='font-semibold text-[#05185A]'>OUR WORK PORTFOLIO</p>
          <h1 className='text-4xl font-bold pt-3 text-[#05185A]'>Explore Our Portfolio That Showcases Our Expertise And Creativity</h1>
          <p className='text-[1vw] pt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          <button className='bg-blue-700 border rounded-full p-2 text-white pl-7 pr-7 mt-10'>Explore More</button>
          <div className='flex mt-8'>
          <div className='mr-4'>
          <img src="https://techigems.pk/wp-content/uploads/2024/02/Rectangle-63.png" alt="" />
          </div>
          <div>
            <img src="https://techigems.pk/wp-content/uploads/2024/02/Rectangle-64.png" alt="" />
          </div>
          </div>
        </div>
        <div className='w-[50vw] mt-16 ml-7'>
          <img src="https://techigems.pk/wp-content/uploads/2024/02/services.png" alt="" />
        </div>
      </div>
    </section>
    {/* OUR EXPERIENCE */}
     <section>
      <div className='w-[93vw] m-auto'>
        <p className='font-semibold text-center mt-10'>OUR EXPERIENCE</p>
        <h1 className='font-bold text-center text-[3vw]'>We Have Been Working In <br /> The Industry Since 2016</h1>
        <p className='text-center text-[1vw] mt-3'>We have established ourselves as a leading provider of innovative technology solutions. <br />With our state-of-the-art services, we can help you take your business to the next level and beyond.</p>
        <div className='flex mt-10 mb-10'>
          <div className='rounded-xl border border-gray w-[22vw] h-[13vw] mr-4'>
            <h1 className='text-center text-black font-bold text-[3.5vw] mt-3'>14k</h1>
            <p className='text-center text-[1.5vw] text-[#7A5353]'>Projects <br /> Done</p>
          </div>
          <div className='rounded-xl border bg-blue-700 w-[22vw] h-[13vw] mr-4'>
            <h1 className='text-center text-white font-bold text-[3.5vw] mt-3'>12k+</h1>
            <p className='text-center text-white text-[1.5vw]'>Happy <br />Customers</p>
          </div>
          <div className='rounded-xl border border-gray w-[22vw] h-[13vw] mr-4'>
            <h1 className='text-center text-black font-bold text-[3.5vw] mt-3'>4.7</h1>
            <p className='text-center text-[1.5vw] text-[#7A5353]'>Customer <br /> Review</p>
          </div>
          <div className='rounded-xl border bg-blue-700 w-[22vw] h-[13vw] '>
            <h1 className='text-center text-white font-bold text-[3.5vw] mt-3'>15+</h1>
            <p className='text-center text-[1.5vw] text-white'>Years <br />Experience</p>
          </div>
        </div>
      </div>
     </section>
    </>
    );
};

export default Services;
