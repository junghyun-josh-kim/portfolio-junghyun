import { useState, useEffect } from 'react';
import './qualification.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className='qualification section'>
      <h2 data-aos='fade' data-aos-delay='0' className='section__title'>
        Qualification
      </h2>
      <span data-aos='fade' data-aos-delay='300' className='section__subtitle'>
        My Journey
      </span>

      <div className='qualification__container container'>
        <div
          data-aos='fade'
          data-aos-delay='300'
          className='qualification__tabs'
        >
          <div
            className={
              toggleState === 1
                ? 'qualification__button qualification__active button--flex'
                : 'qualification__button button--flex'
            }
            onClick={() => toggleTab(1)}
          >
            <i className='uil uil-briefcase-alt qualification__icon'></i>
            IT Experience
          </div>

          <div
            className={
              toggleState === 2
                ? 'qualification__button qualification__active button--flex'
                : 'qualification__button button--flex'
            }
            onClick={() => toggleTab(2)}
          >
            <i className='uil uil-graduation-cap qualification__icon'></i>
            Crossover
          </div>
        </div>

        <div className='qualification__sections'>
          <div
            className={
              toggleState === 1
                ? 'qualification__content qualification__content-active'
                : 'qualification__content'
            }
          >
            <div
              data-aos='fade-up'
              data-aos-delay='0'
              className='qualification__data'
            >
              <div>
                <h3 className='qualification__title'>Web Design</h3>
                <span className='qualification__subtitle'>
                  Toronto Subtitle
                </span>
                <div className='qualification__calendar'>
                  <i className='uil uil-calendar-alt'></i> 2022 - Present
                </div>
              </div>

              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>

            <div
              data-aos='fade-up'
              data-aos-delay='0'
              className='qualification__data'
            >
              <div></div>
              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>

              <div>
                <h3 className='qualification__title'>General Manager</h3>
                <span className='qualification__subtitle'>
                  Toronto Subtitle
                </span>
                <div className='qualification__calendar'>
                  <i className='uil uil-calendar-alt'></i> 2022 - Present
                </div>
              </div>
            </div>

            <div
              data-aos='fade-up'
              data-aos-delay='0'
              className='qualification__data'
            >
              <div>
                <h3 className='qualification__title'>E-commerce</h3>
                <span className='qualification__subtitle'>
                  Toronto Subtitle
                </span>
                <div className='qualification__calendar'>
                  <i className='uil uil-calendar-alt'></i> 2022 - Present
                </div>
              </div>

              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>

            <div
              data-aos='fade-up'
              data-aos-delay='0'
              className='qualification__data'
            >
              <div></div>
              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>

              <div>
                <h3 className='qualification__title'>UX Expert</h3>
                <span className='qualification__subtitle'>
                  Toronto Subtitle
                </span>
                <div className='qualification__calendar'>
                  <i className='uil uil-calendar-alt'></i> 2012 - Present
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? 'qualification__content qualification__content-active'
                : 'qualification__content'
            }
          >
            <div className='qualification__data'>
              <div>
                <h3 className='qualification__title'>Web Design</h3>
                <span className='qualification__subtitle'>
                  Toronto Subtitle
                </span>
                <div className='qualification__calendar'>
                  <i className='uil uil-calendar-alt'></i> 2022 - Present
                </div>
              </div>

              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>

            <div className='qualification__data'>
              <div></div>
              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>

              <div>
                <h3 className='qualification__title'>Title</h3>
                <span className='qualification__subtitle'>
                  Toronto Subtitle
                </span>
                <div className='qualification__calendar'>
                  <i className='uil uil-calendar-alt'></i> 2022 - Present
                </div>
              </div>
            </div>

            <div className='qualification__data'>
              <div>
                <h3 className='qualification__title'>E-commerce</h3>
                <span className='qualification__subtitle'>
                  Toronto Touhenboku
                </span>
                <div className='qualification__calendar'>
                  <i className='uil uil-calendar-alt'></i> 2022 - Present
                </div>
              </div>

              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
