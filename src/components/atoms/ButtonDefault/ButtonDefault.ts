import styled from "styled-components";
import { ThemeTypes } from "../../../styles/theme";

interface Props {
    padding?: string,
    margin?: string,
}

const ButtonDefault = styled.button<Props>`
  background-color: ${ ({ theme }: ThemeTypes) => theme.colors.primaryColor };
  color: rgb(0, 0, 0);
  text-align: center;
  margin: ${ ({ margin = "0" }) => margin };
  padding: ${ ({ padding = "0.5em 1em" }) => padding };
  line-height: 1.1em;
  cursor: pointer;
  border: none;
`;


export default ButtonDefault;