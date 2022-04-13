import styled from 'styled-components';

export const PasswordInputStyles = styled.div`
  input {
    padding: 0.5rem 0;
    width: 100%;
    color: #333;
  }

  button {
    background: transparent;
  }

  .password-input-container {
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

  .input-container:focus-within {
    border-color: var(--primary);
  }
`;
