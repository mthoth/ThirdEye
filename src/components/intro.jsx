import React from 'react';
import eye from '../img/Eye.svg';
import '../css/Intro.css';

function Intro(props) {
  return (
    <div className="Intro">
      <img src={eye} alt='' className='eye'></img>
      <h2>Welcome to The</h2>
      <h1>THIRD EYE COLLECTIVE</h1>
      <button onClick={props.scrollabout} className='LearnMore'>Learn More</button>
    </div>
  );
}


export default Intro;
