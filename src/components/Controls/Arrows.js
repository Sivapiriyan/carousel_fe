import React, { useContext } from "react";
import { CarouselContext } from "../Carousel/Carousel";

import "../../styles.scss";

export default function Arrows() {
  const { changeSlide } = useContext(CarouselContext);

  return (
    <div className="arrows">
      <div className="arrow left" onClick={() => changeSlide(-1)} />
      <div className="arrow right" onClick={() => changeSlide(1)} />
    </div>
  );
}
