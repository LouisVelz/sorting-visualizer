import Styled from "styled-components";

export const Container = Styled.div`
  display: flex;
  border: 1px solid black;
  justify-content: center;
  align-items: flex-end;
  height: ${(props) => props.height}px;
`;

export const Button = Styled.button`
  width: 100px;
  height: 50px;
`;

export const Slider = Styled.input`

`;

export const Display = Styled.div``;
