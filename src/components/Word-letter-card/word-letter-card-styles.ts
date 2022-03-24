import styled from "styled-components";
import { LetterStatus } from "@types"

const statusToColors: Record<LetterStatus, string> = {
  normal: '#ffa500',
  correct: 'linear-gradient(145deg, #1fb143, #1a9539)',
  incorrect: 'linear-gradient(145deg, #ffcd00, #ddad00)',
  unexist: 'linear-gradient(145deg, #b6b6b6, #999999)'
}

export const WordLetterCardStyles = styled.div<{ status: LetterStatus }>`
  .word-letter-card-container {
    border-radius: 10px;
    min-width: 6rem;
    min-height: 9rem;
    border-radius: 10px;
    background: ${({ status }) => statusToColors[status]};
    box-shadow:  
        10px 10px 28px #e09100,
        -10px -10px 28px #ffb900;
    transition: all 300ms linear;

    span {
      color: var(--contrast-color);
      font-weight: 600;
      font-size: 4rem;
      transition: color 300ms linear;
    }
  }
`