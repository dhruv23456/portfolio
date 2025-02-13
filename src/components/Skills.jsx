import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    { category: 'Writing & Editing', items: ['Technical Writing', 'Content Creation', 'Copyediting', 'Proofreading', 'Editing'] },
    { category: 'Technical Tools', items: ['MS Office Suite', 'Adobe Acrobat', 'Confluence'] },
    { category: 'Web & SEO', items: ['HTML/CSS', 'SEO Best Practices', 'WordPress'] },
    { category: 'Research & Analysis', items: ['Information Gathering', 'Data Analysis', 'User Feedback Integration'] },
    { category: 'Soft Skills', items: ['Communication', 'Collaboration', 'Time Management', 'Attention to Detail'] },
    { category: 'Design', items: ['Brand Identity Design', 'Logo Creation', 'Digital Media Design', 'UI/UX Design', 'Typography', 'Color Theory'] },
  ];

  return (
    <div id='skills' className='w-full  flex items-center justify-center bg-gradient-to-b from-[#1a1a2e] to-[#0f3460] relative overflow-hidden'>
      <div className='absolute inset-0'>
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className='absolute w-20 h-20 bg-purple-700 rounded-full opacity-30'
            animate={{
              x: [0, 100, -100, 0],
              y: [0, 100, -100, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
      <div className='z-10 max-w-[1040px] p-6 text-center'>
        <motion.h1
          className='text-4xl font-extrabold text-[#c3b1e1] mb-10'
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Skills & Expertise
        </motion.h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className='bg-[#2c2c54] shadow-xl rounded-3xl p-6 border-l-8 border-[#7d5fff] hover:scale-105 transform transition-all duration-300'
            >
              <h2 className='text-2xl font-semibold text-[#e4d7ff] mb-4'>{skill.category}</h2>
              <ul className='list-none pl-2 space-y-3'>
                {skill.items.map((item, idx) => (
                  <motion.li
                    key={idx}
                    whileHover={{ x: 10 }}
                    className='text-white bg-[#4b0082] px-3 py-2 rounded-md shadow-sm cursor-pointer hover:bg-[#6a1b9a]'
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
