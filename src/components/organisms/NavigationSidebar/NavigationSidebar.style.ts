import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ThemeTypes } from "../../../styles/theme";

export const Wrapper = styled.nav`
  width: 13em;
  min-height: calc(100vh - 7em);
  display: flex;
  background-color: ${ ({ theme }: ThemeTypes) => theme.colors.navColor };
  flex-direction: column;
  justify-content: flex-start;
  padding: 2em 0;

  li {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    a {
      text-align: center;
      color: ${ ({ theme }: ThemeTypes) => theme.colors.textColor };
    }
  }

  @media (max-width: 57em) {
    width: 100%;
    min-height: 3.6em;
    padding: 0;
    justify-content: center;

    ul {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 0.7em 0;
    }

    a {
      text-align: center;
      color: ${ ({ theme }: ThemeTypes) => theme.colors.textColor };
    }
  }
  @media (max-width: 20em) {
    height: 5.6em;
    ul {
      flex-direction: column;

      li {
        padding: 5px;
        @media (max-width: 10em) {
          padding: 2px;
        }
      }
    }
  }
`;


export const StyledLink = styled(NavLink)`
  font-weight: normal;
  text-decoration: none;
  color: #A7A7A7;
  text-align: right;
  margin: 1em 1.2em 1em auto;

  :hover {
    color: rgb(142, 142, 142);
  }
;
}

&.active {
  font-weight: bold;
  color: ${ ({ theme }) => theme.colors.textColor };
}

@media (max-width: 57em) {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 1.2em;
}

`;