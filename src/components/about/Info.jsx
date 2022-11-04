import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Info = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className='about__info grid'>
      <div data-aos='flip-up' className='about__box'>
        <i class='bx bx-award about__icon'></i>
        <h3 className='about__title'>Experience</h3>
        <span className='about__subtitle'>1+ Year Working</span>
      </div>
      <div data-aos='flip-up' data-aos-delay='300' className='about__box'>
        <i class='uil uil-syringe about__icon'></i>
        <h3 className='about__title'>Problem Solver</h3>
        <span className='about__subtitle'>4+ Years General Manager</span>
      </div>
      <div data-aos='flip-up' data-aos-delay='600' className='about__box'>
        <i class='uil uil-game-structure about__icon'></i>
        <h3 className='about__title'>Growth mindset</h3>
        <span className='about__subtitle'>Highly motivated</span>
      </div>
    </div>
  );
};

export default Info;
