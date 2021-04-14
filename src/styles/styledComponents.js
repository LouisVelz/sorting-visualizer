import Styled from "styled-components";
import colors from "./colors";

export const Container = Styled.div`
  display: flex;
  border-bottom: 1px solid black;
  justify-content: center;
  align-items: flex-end;
  height: ${(props) => props.height}px;
`;

export const Button = Styled.button`
  width: 100px;
  height: 50px;
  margin: 10px;
  background-color: ${colors.button};
  color: ${colors.white}
`;

export const Slider = Styled.input`

`;

export const Display = Styled.div``;

export const Element = Styled.div`
  width: ${(props) => props.width}px;;
  height: ${(props) => props.height}px;
  border: 1px solid gray;
  margin: 1px;
  display: inline-block;
  background-color: ${colors.primary};
`;
