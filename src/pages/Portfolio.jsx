import React, { useState } from 'react';

const Portfolio = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const [category, setCategory] = useState('all');

    const handleCategoryChange = (category) => {
        setCategory(category);
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
                            Portfolio
                        </h1>
                    </div>
                </div>
            </section>
            {/* CUSTOM BUSINESS SOLUTIONS */}
    <section className='w-[90vw] m-auto'>
     <div className='text-center pt-16'>
        <p className='font-semibold'>CUSTOM BUSINESS SOLUTIONS</p>
        <h1 className='text-[4vw] font-bold '>Position Your Brand <br /> As A Leader In The Industry</h1>
     </div>
     <div className='w-[60vw] justify-between flex m-auto pb-4'>
     <span onClick={() => handleCategoryChange('all')} className='border border-black rounded-full p-2 pl-6 pr-6 hover:bg-blue-800 hover:text-white'>All</span>
                    <span onClick={() => handleCategoryChange('logo')} className='border border-black rounded-full p-2 pl-6 pr-6 hover:bg-blue-800 hover:text-white'>LOGO DESIGN</span>
                    <span onClick={() => handleCategoryChange('website')} className='border border-black rounded-full p-2 pl-6 pr-6 hover:bg-blue-800 hover:text-white'>WEBSITE DESIGN</span>
                    <span onClick={() => handleCategoryChange('stationary')} className='border border-black rounded-full p-2 pl-6 pr-6 hover:bg-blue-800 hover:text-white'>STATIONARY</span>
                    <span onClick={() => handleCategoryChange('packaging')} className='border border-black rounded-full p-2 pl-6 pr-6 hover:bg-blue-800 hover:text-white'>Packaging Design</span>

     </div>
     <div className="grid grid-cols-3 justify-between mt-5">
                    {category === 'all' && (
                        <>
                            <div className='border rounded-lg w-[29vw] h-[22vw] mb-3'>
                                <img src="https://techigems.pk/wp-content/uploads/2024/03/arabic-logo-design-1.jpg" alt="" className='border rounded-lg w-[29vw] h-[22vw]'/>
                            </div>
                            <div className='border rounded-lg w-[29vw] h-[22vw] mb-3'>
                                <img src="https://techigems.pk/wp-content/uploads/2024/03/creative-logo-design-1.jpg" alt="" className='border rounded-lg w-[29vw] h-[22vw]'/>
                            </div>
                            <div className='border rounded-lg w-[29vw] h-[22vw] mb-3'>
                                <img src="https://techigems.pk/wp-content/uploads/2024/03/artistic-logo-design-1.jpg" alt="" className='border rounded-lg w-[29vw] h-[22vw]'/>
                            </div>
                            <div className='border rounded-lg w-[29vw] h-[22vw] mb-3'>
                                <img src="https://techigems.pk/wp-content/uploads/2024/03/logo-2.jpg" alt="" className='border rounded-lg w-[29vw] h-[22vw]'/>
                            </div>
                            <div className='border rounded-lg w-[29vw] h-[22vw] mb-3'>
                                <img src="https://techigems.pk/wp-content/uploads/2024/03/website-design-1.jpg" alt="" className='border rounded-lg w-[29vw] h-[22vw]'/>
                            </div>
                            <div className='border rounded-lg w-[29vw] h-[22vw] mb-3'>
                                <img src="https://techigems.pk/wp-content/uploads/2024/03/stationery-design-1.jpg" alt="" className='border rounded-lg w-[29vw] h-[22vw]'/>
                            </div>
                            <div className='border rounded-lg w-[29vw] h-[22vw] mb-3'>
                                <img src="https://techigems.pk/wp-content/uploads/2024/03/stationery-design-2.jpg" alt="" className='border rounded-lg w-[29vw] h-[22vw]'/>
                            </div>
                            <div className='border rounded-lg w-[29vw] h-[22vw] mb-3'>
                                <img src="https://techigems.pk/wp-content/uploads/2024/03/stationery-design-3.jpg" alt="" className='border rounded-lg w-[29vw] h-[22vw]'/>
                            </div>
                            <div className='border rounded-lg w-[29vw] h-[22vw] mb-3'>
                                <img src="https://techigems.pk/wp-content/uploads/2024/03/stationery-design-4.jpg" alt="" className='border rounded-lg w-[29vw] h-[22vw]'/>
                            </div>
                            <div className='border rounded-lg w-[29vw] h-[22vw] mb-3'>
                                <img src="https://techigems.pk/wp-content/uploads/2024/03/packaging-design-3.jpg" alt="" className='border rounded-lg w-[29vw] h-[22vw]'/>
                            </div>
                            <div className='border rounded-lg w-[29vw] h-[22vw] mb-3'>
                                <img src="https://techigems.pk/wp-content/uploads/2024/03/packaging-design-1.jpg" alt="" className='border rounded-lg w-[29vw] h-[22vw]'/>
                            </div>
                            <div className='border rounded-lg w-[29vw] h-[22vw] mb-3'>
                                <img src="https://techigems.pk/wp-content/uploads/2024/03/packaging-design-2.jpg" alt="" className='border rounded-lg w-[29vw] h-[22vw]'/>
                            </div>
                            <div className='border rounded-lg w-[29vw] h-[22vw] mb-10'>
                                <img src="https://techigems.pk/wp-content/uploads/2024/03/packaging-design-4.jpg" alt="" className='border rounded-lg w-[29vw] h-[22vw]'/>
                            </div>
                        </>
                    )}

                    {category === 'logo' && (
                        <>
                           <div className='border rounded-lg w-[29vw] h-[22vw] mb-3'>
                                <img src="https://techigems.pk/wp-content/uploads/2024/03/arabic-logo-design-1.jpg" alt="" className='border rounded-lg w-[29vw] h-[22vw]'/>
                            </div>
                            <div className='border rounded-lg w-[29vw] h-[22vw]'>
                                <img src="https://techigems.pk/wp-content/uploads/2024/03/creative-logo-design-1.jpg" alt="" className='border rounded-lg w-[29vw] h-[22vw]'/>
                            </div>
                            <div className='border rounded-lg w-[29vw] h-[22vw] mb-3'>
                                <img src="https://techigems.pk/wp-content/uploads/2024/03/logo-2.jpg" alt="" className='border rounded-lg w-[29vw] h-[22vw]'/>
                            </div>
                            <div className='border rounded-lg w-[29vw] h-[22vw] mb-10'>
                                <img src="https://techigems.pk/wp-content/uploads/2024/03/packaging-design-1.jpg" alt="" className='border rounded-lg w-[29vw] h-[22vw]'/>
                            </div>

                        </>
                    )}


                   {category === 'website' && (
                        <>
                             <div className='border rounded-lg w-[29vw] h-[22vw] mb-10'>
                                <img src="https://techigems.pk/wp-content/uploads/2024/03/artistic-logo-design-1.jpg" alt="" className='border rounded-lg w-[29vw] h-[22vw]'/>
                            </div>
                            <div className='border rounded-lg w-[29vw] h-[22vw] mb-10'>
                                <img src="https://techigems.pk/wp-content/uploads/2024/03/packaging-design-2.jpg" alt="" className='border rounded-lg w-[29vw] h-[22vw]'/>
                            </div>
                            <div className='border rounded-lg w-[29vw] h-[22vw] mb-10'>
                                <img src="https://techigems.pk/wp-content/uploads/2024/03/website-design-1.jpg" alt="" className='border rounded-lg w-[29vw] h-[22vw]'/>
                            </div>
                           
                        </>
                    )}
                   
                   {category === 'stationary' && (
                        <>
                             <div className='border rounded-lg w-[29vw] h-[22vw] mb-10'>
                                <img src="https://techigems.pk/wp-content/uploads/2024/03/stationery-design-1.jpg" alt="" className='border rounded-lg w-[29vw] h-[22vw]'/>
                            </div>
                            <div className='border rounded-lg w-[29vw] h-[22vw] mb-10'>
                                <img src="https://techigems.pk/wp-content/uploads/2024/03/stationery-design-2.jpg" alt="" className='border rounded-lg w-[29vw] h-[22vw]'/>
                            </div>
                            <div className='border rounded-lg w-[29vw] h-[22vw] mb-10'>
                                <img src="https://techigems.pk/wp-content/uploads/2024/03/stationery-design-3.jpg" alt="" className='border rounded-lg w-[29vw] h-[22vw]'/>
                            </div>
                        </>
                    )}
                    
                    {category === 'packaging' && (
                        <>
                             <div className='border rounded-lg w-[29vw] h-[22vw] mb-10'>
                                <img src="https://techigems.pk/wp-content/uploads/2024/03/stationery-design-4.jpg" alt="" className='border rounded-lg w-[29vw] h-[22vw]'/>
                            </div>
                            <div className='border rounded-lg w-[29vw] h-[22vw] mb-10'>
                                <img src="https://techigems.pk/wp-content/uploads/2024/03/packaging-design-3.jpg" alt="" className='border rounded-lg w-[29vw] h-[22vw]'/>
                            </div>
                            <div className='border rounded-lg w-[29vw] h-[22vw] mb-10'>
                                <img src="https://techigems.pk/wp-content/uploads/2024/03/packaging-design-4.jpg" alt="" className='border rounded-lg w-[29vw] h-[22vw]'/>
                            </div>
                        </>
                    )}

                </div>
        
    </section>
    </>
  )
}

export default Portfolio
