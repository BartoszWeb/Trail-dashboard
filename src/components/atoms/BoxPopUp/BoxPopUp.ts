import styled from "styled-components";

export const BoxPopUp = styled.div`
  background-color: ${ ({ theme }) => theme.colors.backgroundColor };
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 120px;
  border: 1px dashed ${ ({ theme }) => theme.colors.textColor };
  margin-right: 10px;
  position: relative;
  margin-bottom: 5px;
  @media (max-width: 400px) {
    width: 100%;
  }
`;