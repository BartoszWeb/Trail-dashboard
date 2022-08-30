import styled from "styled-components";

export const HamburgerButton = styled.button`
  padding: 0.7em;
  display: inline-block;
  cursor: pointer;
  background-color: transparent;
  border: 0;
  margin: 0;
`

export const HamburgerBox = styled.span`
  width: 35px;
  height: 24px;
  display: inline-block;
  position: relative;
`
export const HamburgerBoxSr = styled.span`
  border: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`
export const HamburgerInner = styled.span`
  width: 100%;
  height: 3.4px;
  background-color: ${({ theme }) => theme.colors.textColor};
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  transition: background-color .1s .2s ease-in-out;
  
  ::before {
    width: 100%;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.textColor};
    position: absolute;
    content: '';
    top: -10px;
    left: 0;
    transition: transform .2s .2s ease-in-out;
  }
  ::after {
    width: 100%;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.textColor};
    position: absolute;
    content: '';
    top: 10px;
    left: 0;
    transition: transform .2s .2s ease-in-out;
  }
  
  &.active {
    background-color: transparent;
  }
  &.active::before {
    transform: translateY(10px) rotate(45deg);
  }
  &.active::after {
    transform: translateY(-10px) rotate(-45deg);
  }
  

`