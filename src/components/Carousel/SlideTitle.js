import React from "react";

import "../../styles.scss";

export default function SlideTitle({ title, type = "main" }) {
  return type === "main" ? (
    <h1 className="slide-title">{title}</h1>
  ) : (
    <h3 className="slide-subTitle">{title}</h3>
  );
}
