import React from 'react'
import logo from '../image/banner.svg';
function Hero() {
  return (
    <div>  
    <header className="w-[80%] h-screen  flex flex-col justify-center md:flex-row justify-start items-center m-auto max-w-[1240px] ">
      <div className=''>
        <h1 className='md:font-normal text-[2rem]'>Hello Its <span className='font-medium  text-3xl md:font-semibold text-6xl'>Wahid Ul Islam</span></h1>
        <p className='font-normal text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sunt impedit, expedita 
        officiis recusandae</p>
      </div>
      <div>
        <img src={logo} className="h-[50vmin] " alt="logo" />
      </div>
      </header>
    </div>
  )
}

export default Hero