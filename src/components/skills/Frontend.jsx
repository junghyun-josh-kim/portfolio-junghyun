import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Frontend = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div data-aos='fade-right' className='skills__content'>
      <h3 className='skills__title'>Front End</h3>

      <div className='skills__box'>
        <div className='skills__group'>
          <div
            data-aos='zoom-in-right'
            data-aos-delay='400'
            className='skills__data'
          >
            <i class='bx bx-badge-check'></i>
            <div>
              <h3 className='skills__name'>HTML</h3>
              <span className='skills__level'>Fluent</span>
            </div>
          </div>
          <div
            data-aos='zoom-in-right'
            data-aos-delay='500'
            className='skills__data'
          >
            <i class='bx bx-badge-check'></i>
            <div>
              <h3 className='skills__name'>CSS</h3>
              <span className='skills__level'>Fluent</span>
            </div>
          </div>
          <div
            data-aos='zoom-in-right'
            data-aos-delay='600'
            className='skills__data'
          >
            <i class='bx bx-badge-check'></i>
            <div>
              <h3 className='skills__name'>JavaScript</h3>
              <span className='skills__level'>Intermediate</span>
            </div>
          </div>
        </div>
        <div className='skills__group'>
          <div
            data-aos='zoom-in-right'
            data-aos-delay='100'
            className='skills__data'
          >
            <i class='bx bx-badge-check'></i>
            <div>
              <h3 className='skills__name'> Bootstrap</h3>
              <span className='skills__level'>Intermediate</span>
            </div>
          </div>
          <div
            data-aos='zoom-in-right'
            data-aos-delay='200'
            className='skills__data'
          >
            <i class='bx bx-badge-check'></i>
            <div>
              <h3 className='skills__name'>Git</h3>
              <span className='skills__level'>Fluent</span>
            </div>
          </div>
          <div
            data-aos='zoom-in-right'
            data-aos-delay='300'
            className='skills__data'
          >
            <i class='bx bx-badge-check'></i>
            <div>
              <h3 className='skills__name'>React</h3>
              <span className='skills__level'>Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
