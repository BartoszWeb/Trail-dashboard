import styled from "styled-components";
import { ThemeTypes } from "../../../styles/theme";

export const DropDownSubMenu = styled.li`
  list-style: none;

  ul {
    position: absolute;
    top: 3.5em;
    right: 5px;
    padding-inline-start: 0;
    display: none;
    width: 13em;
    border-radius: 3px;
    background-color: ${ ({ theme }: ThemeTypes) => theme.colors.navColor };
    flex-direction: column;
    z-index: 1000;


    li :hover {
      background-color: ${ ({ theme }: ThemeTypes) => theme.colors.primaryColor };
      color: rgba(0, 0, 0, 1);
    }

    li:last-child :hover {
      background-color: inherit;
      color: ${ ({ theme }: ThemeTypes) => theme.colors.textColor };
    }
  }


  &.active {
    ul {
      display: flex;
    }
  }

`;