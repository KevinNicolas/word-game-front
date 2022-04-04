import styled from "styled-components";

export const PasswordInputStyles = styled.div`
  input {
    padding: .5rem 0;
    width: 100%;
    color: #333;
  }

  button {
    background: transparent;
  }
  
  .password-input-container {
    display: flex;
    flex-flow: column;
    gap: .2rem;
  }

  .input-container {
    display: flex;
    flex-flow: row;
    background: white;
    overflow: hidden;
    align-items: center;
    justify-content: space-between;
    gap: .2rem;
    padding: 0 .7rem;
    border-radius: 5px;
  }
`