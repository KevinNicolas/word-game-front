import { createGlobalStyle } from "styled-components";

export const DarkTheme = createGlobalStyle`
  :root {
    --primary: #F10086;
    --primary-light: #fff;
    --primary-dark: #fff;

    --secondary: #f90;
    --secondary-light: #fff;
    --primary-light: #fff;

    --background-color: #333;

    --inverted-text-color: #333;
    --contrast-color: #fafafa;

  }
`

export const LightTheme = createGlobalStyle`
  :root {
    --primary: #f00;
    --primary-light: #fff;
    --primary-dark: #fff;

    --secondary: #fff;
    --secondary-light: #fff;
    --primary-light: #fff;

    --background-color: #fafafa;

    --inverted-text-color: #fafafa;
    --contrast-color: #333;

  }
`