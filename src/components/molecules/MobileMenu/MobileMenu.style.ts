import styled from "styled-components";
import { Link } from "react-router-dom";

export const MenuNav = styled.nav`
  display: none;
  position: relative;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 3em;
  opacity: 0;
  transition: opacity .1s .1s ease-in-out, visibility 0s 0s;
  background-color: ${ ({ theme }) => theme.colors.backgroundColor };

  &.active {
    opacity: 1;
    transition: opacity .3s .1s ease-in-out, visibility 0s 0s;
    visibility: visible;
  }

  @media (max-width: 57em) {
    display: flex;
  }
`;
export const StyledLink = styled(Link)`
  display: block;
  padding: 1.2em 0.8em;
  text-align: center;
  font-size: 1.3rem;
`;