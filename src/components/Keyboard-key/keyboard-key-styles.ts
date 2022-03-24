import styled from "styled-components";


export const KeyboardKeyStyles = styled.div`
  .key-container {
    border-radius: 10px;
    min-width: 3rem;
    min-height: 3rem;
    
    &.normal {
      background: linear-gradient(145deg, #ffffff, #e6e6e6);
      box-shadow:  
        10px 10px 20px #bebebe,
        -10px -10px 20px #ffffff;
    }

    &.pressed {
      background: linear-gradient(145deg, #e6e6e6, #ffffff);
      box-shadow:
        10px 10px 20px #d9d9d9,
        -10px -10px 20px #ffffff;
    }
  }

`