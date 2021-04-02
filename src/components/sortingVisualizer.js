import React, { useState } from "react";
import Styled from "styled-components";
import { fisherYates } from "./../util/fisherYates";
const Container = Styled.div`
display: flex;
border: 1px solid black;
justify-content: center;
align-items: flex-start;
height: auto;
`;
const Element = Styled.div`
width: 10px;
height: ${(props) => props.height * 20}px;
border: 1px solid gray;
margin: 1px;
display: inline-block;
`;

const Button = Styled.button`
width: 100px;
height: 50px;
`;

const Visualizer = () => {
  const arr = fisherYates(10);

  const [data, setData] = useState(arr);
  const execBubbleSort = () => {
    bubbleSort(data, setData);
  };

  const shuffleArray = () => {
    setData(fisherYates(10));
  };
  return (
    <>
      <Container>
        {data.map((element, index) => {
          return <Element height={element} key={index}></Element>;
        })}
      </Container>
      <Button onClick={() => execBubbleSort()}>Bubble Sort</Button>
      <Button onClick={() => shuffleArray()}>Shuffle</Button>
    </>
  );
};

const bubbleSort = (data, setData) => {
  debugger;
  let arr = Array.from(data);
  let sorted = false;
  const swap = (i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  };
  while (!sorted) {
    setTimeout(() => {
      sorted = true;
      for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
          if (arr[i] > arr[j]) {
            sorted = false;
            swap(i, j);
            setData(arr);
          }
        }
      }
    }, 500);
  }
  return arr;
};

export default Visualizer;
