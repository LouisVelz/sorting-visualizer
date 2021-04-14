import React, { useContext } from "react";
import { Container } from "./../styles/styledComponents";
import { AppContext } from "./../context/inputContext";
import { Slider, Display } from "./../styles/styledComponents";

const SliderInput = () => {
  const {
    width,
    setWidth,
    time,
    setTime,
    columns,
    setColumns,
    setResetTime,
  } = useContext(AppContext);

  const changeWidth = () => {
    let value = document.getElementById("setWidth").value;
    setWidth(value);
  };

  const changeTime = () => {
    let value = document.getElementById("timer").value;
    setResetTime(value / 2);
    setTime(value);
  };

  const changeColumns = () => {
    let value = document.getElementById("columns").value;
    setColumns(value);
  };

  return (
    <Container heigth={100}>
      <Display>Width</Display>
      <Slider
        id="setWidth"
        type="range"
        value={width}
        min={3}
        max={20}
        onChange={() => changeWidth()}
      ></Slider>
      <Display>{width}</Display>
      <Display>Speed</Display>
      <Slider
        id="timer"
        type="range"
        value={time}
        min={2}
        max={100}
        onChange={() => changeTime()}
      ></Slider>
      <Display>{time}</Display>
      <Display>Columns</Display>
      <Slider
        id="columns"
        type="range"
        value={columns}
        min={5}
        max={100}
        onChange={() => changeColumns()}
      ></Slider>
      <Display>{columns}</Display>
    </Container>
  );
};

export default SliderInput;
