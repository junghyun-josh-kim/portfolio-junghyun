import './intro.css';
import Wave from 'react-wavify';

const Intro = () => (
  <section className='intro'>
    <Wave
      className='intro__wave'
      fill='url(#gradient)'
      paused={false}
      options={{
        height: 700,
        amplitude: 50,
        speed: 0.3,
        points: 3,
      }}
    >
      <defs>
        <linearGradient id='gradient' gradientTransform='rotate(90)'>
          <stop offset='0%' stopColor='#FFFFFF' />

          <stop offset='90%' stopColor='#000000' />
        </linearGradient>
      </defs>
    </Wave>
  </section>
);

export default Intro;
