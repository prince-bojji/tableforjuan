import React, { useEffect } from 'react';

const SliderComponent = () => {
    useEffect(() => {
      const slider = document.querySelector('.slider');
      const carousel = document.querySelector('.carousel');
      const prev = document.querySelector('.prev');
      const next = document.querySelector('.next');
      let direction;
  
      const handlePrevClick = () => {
        if (direction === -1) {
          slider.appendChild(slider.firstElementChild);
          direction = 1;
        }
        carousel.style.justifyContent = 'flex-end';
        slider.style.transform = 'translate(25%)';
      };
  
      const handleNextClick = () => {
        direction = -1;
        carousel.style.justifyContent = 'flex-start';
        slider.style.transform = 'translate(-25%)';
      };
  
      const handleTransitionEnd = () => {
        if (direction === -1) {
          slider.appendChild(slider.firstElementChild);
        } else if (direction === 1) {
          slider.prepend(slider.lastElementChild);
        }
  
        slider.style.transition = 'none';
        slider.style.transform = 'translate(0)';
        setTimeout(() => {
          slider.style.transition = 'all 0.5s';
        });
      };
  
      prev.addEventListener('click', handlePrevClick);
      next.addEventListener('click', handleNextClick);
      slider.addEventListener('transitionend', handleTransitionEnd);
  
      // Cleanup the event listeners when the component unmounts
      return () => {
        prev.removeEventListener('click', handlePrevClick);
        next.removeEventListener('click', handleNextClick);
        slider.removeEventListener('transitionend', handleTransitionEnd);
      };
    }, []);
  
    return (
      <div className="slider flex h-full w-[400%] shrink-0 transition-all duration-[500ms] ease-[ease]">
        {/* Slides */}
        {/* Your slide sections here */}
        {/*Controls*/}
        <div className="controls">
          <span className="arrow prev absolute cursor-pointer left-[30px] top-[90%]">
            <i className="material-icons text-[35px] text-white">keyboard_arrow_left</i>
          </span>
          <span className="arrow next absolute cursor-pointer right-[30px] top-[90%]">
            <i className="material-icons text-[35px] text-white">keyboard_arrow_right</i>
          </span>
        </div>
      </div>
    );
  };
  
  export default SliderComponent;
  