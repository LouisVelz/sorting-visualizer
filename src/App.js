import React, { useState, useMemo } from "react";
import Visualizer from "./components/sortingVisualizer";
import Slider from "./components/widthRangeInput";
import { AppContext } from "./context/inputContext";

function App() {
  const [value, setValue] = useState(50);
  const providerValue = (() => ({ value, setValue }), [value, setValue]);

  return (
    <>
      <AppContext.Provider value={providerValue}>
        <Visualizer />
      </AppContext.Provider>
      <Slider />
    </>
  );
}

export default App;
