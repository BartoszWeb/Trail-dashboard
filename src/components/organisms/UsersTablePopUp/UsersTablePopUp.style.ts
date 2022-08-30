import styled from "styled-components";
import manShopping from "../../../assets/MenShopping.svg";

export const PopUpWrapper = styled.div`
  display: grid;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  transition: background-color 0.2s ease-in-out;
  opacity: 0;
  overflow-y: scroll;
  z-index: 9999;

  &.popUpOpen {
    opacity: 1;
    background-color: ${ ({ theme }) => theme.colors.backgroundColor };
    pointer-events: all;
    display: grid;
  }

`;

export const WrapperColumns = styled.div`
  display: grid;
  grid-template-columns: 17em 1fr;
  margin: 3em;
  border: 1px solid #c7c7c7;
  @media (max-width: 56em) {
    grid-template-columns: 1fr;
  }
  @media (max-width: 37em) {
    margin: 0;
    padding: 0 1.5em;
  }
`;

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  justify-items: center;
  align-items: center;
  align-content: center;
  padding: 6em 0.3em;
  margin: 9em 0.7em 1.2em 0.7em;
  border-radius: 2px;
  background-color: #363636;
  position: relative;
  @media (max-width: 25em) {
    padding: 6em 0.7em;
  }

  ::before {
    content: '';
    background-image: url(${ manShopping });
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 60%;
    position: absolute;
    width: 150px;
    height: 150px;
    top: -110px;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${ ({ theme }) => theme.colors.primaryColor };
    border-radius: 150px;
    @media (max-width: 25em) {
      background-size: 60%;
      position: absolute;
      width: 120px;
      height: 120px;
      top: -70px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;
export const RightColumn = styled.div`
  margin: 3em;
  @media (max-width: 37em) {
    margin: 0 0 6em 0;
  }

`;
export const BoxesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15em, 1fr));
  grid-gap: 2em 0.8em;
  margin: 3em 0;
  padding: 2em;
  justify-content: center;
  align-items: center;
  align-content: flex-start;
  border: 2px dashed #363636;
  position: relative;
  @media (max-width: 25em) {
    grid-template-columns: 1fr;
    margin: 2em 0;
  }


  ::before {
    content: '';
    position: absolute;
    top: -25px;
    left: -25px;
    background-image: url(${ manShopping });
    background-repeat: no-repeat;
    background-size: 30px;
    background-position: center center;
    width: 50px;
    height: 50px;
    background-color: ${ ({ theme }) => theme.colors.primaryColor };
    border-radius: 50px;
  }
`;


export const SingleBoxWrapper = styled.div`
  display: flex;
  @media (max-width: 43em) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;