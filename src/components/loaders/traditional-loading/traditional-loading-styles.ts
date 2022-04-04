import styled from "styled-components";

interface StylesProps { color?: string, size?: number }

export const TraditionalLoadingStyles = styled.div<StylesProps>`
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
              transform: rotate(360deg); } }

  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
              transform: rotate(360deg); } }

  /**
    * Traditional
    *
    * @author jh3y
  */
  .traditional {
    position: relative;
    left: ${({ size }) => `${(((size ?? 50) / 2) + 5) * -1}px`};
    top: ${({ size }) => `${((size ?? 50) / 2) * -1}px`};
  }

  .traditional:before {
    -webkit-animation: spin .5s infinite linear;
            animation: spin .5s infinite linear;
    border-radius: 100%;
    -webkit-box-shadow: inset -2px 0 0 0px ${({ color }) => color ?? '#09f'};
            box-shadow: inset -2px 0 0 0px ${({ color }) => color ?? '#09f'};
    content: '';
    height: ${({ size }) => `${size ?? 50}px`};
    position: absolute;
    width: ${({ size }) => `${size ?? 50}px`}; 
  }
`