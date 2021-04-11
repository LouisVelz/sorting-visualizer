import React, { useState, useMemo } from "react";
import Visualizer from "./components/sortingVisualizer";
import Slider from "./components/widthRangeInput";
import { AppContext } from "./context/inputContext";

function App() {
  const [width, setWidth] = useState(10);
  const [heigth, setHeigth] = useState(5);
  const [time, setTime] = useState();
  const [columns, setColumns] = useState(25);

  return (
    <>
      <AppContext.Provider
        value={{ columns, setColumns, width, setWidth, heigth, setHeigth }}
      >
        <Visualizer />
        <Slider />
      </AppContext.Provider>
    </>
  );
}

export default App;
