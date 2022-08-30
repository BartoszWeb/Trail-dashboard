import styled from "styled-components";

export const Header = styled.div`
  padding-right: 17px;
  display: grid;
  width: 100%;
  grid-template-columns: 0.4fr 1fr 1.5fr 1.5fr 1fr 1fr 1fr 1fr;
  color: ${ ({ theme }) => theme.colors.secondaryColor };
  justify-content: center;
  align-items: center;
  background-color: #363636;

  &.loading {
    color: gainsboro;
  }


  @media (max-width: 31em) {
    display: none;
  }

  span:last-child {
    border-right: none;
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    text-align: center;
    padding: 1em;
    word-break: break-all;
    @media (max-width: 31em) {
      border: none;
    }
  }
`;