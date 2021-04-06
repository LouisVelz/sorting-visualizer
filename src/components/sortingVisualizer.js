import React, { useState, useEffect } from "react";
import Styled from "styled-components";
import { fisherYates } from "./../util/fisherYates";
import { Container, Button } from "./../styles/styledComponents";
import executeMergeSort from "./../execute/executeMergeSort";
import executeBubbleSort from "./../execute/executeBubbleSort";
import executeQuickSort from "./../execute/executeQuickSort";
import executeInsertionSort from "./../execute/executeInsertionSort";
import executeHeapSort from "./../execute/executeHeapSort";
import executeSelectionSort from "./../execute/executeSelectionSort";
import colors from "../styles/colors";

const Visualizer = () => {
  const Element = Styled.div`
    width: 10px;
    height: ${(props) => props.height * 5}px;
    border: 1px solid gray;
    margin: 1px;
    display: inline-block;
    background-color: ${colors.primary};
  `;

  useEffect(() => {
    const arr = fisherYates(25);
    setData(arr);
  }, []);

  const [data, setData] = useState();
  const [animationRate, setAnimationRate] = useState(30);
  const colorResetTime = 20;

  const shuffleArray = () => {
    let arr = fisherYates(25);
    setData(arr);
  };

  return (
    <>
      <Container>
        {data
          ? data.map((element, index) => {
              return (
                <Element
                  height={element}
                  key={index}
                  className="column"
                ></Element>
              );
            })
          : null}
      </Container>
      <Button onClick={() => shuffleArray()}>Shuffle</Button>
      <Button onClick={() => executeBubbleSort(data)}>Bubble Sort</Button>
      <Button onClick={() => executeMergeSort(data)}>Merge Sort</Button>
      <Button onClick={() => executeQuickSort(data)}>Quick Sort</Button>
      <Button onClick={() => executeInsertionSort(data)}>Insertion Sort</Button>
      <Button onClick={() => executeHeapSort(data)}>Heap Sort</Button>
      <Button onClick={() => executeSelectionSort(data)}>Selection Sort</Button>
    </>
  );
};

export default Visualizer;
