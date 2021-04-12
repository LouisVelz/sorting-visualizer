import React, { useState, useEffect, useContext } from "react";
import { fisherYates } from "./../util/fisherYates";
import { Container, Button } from "./../styles/styledComponents";
import executeMergeSort from "./../execute/executeMergeSort";
import executeBubbleSort from "./../execute/executeBubbleSort";
import executeQuickSort from "./../execute/executeQuickSort";
import executeInsertionSort from "./../execute/executeInsertionSort";
import executeHeapSort from "./../execute/executeHeapSort";
import executeSelectionSort from "./../execute/executeSelectionSort";
import colors from "./../styles/colors";

import { AppContext } from "./../context/inputContext";

const Visualizer = () => {
  const { width, columns, time, resetTime } = useContext(AppContext);
  const [data, setData] = useState();

  useEffect(() => {
    let arr = fisherYates(columns);
    setData(arr);
  }, [columns]);

  // const [animationRate, setAnimationRate] = useState(30);

  const shuffleArray = () => {
    let arr = fisherYates(columns);
    setData(arr);
  };

  return (
    <>
      <Container height={300}>
        {data
          ? data.map((element, index) => {
              return (
                <div
                  key={index}
                  className="column"
                  style={{
                    height: `${element * 5}px`,
                    width: `${width}px`,
                    border: "1px solid gray",
                    margin: "1px",
                    display: "inline-block",
                    backgroundColor: `${colors.primary}`,
                  }}
                ></div>
              );
            })
          : null}
      </Container>
      <Container>
        <Button onClick={() => shuffleArray()}>Shuffle</Button>
        <Button onClick={() => executeBubbleSort(data, time, resetTime)}>
          Bubble Sort
        </Button>
        <Button onClick={() => executeMergeSort(data, time, resetTime)}>
          Merge Sort
        </Button>
        <Button onClick={() => executeQuickSort(data, time, resetTime)}>
          Quick Sort
        </Button>
        <Button onClick={() => executeInsertionSort(data, time, resetTime)}>
          Insertion Sort
        </Button>
        <Button onClick={() => executeHeapSort(data, time, resetTime)}>
          Heap Sort
        </Button>
        <Button onClick={() => executeSelectionSort(data, time, resetTime)}>
          Selection Sort
        </Button>
      </Container>
    </>
  );
};

export default Visualizer;
