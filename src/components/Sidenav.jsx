import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineHome, AiOutlineMail, AiOutlineProject } from 'react-icons/ai';
import { GrProjects } from "react-icons/gr";
import { BsPerson } from "react-icons/bs";

const Sidenav = () => {
  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-4 z-[99] md:hidden text-white' />
      {
        nav ? (
          <div className='fixed w-full h-screen bg-[#1a1a2e]/90 flex flex-col justify-center items-center z-20 text-white'>
            <a onClick={handleNav} href="#main" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-[#2c2c54] m-2 p-4 cursor-pointer hover:scale-110 hover:bg-[#4a148c] ease-in duration-200'>
              <AiOutlineHome size={20} />
              <span className='pl-4'>Home</span>
            </a>
            <a onClick={handleNav} href="#work" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-[#2c2c54] m-2 p-4 cursor-pointer hover:scale-110 hover:bg-[#4a148c] ease-in duration-200'>
              <GrProjects size={20} />
              <span className='pl-4'>Work</span>
            </a>
            <a onClick={handleNav} href="#projects" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-[#2c2c54] m-2 p-4 cursor-pointer hover:scale-110 hover:bg-[#4a148c] ease-in duration-200'>
              <AiOutlineProject size={20} />
              <span className='pl-4'>Projects</span>
            </a>
            <a onClick={handleNav} href="#main" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-[#2c2c54] m-2 p-4 cursor-pointer hover:scale-110 hover:bg-[#4a148c] ease-in duration-200'>
              <BsPerson size={20} />
              <span className='pl-4'>Resume</span>
            </a>
            <a onClick={handleNav} href="#contact" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-[#2c2c54] m-2 p-4 cursor-pointer hover:scale-110 hover:bg-[#4a148c] ease-in duration-200'>
              <AiOutlineMail size={20} />
              <span className='pl-4'>Contact</span>
            </a>
          </div>
        )
          : (
            ''
          )
      }

      <div className='md:block hidden fixed top-[25%] z-10'>
        <div className='flex flex-col'>
          <a href="#main" className='rounded-full shadow-lg bg-[#2c2c54] shadow-gray-800 m-2 p-4 cursor-pointer hover:scale-100 hover:bg-[#4a148c] ease-in duration-200 text-white'>
            <AiOutlineHome size={20} />
          </a>
          <a href="#work" className='rounded-full shadow-lg bg-[#2c2c54] shadow-gray-800 m-2 p-4 cursor-pointer hover:scale-100 hover:bg-[#4a148c] ease-in duration-200 text-white'>
            <GrProjects size={20} />
          </a>
          <a href="#projects" className='rounded-full shadow-lg bg-[#2c2c54] shadow-gray-800 m-2 p-4 cursor-pointer hover:scale-100 hover:bg-[#4a148c] ease-in duration-200 text-white'>
            <AiOutlineProject size={20} />
          </a>
          <a href="#main" className='rounded-full shadow-lg bg-[#2c2c54] shadow-gray-800 m-2 p-4 cursor-pointer hover:scale-100 hover:bg-[#4a148c] ease-in duration-200 text-white'>
            <BsPerson size={20} />
          </a>
          <a href="#contact" className='rounded-full shadow-lg bg-[#2c2c54] shadow-gray-800 m-2 p-4 cursor-pointer hover:scale-100 hover:bg-[#4a148c] ease-in duration-200 text-white'>
            <AiOutlineMail size={20} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Sidenav
