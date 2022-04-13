import styled from 'styled-components';
import { BgAnimation } from './bg-animation';

interface StylesProps {
  isLogin: boolean;
  isValidUser: boolean;
}

export const AuthStyles = styled.div<StylesProps>`
  .page-container {
    /* background: var(--background-color);*/
    display: flex;
    flex-flow: row;
    justify-content: center;
    align-items: center;

    & :is(span, h1) {
      color: var(--contrast-color);
    }

    ${BgAnimation}

    & .content-wrapper {
      width: 100vw;
      height: 100vh;
      position: absolute;
      display: grid;
      grid-template-rows: 5rem calc(100vh - 5rem);
    }
  }

  input {
    padding: 0.6rem 0.7rem;
    width: 100%;
    color: #333;
    border-radius: 5px;
  }

  .auth-container {
    background: whitesmoke;
    overflow: hidden;
    max-width: 22rem;
    max-height: 30rem;
    width: 22rem;
    height: 100%;
    border-radius: 5px;
    padding: 1rem 0.1rem;

    box-shadow: 10px 10px 100px -20px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 10px 10px 100px -20px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 10px 10px 100px -20px rgba(0, 0, 0, 0.75);

    & > div {
      height: 100%;
    }
  }
`;
