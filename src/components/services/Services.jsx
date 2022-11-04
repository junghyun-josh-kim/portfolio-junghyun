import { useState, useEffect } from 'react';
import './services.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className='services section' id='services'>
      <h2 data-aos='fade' className='section__title'>
        Services
      </h2>
      <span data-aos='fade' data-aos-delay='300' className='section__subtitle'>
        What I offer
      </span>

      <div className='services__container container grid'>
        <div className='services__content'>
          <div>
            <i
              data-aos='fade'
              data-aos-delay='0'
              className='uil uil-web-grid services__icon'
            ></i>
            <h3
              data-aos='fade'
              data-aos-delay='300'
              className='services__title'
            >
              Product
              <br />
              Designer
            </h3>
            <span
              data-aos='fade'
              data-aos-delay='600'
              className='services__button'
              onClick={() => toggleTab(1)}
            >
              View More
              <i className='uil uil-arrow-right services__button-icon'></i>
            </span>

            <div
              className={
                toggleState === 1
                  ? 'services__modal active-modal'
                  : 'services__modal'
              }
            >
              <div className='services__modal-content'>
                <i
                  className='uil uil-times services__modal-close'
                  onClick={() => toggleTab(0)}
                ></i>
                <h3 className='services__modal-title'>Product Designer</h3>
                <p className='services__modal-description'>Client-focused</p>

                <ul className='services__modal-services grid'>
                  <li className='services__modal-service'>
                    <i className='uil uil-check-circle services__modal-icon'></i>
                    <p className='services__modal-info'>UI DEVELOPER</p>
                  </li>

                  <li className='services__modal-service'>
                    <i className='uil uil-check-circle services__modal-icon'></i>
                    <p className='services__modal-info'>WEB DEVELOPER</p>
                  </li>

                  <li className='services__modal-service'>
                    <i className='uil uil-check-circle services__modal-icon'></i>
                    <p className='services__modal-info'>CREATOR</p>
                  </li>

                  <li className='services__modal-service'>
                    <i className='uil uil-check-circle services__modal-icon'></i>
                    <p className='services__modal-info'>BRAND MAKER</p>
                  </li>

                  <li className='services__modal-service'>
                    <i className='uil uil-check-circle services__modal-icon'></i>
                    <p className='services__modal-info'>CROSS OVER</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className='services__content'>
          <div>
            <i
              data-aos='fade'
              data-aos-delay='200'
              className='uil uil-web-grid services__icon'
            ></i>
            <h3
              data-aos='fade'
              data-aos-delay='500'
              className='services__title'
            >
              Cross
              <br />
              Over
            </h3>
            <span
              data-aos='fade'
              data-aos-delay='800'
              className='services__button'
              onClick={() => toggleTab(2)}
            >
              View More
              <i className='uil uil-arrow-right services__button-icon'></i>
            </span>

            <div
              className={
                toggleState === 2
                  ? 'services__modal active-modal'
                  : 'services__modal'
              }
            >
              <div className='services__modal-content'>
                <i
                  className='uil uil-times services__modal-close'
                  onClick={() => toggleTab(0)}
                ></i>
                <h3 className='services__modal-title'>Cross Over</h3>
                <p className='services__modal-description'>
                  Cross-over, client-centered, health care, domain sales, CRM
                </p>

                <ul className='services__modal-services grid'>
                  <li className='services__modal-service'>
                    <i className='uil uil-check-circle services__modal-icon'></i>
                    <p className='services__modal-info'>UI DEVELOPER</p>
                  </li>

                  <li className='services__modal-service'>
                    <i className='uil uil-check-circle services__modal-icon'></i>
                    <p className='services__modal-info'>WEB DEVELOPER</p>
                  </li>

                  <li className='services__modal-service'>
                    <i className='uil uil-check-circle services__modal-icon'></i>
                    <p className='services__modal-info'>CREATOR</p>
                  </li>

                  <li className='services__modal-service'>
                    <i className='uil uil-check-circle services__modal-icon'></i>
                    <p className='services__modal-info'>BRAND MAKER</p>
                  </li>

                  <li className='services__modal-service'>
                    <i className='uil uil-check-circle services__modal-icon'></i>
                    <p className='services__modal-info'>CROSS OVER</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className='services__content'>
          <div>
            <i
              data-aos='fade'
              data-aos-delay='400'
              className='uil uil-web-grid services__icon'
            ></i>
            <h3
              data-aos='fade'
              data-aos-delay='700'
              className='services__title'
            >
              Team
              <br />
              Player
            </h3>
            <span
              data-aos='fade'
              data-aos-delay='1000'
              className='services__button'
              onClick={() => toggleTab(3)}
            >
              View More
              <i className='uil uil-arrow-right services__button-icon'></i>
            </span>

            <div
              className={
                toggleState === 3
                  ? 'services__modal active-modal'
                  : 'services__modal'
              }
            >
              <div className='services__modal-content'>
                <i
                  className='uil uil-times services__modal-close'
                  onClick={() => toggleTab(0)}
                ></i>
                <h3 className='services__modal-title'>Team Player</h3>
                <p className='services__modal-description'>
                  Cross-over, client-centered, health care, domain sales, CRM
                </p>

                <ul className='services__modal-services grid'>
                  <li className='services__modal-service'>
                    <i className='uil uil-check-circle services__modal-icon'></i>
                    <p className='services__modal-info'>UI DEVELOPER</p>
                  </li>

                  <li className='services__modal-service'>
                    <i className='uil uil-check-circle services__modal-icon'></i>
                    <p className='services__modal-info'>WEB DEVELOPER</p>
                  </li>

                  <li className='services__modal-service'>
                    <i className='uil uil-check-circle services__modal-icon'></i>
                    <p className='services__modal-info'>CREATOR</p>
                  </li>

                  <li className='services__modal-service'>
                    <i className='uil uil-check-circle services__modal-icon'></i>
                    <p className='services__modal-info'>BRAND MAKER</p>
                  </li>

                  <li className='services__modal-service'>
                    <i className='uil uil-check-circle services__modal-icon'></i>
                    <p className='services__modal-info'>CROSS OVER</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
