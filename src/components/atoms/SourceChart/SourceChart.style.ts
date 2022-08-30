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
  width: 100%;
  height: 100%;
  position: relative;

  .recharts-tooltip-wrapper {
    p {
      color: rgb(0, 0, 0);
      font-weight: ${ ({ theme }: ThemeTypes) => theme.font.bold };
    }
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
        left: 55%;
      }
    }
  }
`;