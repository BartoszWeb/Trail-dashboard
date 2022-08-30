import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavRightSide = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  margin-left: 0.3em;
  background-color: transparent;
  cursor: pointer;
  padding: 0.8em;
`

export const StyledLink = styled(Link)`
  display: block;
  text-align: center;
  padding: 1.2em;
`