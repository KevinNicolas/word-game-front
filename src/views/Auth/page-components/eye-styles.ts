import styled from 'styled-components';

export const EyeStyles = styled.div<{ eyeIsOpen: boolean }>`
  .eye {
    --size: 2.5rem;
    --width-size: calc(var(--size) * 2);
    width: var(--width-size);
    height: var(--size);
    background: white;
    overflow: hidden;

    & .eyelid-wrapper {
      z-index: 2;
      position: relative;
      transform: translateY(calc(var(--size) * -1.05));
      transition: all 300ms linear;
      transform: translateY(${({ eyeIsOpen }) => (eyeIsOpen ? 'calc(var(--size) * -2.05)' : 'calc(var(--size) * -0.2)')});

      &.left {
        left: -130%;
      }

      &.right {
        left: -65%;
      }

      & .eyelid {
        z-index: 2;
        position: absolute;
        background: var(--secondary);
        width: calc(var(--width-size) * 2);
        height: calc(var(--size) * 1.2);
        border-radius: 30%;
      }
    }

    &.left {
      border-radius: 10rem 50rem 10rem 50rem;
    }

    &.right {
      border-radius: 50rem 10rem 50rem 10rem;
    }

    & .eyeball {
      z-index: 0;
      position: relative;
      top: 0.1rem;
      background: black;
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 100%;
    }
  }
`;
