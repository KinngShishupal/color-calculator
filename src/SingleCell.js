import React from "react";
import { colorsPallete } from "./constants";

const SingleCell = () => {
  const randomColor =
    colorsPallete[Math.floor(Math.random() * colorsPallete.length)];
  return (
    <div
      style={{
        width: 50,
        height: 50,
        borderStyle: "solid",
        backgroundColor: randomColor,
      }}
    ></div>
  );
};

export default SingleCell;
