import React, { useState, useEffect, useContext } from "react";
import Styled from "styled-components";
import { fisherYates } from "./../util/fisherYates";
import createArray from "./../util/createArray";
import { Container, Button } from "./../styles/styledComponents";
import executeMergeSort from "./../execute/executeMergeSort";
import executeBubbleSort from "./../execute/executeBubbleSort";
import executeQuickSort from "./../execute/executeQuickSort";
import executeInsertionSort from "./../execute/executeInsertionSort";
import executeHeapSort from "./../execute/executeHeapSort";
import executeSelectionSort from "./../execute/executeSelectionSort";
import colors from "../styles/colors";
import { AppContext } from "./../context/inputContext";

const Visualizer = () => {
  const Element = Styled.div`
    width: ${(props) => props.width}px;;
    height: ${(props) => props.height}px;
    border: 1px solid gray;
    margin: 1px;
    display: inline-block;
    background-color: ${colors.primary};
  `;

  const { width, columns, heigth, time } = useContext(AppContext);
  const [data, setData] = useState();
  debugger;
  useEffect(() => {
    // const arr = createArray(columns);
    // const arr = createArray(columns);
    const arr = fisherYates(columns);
    // setData(fisherYates(columns));
    setData(arr);
  }, [columns]);

  // const [animationRate, setAnimationRate] = useState(30);

  const shuffleArray = () => {
    let arr = fisherYates(columns);
    setData(arr);
  };

  // const changeValue = () => {
  //   setValue(1000);
  // };
  return (
    <>
      <Container height={300}>
        {data
          ? data.map((element, index) => {
              return (
                <Element
                  height={element * heigth}
                  key={index}
                  className="column"
                  width={width}
                ></Element>
              );
            })
          : null}
      </Container>
      <Button onClick={() => shuffleArray()}>Shuffle</Button>
      <Button onClick={() => executeBubbleSort(data, time)}>Bubble Sort</Button>
      <Button onClick={() => executeMergeSort(data)}>Merge Sort</Button>
      <Button onClick={() => executeQuickSort(data)}>Quick Sort</Button>
      <Button onClick={() => executeInsertionSort(data)}>Insertion Sort</Button>
      <Button onClick={() => executeHeapSort(data)}>Heap Sort</Button>
      <Button onClick={() => executeSelectionSort(data)}>Selection Sort</Button>
      {/* <Button onClick={() => changeValue()}>ChangeValue</Button> */}
    </>
  );
};

export default Visualizer;
