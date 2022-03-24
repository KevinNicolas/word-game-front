import { createGlobalStyle } from "styled-components";

export const DarkTheme = createGlobalStyle`
  :root {
    --primary: #F10086;
    --primary-light: #fff;
    --primary-dark: #fff;

    --secondary: #fff;
    --secondary-light: #fff;
    --primary-light: #fff;

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

    --inverted-text-color: #fafafa;
    --contrast-color: #333;

  }
`