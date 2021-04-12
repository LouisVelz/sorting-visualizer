import React, { useState, useEffect, useContext } from "react";
import Styled from "styled-components";
import { fisherYates } from "./../util/fisherYates";
import createArray from "./../util/createArray";
import { Container, Button, Element } from "./../styles/styledComponents";
import executeMergeSort from "./../execute/executeMergeSort";
import executeBubbleSort from "./../execute/executeBubbleSort";
import executeQuickSort from "./../execute/executeQuickSort";
import executeInsertionSort from "./../execute/executeInsertionSort";
import executeHeapSort from "./../execute/executeHeapSort";
import executeSelectionSort from "./../execute/executeSelectionSort";
import colors from "./../styles/colors";

import { AppContext } from "./../context/inputContext";

const Visualizer = () => {
  const { width, columns, time } = useContext(AppContext);
  const [data, setData] = useState();

  useEffect(() => {
    // const arr = createArray(columns);
    // const arr = createArray(columns);
    // let arr = fisherYates(columns);
    setData(fisherYates(columns));
    // setData(arr);
  }, [columns]);

  // const [animationRate, setAnimationRate] = useState(30);

  const shuffleArray = () => {
    // let arr = fisherYates(columns);
    // let arr = fisherYates(columns);

    setData(fisherYates(columns));
    // setData(Array.from(arr));
    debugger;
  };

  // const changeValue = () => {
  //   setValue(1000);
  // };
  return (
    <>
      <Container height={305}>
        {data
          ? data.map((element, index) => {
              return (
                // <Element
                //   height={element * 5}
                //   key={index}
                //   className="column"
                //   width={width}
                // ></Element>
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
        <Button onClick={() => executeBubbleSort(data, time)}>
          Bubble Sort
        </Button>
        <Button onClick={() => executeMergeSort(data, time)}>Merge Sort</Button>
        <Button onClick={() => executeQuickSort(data, time)}>Quick Sort</Button>
        <Button onClick={() => executeInsertionSort(data, time)}>
          Insertion Sort
        </Button>
        <Button onClick={() => executeHeapSort(data, time)}>Heap Sort</Button>
        <Button onClick={() => executeSelectionSort(data, time)}>
          Selection Sort
        </Button>
      </Container>
      {/* <Button onClick={() => changeValue()}>ChangeValue</Button> */}
    </>
  );
};

export default Visualizer;
