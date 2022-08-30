import styled, { keyframes } from "styled-components";
import { ThemeTypes } from "../../../styles/theme";

const loading = keyframes`
  0% {
    background-position: -100% 0
  }
  100% {
    background-position: 100% 0
  }
`;
export const ChartWrapper = styled.div`
  display: block;
  margin: 5em auto 0 auto;
  width: 90%;
  @media (max-width: 56em) {
    margin: 1.2em auto 0 auto;
    padding: 0 1.2em;
  }

  &.loading {
    animation-duration: 3s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: ${ loading };
    background: linear-gradient(to right, transparent 0%, ${ ({ theme }: ThemeTypes) => theme.colors.loadingColor } 100%);
    background-size: 50% 100px;

`;

export const Chart = styled.div`
  display: grid;
  grid-template-columns: 16em 1fr;
  justify-content: start;
  justify-items: start;
  align-items: center;
  margin-bottom: 0.6em;
  @media (max-width: 50em) {
    grid-template-columns: 1fr;
    justify-content: start;
    justify-items: start;
  }

`;
export const Loading = styled.div`
  color: ${ ({ theme }) => theme.colors.textColor };
  display: flex;
  justify-content: center;
  margin: 0.8em 0;
  
`;
export const Bar = styled.div`
  display: flex;
  background-color: #003557;
  height: 3em;
  justify-items: center;
  justify-content: center;
  align-items: center;
  width: 0;
  opacity: 0;
  transition: 1s ease 0.3s;

  &.loading {
    width: 10%;
    background-color: transparent;
    opacity: 1;
    border: 1px dashed ${ ({ theme }) => theme.colors.textColor };

  }
`;

export const Website = styled.div`
  justify-self: end;
  word-break: break-all;
  margin-right: 1.2em;
  opacity: 0;
  transition: 1s ease 0.3s;
  color: ${ ({ theme }) => theme.colors.textColor };

  &.loading {
    color: ${ ({ theme }) => theme.colors.textColor };
    opacity: 1;
  }

  span {
    display: none;
    opacity: 0;
  }


  @media (max-width: 50em) {
    max-width: 19em;
    margin-bottom: 3px;
    justify-self: start;

    span {
      display: inline-block;
      opacity: 1;
      margin-right: 5px;
      font-weight: 600;
      position: relative;
      z-index: 20;

      ::before {
        content: "";
        position: absolute;
        top: -3px;
        left: -5px;
        height: 1em;
        width: 1em;
        border-radius: 2px;
        z-index: -1;
        background-color: ${ ({ theme }) => theme.colors.accentColor };
      }
    }
  }
`;

export const AmountOfUsers = styled.div`
  color: white;
  padding: 0.6em;
  word-break: break-all;
  
  &.loading {
    color: ${ ({ theme }) => theme.colors.textColor };
    opacity: 0;
  }
  @media (max-width: 56em) {
    font-size: 0.7rem;
  }
`;