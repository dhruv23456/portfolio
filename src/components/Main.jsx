import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaFacebookF, FaLinkedinIn, FaFigma, FaGithub } from 'react-icons/fa';
import Image from './img/tushar.jpg'
import Resume from '../assets/Tushar_FSD.pdf'; // Adjust the path based on your project structure

const Main = () => {
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = Resume;
    link.download = 'FSD_Tushar.pdf'; // Update with your preferred resume file name
    link.click();
  };

  return (
    <div id='main'>
      <img className='w-full h-screen object-cover object-left scale-x-[-1]' src={Image} alt="image" />
      <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
        <div className='max-w-[700px] m-auto h-full flex flex-col justify-center lg:items-start items-center'>
          <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>I'm Tushar Sharma</h1>
          <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>I'm a
            <TypeAnimation
              sequence={[
                'Designer',
                1000,
                'Full Stack Developer',
                2000,
                'Tech Enthusiast',
                2000,
              ]}
              wrapper='div'
              cursor={true}
              repeat={Infinity}
              style={{ fontsize: '1em', paddingLeft: '5px' }}
            />
          </h2>
          <div className='flex justify-between pt-6 max-w-[200px] w-full'>
            <a href='https://www.figma.com/files/user/1068559529108824834?fuid=1068559529108824834' target='_blank' rel='noopener noreferrer'>
              <FaFigma className='cursor-pointer' size={20} />
            </a>
            <a href='https://facebook.com/your_facebook_profile' target='_blank' rel='noopener noreferrer'>
              <FaFacebookF className='cursor-pointer' size={20} />
            </a>
            <a href='https://github.com/Tushar-2021' target='_blank' rel='noopener noreferrer'>
              <FaGithub className='cursor-pointer' size={20} />
            </a>
            <a href='https://www.linkedin.com/in/tushar-sharma-25d/' target='_blank' rel='noopener noreferrer'>
              <FaLinkedinIn className='cursor-pointer' size={20} />
            </a>
          </div>
          <button className="bg-[#001b5e] mt-5  mb-5 w-28 h-8 rounded-lg text-white font-bold
                                  hover:bg-[#fff] hover:border-2
                                  hover:transition ease-in-out hover:text-[#001b5e]" onClick={downloadResume} >
            Resume
          </button>
        </div>

      </div>
    </div>
  );
}

export default Main;
