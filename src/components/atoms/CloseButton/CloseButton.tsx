import styled from "styled-components";
import ImageComponent from "../ImageComponent/ImageComponent";
import React from "react";
import exitButton from "../../../assets/Exit.svg";
import { togglePopUp } from "../../../store/PopUpSlice/popUpSlice";
import { useAppDispatch } from "../../../hooks/useAppDispatch";

const exit = {
    size: "34px",
    src: exitButton,
    alt: "",
};

export const CloseButton = () => {
    const dispatch = useAppDispatch();
    return (
        <CloseButtonStyled onClick={ () => {
            dispatch(togglePopUp({
                isActive: false,
                id: null,
            }));
        } }>
            <ImageComponent props={ exit }/>
        </CloseButtonStyled>
    );
};

const CloseButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 25px;
  right: 25px;
  background-color: black;
  cursor: pointer;
  border: none;
  border-radius: 50px;
  width: 50px;
  height: 50px;
  z-index: 9999;
  @media (max-width: 400px) {
    width: 40px;
    height: 40px;
    right: 5px;
  }
`;