import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const CarouselSlide = styled.div`
  position: absolute;
  top: 0;
  left: ${({ offset }) => offset}%;
  width: ${({ slidewidth }) => slidewidth}%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: left 0.5s ease;
`;

const CarouselButton = styled.button`
  display: ${({ arrow }) => (arrow === 'true' ? 'block' : 'none')};
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 2rem;
  padding: 8px 16px;
  background-color: transparent;
  color: #000000;
  border: none;
  cursor: pointer;

  &.prev {
    left: 0px;
  }

  &.next {
    right: 0px;
  }
`;

const CarouselDots = styled.div`
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
`;

const CarouselDot = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({ active }) => (active=== "true" ? '#333' : '#ccc')};
  margin: 0 4px;
  cursor: pointer;

  @media screen and (max-width: 768px){
    width: 10px;
    height: 10px;
  }
`;

const CarouselSlider = ({ slides, slidesToShow, arrow }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoSlide, setAutoSlide] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const slideCount = useRef(0);
  const intervalRef = useRef();
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const lastTouchEnd = useRef(0);

  useEffect(() => {
    slideCount.current = slides.length;
    if (autoSlide && !isHovered) {
      startAutoSlide();
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [slides, autoSlide, isHovered]);

  const startAutoSlide = () => {
    if(slides.length === slidesToShow) return;
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slideCount.current - slidesToShow ? 0 : prevSlide + 1
      );
    }, 3000); // Change slide every 3 seconds
  };

  const handlePrevClick = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slideCount.current - slidesToShow : prevSlide - 1
    );
  };

  const handleNextClick = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slideCount.current - slidesToShow ? 0 : prevSlide + 1
    );
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    clearInterval(intervalRef.current);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (autoSlide) {
      startAutoSlide();
    }
  };

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchMove = (event) => {
    touchEndX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current && touchEndX.current) {
      const diff = touchEndX.current - touchStartX.current;
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          handlePrevClick();
        } else {
          handleNextClick();
        }
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
    lastTouchEnd.current = Date.now();
    if (autoSlide && !isHovered) {
      startAutoSlide();
    }
  };

  const getSlideOffset = (index) => {
    const offset = index * (100 / slidesToShow);
    return offset;
  };

  const getSlideWidth = () => {
    return 100 / slidesToShow;
  };

  const getNumberOfDots = () => {
    return Math.ceil(slides.length / slidesToShow);
  };

  return (
    <CarouselContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {slides.map((slide, index) => (
        <CarouselSlide
          key={index}
          offset={getSlideOffset(index - currentSlide)}
          slidewidth={getSlideWidth()}
        >
          {slide}
        </CarouselSlide>
      ))}
      <CarouselButton className="prev" arrow={arrow} onClick={handlePrevClick}>
        &lt;
      </CarouselButton>
      <CarouselButton className="next" arrow={arrow} onClick={handleNextClick}>
        &gt;
      </CarouselButton>
      <CarouselDots>
        {Array.from({ length: getNumberOfDots() }, (_, index) => (
          <CarouselDot
            key={index}
            active={(index === Math.floor(currentSlide / slidesToShow)).toString()}
            onClick={() => handleDotClick(index * slidesToShow)}
            style={{
              display: slides.length === slidesToShow ? 'none' : 'block',
            }}
          />
        ))}
      </CarouselDots>
    </CarouselContainer>
  );
};

export default CarouselSlider;
