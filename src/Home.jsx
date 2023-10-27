import React from 'react';
import logo from '../public/TSKYPP.png';
function Home() {
  return (
    <>
      <div className='relative z-20 flex flex-wrap h-full -mt-20 pt-32'>
        <div className='w-full md:w-1/2 h-full'>
          <img src={logo} className='w-full h-full object-cover' />
        </div>

        <div className='w-full md:w-1/2 p-10 flex justify-center items-center'>
          <div className='max-w-xs'>
            <h1 className='text-6xl mb-4 leading-none'>Welcome</h1>
            <p className='mb-8 text-sm leading-relaxed'>
              Here’s what you need to know before getting started with the
              navbar: The best way to consume React is via the npm package which
              you can install with npm (or yarn if you prefer). If you plan on
              customizing the Bootstrap Sass files, or dont want to use a CDN
              for the stylesheet, it may be helpful to install vanilla Bootstrap
              as well.
            </p>
            <a
              href='/'
              className='bg-gray-900 text-white uppercase font-sans text-xs px-4 py-3'>
              Learn more <i className='ml-1 fa fa-chevron-right'></i>
            </a>
          </div>
        </div>
      </div>

      <div className='z-10 w-1/2 h-full bg-gray-900 absolute top-0 left-0 -ml-20'></div>

      <div className='z-10 w-1 h-64 bg-gray-100 absolute bottom-0 left-0 ml-5'></div>
    </>
  );
}

export default Home;
