import styled from 'styled-components';

export const LoginFormStyles = styled.div<{ isValidUser: boolean; isLogin: boolean }>`
  .login-container {
    background: orange;
    overflow: hidden;
    display: grid;
    position: relative;
    top: ${({ isLogin }) => (isLogin ? '-90%' : '-10%')};
    transition: top 500ms ease-in-out;
    grid-template-rows: 15% 80%;
    height: 100%;
    border-radius: 40px 40px 0 0;

    .login-body {
      padding: 1rem;
      justify-content: space-between;

      &,
      form {
        display: flex;
        flex-flow: column;
      }

      form {
        gap: 1.5rem;
      }
    }
  }

  .login-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.2rem;
    padding: 0 2rem;
    cursor: pointer;
  }

  .login-button {
    padding: 1rem 0;
    height: 3rem;
    background: ${({ isValidUser }) => (isValidUser ? 'var(--primary)' : '#aaa')};
    font-size: 1rem;
    font-weight: 600;
    border-radius: 5px;
    transition: transform, background 150ms linear;

    &:active {
      transform: ${({ isValidUser }) => isValidUser && 'scale(.95)'};
    }

    & span {
      color: white !important;
    }
  }
`;
