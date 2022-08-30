import styled from "styled-components";
import { ThemeTypes } from "../../../styles/theme";

const ListItem = styled.li`
  list-style: none;
  color: ${ ({ theme }: ThemeTypes) => theme.colors.textColor };
  margin-left: 0.7em;
  margin-top: 0.4em;
  position: relative;

  :after {
    content: "";
    width: 0;
    height: 2px;
    position: absolute;
    top: 120%;
    left: 0;
    background: ${ ({ theme }: ThemeTypes) => theme.colors.primaryColor };
    transition: width 0.5s;
  }

  :hover {
    color: ${ ({ theme }: ThemeTypes) => theme.colors.secondaryColor };
    transition: all 0.5s;
  }

  :hover:after {
    width: 100%;
  }
`;

export default ListItem;