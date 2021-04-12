import React, { useState, useMemo } from "react";
import Visualizer from "./components/sortingVisualizer";
import Slider from "./components/widthRangeInput";
import { AppContext } from "./context/inputContext";

function App() {
  const [width, setWidth] = useState(10);
  const [time, setTime] = useState(30);
  const [columns, setColumns] = useState(25);
  const [resetTime, setResetTime] = useState(25);

  return (
    <>
      <AppContext.Provider
        value={{
          columns,
          setColumns,
          width,
          setWidth,
          time,
          setTime,
          resetTime,
          setResetTime,
        }}
      >
        <Visualizer />
        <Slider />
      </AppContext.Provider>
    </>
  );
}

export default App;
