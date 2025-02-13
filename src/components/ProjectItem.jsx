import React from 'react';

const ProjectItem = ({ img, title, link }) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-purple-900 rounded-xl group hover:bg-gradient-to-r from-purple-800 to-[#0f3460] transition-transform duration-500 transform hover:scale-105'>
      <img src={img} alt={title} className='rounded-xl group-hover:opacity-20 transition-opacity duration-500' />
      <div className='hidden group-hover:flex flex-col items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <h3 className='text-3xl font-extrabold text-white tracking-wider text-center mb-4 drop-shadow-lg animate-pulse'>
          {title}
        </h3>
        <a href={link} target='_blank' rel='noopener noreferrer'>
          <button className='text-center px-6 py-3 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-bold cursor-pointer text-lg transition-transform duration-300 transform hover:scale-110 shadow-md'>More Info</button>
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;