import styled from "styled-components";
import { ThemeTypes } from "../../../styles/theme";

export const ChartNavigationWrapper = styled.div`
  display: grid;
  justify-content: center;
  margin: 0 auto 1em auto;
`;

export const ChartNavigation = styled.nav`
  display: grid;
  margin-bottom: 1em;
  background-color: ${ ({ theme }: ThemeTypes) => theme.colors.primaryColor };
  
  &.loading {
    background-color: ${ ({ theme }: ThemeTypes) => theme.colors.navColor };
    background-color: ${ ({ theme }: ThemeTypes) => theme.colors.tertiaryColor };
    pointer-events: none;
  }
  
  @media (max-width: 37em) {
    min-width: 100%;
    display: block;
  }

  ul {
    display: flex;

    &.active {
      pointer-events: none;
      opacity: 0.5;
    }

    @media (max-width: 37em) {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  }

  li {
    display: flex;
  }

`;