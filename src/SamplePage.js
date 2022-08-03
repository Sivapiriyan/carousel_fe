import React from "react";
import Carousel from "./components/Carousel/Carousel";
import "./styles.scss";

export default function SamplePage() {
  return (
    <>
      <Carousel slides={1} infinite={false} />
      <Carousel slides={4} infinite={true} />
      <Carousel slides={10} infinite={false} />
    </>
  );
}
