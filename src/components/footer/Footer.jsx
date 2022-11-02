import './footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__container container'>
        <h1 className='footer__title'>Junghyun</h1>
        <ul className='footer__list'>
          <li>
            <a href='#about' className='footer__link'>
              About
            </a>
          </li>
          <li>
            <a href='#portfolio' className='footer__link'>
              Projects
            </a>
          </li>
          <li>
            <a href='#testimonials' className='footer__link'>
              Testimonials
            </a>
          </li>
        </ul>

        <div className='footer__social'>
          <a
            href='https://github.com/junghyun-josh-kim'
            className='footer__social-link'
            target='_blank'
          >
            <i class='uil uil-github-alt'></i>
          </a>
          <a
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
