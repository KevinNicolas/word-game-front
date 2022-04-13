import styled from 'styled-components';

export const SignupFormStyles = styled.div<{ isValidUser: boolean }>`
  .signup-container {
    display: grid;
    grid-template-rows: 10% 80%;
    height: 100%;

    .signup-header,
    .signup-body {
      &,
      span {
        color: #333;
      }
    }

    .signup-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 1.2rem;
      padding: 0 2rem;
      cursor: pointer;
    }

    .signup-body {
      padding: 1rem 1rem;
      justify-content: space-between;

      &,
      form,
      .username-input-container {
        display: flex;
        flex-flow: column;
      }

      form {
        gap: 1.5rem;
      }

      .username-input-container {
        gap: 0.3rem;
      }
    }

    .signup-button {
      padding: 1rem 0;
      height: 3rem;
      background: ${({ isValidUser }) => (isValidUser ? 'var(--primary)' : '#aaa')};
      font-size: 1rem;
      font-weight: 600;
      border-radius: 5px;
      transition: transform 150ms linear;

      &:active {
        transform: ${({ isValidUser }) => isValidUser && 'scale(.95)'};
      }

      & span {
        color: white !important;
      }
    }
  }
`;
