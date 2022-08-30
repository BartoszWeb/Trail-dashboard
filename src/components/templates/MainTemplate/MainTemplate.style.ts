import styled from "styled-components";
import { ThemeTypes } from "../../../styles/theme";

export const Content = styled.div`
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 220px 1fr;
  @media (max-width: 57em) {
    grid-template-columns: 1fr;
  }
`;

export const LoadingWrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const Loading = styled.p`
  margin: 0.5em auto;
  padding: 0.7em;;
  background-color: ${ ({ theme }: ThemeTypes) => theme.colors.primaryColor };
  text-align: center;
  color: black;
`;