import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const WorkItems = ({ item }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div
      data-aos='fade'
      data-aos-delay='0'
      className='work__card'
      key={item.id}
    >
      <img src={item.image} alt='' className='work__img' />
      <h3 className='work__title'>{item.title}</h3>
      <a href='#' className='work__button'>
        Demo <i className='bx bx-right-arrow-alt work__button-icon'></i>
      </a>
    </div>
  );
};

export default WorkItems;
