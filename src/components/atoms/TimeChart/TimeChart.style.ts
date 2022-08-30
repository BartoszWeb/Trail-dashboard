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

export const HeatMapGrid = styled.div`
  display: grid;
  grid-gap: 0.4em;
  align-items: start;
  margin: 0 auto;
  max-width: 25em;
  grid-template-columns: repeat(8, 1fr);
`;

export const Cell = styled.div`
  height: 1em;
  width: 100%;
  position: relative;


  :hover .tooltipLeft {
    display: block;
    left: 50%;
  }

  :hover .tooltipRight {
    display: block;
    right: 50%;

  }
`;

export const Label = styled.div`
  display: flex;
  text-align: center;
  height: 1em;
  color: ${ ({ theme }: ThemeTypes) => theme.colors.textColor };
  align-items: center;
  padding-top: 2px;

  .loading {
    color: #7e7e7e;
  }
`;

export const Legend = styled.div`
  margin: 2em auto 0 auto;
  max-width: 20em;


  .cell {
    height: 1em;
    width: 100%;
  }

  .labels {
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
  }

`;

export const ToolTip = styled.div`
  position: absolute;
  display: none;
  background: white;
  border: 1px solid #ccc;
  padding: 0.7em;
  z-index: 1;
  top: 50%;
  border-radius: 4px;
  min-width: 7em;

  span {
    display: block;
    font-size: 0.9rem;
  }

  .count {
    font-size: 1rem;
    font-weight: 700;
  }
`;

export const Col = styled.div`
  display: grid;
  grid-gap: 0.4em;
`;

export const TimeChartWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  @media (max-width: 20em) {
    overflow-x: scroll;
    overflow-y: hidden;
  }


  &.loading {
    animation-duration: 3s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: ${ loading };
    background: linear-gradient(to right, transparent 0%, ${ ({ theme }: ThemeTypes) => theme.colors.loadingColor } 100%);
    background-size: 50% 100px;

    :after {
      content: "Loading...";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 1.4rem;
      color: ${ ({ theme }: ThemeTypes) => theme.colors.textColor };
      @media (max-width: 25em) {
        font-size: 1.2rem;
      }
    }
  }
`;