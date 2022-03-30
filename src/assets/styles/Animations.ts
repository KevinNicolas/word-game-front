import styled from "styled-components";


export const Animations = styled.div`
  .grow-animation { animation: grow 300ms linear 1; }

  @keyframes grow {
    from { transform: scale(0) }
    to { transform: scale(1) }
  }
`