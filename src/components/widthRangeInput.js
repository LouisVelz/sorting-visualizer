import Styled from "styled-components";
import React, { useState, useEffect, useContext } from "react";
import { Container } from "./../styles/styledComponents";
import { AppContext } from "./../context/inputContext";
import { Slider, Display } from "./../styles/styledComponents";

const SliderInput = () => {
  const { width, setWidth, heigth, setHeigth } = useContext(AppContext);

  const changeWidth = () => {
    let value = document.getElementById("setWidth").value;
    setWidth(value);
  };

  const changeHeigth = () => {
    let value = document.getElementById("setHeigth").value;
    setHeigth(value);
  };

  return (
    <Container>
      <Slider
        id="setWidth"
        type="range"
        value={width}
        min={10}
        max={25}
        onChange={() => changeWidth()}
      ></Slider>
      <Display>{width}</Display>
      <Slider
        id="setHeigth"
        type="range"
        value={heigth}
        min={5}
        max={10}
        onChange={() => changeHeigth()}
      ></Slider>
      <Display>{heigth}</Display>
    </Container>
  );
};

export default SliderInput;
