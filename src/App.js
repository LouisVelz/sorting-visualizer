import Visualizer from "./components/sortingVisualizer";
import Slider from "./components/widthRangeInput";
import { AppContext } from "./context/inputContext";

function App() {
  return (
    <>
      <AppContext.Provider>
        <Visualizer />
      </AppContext.Provider>
      <Slider />
    </>
  );
}

export default App;
