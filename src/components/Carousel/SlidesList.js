import React, { useContext } from "react";
import Slide from "./Slide";
import { CarouselContext } from "./Carousel";

import "../../styles.scss";

export default function SlidesList() {
  const { slideNumber, items } = useContext(CarouselContext);

  return (
    <div
      className="slide-list"
      style={{ transform: `translateX(-${slideNumber * 100}%)` }}
    >
      {items.map((slide, index) => (
        <Slide key={index} data={slide} />
      ))}
    </div>
  );
}
