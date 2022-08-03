import React from "react";
import SlideTitle from "./SlideTitle";
import SlideImage from "./SlideImage";

import "../../styles.scss";

export default function Slide({ data: { image, title, subTitle } }) {
  return (
    <div className="slide">
      <SlideImage src={image} alt={title} />
      <SlideTitle title={title} />
      <SlideTitle type="sub" title={title} />
    </div>
  );
}
