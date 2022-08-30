import styled from "styled-components";
import { ThemeTypes } from "../../../styles/theme";

interface Props {
    margin: string;
    fontSize: string;
}

const ChartTitle = styled.p<Props>`
  color: ${ ({ theme }: ThemeTypes) => theme.colors.textColor };
  margin: ${ ({ margin = "0" }) => margin };
  letter-spacing: 0.7px;
  font-size: ${ ({ fontSize = "1.2rem" }) => fontSize };
  text-align: center;
  font-weight: ${ ({ theme }: ThemeTypes) => theme.font.bold };
  @media (max-width: 17em) {
    font-size: 1rem;
  }
`;

export default ChartTitle;