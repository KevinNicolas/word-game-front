import styled from "styled-components";
import { LetterStatus } from "@types"

interface StyleProps {
  wordIsComplete: boolean
  status: LetterStatus
}

const statusToColors: Record<LetterStatus, string> = {
  normal: '#ffa500',
  correct: 'linear-gradient(145deg, #1fb143, #1a9539)',
  existInWord: 'linear-gradient(145deg, #ffcd00, #ddad00)',
  incorrect: 'linear-gradient(145deg, #b6b6b6, #999999)'
}

export const WordLetterCardStyles = styled.div<StyleProps>`
  .word-letter-card-container {
    border-radius: 10px;
    min-width: 6rem;
    min-height: 9rem;
    border-radius: 10px;
    background: ${({ status }) => statusToColors[status]};
    box-shadow:  
        10px 10px 28px ${({ wordIsComplete }) => wordIsComplete ? '#1a9639' : '#e09100'},
        -10px -10px 28px ${({ wordIsComplete }) => wordIsComplete ? '#1a9639' : '#ffb900'};
    animation: grow 500ms linear 1;
    transition: all 300ms linear;

    span {
      color: var(--contrast-color);
      font-weight: 600;
      font-size: 4rem;
      transition: color 300ms linear;
    }
  }

  @keyframes grow {
    from {
      box-shadow: 0 0 0 transparent, 0 0 0 transparent;
    }
    to {
      box-shadow:  
        10px 10px 28px ${({ wordIsComplete }) => wordIsComplete ? '#1a9639' : '#e09100'},
        -10px -10px 28px ${({ wordIsComplete }) => wordIsComplete ? '#1a9639' : '#ffb900'};
    }
  }
`