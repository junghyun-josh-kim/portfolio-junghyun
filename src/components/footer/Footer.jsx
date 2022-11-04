import './footer.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <footer className='footer'>
      <div className='footer__container container'>
        <h1 data-aos='fade' data-aos-delay='0' className='footer__title'>
          Junghyun Josh Kim
        </h1>
        <h3
          data-aos='fade-up'
          data-aos-delay='200'
          className='footer__subtitle'
        >
          Thanks for your time !
        </h3>
        <h3 data-aos='zoom-in-up' data-aos-delay='600' className='footer__icon'>
          <i class='uil uil-smile-beam'></i>
        </h3>
        <ul className='footer__list'>
          <li>
            <a
              data-aos='fade'
              data-aos-delay='0'
              href='#about'
              className='footer__link'
            >
              About
            </a>
          </li>
          <li>
            <a
              data-aos='fade'
              data-aos-delay='200'
              href='#portfolio'
              className='footer__link'
            >
              Projects
            </a>
          </li>
          <li>
            <a
              data-aos='fade'
              data-aos-delay='400'
              href='#testimonials'
              className='footer__link'
            >
              Testimonials
            </a>
          </li>
        </ul>

        <div className='footer__social'>
          <a
            data-aos='fade'
            data-aos-delay='300'
            href='https://github.com/junghyun-josh-kim'
            className='footer__social-link'
            target='_blank'
          >
            <i class='uil uil-github-alt'></i>
          </a>
          <a
            data-aos='fade'
            data-aos-delay='600'
            href='https://www.facebook.com/junghyun.kim.739978'
            className='footer__social-link'
            target='_blank'
          >
            <i class='uil uil-facebook-f'></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
