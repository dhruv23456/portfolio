import React from 'react';
import ProjectItem from './ProjectItem';
import denama from './img/denama.png';
import QuestionBank from './img/rebbecca.png';
import panditDekho from './img/cars&bike.png';
import weekaway from './img/TreeTrek.png';

const Projects = () => {
  const projectsData = [
    { img: weekaway, title: 'Tree Trek', link: 'https://www.figma.com/proto/5ePeQkwV0JqR7Aqvzoc43T/Treetrek?node-id=11-269&starting-point-node-id=11%3A365' },
    { img: denama, title: 'Denama', link: 'https://denama.com/' },
    { img: panditDekho, title: 'Cars & Bike', link: 'https://carsnbikes.org/' },
    { img: QuestionBank, title: 'Blog-Rebecca', link: 'https://www.figma.com/proto/fo3UcRiQMPImBu999SiKqD/Rebecca-blog?node-id=3-2&p=f&t=Nf59ztv9rGAopW0W-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=3%3A2' },
  ];

  return (
    <div id='project' className='w-full  bg-gradient-to-b from-[#1a1a2e] to-[#0f3460] text-white flex flex-col justify-center items-center p-6 relative overflow-hidden'>
      <h1 className='text-5xl font-extrabold text-center mb-6 animate-fade-in-down z-20'>Projects & Designs</h1>
      <p className='text-center text-lg mb-10 max-w-xl animate-fade-in-up z-20'>
        These projects & designs showcase my creativity and skills. Each design is built with precision, focusing on functionality and aesthetics. Explore and enjoy my work!
      </p>
      <div className='grid sm:grid-cols-2 gap-12 w-full max-w-4xl z-20'>
        {projectsData.map((project, index) => (
          <ProjectItem key={index} img={project.img} title={project.title} link={project.link} />
        ))}
      </div>
      <div className='absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-10'>
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className='absolute w-6 h-6 bg-white rounded-full opacity-20'
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `moveSparkle ${3 + Math.random() * 5}s linear infinite`,
              zIndex: 0
            }}
          ></div>
        ))}
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className='absolute w-8 h-8 bg-purple-500 rounded-full opacity-30'
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `moveSparkle ${4 + Math.random() * 6}s linear infinite`,
              zIndex: 0
            }}
          ></div>
        ))}
      </div>
      <style>
        {`
          @keyframes moveSparkle {
            0% {
              transform: translate(0, 0);
              opacity: 0.5;
            }
            50% {
              transform: translate(100px, 200px);
              opacity: 1;
            }
            100% {
              transform: translate(-100px, -200px);
              opacity: 0.5;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Projects;
