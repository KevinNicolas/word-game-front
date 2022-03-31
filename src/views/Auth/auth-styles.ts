import styled from "styled-components";

interface StylesProps {
  isLogin: boolean
}

export const AuthStyles = styled.div<StylesProps>`
  .page-container { background: var(--background-color); }
  .page-container span { color: var(--contrast-color) }

  .page-container {
    display: flex;
    flex-flow: row;
    justify-content: center;
    align-items: center;
  }

  .auth-container {
    background: whitesmoke;
    overflow: hidden;
    max-width: 20rem;
    max-height: 25rem;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    padding: 1rem;
  }

  .signup-container {
    display: grid;
    grid-template-rows: 10% 90%;
    height: 100%;

    .signup-header {
      // background: red;
      & span {
        color: #333;
      }
    }
  }

  .login-container {
    background: orange;
    overflow: hidden;
    display: grid;
    position: relative;
    top: ${({ isLogin }) => isLogin ? '-90%' : '-10%'};
    transition: top 500ms ease-in-out;
    grid-template-rows: 15% 80%;
    height: 100%;
    border-radius: 40px 40px 0 0;

    .login-body {
      padding: 1rem;
      justify-content: space-between;

      &, form {
        display: flex;
        flex-flow: column;
      }

      form { gap: 1.5rem; }

      .login-button {
        padding: 1rem .5rem;
        background: var(--primary);
        font-size: 1rem;
        font-weight: 600;
        border-radius: 5px;
        transition: transform 150ms linear;

        &:active {
          transform: scale(.95);
        }
      }

    }
  }

  .login-header, .signup-header {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    cursor: pointer;
  }
`