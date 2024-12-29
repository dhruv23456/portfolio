import React from 'react'
import WorkItem from './WorkItem';

const data = [
  {
    year: 2022,
    organisation: 'Hackveda',
    title: 'Frontend Developer',
    duration: '3 months',
    details:
      `Worked with a proficient understanding of code conversion tools, This intership provides the complete experience of UI/UX designer to perform the operation as well as Leadership Quality to manage the team.
        Provided effective troubleshooting and remediation for web applications.  
        Tools: Figma, AdobeXD. 
        Tech: HTML, CSS, JavaScript, React.js.`
  },
  {
    year: 2022,
    organisation: 'Learn N build',
    title: 'Python Developer',
    duration: '2 month',
    details:
      `Identified failures and successes of a product, using them as a springboard for future development goals.
        Led the research and development of technologies.
        The machine learning concept as developer are more dynamic & exciting to implement.        
        Tech: Python, Numpy, Pandas, sklearn.`
  },
  {
    year: "2023*",
    organisation: 'TeckValley',
    title: 'Software Developer',
    duration: '1 Year 9 months',
    details:
      `Develop and maintain APIs: Create and maintain RESTful APIs for web and mobile applications using technologies such as Django, DRF and PostgreSQL.
      Database management: Design and implement database schemas, optimize queries, and ensure data integrity using SQL or NoSQL databases.
      Collaboration with front-end developers: Integrated with front-end developers to integrate APIs and ensure seamless communication
      between the front-end and back-end systems.
      Improved application performance: Implemented caching and query optimization techniques and utilized profiling and debugging tools to
      resolve bottlenecks in application performance.`
  },
]
const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          organisation={item.organisation}
          title={item.title}
          duration={item.duration}
          details={item.details} />
      ))}
    </div>
  );
};

export default Work
