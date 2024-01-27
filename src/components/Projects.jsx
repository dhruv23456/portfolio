import React from 'react';
import ProjectItem from './ProjectItem';
import denama from './img/denama.png';
import QuestionBank from './img/QuestionBank.png'
import panditDekho from './img/panditDekho.png';
import weekaway from './img/weekaway.png';

const Projects = () => {
  const projectsData = [
    { img: weekaway, title: 'WeekAway React.js', link: 'https://weekaway.com' },
    { img: denama, title: 'Denama-Design', link: 'https://denama.com/' },
    { img: panditDekho, title: 'Pandit Dekho', link: 'https://www.figma.com/proto/t8CQW9JrrKQ3DVkU1WAObL/Pandit-Dekho?type=design&node-id=2-54&t=jG7jEZgqYXJuL5CF-0&scaling=scale-down&page-id=0%3A1' },
    { img: QuestionBank, title: 'Question Bank', link: 'https://www.figma.com/proto/E6MYUPkdUpFwDa4AhxLarE/Question-Bank-mobile?type=design&node-id=101-2&t=jG7jEZgqYXJuL5CF-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=102%3A38' },
    // Add more projects with their respective links
  ];

  return (
    <div id='project' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects & Designs</h1>
      <p className='text-center py-8'>
        These projects & designs were completely built & designed by me. These are not the ones that represent my capabilities, these are just examples of that.
        <br />
        Hope you like my Design & Projects.
      </p>
      <div className='grid sm:grid-cols-2 gap-12'>
        {projectsData.map((project, index) => (
          <ProjectItem key={index} img={project.img} title={project.title} link={project.link} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
