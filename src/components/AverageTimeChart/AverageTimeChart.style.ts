import styled, { keyframes } from "styled-components";
import { ThemeTypes } from "../../styles/theme";

const loading = keyframes`
  0% {
    background-position: -100% 0
  }
  100% {
    background-position: 100% 0
  }
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${ ({ theme }: ThemeTypes) => theme.colors.textColor };
  width: 8em;
  font-size: 1.2rem;
  padding: 0.7em;
  border: 1px ${ ({ theme }: ThemeTypes) => theme.colors.primaryColor } dashed;
}

&.loading {
  animation-duration: 3s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: ${ loading };
  background: linear-gradient(to right, transparent 0%, ${ ({ theme }: ThemeTypes) => theme.colors.loadingColor } 100%);
  background-size: 50% 100px;
}
`;