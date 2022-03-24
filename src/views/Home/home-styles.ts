import styled from "styled-components";

export const HomeStyles = styled.div`
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
      background: #ffa500;
      box-shadow: 
        inset 17px 17px 34px #db8e00,
        inset -17px -17px 34px #ffbc00;
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