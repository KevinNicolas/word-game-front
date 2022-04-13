import styled from 'styled-components';

interface StylesProp {
  showErrorLabel: boolean;
}

export const EmailInputStyles = styled.div<StylesProp>`
  input {
    padding: 0.5rem 0;
    width: 100%;
    color: #333;
  }

  .success {
    color: green;
  }
  .alert {
    color: red;
  }

  .email-input-container {
    display: flex;
    flex-flow: column;
    gap: 0.2rem;
  }

  .input-container {
    display: flex;
    flex-flow: row;
    background: white;
    overflow: hidden;
    align-items: center;
    justify-content: space-between;
    gap: 0.2rem;
    padding: 0 0.7rem;
    border-radius: 5px;
    border-bottom: 2px solid transparent;
    transition: border-color 300ms linear;
  }

  .error-label {
    color: #ff3333 !important;
    font-size: 0.8rem;
    font-weight: 500;
    transition: opacity 300ms linear;
    opacity: ${({ showErrorLabel }) => (showErrorLabel ? 1 : 0)};
  }

  .input-container:focus-within {
    border-color: var(--primary);
  }
`;
