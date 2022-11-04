import './work.css';
import { projectsData, projectsNav } from './Data';
import WorkItems from './WorkItems';
import { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Works = () => {
  const [item, setItem] = useState({ name: 'All' });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === 'All') {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const handleClick = (event, index) => {
    setItem({ name: event.target.textContent });
    setActive(index);
  };

  return (
    <>
      <div data-aos='zoom-in-down' data-aos-delay='0' className='work__filters'>
        {projectsNav.map((item, index) => {
          return (
            <span
              onClick={(event) => {
                handleClick(event, index);
              }}
              className={`${active === index ? 'active-work' : ''} work__item`}
              key={index}
            >
              {item.name}
            </span>
          );
        })}
      </div>
      <div className='work__container container grid'>
        {projects.map((item) => {
          return <WorkItems item={item} key={item.id} />;
        })}
      </div>
    </>
  );
};

export default Works;
