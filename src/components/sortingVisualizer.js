import React from "react";
import Styled from "styled-components";
import { fisherYates } from "./../util/fisherYates";
const Container = Styled.div`
display: flex;
flex-direction: row;
border: 1px solid black;
justify-content: center;
`;
const Element = Styled.div`
width: 20px;
height: ${(props) => props.height * 20};
border: 1px solid gray;
margin: 2px;
`;

const Visualizer = () => {
  const arr = fisherYates(10);

  return (
    <Container>
      {arr.map((element) => {
        return <Element height={element}></Element>;
      })}
    </Container>
  );
};

export default Visualizer;
