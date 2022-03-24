import styled from "styled-components";

interface StyleProps {
  wordIsComplete: boolean
}

export const HomeStyles = styled.div<StyleProps>`
  .page-container {
    --header-height: 5rem;
    
    display: grid;
    grid-template-rows: 
      var(--header-height)
      calc(100% - var(--header-height));
  }

  .header-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .body-container {
    display: grid;
    grid-template-rows: 50% 50%;

    .word-container {
      background: ${({ wordIsComplete }) => wordIsComplete ? '#1fb143' : '#ffa500'};
      transition: background 300ms ease-in-out;
      box-shadow: 
        inset 17px 17px 34px ${({ wordIsComplete }) => wordIsComplete ? '#1a9639' : '#db8e00'},
        inset -17px -17px 34px ${({ wordIsComplete }) => wordIsComplete ? '#24cc4d' : '#ffbc00'};
      flex-flow: row;
      gap: 1rem;
    }

    .letters-container {
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      gap: .5rem;

      .row-container {
        display: flex;
        flex-flow: row;
        gap: .5rem;
      }
    }
  }
`