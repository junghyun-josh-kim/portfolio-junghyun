import './skills.css';
import Frontend from './Frontend';
import Backend from './Backend';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Skills = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className='skills section' id='skills'>
      <h2 data-aos='fade' className='section__title'>
        Skills
      </h2>
      <span data-aos='fade' data-aos-delay='300' className='section__subtitle'>
        My technical level
      </span>
      <div className='skills__container container grid'>
        <Frontend />
        <Backend />
      </div>
    </section>
  );
};
export default Skills;
