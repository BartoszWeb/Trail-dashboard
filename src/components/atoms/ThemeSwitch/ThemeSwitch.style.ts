import styled from "styled-components";
import { ThemeTypes } from "../../../styles/theme";

export const SwitchLabel = styled.label`
  display: inline-block;
  position: relative;
  content: "";
  order: 0;
  width: 3.5rem;
  height: 2rem;
  cursor: pointer;
  vertical-align: bottom;
  border-color: ${ ({ theme }: ThemeTypes) => theme.colors.textColor };
  border-width: 2px;
  border-style: solid;
  border-radius: 1rem;
  transition-property: background-color;
  transition-timing-function: ease;
  transition-duration: 120ms;
  margin-left: 0.5em;


  &.activeDarkTheme {
    ::after {
      left: calc((100% - 1.2rem) - 0.2rem);
    }

  }

  ::before {
    display: block;
    position: absolute;
    top: 0.8rem;
    left: 0.8rem;
    content: "";
    width: 0.7rem;
    height: 0.3rem;
    border-width: 0 0 2px 2px;
    border-style: solid;
    border-color: ${ ({ theme }: ThemeTypes) => theme.colors.textColor };
    transform: translate3d(-50%, -50%, 0px) rotate(-45deg);
  }

  ::after {
    display: block;
    position: absolute;
    content: "";
    top: 51%;
    left: 0.2rem;
    transform: translateY(-50%);
    background-color: ${ ({ theme }: ThemeTypes) => theme.colors.textColor };;
    border-radius: 1rem;
    width: 1.2rem;
    height: 1.2rem;
    transition-property: left;
    transition-timing-function: ease;
    transition-duration: 120ms;
  }
`;


export const SwitchWrapper = styled.div`
  display: flex;
  padding: 1.2em;
  position: relative;
  justify-content: center;
  align-items: center;
  line-height: 2rem;
  
  input:focus + label::after {
    box-shadow: 0 0 2px 2px ${ ({ theme }: ThemeTypes) => theme.colors.primaryColor };
  }

  @media (max-width: 20em) {
    padding: 0.5em;
  }
`;

export const SwitchInput = styled.input`
  position: absolute;
  opacity: 0;

`;