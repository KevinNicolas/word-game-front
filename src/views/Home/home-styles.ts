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
      grid-template-rows: var(--actions-container-height) calc(100% - var(--actions-container-height));

      .actions-container {
        padding: .5rem 2rem;
        display: flex;
        flex-flow: row-reverse;
        align-items: center;
      }

      .get-word-btn {
        background: var(--primary);
        color: var(--contrast-color);
        padding: .5rem 1.5rem;
        border-radius: 5px;
        font-weight: 600;
        cursor: pointer;
      }
    }
  }
`