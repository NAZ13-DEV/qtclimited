import React from 'react'
import smallImage from '../../img/small.png';
import bigImage from '../../img/big.png';
import star from '../../img/ic_round-star-rate.png';
import thumbs from '../../img/icon-park-solid_good-two.png';
import heart from '../../img/ph_heart-fill.png';

const ContentOne = () => {
  return (

    <section className='h-full'>

    <div className='grid grid-rows-[auto] grid-cols-1 lg:grid-cols-[1fr,1fr] max-w-full lg:max-w-screen-lg mx-auto px-auto  max-h-screen '>


        <div className='md:mt-24 mt-3 lg:w-[550px] max-w-screen-sm mx-auto px-4'>
            <h1 className='md:text-[30px] lg:text-[48px] text-[35px]'>Unforgettable Events,
            <span className='text-[#FF5353]'>Expertly </span> Planned</h1>
            <p className='md:text-[20px]  '>Welcome to QTC EVENTS/RENTALS, where we make your dreams a reality. From weddings to seminars, our team crafts perfect, stress-free events tailored to you.</p>

            <div className='flex gap-3 mt-3'>
            <a href="" className='btn bg-[#1E1EFF] text-white'>Get Started</a>
            <a href="" className='btn bg-[#ffffff] text-[#1E1EFF]'>View Events</a>
            </div>
        </div>






        <div className='relative lg:w-[400px] lg:ml-16 ml-8  sm:ml-[-3rem] md:ml-[30px] '>
            <p className='absolute z-10 px-4 py-1 mt-6 text-black bg-white border rounded-lg border-primary top-36 md:left-48 left-36 '> <span><img src={thumbs} alt="" /></span> Flawless Execution</p>
            <p className='absolute z-10 px-4 py-1 mt-6 text-black bg-white border rounded-lg top-64 md:left-[-70px] border-primary left-[-30px]'> <span><img src={star} alt="" /></span> Exceptional Services </p>
            <p className='absolute z-10 px-4 py-1 mt-6 text-black bg-white border rounded-lg border-primary top-[25rem] left-8'> <span><img src={heart} alt="" /></span> Incredible Experience</p>
        <img src={smallImage} alt="small" className='absolute z-10 top-24 max-w-36'  />

        <img src={bigImage} alt="big"  className='absolute max-w-80 top-36'/>

        </div>


    </div>

    </section>
  )
}

export default ContentOne
