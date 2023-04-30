import React from "react";
import SingleCell from "./SingleCell";

const CellArea = (props) => {
  const { noOfCellsOnWidth, noOfCellsOnHeight, noOfColors } = props;

  return (
    <div style={{ display: "flex" }}>
      {new Array(noOfCellsOnWidth).fill("").map((widthCell, widthIndex) => {
        return (
          <div key={widthIndex}>
            {new Array(noOfCellsOnHeight)
              .fill("")
              .map((heightCell, heightIndex) => {
                return <SingleCell key={heightIndex} />;
              })}
          </div>
        );
      })}
    </div>
  );
};

export default CellArea;
