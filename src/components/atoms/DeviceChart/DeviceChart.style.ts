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
export const DeviceChartWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;


  &.loading {
    :before {
      content: "Loading...";
      position: absolute;
      top: 48%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 1.4rem;
      color: ${ ({ theme }: ThemeTypes) => theme.colors.textColor };
      z-index: 20;
      @media (max-width: 25em) {
        font-size: 1.2rem;
      }
    }

    :after {
      content: "";
      position: absolute;
      width: 45%;
      aspect-ratio: 1/1;
      border-radius: 50%;
      top: 48.5%;
      left: 50%;
      transform: translate(-50%, -50%);
      animation-duration: 3s;
      animation-fill-mode: forwards;
      animation-iteration-count: infinite;
      animation-name: ${ loading };
      background: linear-gradient(to right, transparent 0%, ${ ({ theme }: ThemeTypes) => theme.colors.loadingColor } 100%);
      background-size: 50% 100px;
      @media (max-width: 40em) {
        width: 60%;
      }
    }
  }
`;