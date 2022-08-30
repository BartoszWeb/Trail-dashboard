import styled from "styled-components";

export const ParagraphPopUp = styled.p`
  display: flex;
  font-weight: 600;
  margin-top: 15px;
  flex-direction: column;
  text-align: center;
  font-size: 16px;
  color: ${ ({ theme }) => theme.colors.secondaryColor };

  > span {
    margin-top: 2px;
    font-weight: 300;
  }
`