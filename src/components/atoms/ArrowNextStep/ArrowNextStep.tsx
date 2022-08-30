import styled from "styled-components";
import React from "react";
import arrowRight from "../../../assets/ArrowRight.svg";


const propsArrow = {
    size: "35px",
    src: arrowRight,
    alt: ""
};
const Arrow = styled.img`
  @media (max-width: 700px) {
    margin-top: 20px;
    transform: rotate(90deg)
  }
`;

export const ArrowNextStep = () => {
    return (
        <Arrow width={ propsArrow.size } src={ propsArrow.src } alt={ propsArrow.alt }/>
    );
};