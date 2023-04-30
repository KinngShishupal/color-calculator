import React from "react";
import CellArea from "./CellArea";
import { useRef } from "react";

const App = () => {
  const colorRef = useRef();
  return (
    <div style={{ display: "grid", placeItems: "center", height: "100vh" }}>
      <CellArea
        noOfCellsOnWidth={5}
        noOfCellsOnHeight={7}
        noOfColors={4}
        ref={colorRef}
      />
      <button onClick={() => console.log(colorRef)}>get colors</button>
    </div>
  );
};

export default App;
