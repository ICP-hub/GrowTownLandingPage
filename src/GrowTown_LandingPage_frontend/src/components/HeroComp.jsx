import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HeroComp = () => {
  // Initialize AOS when the component mounts
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: false,    // Trigger animation every time the element enters the viewport
      mirror: true,   // Reverse animation when scrolling up
    });
  }, []);


  return (
    <div id='heroPage' className='bg-[#00A6C0] h-screen w-full overflow-hidden'>
      {/* Hero Content Wrapper */}
      
      <div className='flex justify-between items-center h-full'>
        {/* Left Hero Content */}
        <div className='relative'>
          {/* Cloud Animations */}
          <div className='absolute w-[200%] left-0 -top-40'>

            <img
              data-aos='fade-right'
              src='images/cloud02-l.png'
              alt='leftCloud'
              className='w-full'
               draggable='false'
              loading="lazy"
            />
          </div>



          {/* Land and Lower Clouds */}

          <div className='-ml-28 sm:-ml-10 xl:-ml-0 mt-[20%] sm:mt-[60%]  lg:mt-0' data-aos='fade-up' data-aos-delay='500'>

            {/* Ship */}
            <img src='images/sheep.png' alt='sheep' data-aos='fade-up' data-aos-delay='1000'
             className='absolute w-24 sm:w-auto z-30 left-0 sm:left-[30%]' 
             draggable='false'
             loading="lazy"/>
            <img
              src='images/land01.png'
              alt='land'
              className=' w-72 sm:w-auto  relative top-10 z-20'
               draggable='false'
              loading="lazy"
            />
            <div className='hidden sm:block'>
            <img
              src='images/cloud02-l.png'
              alt='leftCloud'
              className='absolute h-[100%] z-20 top-[50%] left-[0%]'
               draggable='false'
              loading="lazy"
            />

            <img
              src='images/cloud03-l.png'
              alt='leftCloud'
              className='absolute h-[100%] z-20 top-[50%] left-[20%]'
               draggable='false'
              loading="lazy"
            />

            <img
              src='images/cloud02-l.png'
              alt='leftCloud'
              className='absolute z-20 top-[60%] left-[20%]'
               draggable='false'
              loading="lazy"
            />
            </div>
          </div>

        </div>

        {/* Center Hero Content */}
        <div
          className='absolute z-40 top-[16%] w-full sm:w-auto sm:top-[10%]  sm:left-[50%] transform sm:-translate-x-1/2'

        >
          <img src='/images/LogoGif (1).gif' alt='logo' data-aos='zoom-in' 
          className=' mx-auto w-96 sm:w-auto' 
          draggable='false'
          loading="lazy"/>

          <div data-aos='fade-down' className=' mt-[40%]  sm:mt-0' data-aos-delay='1000'>
            <div className=' mx-auto w-[50%]  sm:w-auto  mb-10 -mt-2 '>
            <h1 className='  text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl  text-center text-[#4B2519] custom-ironman font-bold'
           >COMING SOON!
           </h1>
            </div>
           
            <div className='flex mx-auto w-[45%] xs:w-[40%]  sm:w-auto flex-col sm:flex-row whitespace-nowrap  justify-center sm:gap-[5%] gap-5 mt-[15%] sm:mt-0 text-white'>
              <div className=' sm:ml-0 p-1 sm:w-auto px-2 bg-black flex justify-center items-center rounded-lg '>
              <img src='images/appleIcon.svg' className='my-auto mx-1'
               draggable='false'
               loading="lazy" />
                <div className='mx-1 ml-2  custom-fingerpaint '>
                  <h2 className=' text-xs sm:text-sm '>Available on</h2>
                  <h1 className=' sm:text-lg'>App Store</h1>
                </div>
              </div>
              <div className='  sm:ml-0 bg-black  sm:w-auto flex  items-center p-1 px-2 justify-center rounded-lg'>
                <img src='images/andIcon.svg' className='my-auto mx-1' 
                 draggable='false'
                 loading="lazy"/>
                <div className='mx-1 ml-2 custom-fingerpaint'>
                  <h2 className=' text-xs sm:text-sm '>Available on</h2>
                  <h1 className=' sm:text-lg'>Play Store</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Hero Content */}
        <div className='relative'>

          {/* top Cloud Animations */}
          <div className='absolute w-[200%] right-0 z-0 -top-40'>

            <img
              data-aos='fade-left'
              src='/images/cloud04-r.png'
              alt='rightCloud'
              className=' '
               draggable='false'
              loading="lazy"
            />
          </div>


          {/* Land and Lower Clouds */}
          <div data-aos='fade-up' className=' mt-[150%] sm:mt-[90%]  lg:mt-0 -mr-24 sm:-mr-0 ' data-aos-delay='500'>
            {/* Cow */}
            <div
              className='absolute z-30 -mr-16 sm:-mr-0  bottom-28   lg:top-[-40%] sm:left-[-5%]'
              data-aos='fade-up'
              data-aos-delay='1000'
            >
              <img
                src='images/Cow.gif'
                alt='cow'
                style={{
                  transform: 'scaleX(-1)',
                }}
                className='w-64 sm:w-auto'
                 draggable='false'
              loading="lazy"
              />
            </div>


            <img
              src='/images/land01 (1).png'
              alt='land'
              className='w-72 sm:w-auto relative z-20'
               draggable='false'
              loading="lazy"
            />
            <img
              src='/images/cloud06-r.png'
              alt='rightCloud'
              className='absolute hidden sm:block z-20 top-[70%] lg:top-[40%]'
 draggable='false'
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroComp;
