import React, { useState } from 'react';

const About = () => {
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
            <div className='h-[45vw] sm:h-[45vw] md:h-[45vw] lg:h-[38vw] w-full text-center relative overflow-hidden'
             style={{
                 backgroundImage: `url('https://img.alicdn.com/imgextra/i4/6000000000490/O1CN01D5fXgg1FUSjXOMz2D_!!6000000000490-0-tbvideo.jpg')`,
                backgroundSize: 'cover'
                }}
                onMouseEnter={handleHover}
                onMouseLeave={handleMouseLeave}
                >
                <p className='text-white text-center pt-[20vw] sm:pt-[20vw] md:pt-44 lg:pt-52 text-[1.5vw] sm:text-[1vw] md:text-[1vw] lg:text-[1vw] '>TECHIGEMS PAKISTAN</p>
                <div
                    className={`absolute top-1/2 mr-[9vw] sm:mr-[8vw] md:mr-[8vw] lg:mr-14 transform transition-transform ${
                     isHovered ? '-translate-y-2' : ''
                    } ${isHovered ? 'left-[38%]' : 'right-[30%]'}`}
                    >
                 <h1
                    className={`text-white text-center text-[7vw] font-bold ${isHovered ? 'hovered' : ''}`}
                    onMouseEnter={handleHover}
                    onMouseLeave={handleMouseLeave}
                >
                     About Us
                </h1>
                </div>
                <div>
                <p className='text-center text-white pt-48'>WE IMPLEMENT RIGHT TECHNOLOGY SOLUTIONS TO UNLOCK YOUR BUSINESS GROWTH</p>
                </div>
            </div>
     </section>
     {/* Our value */}
      <section className='bg-[#F0F6FB] pb-12 sm:pb-12 md:pb-0 lg:pb-0 '>
       <div className='w-[94vw] h-auto sm:h-auto md:h-[47vw] lg:h-[46vw] m-auto'>
        <div className='block sm:block md:flex lg:flex'>
            <div className='w-[80vw] sm:w-[85vw] md:w-[40vw] lg:w-[40vw] pt-14 m-auto sm:m-auto'>
                <p className='font-semibold text-[4.5vw] sm:text-[4.5vw] md:text-[2vw] lg:text-[1vw]'>Our value</p>
                <h1 className='text-[5vw] sm:text-[5vw] md:text-[3vw] lg:text-[3vw] font-bold pt-2 text-[#05185A]'>WHERE TECHNOLOGY MEETS CREATIVITY AND INNOVATION</h1>
                <p className='text-gray-500 pt-2'>We are a team of tech-savvy professionals who are dedicated to simplifying business operations with the power of technology. Our aim is to empower you with the latest technological advancements through our innovative solutions that cater to your diverse needs. With our expertise and a customer-centric approach, we strive to bring your ideas to life and help you achieve your business goals.</p>
            </div>
            <div className='w-[80vw] sm:w-[85vw] md:w-[30vw] lg:w-[30vw] pt-10'>
              <div className='w-[93vw] h-auto sm:w-[40vw] sm:h-auto md:w-[26vw] md:h-[16vw] lg:w-[26vw] lg:h-[16vw] bg-white rounded-lg p-5 sm:p-5 md:p-8 lg:p-8 hover:bg-[#093E86] text-black hover:text-white'>
                <img src="https://techigems.pk/wp-content/uploads/2024/02/aboutx11.png" alt=""/>
                <h1 className='pt-4 font-bold text-[5vw] sm:text-[5vw] md:text-[2vw] lg:text-[2vw] text-gray-600'>Mission</h1>
                <p className='pt-4 text-[2.5vw] sm:text-[2.5vw] md:text-[1vw] lg:text-[1vw] text-gray-500 hover:text-white'>Our mission is to empower businesses with innovative technology solutions.</p>
              </div>
              <div className='w-[93vw] mt-3 sm:mt-4 md:mt-4 lg:mt-4 h-auto sm:w-[40vw] sm:h-auto md:w-[26vw] md:h-[16vw] lg:w-[26vw] lg:h-[16vw] bg-white rounded-lg p-5 sm:p-5 md:p-8 lg:p-8 hover:bg-[#093E86] text-black hover:text-white'>
                <img src="https://techigems.pk/wp-content/uploads/2024/02/aboutx3.png" alt="" />
                <h1 className='pt-4 font-bold text-[5vw] sm:text-[5vw] md:text-[2vw] lg:text-[2vw] text-gray-600'>Vision</h1>
                <p className='pt-4 text-[2.5vw] sm:text-[2.5vw] md:text-[1vw] lg:text-[1vw] text-gray-500 hover:text-white'>Our vision is to create a world where technology empowers everyone.</p>
              </div>
            </div>
            <div className='w-[30vw] pt-6 sm:pt-6 md:pt-20 lg:pt-20'>
            <div className='w-[93vw] h-auto sm:w-[40vw] sm:h-auto md:w-[26vw] md:h-[16vw] lg:w-[26vw] lg:h-[16vw] bg-white rounded-lg p-5 sm:p-5 md:p-8 lg:p-8 hover:bg-[#093E86] text-black hover:text-white'>
                <img src="https://techigems.pk/wp-content/uploads/2024/02/aboutx2.png" alt="" />
                <h1 className='pt-4 font-bold text-[5vw] sm:text-[5vw] md:text-[2vw] lg:text-[2vw] text-gray-600'>Value</h1>
                <p className='pt-4 text-[2.5vw] sm:text-[2.5vw] md:text-[1vw] lg:text-[1vw] text-gray-500 hover:text-white'>We value integrity, innovation, and excellence in everything we do.</p>
              </div>
              <div className='w-[93vw] h-auto sm:w-[40vw] sm:h-auto md:w-[26vw] md:h-[16vw] lg:w-[26vw] lg:h-[16vw] bg-white rounded-lg p-5 sm:p-5 md:p-8 lg:p-8 hover:bg-[#093E86] text-black hover:text-white mt-3 sm:mt-4 md:mt-4 lg:mt-4'>
                <img src="https://techigems.pk/wp-content/uploads/2024/02/aboutx4.png" alt="" />
                <h1 className='pt-4 font-bold text-[5vw] sm:text-[5vw] md:text-[2vw] lg:text-[2vw] text-gray-600'>Purpose</h1>
                <p className='pt-4 text-[2.5vw] sm:text-[2.5vw] md:text-[1vw] lg:text-[1vw] text-gray-500 hover:text-white'>Our purpose is to bridge the gap between technology and humans, making operations simpler and more efficient.</p>
              </div>
            </div>
        </div>
       </div>
      </section>
      {/* WE ARE  */}
      <section className='bg-[#093E86]'>
        <div className='w-[95vw] h-[55vw] m-auto'>
          <div className='flex'>
            <div className='w-[50vw] p-7 pt-36'>
                <p className='text-white font-semibold'>WE ARE </p>
                <h1 className='text-white text-[2.5vw] font-bold'>Empowering Our Diverse Clientele To Leverage Latest Technology And Unlock New Business Opportunities</h1>
            </div>
            <div className='w-[50vw] p-8 pt-24 text-gray-300 text-[1.2vw]'>
                <p>At TechiGems Pakistan, we understand that technology is constantly evolving and that staying ahead of the game is key to success. That’s why we are dedicated to empowering our diverse clientele to leverage the latest technology and unlock new business opportunities. Whether it’s through developing responsive websites, mobile apps, cloud computing, artificial intelligence, or any other cutting-edge technology, we are committed to helping our clients stay at the forefront of their industries.
We are passionate about assisting our clients in leveraging technology to transform their businesses. Our team of experts works closely with each client to understand their unique needs and create customized solutions that meet their specific goals. With our state-of-the-art solutions, our clients can streamline their operations, improve efficiency, and unlock new revenue streams, all while staying ahead of the competition. If you’re ready to take your business to the new level of success, we’re here to help you every step of the way.</p>
            </div>
          </div>
          <div className='border-t-[0.1vw] border-gray-300 mt-10'>
            <div className='w-[80vw] m-auto flex justify-between pt-7'>
            <div className='text-white'>
                <h1 className='text-[2.4vw] font-bold'>14K+</h1>
                <p className='text-[1vw]'>Project Done</p>
            </div>
            <div className='text-white'>
                <h1 className='text-[2.4vw] font-bold'>12K+</h1>
                <p className='text-[1vw]'>Happy customer</p>
            </div>
            <div className='text-white'>
                <h1 className='text-[2.4vw] font-bold'>4.7</h1>
                <p className='text-[1vw]'>Review customer</p>
            </div>
            <div className='text-white'>
                <h1 className='text-[2.4vw] font-bold'>15+</h1>
                <p className='text-[1vw]'>Years Experience</p>
            </div>
            </div>
          </div>
        </div>
      </section>
      {/* OUR PEOPLE-FIRST APPROACH  */}
      <section className='bg-white'>
        <div className='flex w-[90vw] h-[40vw] m-auto pt-16'>
            <div className='w-[50vw]'>
                <img src="https://techigems.pk/wp-content/uploads/2024/02/Mask-group-1.png" alt="" />
            </div>
            <div className='w-[50vw] p-10 pt-24'>
                <p className='font-semibold text-[#05185A]'>OUR PEOPLE-FIRST APPROACH </p>
                <h1 className='text-[2.6vw] text-[#05185A] font-bold mt-3'>We Value Employee Well-Being And Success</h1>
                <p className='text-gray-600 pt-3'>At TechiGems Pakistan, we believe that our people are our greatest asset. That’s why we have always put our employees first, valuing their well-being and success above all else. We strive to create a culture of care and support, where our team members feel valued, respected, and empowered. From investing in employee development programs to providing opportunities for career growth, we are committed to ensuring that our employees have all the resources they need to achieve their full potential.</p>
            </div>
        </div>
        <div className='h-[19vw] w-[90vw] bg-white m-auto'>
          <div className='bg-[#093E86] flex w-[90vw] h-[13vw] rounded-lg mt-28 justify-between'>
            <div className='text-white p-10'>
                <h1 className='font-bold text-[1.4vw]'>3345+ Projects Delivered</h1>
                <p className='text-[0.8vw] pt-3'>From marketing to development, and IT services, we empowered our diverse clientele with the best solutions.</p>
            </div>
            <div className='text-white p-10'>
                <h1 className='font-bold text-[1.4vw]'>Years of Experience</h1>
                <p className='text-[0.8vw] pt-3'>We have been working in the industry for years and delivering custom solutions to businesses of all sizes. </p>
            </div>
            <div className='text-white p-10'>
                <h1 className='font-bold text-[1.4vw]'>Creative Experts</h1>
                <p className='text-[0.8vw] pt-3'>Our team consists of experienced professionals who are dedicated to achieving success for our clients.</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        
      </section>
    </>
  )
}

export default About
