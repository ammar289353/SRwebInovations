import React, { useState } from 'react';

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
    </>
  )
}

export default Contact
