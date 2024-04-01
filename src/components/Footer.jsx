import React from 'react'
import NavLogo from '../images/nav-logo.png'

const Footer = () => {
  return (
    <section className='bg-[#0B4790] '>
         <div className='pt-12'>
            <h1 className='text-[6vw] lg:text-[3vw] text-center font-bold pt-3 text-white pb-12 lg:pb-24'>Lets Talk </h1>
            
         </div>
         <hr />
         <div className='pt-5 lg:flex justify-between text-white  lg:pl-4 pr-12 pb-20'>
            <div>
                <img 
                className='h-24 lg:h-30 lg:w-72 px-12 md:px-48 lg:px-4'
                src={NavLogo} alt="" /> 
                <p className='lg:w-72 text-[3vw] px-6 md:px-12 lg:text-[1vw] pt-3 '>
                    We are a team of tech-savvy professionals who are dedicated to simplifying business operations with the power of technology.</p>
            </div>
           <div className='flex gap-20 px-3 md:px-24'>
           <div className='text-center pt-8'>
                <h1 className='text-[6vw] lg:text-[2vw] font-bold '>
                    Company
                </h1>
                <ul>
                    <li>About Us</li>
                    <li>About Us</li>
                    <li>About Us</li>
                    <li>About Us</li>
                </ul>
            </div>
            <div className='text-center pt-8'>
            <h1 className='text-[6vw] lg:text-[2vw] font-bold '>
                    Services
                </h1>
                <ul>
                    <li>About Us</li>
                    <li>About Us</li>
                    <li>About Us</li>
                    <li>About Us</li>
                </ul>
            </div>
           </div>
            <div className='pt-8'>
            <h1 className='text-center text-[6vw] lg:text-[2vw] font-bold '>
                    NewsLetter
                </h1>
                <p className='text-[4vw] pt-3 lg:text-[1.3vw] lg:w-72 px-4 md:px-12 lg:px-12'>
                Sign up our newsletter to get update news and article about company.
                </p>
                <div className='pt-6 lg:pt-2 px-6 md:px-12 lg:px-0'>
                    <input 
                    className='px-12 py-2 rounded-2xl'
                    type="text" placeholder='Enter Your Email' />
                </div>
                <div className='pt-6 px-6 md:px-12 lg:px-0 lg:pt-2'>
                    <button className='bg-[#09367D] w-[78vw] md:w-[37vw] lg:w-[27.5vw] lg:px-28 py-2 rounded-2xl shadow-sm shadow-blue-400'>
                        Sign Up
                    </button>
                </div>
            
            </div>
         </div>
         <hr />
         <div className='py-3 px-3 text-white'>
        <p>© 2024, Techigems All Rights Reserved</p>
         </div>
    </section>
  )
}

export default Footer