import React, { useState, useEffect } from "react";
import Styled from "styled-components";
import { fisherYates } from "./../util/fisherYates";
import bubbleSort from "./../sorting/bubbleSort";
import colors from "./colors";

const Container = Styled.div`
display: flex;
border: 1px solid black;
justify-content: center;
align-items: flex-start;
height: auto;
`;

const Button = Styled.button`
width: 100px;
height: 50px;
`;

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

  const execBubbleSort = () => {
    let animations = bubbleSort(data);
    let columns = document.querySelectorAll(".column");

    for (let i = 0; i < animations.length; i++) {
      let [first, second, firstVal, secondVal] = animations[i];

      setTimeout(() => {
        columns[first].style.backgroundColor = colors.secondary;
        columns[second].style.backgroundColor = colors.switch;

        columns[second].style.height = `${firstVal * 5}px`;
        columns[first].style.height = `${secondVal * 5}px`;
      }, animationRate * i);

      setTimeout(() => {
        columns[first].style.backgroundColor = colors.primary;
        columns[second].style.backgroundColor = colors.primary;
      }, animationRate * i + colorResetTime);
    }
  };

  const shuffleArray = () => {
    let arr = fisherYates(25);
    setData(arr);
    console.log(data);
  };

  return (
    <>
      <Container>
        {data
          ? data.map((element, index) => {
              return (
                <Element
                  // style={{
                  //   height: `${element * 5}px`,
                  //   border: "1px solid black",
                  //   width: "10px",
                  //   margin: "1px",
                  // }}
                  height={element}
                  key={index}
                  className="column"
                ></Element>
              );
            })
          : null}
      </Container>
      <Button onClick={() => execBubbleSort()}>Bubble Sort</Button>
      <Button onClick={() => shuffleArray()}>Shuffle</Button>
    </>
  );
};

export default Visualizer;
