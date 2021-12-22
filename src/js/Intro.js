import eye from '../img/Eye.svg';
import '../css/Intro.css';

function Intro() {
  return (
    <div className="Intro">
      <img src={eye} alt='' className='eye'></img>
      <h2>Welcome to The</h2>
      <h1>THIRD EYE COLLECTIVE</h1>
      <a className='LearnMore' href='#'>Learn More</a>
    </div>
  );
}

export default Intro;
