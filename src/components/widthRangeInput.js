import Styled from "styled-components";
import React, { useState } from "react";
import { Container } from "./../styles/styledComponents";

const Slider = Styled.input`

`;
const Display = Styled.div``;

const SliderInput = () => {
  const [value, setValue] = useState(50);
  const displayValue = () => {
    let value = document.getElementById("barWidth").value;
    setValue(value);
  };

  return (
    <Container>
      <Slider
        id="barWidth"
        type="range"
        value={value}
        min={0}
        max={100}
        onChange={() => displayValue()}
      ></Slider>
      <Display>{value}</Display>
    </Container>
  );
};

export default SliderInput;
