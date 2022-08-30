import styled, { keyframes } from "styled-components";
import { ThemeTypes } from "../../../styles/theme";

export const Loading = styled.div`
  text-align: center;
  color: ${ ({ theme }: ThemeTypes) => theme.colors.textColor };
  padding: 0.5em;
  border-bottom: 1px dashed ${ ({ theme }: ThemeTypes) => theme.colors.textColor };
  margin-bottom: 1em;
`;

export const TableUser = styled.button`
  display: grid;
  min-width: 100%;
  grid-template-columns: 0.4fr 1fr 1.5fr 1.5fr 1fr 1fr 1fr 1fr;
  justify-content: center;
  margin-bottom: 0.7em;
  color: black;
  border: none;
  cursor: pointer;
  align-items: center;
  background-color: #CFCFCF;

  &.loading {
    background-color: transparent;
    color: ${ ({ theme }: ThemeTypes) => theme.colors.textColor };
    pointer-events: none;
  }

  @media (max-width: 31em) {
    padding: 3em 0;
    grid-template-columns: 1fr;
    width: 100%;
  }
  

  :hover {
    background-color: #eaeaea;
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    text-align: center;
    word-break: break-all;
    padding: 1em;
  }

`;

const loading = keyframes`
  0% {
    background-position: -100% 0
  }
  100% {
    background-position: 100% 0
  }
`;

export const TableWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  &.loading {
    animation-duration: 3s;
    animation-fill-mode: forwards;
    position: relative;
    animation-iteration-count: infinite;
    animation-name: ${ loading };
    background: linear-gradient(to right, transparent 0%, ${ ({ theme }: ThemeTypes) => theme.colors.loadingColor } 100%);
    background-size: 50% 100px;
  }
`;
export const Column = styled.p`
  display: none;
  color: black;

  &.loading {
    color: gainsboro;
  }

  @media (max-width: 31em) {
    display: block;
    font-weight: 600;
  }
`;