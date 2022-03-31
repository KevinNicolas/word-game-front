import styled from "styled-components";

interface StylesProp {
  showErrorLabel: boolean
}

export const EmailInputStyles = styled.div<StylesProp>`
  input {
    padding: .5rem 0;
    width: 100%;
    color: #333;
  }

  .success { color: green; }
  .alert { color: red; }

  .email-input-container {
    display: flex;
    flex-flow: column;
    gap: .2rem;
  }

  .input-container {
    display: flex;
    flex-flow: row;
    background: white;
    overflow: hidden;
    align-items: center;
    justify-content: space-between;
    gap: .2rem;
    padding: 0 .7rem;
    border-radius: 5px;
  }

  .error-label {
    transition: opacity 300ms linear;
    opacity: ${({ showErrorLabel }) => showErrorLabel ? 1 : 0};
  }
`