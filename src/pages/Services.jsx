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
          <div key={index} className="shadow-2xl shadow-slate-400 pb-4 lg:h-96 mb-5">
            <img className="pt-12 px-36 w-[380px]" src={service.imageUrl} alt="" />
            <div>
              <h1 className="text-center font-bold text-[4vw] lg:text-[2vw] pt-3 ">
                {service.title}
              </h1>
              <p className="text-[2vw] pt-3 lg:text-[1vw] px-12 ">
                {service.description}
              </p>
            </div>
            <div className="text-center pt-6">
              <button className="border-[2px] border-blue-800 rounded-full bg-[#ffff] text-black px-5 py-1 border-rounded-lg ">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
    {/* OUR WORK PORTFOLIO */}
    <section>
     
    </section>
        </>
    );
};

export default Services;
