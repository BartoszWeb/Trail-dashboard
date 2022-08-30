import styled from "styled-components";

export const TitlePopUp = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  background-color: ${ ({ theme }) => theme.colors.primaryColor };
  font-size: 22px;
  text-align: center;
  border-radius: 5px;
  @media (max-width: 600px) {
    margin-top: 30px;
  }
`