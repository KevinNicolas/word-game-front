import styled from "styled-components";


export const KeyboardStyles = styled.div`
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
`