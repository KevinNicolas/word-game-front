import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-decoration: none;
    border: none;
    outline: none;
  }
  
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  .page-container {
    width: 100vw;
    height: 100vh;
  }

  .full {
    width: 100%;
    height: 100%;
  }

  .center {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }

  button { cursor: pointer; }

`;
