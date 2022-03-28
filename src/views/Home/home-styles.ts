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

    .panel-container {
      --actions-container-height: 3rem;

      display: grid;
      grid-template-rows: repeat(2, var(--actions-container-height)) calc(100% - calc(var(--actions-container-height) * 2));

      .actions-container {
        padding: .5rem 2rem;
        display: flex;
        flex-flow: row;
        align-items: center;
        justify-content: space-between;
        align-items: center;
      }

      .get-word-btn {
        display: flex;
        flex-flow: row;
        gap: .2rem;
        align-items: center;
        background: transparent;
        cursor: pointer;

        div {
          background: var(--primary);
          color: var(--contrast-color);
          padding: .2rem .3rem;
          border-radius: 999px;
          font-weight: 600;
        }

        span { color: var(--primary); font-weight: 600; }
      }

      .correct-letter {
        display: flex;
        flex-flow: row;
        align-items: flex-end;
        justify-content: center;
      }
    }
  }
`