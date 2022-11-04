import Typewriter from 'typewriter-effect';

function TextAnimation() {
  return (
    <div>
      <Typewriter
        options={{
          autoStart: true,
          loop: true,
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString('Grit')
            .pauseFor(1000)
            .deleteAll()
            .typeString('Teamwork')
            .pauseFor(1000)
            .deleteAll()
            .typeString('Communication')
            .pauseFor(1000)
            .deleteAll()
            .typeString('Time management')
            .pauseFor(1000)
            .deleteAll()
            .typeString('Junghyun Kim')
            .pauseFor(1000)
            .start();
        }}
      />
    </div>
  );
}

export default TextAnimation;
