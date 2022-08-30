import styled from "styled-components";

export const ParagraphPopUpBox = styled.p`
  display: flex;
  flex-direction: column;
  color: ${ ({ theme }) => theme.colors.textColor };
  font-weight: 600;
  font-size: 18px;
  text-align: center;

  > span {
    padding: 10px;
    word-break: break-all;
    margin-top: 2px;
    font-weight: 300;
    font-size: 14px;
  }
`