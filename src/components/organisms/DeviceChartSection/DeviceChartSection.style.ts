import styled from "styled-components";

export const ChartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 90%;
  padding: 1em;
  border: 1px dashed #b6b6b6;
  @media (max-width: 15em) {
    padding: 0.2em;
  }
`;

export const WrapperParent = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  padding-top: 50%;

  @media (max-width: 40em) {
    padding-top: 70%;
  }
  @media (max-width: 30em) {
    padding-top: 100%;
  }
`;

export const WrapperChild = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;