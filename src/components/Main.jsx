import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaFacebookF, FaLinkedinIn, FaFigma, FaGithub } from 'react-icons/fa';
import Resume from '../assets/Dhruv_resume.pdf';

const Main = () => {
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = Resume;
    link.download = 'Dhruv_resume.pdf';
    link.click();
  };

  return (
    <div id='main' className='relative w-full h-screen bg-gradient-to-b from-black to-purple-900 animate-gradient text-white'>
      <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center px-6'>
        <h1 className='sm:text-6xl text-5xl font-extrabold text-white drop-shadow-lg'>I'm Dhruv Gangwar</h1>
        <h2 className='flex sm:text-4xl text-3xl pt-6 text-gray-300'>I'm a
          <TypeAnimation
            sequence={[
              'Designer', 1000,
              'Content Writer', 2000,
              'Storyteller', 2000,
              'Artist', 2000,
            ]}
            wrapper='div'
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: '1.5em', paddingLeft: '10px' }}
          />
        </h2>
        <div className='flex justify-center pt-6 space-x-6'>
          <a href='https://www.figma.com/' target='_blank' rel='noopener noreferrer'>
            <FaFigma className='cursor-pointer text-gray-500 hover:text-blue-400 transition-transform duration-300 transform hover:scale-125' size={30} />
          </a>
          <a href='https://facebook.com/' target='_blank' rel='noopener noreferrer'>
            <FaFacebookF className='cursor-pointer text-gray-500 hover:text-blue-400 transition-transform duration-300 transform hover:scale-125' size={30} />
          </a>
          <a href='https://github.com/' target='_blank' rel='noopener noreferrer'>
            <FaGithub className='cursor-pointer text-gray-500 hover:text-green-400 transition-transform duration-300 transform hover:scale-125' size={30} />
          </a>
          <a href='https://www.linkedin.com/' target='_blank' rel='noopener noreferrer'>
            <FaLinkedinIn className='cursor-pointer text-gray-500 hover:text-blue-500 transition-transform duration-300 transform hover:scale-125' size={30} />
          </a>
        </div>
        <button className="mt-5 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={downloadResume}>
          Download Resume
        </button>
      </div>
      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 400% 400%;
          animation: gradient 15s ease infinite;
          background-image: linear-gradient(-45deg, #000000, #4B0082, #800080, #000000);
        }
      `}</style>
    </div>
  );
}

export default Main;
