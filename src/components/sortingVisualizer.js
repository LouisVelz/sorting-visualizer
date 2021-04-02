import React, { useState } from "react";
import Styled from "styled-components";
import { fisherYates } from "./../util/fisherYates";
import bubbleSort from "./../sorting/bubbleSort";
const Container = Styled.div`
display: flex;
border: 1px solid black;
justify-content: center;
align-items: flex-start;
height: auto;
`;
const Element = Styled.div`
width: 10px;
height: ${(props) => props.height * 5}px;
border: 1px solid gray;
margin: 1px;
display: inline-block;
background-color: ${(props) => (props.current ? "light-blue" : "light-gren")}
`;

const Button = Styled.button`
width: 100px;
height: 50px;
`;

const Visualizer = () => {
  const arr = fisherYates(25);

  const [data, setData] = useState(arr);

  const execBubbleSort = () => {
    let animations = bubbleSort(data);
    let columns = document.querySelectorAll(".column");

    console.log(columns);
    debugger;
    for (let i = 0; i < animations.length; i++) {
      let [first, second] = animations[i];
      debugger;
      setTimeout(() => {
        let height1 = columns[first].clientHeight;
        let height2 = columns[second].clientHeight;
        columns[first].style.height = `${height2}px`;
        columns[second].style.height = `${height1}px`;
      }, 250 * i);
    }
  };

  const shuffleArray = () => {
    setData(fisherYates(25));
  };
  return (
    <>
      <Container>
        {data.map((element, index) => {
          return (
            <div
              style={{
                height: `${element * 5}px`,
                border: "1px solid black",
                width: "10px",
                margin: "1px",
              }}
              key={index}
              className="column"
            ></div>
          );
        })}
      </Container>
      <Button onClick={() => execBubbleSort()}>Bubble Sort</Button>
      <Button onClick={() => shuffleArray()}>Shuffle</Button>
    </>
  );
};

export default Visualizer;
