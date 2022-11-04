import './work.css';
import Works from './Works';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Work = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className='work section' id='portfolio'>
      <h2 data-aos='fade' data-aos-delay='0' className='section__title'>
        Portfolio
      </h2>
      <span data-aos='fade' data-aos-delay='300' className='section__subtitle'>
        Most recent works
      </span>
      <Works />
    </section>
  );
};

export default Work;
