import styled from "styled-components";

interface StyleProps {
  wordIsComplete: boolean
}

export const LetterScreenStyles = styled.div<StyleProps>`
  .word-container {
    background: ${({ wordIsComplete }) => wordIsComplete ? '#1fb143' : '#ffa500'};
    transition: background 300ms ease-in-out;
    box-shadow: 
      inset 17px 17px 34px ${({ wordIsComplete }) => wordIsComplete ? '#1a9639' : '#db8e00'},
      inset -17px -17px 34px ${({ wordIsComplete }) => wordIsComplete ? '#24cc4d' : '#ffbc00'};
    flex-flow: row;
    gap: 1rem;
  }
`