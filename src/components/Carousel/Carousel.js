import React, { useEffect, useState, createContext } from "react";
import PropTypes from "prop-types";
import { getImages } from "../../imagesApi";
import Arrows from "../Controls/Arrows";
import SlidesList from "./SlidesList";

export const CarouselContext = createContext();

const Carousel = function ({ slides, infinite }) {
  const [items, setItems] = useState([]);
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const loadData = async () => {
      const images = await getImages(slides);
      setItems(images);
    };
    loadData();
  }, []);

  const changeSlide = (direction = 1) => {
    let slideNumber = 0;
    if (slide + direction < 0) {
      slideNumber = items.length - 1;
    } else {
      slideNumber = (slide + direction) % items.length;
    }

    if (infinite) {
      setSlide(slideNumber);
    } else {
      if (
        (slideNumber !== 0 && direction === -1) ||
        (slideNumber !== items.length - 1 && direction === 1)
      ) {
        setSlide(slideNumber);
      }
    }
  };

  return (
    <div className="slider">
      <CarouselContext.Provider
        value={{
          changeSlide,
          slidesCount: items.length,
          slideNumber: slide,
          items,
        }}
      >
        {slides > 1 && <Arrows />}

        <SlidesList />
      </CarouselContext.Provider>
    </div>
  );
};

Carousel.propTypes = {
  autoPlay: PropTypes.bool,
  autoPlayTime: PropTypes.number,
  width: PropTypes.string,
  height: PropTypes.string,
};

Carousel.defaultProps = {
  autoPlay: false,
  autoPlayTime: 5000,
  width: "100%",
  height: "100%",
};

export default Carousel;
