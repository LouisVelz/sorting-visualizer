import Styled from "styled-components";
import React, { useState, useEffect, useContext } from "react";
import { Container } from "./../styles/styledComponents";
import { AppContext } from "./../context/inputContext";
import { Slider, Display } from "./../styles/styledComponents";

const SliderInput = () => {
  const { width, setWidth, time, setTime, columns, setColumns } = useContext(
    AppContext
  );

  const changeWidth = () => {
    let value = document.getElementById("setWidth").value;
    setWidth(value);
  };

  const changeTime = () => {
    let value = document.getElementById("timer").value;
    setTime(value);
  };

  const changeColumns = () => {
    let value = document.getElementById("columns").value;
    setColumns(value);
  };

  return (
    <Container heigth={100}>
      <input
        id="setWidth"
        type="range"
        value={width}
        min={10}
        max={25}
        onChange={() => changeWidth()}
      ></input>
      <Display>{width}</Display>
      <Slider
        id="timer"
        type="range"
        value={time}
        min={5}
        max={50}
        onChange={() => changeTime()}
      ></Slider>
      <Display>{time}</Display>
      <Slider
        id="columns"
        type="range"
        value={columns}
        min={5}
        max={50}
        onChange={() => changeColumns()}
      ></Slider>
      <Display>{columns}</Display>
    </Container>
  );
};

export default SliderInput;
