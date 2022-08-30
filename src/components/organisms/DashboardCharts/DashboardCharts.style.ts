import styled from "styled-components";

export const ChartsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2em 0.7em;
  margin-bottom: 3em;
  justify-content: center;
  align-items: center;
  justify-items: center;
`;

export const SectionWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(700px, 1fr));
  width: 100%;
  grid-gap: 2em 0;
  margin-bottom: 3em;
  justify-content: center;
  align-items: center;
  justify-items: center;
  @media (max-width: 68em) {
    grid-template-columns: 1fr;
    grid-gap: 2em 0 ;
  }
`;

export const TwoChartsWrapper = styled.div`
  display: grid;
  width: 100%;
  grid-gap: 2em 0;
`;