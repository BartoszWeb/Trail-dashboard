import { createGlobalStyle } from "styled-components";
import { ThemeTypes } from "./theme";

export const GlobalStyle = createGlobalStyle`
  html {
    font-family: 'Maven Pro', Times, sans-serif;
    font-size: 1rem;
    font-weight: ${ ({ theme }: ThemeTypes) => theme.font.thin };
    line-height: 1;
    scroll-behavior: smooth;
    padding: 0;
    margin: 0;
  }

  *, *::before, *::after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body, h1, h2, h3, h4, h5, h6, p, blockquote, pre, hr, dl, dd, ol, ul, figure {
    margin: 0;
    padding: 0;
  }

  body {
    max-width: 1920px;
    margin: 0 auto;
    background-color: ${ ({ theme }: ThemeTypes) => theme.colors.backgroundColor };
  }

  a {
    text-decoration: none;
    color: ${ ({ theme }: ThemeTypes) => theme.colors.textColor };
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }


  li {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  p {
    color: ${ ({ theme }: ThemeTypes) => theme.colors.textColor };
  }


  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    -webkit-text-fill-color: #000;
    -webkit-box-shadow: 0 0 0 1000px #fff inset;
    transition: background-color 5000s ease-in-out 0s;
  }
  text {
    stroke-width: 0;
  }
`;