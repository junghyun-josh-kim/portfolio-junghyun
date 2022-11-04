import './testimonials.css';
import { Data } from './Data';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Testimonials = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className='testimonial container section'>
      <h2 data-aos='fade' data-aos-delay='0' className='section__title'>
        Testimonials
      </h2>
      <span data-aos='fade' data-aos-delay='300' className='section__subtitle'>
        Former Colleagues
      </span>

      <Swiper
        className='testimonials__container'
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination]}
      >
        {Data.map(({ id, image, title, description }) => {
          return (
            <SwiperSlide className='testimonial__card' key={id}>
              <img
                data-aos='fade-down'
                data-aos-delay='100'
                src={image}
                alt=''
                className='testimonial__img'
              />
              <h3
                data-aos='fade-left'
                data-aos-delay='100'
                className='testimonial__name'
              >
                {title}
              </h3>
              <p
                data-aos='fade'
                data-aos-delay='300'
                className='testimonial__description'
              >
                {description}
              </p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
