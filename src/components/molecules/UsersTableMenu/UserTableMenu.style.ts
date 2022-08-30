import styled from "styled-components";

export const NavTable = styled.nav`
  display: grid;
  width: fit-content;
  margin-bottom: 0.7em;
  background-color: ${ ({ theme }) => theme.colors.primaryColor };

  @media (max-width: 40em) {
    min-width: 100%;
    display: block;
  }

  ul {
    display: flex;

    &.active {
      pointer-events: none;
      opacity: 0.5;
    }

    @media (max-width: 40em) {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  }

  li {
    display: flex;
  }

`;
export const ButtonTableMenu = styled.button`
  display: flex;
  background-color: transparent;
  border: none;
  padding: 1em;
  cursor: pointer;
  text-align: center;
  width: 100%;
  justify-content: center;

  &.active {
    background-color: rgba(0, 0, 0, 1);
    color: white;
  }
`;