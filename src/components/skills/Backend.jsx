import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Backend = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div data-aos='fade-left' className='skills__content'>
      <h3 className='skills__title'>Back End</h3>

      <div className='skills__box'>
        <div className='skills__group'>
          <div
            data-aos='zoom-in-left'
            data-aos-delay='100'
            className='skills__data'
          >
            <i class='bx bx-badge-check'></i>
            <div>
              <h3 className='skills__name'>Python</h3>
              <span className='skills__level'>Basic</span>
            </div>
          </div>
          <div
            data-aos='zoom-in-left'
            data-aos-delay='200'
            className='skills__data'
          >
            <i class='bx bx-badge-check'></i>
            <div>
              <h3 className='skills__name'>Django</h3>
              <span className='skills__level'>Basic</span>
            </div>
          </div>
          <div
            data-aos='zoom-in-left'
            data-aos-delay='300'
            className='skills__data'
          >
            <i class='bx bx-badge-check'></i>
            <div>
              <h3 className='skills__name'>Firebase</h3>
              <span className='skills__level'>Intermediate</span>
            </div>
          </div>
        </div>
        <div className='skills__group'>
          <div
            data-aos='zoom-in-left'
            data-aos-delay='400'
            className='skills__data'
          >
            <i class='bx bx-badge-check'></i>
            <div>
              <h3 className='skills__name'>Node.JS</h3>
              <span className='skills__level'>Basic</span>
            </div>
          </div>
          <div
            data-aos='zoom-in-left'
            data-aos-delay='500'
            className='skills__data'
          >
            <i class='bx bx-badge-check'></i>
            <div>
              <h3 className='skills__name'>MySQL</h3>
              <span className='skills__level'>Basic</span>
            </div>
          </div>
          <div
            data-aos='zoom-in-left'
            data-aos-delay='600'
            className='skills__data'
          >
            <i class='bx bx-badge-check'></i>
            <div>
              <h3 className='skills__name'>Postman</h3>
              <span className='skills__level'>Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
