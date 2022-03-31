import styled from "styled-components";

interface StylesProps {
  sizePx: number
}

export const SwapLoadingStyles = styled.div<StylesProps>`
  @-webkit-keyframes swap {
    0%, 100% {
      -webkit-transform: scale(0);
              transform: scale(0); }
    50% {
      -webkit-transform: scale(1);
              transform: scale(1); } }
  @keyframes swap {
    0%, 100% {
      -webkit-transform: scale(0);
              transform: scale(0); }
    50% {
      -webkit-transform: scale(1);
              transform: scale(1); } }

  .swap { 
    position: relative;
    left: ${({ sizePx }) => `${(sizePx * -1) / 2 - 6}px`};
    top: ${({ sizePx }) => `${(sizePx * -1) / 2}px`};
  }

  .swap:after, .swap:before {
    border-radius: 100%;
    content: '';
    height: ${({ sizePx }) => `${sizePx}px`};
    opacity: .5;
    position: absolute;
    width: ${({ sizePx }) => `${sizePx}px`};
  }

  .swap:after {
    animation: swap 1.5s -0.75s infinite;
    -webkit-animation: swap 1.5s -0.75s infinite;
    background-color: var(--primary); }

  .swap:before {
    animation: swap 1.5s infinite;
    -webkit-animation: swap 1.5s infinite;
    background-color: var(--secondary); 
  }
`