
import React from 'react';
import './AnimatedButtons.css';
import { RightArrow, LeftArrow } from './NewButtons';

const Buttons = ({ handlePrevSlide, handleNextSlide }) => {
  return (
    <div>
      <button onClick={handlePrevSlide}><RightArrow/></button>
      <button onClick={handleNextSlide}><LeftArrow/></button>
    </div>
  );
}

export default Buttons;