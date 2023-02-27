import React,{useState,useContext } from 'react'
import logo from '../image/logo.svg'
import { XMarkIcon,Bars3Icon }  from '@heroicons/react/24/outline'
import { ThemeContext } from '../pages/home'


export default function Navbar() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const [nav,setNav] = useState(false)
  const handleCLick = ()=> setNav(!nav)
  return (
    <div className='w-screen h-[80px] z-10 bg-transparent fixed'>
        <div className='px-5 flex justify-between items-center h-full max-w-[80%] mx-auto border-b-2'>
            <div className='flex items-center justify-start'>
            <a href="#">
            <img src={logo} alt="" className='w-[6rem] h-[6rem] md:w-[10rem] h-15' />
            </a>
            </div>
            <div className='hidden md:flex pr-4 '>
            <ul className='hidden md:flex cursor-pointer m-5 font-mono p-6 space-x-6 font-semibold text-lg'>
                <li className='hover:text-[#68b984] '>Home</li>
                <li className='hover:text-[#68b984] '>About</li>
                <li className='hover:text-[#68b984] '>Support</li>
                <li className='hover:text-[#68b984] '>Course</li>
              </ul>
                <div className='flex items-center'>
                <button onClick={() => setDarkMode(!darkMode)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
</svg>
</button>
                </div>
              
            </div>
            {/* mobile button */}
            <div className='md:hidden' onClick={handleCLick}>
            {!nav ? <Bars3Icon className='h-6 w-6 cursor-pointer' />:<XMarkIcon className='h-6 w-6 cursor-pointer' />
}   
           </div>
      </div>
       
              <ul className={!nav ? 'left-[100%] fixed ': 'absolute bg-transparent w-[80%] space-y-4'}>
                <li className='w-full hover:text-[#68b984]'>Home</li>
                <li className='w-full hover:text-[#68b984]'>About</li>
                <li className='w-full hover:text-[#68b984]'>Support</li>
                <li className='w-full hover:text-[#68b984]'>Course</li>
                <div className='flex py-2'>
                
                </div> 
                
              </ul>
            
        </div>
    
  )
}
