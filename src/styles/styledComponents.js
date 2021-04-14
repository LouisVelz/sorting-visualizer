import Styled from "styled-components";
import colors from "./colors";

export const Container = Styled.div`
  display: flex;
  border-bottom: 1px solid ${colors.slider};
  justify-content: center;
  align-items: flex-end;
  height: ${(props) => props.height}px;
`;

export const Button = Styled.button`
  width: 100px;
  height: 50px;
  margin: 10px;
  background-color: ${colors.button};
  color: ${colors.slider}
`;

export const Slider = Styled.input`
  cursor: pointer;
  overflow: hidden;
  display: block;
  appearance: none;

  &::-webkit-slider-runnable-track {
    background: ${colors.primary};
    height: 15px;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    position: relative;
    appearance: none;
    height: 15px;
    width: 15px;
    background: ${colors.slider};
    color: ${colors.slider};
    border-radius: 100%;
    border: 0;
    box-shadow: 10px;
    transition: background-color 150ms;
  }

`;

export const Display = Styled.div`
  font-size: 16px;
  color: ${colors.black};
  margin-right: 5px;
  margin-left: 5px;

`;

export const Element = Styled.div`
  width: ${(props) => props.width}px;;
  height: ${(props) => props.height}px;
  border: 1px solid gray;
  margin: 1px;
  display: inline-block;
  background-color: ${colors.primary};
`;
