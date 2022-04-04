import styled from "styled-components";

interface StylesProps {
  isLogin: boolean,
  isValidUser: boolean
}

export const AuthStyles = styled.div<StylesProps>`
  .page-container { background: var(--background-color); }
  .page-container span { color: var(--contrast-color) }

  input {
    padding: .6rem .7rem;
    width: 100%;
    color: #333;
    border-radius: 5px;
  }

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
    max-height: 30rem;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    padding: 1rem .1rem;

    box-shadow: 10px 10px 17px 0px rgba(0,0,0,0.75);
    -webkit-box-shadow: 10px 10px 17px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 10px 10px 17px 0px rgba(0,0,0,0.75);
  }

  .signup-container {
    display: grid;
    grid-template-rows: 10% 80%;
    height: 100%;

    .signup-header, .signup-body {
      &, span {
        color: #333;
      }
    }

    .signup-body {
      padding: 1rem 1rem;
      justify-content: space-between;

      &, form, .username-input-container {
        display: flex;
        flex-flow: column;
      }

      form {
        gap: 1.5rem;
      }

      .username-input-container  {
        gap: .3rem;
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

    }
  }

  .login-header, .signup-header {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    cursor: pointer;
  }

  .login-button, .signup-button {
    padding: 1rem 0;
    height: 3rem;
    background: ${({ isValidUser }) => isValidUser ? 'var(--primary)' : '#aaa'};
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
`