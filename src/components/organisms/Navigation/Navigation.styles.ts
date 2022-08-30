import styled from "styled-components";
import { ThemeTypes } from "../../../styles/theme";

export const NavHeader = styled.header`
  width: 100%;
  background-color: ${ ({ theme }: ThemeTypes) => theme.colors.navColor };
`;

export const NavDesktopWrapper = styled.nav`
  display: none;
  max-width: 80em;
  height: 7em;
  margin: 0 auto;
  z-index: 10;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  font-weight: ${ ({ theme }: ThemeTypes) => theme.font.thinnest };
  padding: 2em 0;
  @media (min-width: 57em) {
    display: flex;
  }
`;

export const NavMobileWrapper = styled.nav`
  background-color: ${ ({ theme }: ThemeTypes) => theme.colors.backgroundColor };
  padding: 0.7em 1.2em;
  width: 100%;
  display: none;
  justify-content: space-between;
  @media (max-width: 57em) {
    display: flex;
  }
  @media (max-width: 15em) {
    flex-direction: column;
  }

`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: -5px;
  @media (max-width: 15em) {
    justify-content: center;
  }
`;