import styled from "styled-components";
import { ThemeTypes } from "../../../styles/theme";

export const ButtonChartMenu = styled.button`
  display: flex;
  background-color: transparent;
  border: none;
  padding: 1em;
  cursor: pointer;
  
  @media (max-width: 20em) {
    padding: 0.4em;
  }

  &.active {
    background-color: rgba(0, 0, 0, 1);
    color: rgba(255, 255, 255, 1);
    font-weight: ${ ({ theme }: ThemeTypes) => theme.font.bold };
  }

`;