
import React from 'react';
import { Slide } from 'react-slideshow-image'
import './Slider.css'

const slideImages  = [
    './Imagenes/agenda6.jpg',
    './Imagenes/agenda5.png',
    './Imagenes/agenda6.jpg'
  ];
  
  const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
    onChange: (oldIndex, newIndex) => {
      console.log(`slide transition from ${oldIndex} to ${newIndex}`);
    }
  }

  export const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide {...properties}>
          <div className="each-slide">
            <div style={{'backgroundImage': 'url(${slideImages[0]})'}}>
              <span>Slide 1</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': 'url(${slideImages[1]})'}}>
              <span>Slide 2</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': 'url(${slideImages[2]})'}}>
              <span>Slide 3</span>
            </div>
          </div>
        </Slide>
      </div>
    )
}