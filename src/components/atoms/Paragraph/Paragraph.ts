import styled from "styled-components";
import { ThemeTypes } from "../../../styles/theme";

interface Props {
    textAlign?: string,
    fontWeight?: string,
    margin?: string,
    fontSize?: string,
}

const Paragraph = styled.p<Props>`
  color: ${ ({ theme }: ThemeTypes) => theme.colors.textColor };
  text-align: ${ ({ textAlign = "center" }) => textAlign };
  font-weight: ${ ({ fontWeight = "400" }) => fontWeight };
  margin: ${ ({ margin = "0" }) => margin };
  font-size: ${ ({ fontSize = "1rem" }) => fontSize };
  line-height: 1.1em;
`;

export default Paragraph;